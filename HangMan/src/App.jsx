
import { Route, Routes } from "react-router-dom";
import TextInputFormContainer from "./Components/TextInput/TextInputFormContainer";
import PlayGame from "./Components/Pages/PlayGame/PlayGame";
import StartGame from "./Components/Pages/StartGame/StartGame";

function App() {
  return (
    // <div>
    //   <center>
    //     <h1 className="text-3xl bg-yellow-100 border-2 border-gray-500 ">
    //       Welcome to Hangman
    //     </h1>
    //   </center>
    //   <TextInputFormContainer  onSubmit={(value)=>{console.log(`the submiteed value is ${value}`)}}/>
    // </div>
    <Routes>
<Route path="/play" element={<PlayGame />} />
<Route path="/start" element={<StartGame/>} />
<Route path="*" element={<div>not found page</div>} />
    </Routes>
  );
}
export default App;
