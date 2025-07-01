import React from 'react'
import { assets } from '../../assets/assets'

const Hero = () => {
  return (
    <div><h1>Empower your future with the courses design to fit your chhoices
     </h1>
     <span>
     <img src={assets.sketch} 
     className='md:block hidden absolute-bottom-7 right-4' alt="Hero Image" />

     </span>
    </div>
  )
}

export default Hero