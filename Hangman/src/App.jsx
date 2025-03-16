
import React from 'react';
import TextinputFormContainer from './components/textInputForm/TextInputContainer';
import { Routes,Route } from 'react-router-dom';
import PlayGame from './components/Pages/PlayGame';
import StartGame from './components/Pages/StartGame';

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



    <Routes>

      
    <Route path="/play" element={<PlayGame />} />
        <Route path="/start" element={<StartGame />} />
      
    </Routes>

   
    </>
   
      
  );
}

export default App;
