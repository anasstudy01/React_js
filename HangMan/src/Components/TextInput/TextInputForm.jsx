import TextInput from "./TextInput";
import Button from "../Button/Button";

function TextInputForm({  inputType, handleFormSubmit, handleShowButtonClick, handleTextInputChange }) {
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
        <Button text={inputType === "password" ? "show" : "hide"} btnStyle="secondary" onClickHandler={handleShowButtonClick} />
      </div>
    </form>
  );
}

export default TextInputForm;
