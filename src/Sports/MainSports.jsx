
import React from 'react'
import Navbar_Section1 from "../NavBarSec/Navbar_Section1";
import Footer from "../NavBarSec/Footer";
import SportsTable from './SportsTable';
import Sports from './Sports';


function MainSports() {
  return (
    <div>
      <Navbar_Section1></Navbar_Section1>
      <Sports></Sports>
      <SportsTable></SportsTable>
      <Footer></Footer>
    </div>
  )
}

export default MainSports