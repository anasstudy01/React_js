import './App.css'
import Card from './components/card'

function App() {
  

  return (
    <>
   
    <div className='bg-black color-green flex justify-center text-3xl h-12 fixed w-full' >



<h1 className='bg-green-200  rounded font-semibold  mx-10 h-10 m-1'>welcome tailwindcss</h1>
    </div>
   <div className='flex flex-wrap justify-center'>


    <Card title="today" description={"we are here to express our feelig real time one now we gone a discuss about the prop obj "}/>
    <Card title="tomorrow" description={"we are here to express our feelig real time one now we gone a discuss about the prop obj "}/>
    <Card title="yesterday" description={"we are here to express our feelig real time one now we gone a discuss about the prop obj "}/>
    <Card title="today" description={"we are here to express our feelig real time one now we gone a discuss about the prop obj "}/>
   
    
   </div>
    </>
  )
}

export default App
