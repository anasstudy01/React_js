
import React from 'react';
import TextinputFormContainer from './components/textInputForm/TextInputContainer';

function App() {
  return (
    // <div>
    //   <h1 className="font-semibold text-3xl">Welcome to Hangman</h1>
    //   <TextInputFormContainer onSubmit={(value) => console.log("Value coming from the hidden form is", value)} />
    // </div>

    <>
    <div>
      <TextinputFormContainer onSubmit={(value) => console.log("Value coming from the hidden form is", value)} />
    </div>
   
    </>
   
      
  );
}

export default App;
