import PlayGame from './PlayGame'; // Import PlayGame component
import StartGame from './StartGame'; // Import StartGame component
import ChildPropDemo from './ChildPropDemo'; // Import ChildPropDemo component
import './App.css'
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import {Navigate} from 'react-router-dom'
import { useState } from 'react';
function App() {
  
  // hooks
  const navigate =useNavigate();
  const location =useLocation();
  
  // event handler
  const onclickHandler = () => {
    if(location.pathname === "/play") return navigate("/start")
      else if(location.pathname === "/start") return navigate("/play")
    else return navigate("/start")
}

// masking text
let [arr,setArr] =useState([5,3,-1,2,5,4,7,12,9,10,11])

const sortArr =(ar)=>{
  let sortedArr = [...arr]
setArr(sortedArr.sort((a,b)=>a-b))
}

const randomAdd =()=>{
  let random = Math.floor(Math.random()*100+1)
  setArr([...arr,random]);
}

  return (
    <>

    {/*------------------------------- navbar starts------------------------------------------- */}

   <div className='navbar w-full h-15 bg-blue-200 '>
      <h1 className='text-3xl font-semibold text-center   rounded-xl ' >Welcome to the game</h1>
 </div>
    {/*------------------------------- Routing starts------------------------------------------- */}
    <Routes>
      <Route path="/play" element={<PlayGame/>} /> // this is a route
      <Route path="/start" element={<StartGame/>} />  // this is a route
      <Route path="*" element={<div> not found </div>} /> // this is a catch all route
      
    </Routes>

    {/*------------------------------- Children prp challenge ------------------------------------------- */}

    <ChildPropDemo name="John" >
    <div className='challenge bg-blue-500 text-white p-4 rounded-md'> 
      <h1>Challenge</h1>
      <p>This is a challenge</p>
      <button  onClick={onclickHandler} className='bg-yellow-300 text-black p-2 rounded-md hover:bg-gray-200 hover:scale-105 transition-all duration-200 ease-in-out'>Click me</button>
    </div>
    </ChildPropDemo>  

{/*------------------------------- Masking Text------------------------------------------- */}
<div  className='masking bg-gray-300 text-black p-4 rounded-md'>

<ul className=' m-5 p-5 gap-5 bg-gray-200 mx-20 rounded-xl flex' >
  {arr.map((item,index) =><li key={index}>{item}</li>)}

</ul>


    <button className='hover:bg-gray-600 hover:scale-105 transition-all duration-200 ease-in-out px-4 py-2 m-2 bg-black text-white rounded-xl ml-150' onClick={sortArr}>sortarray</button>
    <button className='hover:bg-gray-600 hover:scale-105 transition-all duration-200 ease-in-out px-4 py-2 m-2 bg-black text-white rounded-xl' onClick={randomAdd}>add random number</button>


</div>

    </>
  )
}

export default App
