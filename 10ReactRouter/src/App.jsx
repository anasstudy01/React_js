import { Route,Routes } from 'react-router-dom'
import './App.css'
import Header from './componenets/Header'
import Footer from './componenets/Footer'
import Home from './componenets/Home'
import About from './componenets/About'
import Contact from './componenets/Contact'
function App() {

  return (
    <>
      {/* <h1 className='text-3xl bg-amber-300 text-center'>React Router App</h1> */}
      
<Header />



       
      <Routes>
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About />} />
        <Route path='/' element={<Home />} />
       
      </Routes> 

      <Footer />
    </>
  )
}

export default App
