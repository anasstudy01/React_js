import TextInput from "../TextInput/TextInput";
import CreateButton from "../button/button";
import { useState } from "react";

function TextInputForm({ onSubmit }) {
  const [value, setValue] = useState("");
  const [inputType, setInputType] = useState("password");

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("form submitted", value);
    onSubmit?.(value); // if onsubmit is defined , call it with the value
  }

  function handleTextInputChange(event) {
    console.log(event.target.value);
    setValue(event.target.value);
  }

  return (
    <form className="flex" onSubmit={handleFormSubmit}>
      <div className="m-2 flex-1 ">
        <TextInput
          type={inputType}
          label="enter the word"
          onChange={handleTextInputChange}
        />
  
        
      </div>

      <div className="flex">
        <CreateButton type="submit" text="OK" styletype="primary" />

        <CreateButton
          styletype="warning"
          text={inputType === "password" ? "show" : "hide"}
          onClick={() => {
            setInputType(inputType === "password" ? "text" : "password");
          }}
        />
      </div>
    </form>
  );
}
export default TextInputForm;
