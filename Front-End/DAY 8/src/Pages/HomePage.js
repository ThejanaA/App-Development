import React from 'react'
import Features from '../Components/Featuretej'
import AboutUs from '../Components/AboutUs'
import Testimonials from '../Components/Testimonials'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'

function HomePage() {
  return (
    <div>
        <Nav/>
        <Features/>
        <AboutUs/>
        <Testimonials/>
       <Footer/>
    </div>
  )
}

export default HomePage