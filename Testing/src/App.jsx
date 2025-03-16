import PlayGame from './PlayGame'; // Import PlayGame component
import StartGame from './StartGame'; // Import StartGame component

import './App.css'
import { Route, Routes } from "react-router-dom";
function App() {
 

  return (
    <>
    <h1> Welcome to the Game </h1>
    <Routes>
      <Route path="/play" element={<PlayGame/>} /> // this is a route
      <Route path="/start" element={<StartGame/>} />  // this is a route
      <Route path="*" element={<div> not found </div>} /> // this is a catch all route
      
    </Routes>
    </>
  )
}

export default App
