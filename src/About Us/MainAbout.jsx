import React from 'react'
import Navbar_Section1 from '../NavBarSec/Navbar_Section1'
import Footer from '../NavBarSec/Footer'
import AboutUs from './AboutUs'
import Floating from './Floating'
import Scrolling from './Scrolling'

function MainAbout() {
  return (
    <>
      <Navbar_Section1></Navbar_Section1>
      <AboutUs></AboutUs>
      <Floating></Floating>
      <Scrolling></Scrolling>
      <Footer></Footer>
    </>
  )
}

export default MainAbout