import {useState} from "react";


function CustomComponent() {
let [x,setX] =useState(10);

return <>
<button onClick ={()=>{setX(x+10);  console.log(x)}}>click me!</button>

{x}

</>

}
  
  export default CustomComponent;