import { Link, useNavigate } from "react-router";
import Button from "../Buttons/Buttons";
import TextInputFormContainer from "../textInputForm/TextInputContainer";

export default function StartGame() {
    const navigate = useNavigate();
  const handleSubmit =(value)=>{
    console.log("Value coming from the hidden form is", value)
    navigate('/play',{state:{wordSelected:value}});

  }
  
  
  
  
    return (
      <div>
        <h1 className="text-3xl font-semibold text-center my-5 bg-red-200 rounded-xl w-100" >Start Game</h1>
        <TextInputFormContainer onSubmit={handleSubmit} />
      </div>
    );
  }
  