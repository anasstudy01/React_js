
import './App.css'
import Banner from './componets/banner/Banner'
import CoinTable from './componets/CoinTable'
import Navbar from './componets/navbar/Navbar'


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
