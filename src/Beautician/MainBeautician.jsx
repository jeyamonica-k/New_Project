import React from 'react'
import Navbar_Section1 from '../NavBarSec/Navbar_Section1'
import Footer from "../NavBarSec/Footer"
import Beautician from './Beautician'
import BeauticianTable from './BeauticialTable'

function MainBeautician() {
  return (
    <div>
      <Navbar_Section1></Navbar_Section1>
      <Beautician></Beautician>
      <BeauticianTable></BeauticianTable>
      <Footer></Footer>
    </div>
  )
}

export default MainBeautician