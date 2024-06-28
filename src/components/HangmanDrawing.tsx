import {
  BottomOfHangmanMachine,
  MiddleOfHangmanMachine,
  RopeOfHangmanMachine,
  TopOfHangmanMachine,
} from "./HangManDraw.tsx";
import Body from "./body/Body.tsx";
import Head from "./body/Head.tsx";
import LeftHand from "./body/LeftHand.tsx";
import LeftLeg from "./body/LeftLeg.tsx";
import RightHand from "./body/RightHand.tsx";
import RightLeg from "./body/RightLeg.tsx";

type numberOfIncorrectGuessesProp = {
  numberOfIncorrectGuesses: number;
};

const HangmanDrawing = ({
  numberOfIncorrectGuesses,
}: numberOfIncorrectGuessesProp) => {
  return (
    <div style={{ position: "relative" }}>
      {numberOfIncorrectGuesses > 0 ? <Head /> : <></>}
      {numberOfIncorrectGuesses > 1 ? <Body /> : <></>}
      {numberOfIncorrectGuesses > 2 ? <RightHand /> : <></>}
      {numberOfIncorrectGuesses > 3 ? <LeftHand /> : <></>}
      {numberOfIncorrectGuesses > 4 ? <RightLeg /> : <></>}
      {numberOfIncorrectGuesses > 5 ? <LeftLeg /> : <></>}

      <RopeOfHangmanMachine />
      <TopOfHangmanMachine />
      <MiddleOfHangmanMachine />
      <BottomOfHangmanMachine />
    </div>
  );
};

export default HangmanDrawing;
