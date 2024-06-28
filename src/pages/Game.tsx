import { useSelector } from "react-redux";
import { selectCategory, selectWord } from "../redux/selectors";
import { useEffect, useState } from "react";
import { getWordByTopic } from "../redux/axiosOperations";
import HangmanDrawing from "../components/HangmanDrawing";
import HangmanWord from "../components/HangmanWord";
import Keybord from "../components/Keybord";
import Tooltip from "../components/tooltip";
import Button from "../components/Button/Button";
import { useAppDispatch } from "../utils/hooks";

const Game = () => {
  const word = useSelector(selectWord);
  const [category] = useState(useSelector(selectCategory));

  const dispatch = useAppDispatch();

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectGuesses = guessedLetters.filter(
    (letter) => !word.includes(letter)
  );

  const isLoser = incorrectGuesses.length >= 6;
  const isWinner = word
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const addGuessLetter = (letter: string) => {
    if (guessedLetters.includes(letter) || isLoser || isWinner) return;

    setGuessedLetters((currentLetters) => [...currentLetters, letter]);
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (!key.match(/[a-z]$/)) return;

      e.preventDefault();
      addGuessLetter(key);
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters, isLoser, isWinner]);

  const restartGame = async (): Promise<void> => {
    try {
      dispatch(getWordByTopic(category));
      setGuessedLetters([]);
    } catch (error) {
      console.error("Error fetching words by topic:", error);
    }
  };

  return (
    <>
      <div
        style={{
          maxWidth: "800px",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          margin: "0 auto",
          alignItems: "center",
        }}
      >
        <Tooltip numberOfIncorrectGuesses={incorrectGuesses.length} />
        <div style={{ fontSize: "2rem", textAlign: "center" }}>
          {isWinner ? "You won!" : ""}
          {isLoser ? "You Lost!" : ""}
        </div>
        <HangmanDrawing numberOfIncorrectGuesses={incorrectGuesses.length} />
        <HangmanWord
          reveal={isLoser}
          wordToGuess={word}
          guessedLetters={guessedLetters}
        />
        <div style={{ alignSelf: "stretch" }}>
          <Keybord
            activeLetters={guessedLetters.filter((letter) =>
              word.includes(letter)
            )}
            inActiveLetters={incorrectGuesses}
            addGuessedLetter={addGuessLetter}
            disabled={isLoser || isWinner}
          />
        </div>
        {isWinner || isLoser ? (
          <Button onClick={restartGame}>Restart</Button>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Game;
