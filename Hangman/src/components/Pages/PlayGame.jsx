import { Link } from "react-router";
import Button from "../Buttons/Buttons";
import MaskedText from "../MaskedText/MaskedText";
import LetterButtons from "../LetterButtons/LetterButtons";
export default function PlayGame() {
  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className="text-3xl font-semibold text-center w-100 mt-15 bg-green-200 rounded-xl ">
        Play Game
      </h1>
      <MaskedText text={"helloMoto"} usedLetters={["h", "e", "m", "l"]} />


<hr></hr>
    <LetterButtons usedLetters={['b','m']} />




{/*  redirecting  button        */}
      <Link to="/start">
        <Button styleType={"error"} text={"startgame"} />
      </Link>
    </div>
  );
}
