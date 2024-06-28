import { HangmanWordStyle } from "./HangmanStyle"

type HangmanWordProp = {
  guessedLetters: string[]
  wordToGuess: string
  reveal?: boolean
}


const HangmanWord = ({guessedLetters, wordToGuess, reveal = false}:HangmanWordProp) => {
  return (
    <HangmanWordStyle>
      {wordToGuess.split("").map((letter, index) => <span style={{ borderBottom: ".1em solid black" }} key={index}>
        <span style={{ visibility: 
        guessedLetters.includes(letter) || reveal
            ? "visible"
            : "hidden",
           color: !guessedLetters.includes(letter) && reveal ?
            "red" : "black"
        }}
        >{letter}</span>
      </span>)}
    </HangmanWordStyle>
  )
}

export default HangmanWord