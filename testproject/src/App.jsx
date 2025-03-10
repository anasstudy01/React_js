import CustomComponent from "./CustomComponent";
import Clicker from "./Clicker";
import ChildrenPropDemo from "./ChildrenPropDemo";
function App(){


  return<>

<Clicker/>
<ChildrenPropDemo>
<h2>india is great</h2>
<p> lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
<CustomComponent text="danger"  btntype="danger" onClick={()=>{console.log(`danger button is clicked `)}} />
</p>

</ChildrenPropDemo>





    <div >
      
    </div>
  </>
  
}
export default App;






















{/* <h1 className="text-3xl font-semibold bg-yellow-100 border-2 border-gray-500 ">Test Heading</h1>
<CustomComponent text="danger"  btntype="danger" onClick={()=>{console.log(`danger button is clicked `)}} />
<CustomComponent text="secondry"  btntype="secondary"  onClick={()=>{console.log(`danger button is clicked `)}}/>
<CustomComponent text="primary"  btntype="primary" onClick={()=>{console.log(`danger button is clicked `)}} />
<CustomComponent text="sucess"  btntype="success" onClick={()=>{console.log(`danger button is clicked `)}} />
 */}