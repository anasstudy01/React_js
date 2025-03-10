import  Button  from "./Components/Button/Button";
import TextInput from "./Components/TextInput/TextInput";
import TextInputForm from  "./Components/TextInput/TextInputForm";
import TextInputFormContainer from "./Components/TextInput/TextInputFormContainer";

function App() {
  return (
    <div>
      <center>
        <h1 className="text-3xl bg-yellow-100 border-2 border-gray-500 ">
          Welcome to Hangman
        </h1>
      </center>
      <TextInputFormContainer  onSubmit={(value)=>{console.log(`the submiteed value is ${value}`)}}/>
    </div>
  );
}
export default App;
