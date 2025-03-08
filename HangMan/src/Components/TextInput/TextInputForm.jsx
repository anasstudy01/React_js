import TextInput from "./TextInput";
import Button from "../Button/Button";
import { useState } from "react";

function TextInputForm({onSubmit}  ) {

let [value,setValue]=useState("");
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
  // console.log(e.target.value);
  setValue(e.target.value); // whenever we type in the input field, the value will be updated
 
  }

  return (
    <form className="flex" onSubmit={handleFormSubmit}>


      <div className='flex-1 mr-3'>


        <TextInput 
        label="enter your name"
         type={inputType}
         onChange={handleTextInputChange}
          />


      </div>

      <div className="">
        <Button text="Submit" btnStyle="sucess" />
        <Button text={inputType==="password"? "show":"hide"} btnStyle="secondary" onClickHandler={handleShowButtonClick} />
      </div>
    </form>
  );
}

export default TextInputForm;
