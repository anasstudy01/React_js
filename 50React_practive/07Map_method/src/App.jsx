import React, { useState,useRef } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [dataArray, setDataArray] = useState([]); // <-- use state for items
  const inputRef = useRef('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    setDataArray(
      [...dataArray, value]); // <-- update state
    setValue("");
    inputRef.current.focus(); // Focus the input after adding an item

  };

  return (
    <>
      <h1>Form for Todo Items</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Todo Item"
          value={value}
          onChange={handleChange}
          ref={inputRef}
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {dataArray.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
