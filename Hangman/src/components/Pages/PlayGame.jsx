import { Link, useLocation } from "react-router";
import Button from "../Buttons/Buttons";
import MaskedText from "../MaskedText/MaskedText";
import LetterButtons from "../LetterButtons/LetterButtons";
import { useState } from "react";
import Hangman from "../Hangman/Hangman";

export default function PlayGame() {
  const [usedLetters, setUsedLetters] = useState([]);
  const location = useLocation();
  const wordSelected = location.state?.wordSelected; // optional chaining operator
  const [step, setStep] = useState(1);

  const handleLetterClick = (letter) => {
    if (wordSelected.toUpperCase().includes(letter.toUpperCase())) {
      console.log("letter is correct");
    }
    else{console.log("letter is incorrect"); setStep(step + 1);}
    setUsedLetters([...usedLetters, letter]);
  };

  return (
    <>
      <div className="   w-500 h-180 m-auto bg-blue-500">
        <h1 className="text-3xl  font-semibold text-center bg-green-200 rounded-xl ">
          Play Game
        </h1>
        {/*  redirecting  button        */}
        <Link to="/start" className="flex justify-center m-6">
          <Button styleType={"error"} text={"startgame"} />
        </Link>
        <div className="maskedletterdiv mx-30 my-5">
          <MaskedText text={wordSelected} usedLetters={usedLetters} />
        </div>

        <div className="flex justify-center ">
          <div className=" letterbuttons flex-1/2 ">
            <LetterButtons
              text={wordSelected}
              usedLetters={usedLetters}
              onLetterClick={handleLetterClick}
            />
          </div>

          <div className="hangmanphoto flex-1/2 ">
            <Hangman step={step} />
          </div>
        </div>
      </div>
    </>
  );
}
