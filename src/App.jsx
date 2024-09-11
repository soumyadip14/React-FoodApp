import React from 'react'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Desert from './components/Desert'
import Banner from './components/Banner'
import PopulerRecipe from './components/PopulerRecipe'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'
const App = () => {
  return (
    <div className='overflow-x-hidden bg-White1 text-dark'>
      <div className=' relative overflow-hidden'>
      <Navbar />
      <Hero />
      </div>
      <Desert/>
      <Banner/>
      <PopulerRecipe/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default App
