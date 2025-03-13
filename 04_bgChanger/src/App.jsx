import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('cream');

  return (
    <div className='w-full h-screen flex items-center justify-center shadow-xl' style={{ backgroundColor: color }}>
      <h1 className='text-4xl font-bold text-black'>Background Color Changer</h1>
      <div className='fixed flex flex-wrap justify-center  rounded-xl mx-10 shadow-xl bg-red-200  bottom-10'>
        <div>
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
    </div>
  );
}

export default App;