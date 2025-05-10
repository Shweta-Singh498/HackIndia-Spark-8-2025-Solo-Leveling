import React from 'react'
import Navbar from './Landing/Navbar'
import Hero from './Landing/Hero'
import Features from './Landing/Features'
import CustomCursor from './CustomCursor'
import Mid from './Landing/Mid'

const Landing = () => {
  return (
    <div className='bg-gradient-to-b from-blue-950 to-purple-600 h-100% w-full'>
        <CustomCursor/>
        <Navbar/>
        <Hero/>
        <Mid/>
      
        <Features/>
    </div>
  )
}

export default Landing