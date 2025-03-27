import React from 'react'
import Navbar_Section1 from '../NavBarSec/Navbar_Section1'
import Footer from "../NavBarSec/Footer"
import Automobile from './Automobile'
import AutomobileTable from './AutomobileTable'
function MainAutomobile() {
  return (
    <div>
    <Navbar_Section1></Navbar_Section1>
    <Automobile></Automobile>
    <AutomobileTable></AutomobileTable>
   <Footer></Footer>
  </div>
  )
}

export default MainAutomobile