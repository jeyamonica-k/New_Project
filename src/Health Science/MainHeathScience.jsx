import React from 'react'
import Navbar_Section1 from '../NavBarSec/Navbar_Section1'
import Footer from "../NavBarSec/Footer"
import ExcelTable from './ExcelTable'
import HealthScience from './HealthScience'

function MainHeathScience() {
  return (
    <div>
      <Navbar_Section1></Navbar_Section1>
      <HealthScience></HealthScience>
     <ExcelTable></ExcelTable>
     <Footer></Footer>
    </div>
  )
}

export default MainHeathScience