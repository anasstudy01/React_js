import TextInput from "./TextInput";
import Button from "../Button/Button";
import { useState } from "react";

function TextInputForm({onSubmit}  ) {

let [value,setValue]=useState("");

  function handleFormSubmit(e) {
    e.preventDefault();
    console.log("form submitted");
    console.log(value);
    onSubmit?.(value);
  }





function handleTextInputChange(e) {
  // console.log(e.target.value);
  setValue(e.target.value); // whenever we type in the input field, the value will be updated
 
  }

  return (
    <form className="flex" onSubmit={handleFormSubmit}>


      <div className='flex-1 mr-3'>


        <TextInput 
        label="enter your name"
         type="password"
         onChange={handleTextInputChange}
          />


      </div>

      <div className="">
        <Button text="Submit" btnStyle="sucess" />
        <Button text="show" btnStyle="secondary" />
      </div>
    </form>
  );
}

export default TextInputForm;
