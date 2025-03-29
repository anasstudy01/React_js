import { Link } from "react-router";
export default function PlayGame() {
  return (
    <div>
      <h1 className="text-3xl font-semibold text-center   rounded-xl ">Play Game</h1>
      <Link to="/start"><h1 className="text-3xl font-semibold text-center  text-green-500  rounded-xl">Link is here to start</h1></Link>
    </div>
  );
}
