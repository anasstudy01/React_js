
import './App.css'
import Navbar from './componets/navbar/Navbar'
import Banner from './componets/banner/Banner'
import CoinTable from './componets/CoinTable/CoinTable'


function App() {


  return (
    <>
    <div className='text-3xl text-white text-center rounded-md '>

      <Navbar/>
<Banner/>
      <CoinTable/>
      
    </div>
   
    </>
  )
}

export default App
