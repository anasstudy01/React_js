import "./App.css";
import { useState } from "react";

function App() {
  // let counter = 25;
  let [counter, setCounter] = useState(0);
  const addValue = () => {
    counter++;
    setCounter(counter);
    if(counter>10){
      setCounter(10);
    }
    if(counter<0){
      setCounter(0);
    }
    console.log(counter);
  };
  const removeValue = () => {
    counter--;
    setCounter(counter);
    
    if(counter<0){
      setCounter(0);
    }
    if(counter>10){
      setCounter(10);
    }
    console.log(counter);
  };
  return (
    <>
      <h1>Counter project</h1>
      <h2>Counter-value:{counter}</h2>
      <button onClick={addValue}>add value</button>

      <button onClick={removeValue}>del value</button>
    </>
  );
}

export default App;
