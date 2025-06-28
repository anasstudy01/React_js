import React, { useState } from 'react';

function Form({getformData}) {

    

    const [value, setValue] = useState("");
const [password, setPassword] = useState("");
const onchangeHandler =(e)=>{
if(e.target.type ==="text"){
  setValue(e.target.value);
}
else if(e.target.type ==="password"){
  setPassword(e.target.value);

}

}

const onsubmitHandler =(e)=>{
  e.preventDefault();
  console.log("Value:", value);
  console.log("Password:", password);
    getformData(value);
}

  return (
    <div>
        <form onSubmit={onsubmitHandler}>
<input type="text"  value={value}
onChange={onchangeHandler}
/>
 <label>Name</label>
 <input type="password"  value={password} onChange={onchangeHandler} />
 <label>Password</label>
<button type="submit">Submit</button>

</form>
    </div>
  )
}

export default Form