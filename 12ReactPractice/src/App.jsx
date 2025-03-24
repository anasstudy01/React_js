import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './Components/footer/Footer';
import React, { useState } from 'react'
import './App.css'
import Converter from './Context/GlobalContext';

function App() {
 
 const [currency, setCurrency] = useState("USD");
 
 
  return (
  <>
  <Converter.Provider value={{currency, setCurrency}}>

<Navbar/>
<Home/>
<Footer/>
</Converter.Provider>


  </>
  
  )
}

export default App
