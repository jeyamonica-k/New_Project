import React from 'react'
import FireSafety from './FireSafety'
import FireSafetyTable from './FireSafetyTable'
import Navbar_Section1 from '../NavBarSec/Navbar_Section1'
import Footer from "../NavBarSec/Footer"

function MainFireSafety() {
  return (
    <div>
    <Navbar_Section1></Navbar_Section1>
    <FireSafety></FireSafety>
    <FireSafetyTable></FireSafetyTable>
   <Footer></Footer>
  </div>
  )
}

export default MainFireSafety