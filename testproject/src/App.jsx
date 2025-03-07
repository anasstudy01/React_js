import CustomComponent from "./CustomComponent";

function App(){


  return(
    <div >
      <h1 className="text-3xl font-semibold bg-yellow-100 border-2 border-gray-500 ">Test Heading</h1>
      <CustomComponent text="danger"  btntype="danger" />
      <CustomComponent text="secondry"  btntype="secondary" />
      <CustomComponent text="primary"  btntype="primary" />
      <CustomComponent text="sucess"  btntype="success" />
      
      
    </div>
  )
}
export default App;