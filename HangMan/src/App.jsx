import  Button  from "./Components/Button/Button";
import TextInput from "./Components/TextInput/TextInput";
import TextInputForm from  "./Components/TextInput/TextInputForm"

function App() {
  return (
    <div>
      <center>
        <h1 className="text-3xl bg-yellow-100 border-2 border-gray-500 ">
          Welcome to Hangman
        </h1>
      </center>
      <TextInputForm  onSubmit={(value)=>{console.log(`the submiteed value is ${value}`)}}/>
    </div>
  );
}
export default App;
