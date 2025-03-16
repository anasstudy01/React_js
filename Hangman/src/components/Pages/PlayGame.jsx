import { Link } from "react-router";
import Button from "../Buttons/Buttons";
export default function PlayGame() {
  return (
    <div className="flex flex-col items-center gap-5">
      
      <h1 className="text-3xl font-semibold text-center w-100 mt-15 bg-green-200 rounded-xl " >Play Game</h1>
      <Link to="/start"><Button  styleType={"error"} text={"startgame"}  /></Link>
    
    </div>
  );
}
