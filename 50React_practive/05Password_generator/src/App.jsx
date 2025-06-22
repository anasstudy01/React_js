import React, { useCallback, useState,useEffect, use } from "react";
import "./App.css";

function App() {
  // State variables can be added here later for password generation logic
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
const [Uppercase, setUppercase] = useState(false);
const [Lowercase, setLowercase] = useState(false);
const [Numbers, setNumbers] = useState(false);
const [Symbols, setSymbols] = useState(false);



const generatedPassword =useCallback(() => {
let charDatabase ='';

if(Uppercase){
  charDatabase += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
}

if(Lowercase){
  charDatabase += 'abcdefghijklmnopqrstuvwxyz';
}
if(Numbers){
  charDatabase += '0123456789'; 
}
if(Symbols){
  charDatabase += '!@#$%^&*()_+[]{}|;:,.<>?';
}
// if no options are selected, default to lowercase letters
if (!charDatabase) {
  charDatabase = 'abcdefghijklmnopqrstuvwxyz';
}



let pwd = "";
  for (let i = 1; i <= length; i++) {
    const randomIndex = Math.floor(Math.random() * charDatabase.length);
    pwd += charDatabase[randomIndex];
  }


  setPassword(pwd);







}, [length, Uppercase, Lowercase, Numbers, Symbols, setPassword]);




useEffect(() => {
  // Generate a password when the component mounts or when dependencies change
  generatedPassword();
}, [generatedPassword, length, Uppercase, Lowercase, Numbers, Symbols]);




  return (
    <>
      <h1 className="text-4xl text-center py-3 ">password Generator </h1>

      <div className=" main w-200 h-100 mx-auto bg-gray-500 py-15">
        <div className="  flex justify-center  gap-1">
          <input
            type="text"
            className="w-80  text-2xl block rounded-lg  px-5 py-2  bg-white "
            placeholder="password"
            value={password}
            readOnly
          />
          <button
            className="bg-blue-500  block text-white px-4 py-2 rounded-lg text-xl" onClick={generatedPassword}
          >
            Generate
          </button>
        </div>

        <div className="flex justify-center flex-wrap w-120 mx-auto items-center gap-1 mt-5">
          <input
            type="range"
            max={16}
            min={6}
            className=""
            value={length}
            onChange={(e) => setLength(e.target.value)}
                      />

          <label className="text-white  text-xl">{length} </label>

          <input type="checkbox" className="mx-2"  onClick={()=>{
            setUppercase((prev) => !prev);
          }}/>
          <label className="text-white text-xl" >Uppercase</label>
          <input type="checkbox" className="mx-2"  onClick={()=>{
            setLowercase((prev) => !prev);
          }} />
          <label className="text-white text-xl">Lowercase</label>
          <input type="checkbox"  onClick={()=>{
            setNumbers((prev) => !prev);
          }} className="mx-2" readOnly />
          <label className="text-white text-xl">Numbers</label>
          <input type="checkbox"   onClick={()=>{
            setSymbols((prev) => !prev);
          }} className="mx-2" readOnly />
          <label className="text-white text-xl">Symbols</label>
        </div>
      </div>
    </>
  );
}

export default App;