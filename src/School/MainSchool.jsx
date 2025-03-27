


import React from 'react'
import Navbar_Section1 from "../NavBarSec/Navbar_Section1";
import Footer from "../NavBarSec/Footer";
import SchoolTable from './SchoolTable';
import School from "./School"



function MainSchool () {
  return (
    <div>
      <Navbar_Section1></Navbar_Section1>
      <School></School>
      <SchoolTable></SchoolTable>
      <Footer></Footer>
    </div>
  )
}

export default MainSchool