import React, { useState } from 'react'
import './App.css'

function App() {
  const [color,setColor]=useState('black');
  return (
   <>
   <div className='main'>
<div className="header py-10 px-5">
  <h1 className='text-white text-4xl text-center '>background changing project</h1>
</div>
<div className="hero  ">
  <div className={`w-[80vw] h-[60vh] border-3 mx-auto border-blue-300 `}  style={{ backgroundColor: color }}></div>
</div>
<div className="footer justify-center flex my-4">
  <button className='px-6 py-2 m-2 bg-red-500 shadow-lg rounded-xl' onClick={() => setColor('red')}>Red</button>
          <button className='px-6 py-2 m-2 bg-green-400  shadow-lg rounded-xl' onClick={() => setColor('green')}>Green</button>
        
          <button className='px-6 py-2 m-2 bg-yellow-400 shadow-lg  rounded-xl' onClick={() => setColor('yellow')}>Yellow</button>
          <button className='px-6 py-2 m-2 bg-purple-400  shadow-lg rounded-xl' onClick={() => setColor('purple')}>Purple</button>

          <button className='px-6 py-2 m-2 bg-blue-400 shadow-lg rounded-xl' onClick={() => setColor('blue')}>Blue</button>
          <button className='px-6 py-2 m-2 bg-green-400  shadow-lg rounded-xl' onClick={() => setColor('green')}>Green</button>

          <button className='px-6 py-2 m-2 bg-yellow-400 shadow-lg  rounded-xl' onClick={() => setColor('yellow')}>Yellow</button>
          <button className='px-6 py-2 m-2 bg-purple-400  shadow-lg rounded-xl' onClick={() => setColor('purple')}>Purple</button>
</div>





   </div>
   
   
   
   
   
   
   </>
  )
}

export default App