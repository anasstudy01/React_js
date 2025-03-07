import Button from "./Components/Button";


function App(){


  return(
    <div>
      <h1 className="text-3xl bg-yellow-100 border-2 border-gray-500 ">Welcome to Hangman</h1>
      <Button text="Login" btnType="button" btnStyle="primary" onClickHandler={()=>{console.log("primary is clicked")}}/>
      <Button text="Register" btnType="button" btnStyle="secondary  " onClickHandler={()=>{console.log("secondry is clicked")}}/>
      <Button text="Play" btnType="button" btnStyle="sucess" onClickHandler={()=>{console.log("sucess is clicked")}}/>
      <Button text="Exit" btnType="button" btnStyle="warning" onClickHandler={()=>{console.log("warning is clicked")}}/>
    
  
    </div>
  )
}
export default App;