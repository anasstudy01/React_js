import React from 'react'
import './App.css'
import Card from './components/Card'


function App() {
  return (
<>

  <h2 className='text-3xl '>Lorem, ipsum dolor.</h2>
<div className='flex justify-evenly '>
<Card heading="aysha"  className="text-2xl block"  desc="hi today is my best day i learn props and some good concepts"/>
<Card heading ="ikram"  desc="hi today is my best day i learn props and some good concepts"/>
<Card heading ="ikram"  desc="hi today is my best day i learn props and some good concepts"/>
<Card heading ="ikram"  desc="hi today is my best day i learn props and some good concepts"/>

</div>



</>


  )
}

export default App