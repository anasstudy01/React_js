import { useState } from "react";
import TextInputForm from "./TextInputForm";

function TextInputFormContainer({ onSubmit }) {
  const [value, setValue] = useState("");
  const [inputType, setInputType] = useState("password");
 


  function handleFormSubmit(e) {
    e.preventDefault();
    console.log("form submitted");
    console.log(value);
    onSubmit?.(value);
  }

  function handleShowButtonClick() {
    setInputType(inputType === "password" ? "text" : "password");
  }

  function handleTextInputChange(e) {
    setValue(e.target.value);
  }


  return (
    <TextInputForm
      value={value}
      inputType={inputType}
      handleFormSubmit={handleFormSubmit}
      handleShowButtonClick={handleShowButtonClick}
      handleTextInputChange={handleTextInputChange}
    
    />
  );
}

export default TextInputFormContainer;
