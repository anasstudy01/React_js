function CreateButton() {
    return (
  <div>
      <button className="font-bold text-blue-500 bg-yellow-200 border-1 uppercase m-0 p-2 rounder-md hover:bg-green-200 ">clickme {isEvenorOdd(31+3)}
  
      </button>
  </div>)
  }
  
  function isEvenorOdd(num){
  if (num%2===0){
      console.log(`${num} is the even number`);
      return "even";
  }
  else console.log(`${num} is odd number `)
  return "odd";
  }
  export default CreateButton;
  