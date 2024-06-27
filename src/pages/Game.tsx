import { useSelector } from "react-redux"
import { selectCategory, selectHint, selectWord } from "../redux/selectors"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import Button from "../components/Button"
import { getWordByTopic } from "../redux/axiosOperations"
import HangmanDrawing from "../components/HangmanDrawing"
import HangmanWord from "../components/HangmanWord"
import Keybord from "../components/Keybord"

const Game = () => {
    const word = useSelector(selectWord)
    const hint = useSelector(selectHint)
    const [category] = useState(useSelector(selectCategory))

    const navigate = useNavigate()
    const dispatch = useDispatch()
    
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  
  const incorrectGuesses = guessedLetters.filter(letter => !word.includes(letter))

  const isLoser = incorrectGuesses.length >= 6
    const isWinner = word.split("").every(letter => guessedLetters.includes(letter));

  const addGuessLetter = (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return
    
    setGuessedLetters(currentLetters => [...currentLetters, letter])}

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key

      if (!key.match(/[a-z]$/)) return
      
      e.preventDefault()
      addGuessLetter(key)
    }

      document.addEventListener("keypress", handler)
      
    return () => {
      document.removeEventListener("keypress", handler)
    }
    
  }, [guessedLetters, isLoser, isWinner])

    const handleBackClick = () => {
    navigate("/")
    }
    
    const restartGame = () => {
        dispatch(getWordByTopic(category))
        setGuessedLetters([])
    }


    return (
        <><button onClick={handleBackClick}>back</button><p>game</p><span>{hint}</span><p>{word}</p> <p>{category}</p><Button onClick={restartGame}>Restart</Button>
        
        <div style={{
    maxWidth: "800px", display: "flex", flexDirection: "column", gap: "2rem", margin: "0 auto",
    alignItems: "center"
  }}>
    <div style={{ fontSize: "2rem", textAlign: "center" }}>
      { isWinner ? "You won! Refresh to start again!" : ""}
      { isLoser ? "You Lost! Refresh to start again!" : ""}
  </div>
    <HangmanDrawing numberOfIncorrectGuesses={ incorrectGuesses.length } />
    <HangmanWord reveal={isLoser} wordToGuess={ word} guessedLetters={guessedLetters} />
    <div style={{ alignSelf: "stretch" }}>
      <Keybord activeLetters={guessedLetters.filter(letter => word.includes(letter))} inActiveLetters={incorrectGuesses} addGuessedLetter={addGuessLetter} disabled={isLoser || isWinner } />
                </div>
                { isWinner || isLoser ? <button onClick={restartGame}>Restart</button>: <></>}
  </div>
            
        </>

  )
}

export default Game