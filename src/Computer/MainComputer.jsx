import React from 'react'
import Navbar_Section1 from "../NavBarSec/Navbar_Section1";
import Footer from "../NavBarSec/Footer";
import ComputerTable from "./ComputerTable"
import Computer from "./Computer"

function MainComputer() {
  return (
    <div>
      <Navbar_Section1></Navbar_Section1>
      <Computer></Computer>
      <ComputerTable></ComputerTable>
      <Footer></Footer>
    </div>
  )
}

export default MainComputer