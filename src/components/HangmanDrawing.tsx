import Body from './body/Body.tsx'
import Head from './body/Head.tsx'
import LeftHand from './body/LeftHand.tsx'
import LeftLeg from './body/LeftLeg.tsx'
import RightHand from './body/RightHand.tsx'
import RightLeg from './body/RightLeg.tsx'

type numberOfIncorrectGuessesProp = {
  numberOfIncorrectGuesses: number
}

const HangmanDrawing = ({ numberOfIncorrectGuesses }: numberOfIncorrectGuessesProp) => {
  console.log(numberOfIncorrectGuesses)
  return (
      <div style={{ position: "relative" }}>
      {numberOfIncorrectGuesses > 0 ? <Head /> : <></>}
      {numberOfIncorrectGuesses > 1 ? <Body /> : <></>}
      {numberOfIncorrectGuesses > 2 ? <RightHand /> : <></>}
      {numberOfIncorrectGuesses > 3 ? <LeftHand /> : <></>}
      {numberOfIncorrectGuesses > 4 ? <RightLeg /> : <></>}
      {numberOfIncorrectGuesses > 5 ? <LeftLeg /> : <></>}
      
          <div style={{ height: "50px", width: "10px", background: "black",position:"absolute",  top: 0, right: 0}} />
          <div style={{ height: "10px", width: "200px", background: "black",marginLeft: "120px" }} />
          <div style={{ height: "400px", width: "10px", background: "black", marginLeft: "120px" }} />
          <div style={{ height: "10px", width: "250px", background: "black" }} />
      </div>
  )
}

export default HangmanDrawing