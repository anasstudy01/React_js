import { Link } from "react-router";

export default function StartGame() {
    return (
      <div>
        <h1 className="text-3xl  ont-semibold text-center   rounded-xl">Start Game</h1>
        <Link to="/play"><h1 className="text-3xl font-semibold text-center  text-blue-500 rounded-xl">Link is here to Play</h1></Link>
      </div>
    );
  }
  