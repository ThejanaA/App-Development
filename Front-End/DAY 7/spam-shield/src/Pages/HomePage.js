import React from 'react'
import Features from '../Components/Featuretej'
import LogoCloud from '../Components/logoCloud'
import Testimonials from '../Components/Testimonials'
import Nav from '../Components/Nav'

function HomePage() {
  return (
    <div>
        <Nav/>
        <Features/>
        <LogoCloud/>
        <Testimonials/>
    </div>
  )
}

export default HomePage