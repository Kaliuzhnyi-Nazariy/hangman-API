// import { useEffect, useState } from "react"
// import words from "./wordsList.json"
// import HangmanWord from "./components/HangmanWord"
// import HangmanDrawing from "./components/HangmanDrawing"
// import Keybord from "./components/Keybord"
import {Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Game from './pages/Game';

const App: React.FC = () => {

//   function getWord() {
//       return words[Math.floor(Math.random() * words.length)]

// }

//   const [wordToGuess, setWordToGuess] = useState(getWord())

//   const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  
//   const incorrectGuesses = guessedLetters.filter(letter => !wordToGuess.includes(letter))

//   const isLoser = incorrectGuesses.length >= 6
//   const isWinner = wordToGuess.split("").every(letter => {
//     guessedLetters.includes(letter)
//   })

//   const addGuessLetter = (letter: string) => {
//     if (guessedLetters.includes(letter) || isLoser || isWinner) return
    
//     setGuessedLetters(currentLetters => [...currentLetters, letter])}

//   useEffect(() => {
//     const handler = (e: KeyboardEvent) => {
//       const key = e.key

//       if (!key.match(/[a-z]$/)) return
      
//       e.preventDefault()
//       addGuessLetter(key)
//     }

//     document.addEventListener("keypress", handler)
    
//     return () => {
//       document.removeEventListener("keypress", handler)
//     }

//   }, [guessedLetters, isLoser, isWinner])

//     useEffect(() => {
//     const handler = (e: KeyboardEvent) => {
//       const key = e.key

//       if (key !== "Enter") return
      
//       e.preventDefault()
//       setGuessedLetters([])
//       setWordToGuess(getWord())

//     }

//     document.addEventListener("keypress", handler)
    
//     return () => {
//       document.removeEventListener("keypress", handler)
//     }

//   }, [])

  return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/game" element={<Game />} />
		</Routes>
  );  // <div style={{
  //   maxWidth: "800px", display: "flex", flexDirection: "column", gap: "2rem", margin: "0 auto",
  //   alignItems: "center"
  // }}>
  //   <div style={{ fontSize: "2rem", textAlign: "center" }}>
  //     { isWinner ? "You won! Refresh to start again!" : ""}
  //     { isLoser ? "You Lost! Refresh to start again!" : ""}
  // </div>
  //   <HangmanDrawing numberOfIncorrectGuesses={ incorrectGuesses.length } />
  //   <HangmanWord reveal={isLoser} wordToGuess={ wordToGuess} guessedLetters={guessedLetters} />
  //   <div style={{ alignSelf: "stretch" }}>
  //     <Keybord activeLetters={guessedLetters.filter(letter => wordToGuess.includes(letter))} inActiveLetters={incorrectGuesses} addGuessedLetter={addGuessLetter} disabled={isLoser || isWinner } />
  //   </div>
}

export default App
