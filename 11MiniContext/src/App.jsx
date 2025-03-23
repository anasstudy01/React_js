import "./App.css";
import Valuelelo from "./Components/context";
import Navbar from "./Components/Navbar";
import { useState } from "react"; 

function App() {
  
  const [count, setCount] = useState(0);
  
  return (
    <>
    <Valuelelo.Provider value={{count,setCount}}>
      <div className="w-full bg-black h-screen text-white flex justify-center flex-col items-center">
        <div className="relative bg-gray-800 w-200 h-100 p-4 rounded-xl text-center">
        
          <h1 className=" text-3xl border-3 rounded-xl p-2 px-4 ">
            welcome to react prop Driling projects
          </h1>
<button onClick={()=>setCount(count+1)} className="border-3 px-4 py-2 my-5 rounded-xl">Counter    {count} </button>

        </div>
 <Navbar/>
      </div>

    </Valuelelo.Provider>
    </>
  );
}

export default App;
