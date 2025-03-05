import TextInput from "../components/TextInput/TextInput";
import TextInputForm from "../components/TextinputForm/TextinputForm";
// import CreateButton from "./button";
function App() {
  return (
 <div><h1 className ="text-3xl">welcome to hangman</h1>
 
  <TextInputForm  onSubmit={(value)=>{console.log(`value comoing from the hiddee form is ${value}` )}} />
 

 </div>
  );
}
export default App;
