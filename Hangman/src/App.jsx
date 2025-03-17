
import React from 'react';
import TextinputFormContainer from './components/textInputForm/TextInputContainer';
import { Routes,Route } from 'react-router-dom';
import PlayGame from './components/Pages/PlayGame';
import StartGame from './components/Pages/StartGame';
import { ChildrenPropDemo } from './ChildrenPropDemo';

function App() {
  return (
 
    <>
    {/* <div>
      <TextinputFormContainer onSubmit={(value) => console.log("Value coming from the hidden form is", value)} />
    </div>
    */}
 <div className='navbar w-full h-15 bg-blue-200 '>
      <h1 className='text-3xl font-semibold text-center   rounded-xl ' >Hangman Game</h1>
 </div>
{/* <ChildrenPropDemo>

<div className='border-2 border-black p-4'>
    <h1 className='text-3xl font-semibold'>Additional Child Demo</h1>
    <p className='text-lg font-semibold'>This is a demo of children prop in React</p>
    <p className='text-lg font-semibold'>This is a demo of children prop in React</p>

</div>



</ChildrenPropDemo> */}


    <Routes>

      
    <Route path="/play" element={<PlayGame />} />
        <Route path="/start" element={<StartGame />} />
        <Route path ="*" element={"404 Not Found"} />
      
    </Routes>

   
    </>
   
      
  );
}

export default App;
