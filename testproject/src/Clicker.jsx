import React, { useState } from 'react';

function Clicker(){

 const [x,setX]=useState(0);
    return<>
    <button
    onClick={()=>{
        setX(x+1);

        console.log(`Button is clicked ${x}`)}}
    
     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4">Click Me {x}</button>




    </>
}

export default Clicker;