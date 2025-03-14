import "./App.css";
import { useState, useCallback, useEffect } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = " ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let num = "0123456789";
    if (numberAllowed) str += num;
    if (charAllowed) str += "!@#$%^&*()_+";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);
  
  useEffect(()=>{passwordGenerator()}, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="App w-full max-w-md mx-auto shallow-lg rounded-lg p-4 my-8 text-orange-500 bg-gray-800">
        <h1 className=""> password Generator</h1>
        <div className="flex shadow-lg rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="w-full bg-gray-200 p-2 text-lg text-gray-800 "
            placeholder="Password"
            readOnly
          />
          <button className=" px-4  py-2 bg-red-400 text-black ">copy</button>
        </div>
        <div className="flex gap-x-1 items-center">

        
        <div className=" flex gap-x-1 items-center ">
          <input
            type="range"
            min="0"
            max="20"
            value={length}
            className="curson-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>length:{length}</label>
        </div>
        <div className="flex gap-x-1 items-center">
          <input
            type="checkbox"
            checked={numberAllowed}
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label>numbers</label>
          <input
            type="checkbox"
            checked={charAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label>special char</label>
        </div>
        </div>
      </div>
    </>
  );
}
export default App;
