function CustomComponent( {text,btntype,onClick} ) {
const primary = "bg-blue-500  border border-blue-700  m-1 px-4 py-2  text-white hover:bg-blue-700 hover:text-white rounded-md transition-all duration-300 ease-in-out";
const secondary = "bg-red-500  border border-red-700  m-1 px-4 py-2  text-white hover:bg-red-700 hover:text-white rounded-md transition-all duration-300 ease-in-out";
const success = "bg-green-500  border border-green-700  m-1 px-4 py-2  text-white hover:bg-green-700 hover:text-white rounded-md transition-all duration-300 ease-in-out";
const danger = "bg-yellow-500  border border-yellow-700  m-1 px-4 py-2  text-white hover:bg-yellow-700 hover:text-white rounded-md transition-all duration-300 ease-in-out";

function getButtonType(btntype){
  if(btntype === "primary"){
    return primary;
  }
  else if(btntype === "secondary"){
    return secondary;
  }
  else if(btntype === "success"){
    return success;
  }
  else if(btntype === "danger"){
    return danger;
  }
  else{
    return primary;
  }
}
  return <>
  <div>
    <button
   
   onClick = {onClick}
    className={`bg-blue-500  ${getButtonType(btntype)} border border-blue-700  m-1 px-4 py-2  text-white hover:bg-blue-700 hover:text-white rounded-md transition-all duration-300 ease-in-out`}
    >{text}</button>
  </div>
  </>
}

export default CustomComponent;