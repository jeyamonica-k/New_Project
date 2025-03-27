
import React from 'react'
import Navbar_Section1 from "../NavBarSec/Navbar_Section1";
import Footer from "../NavBarSec/Footer";
import HospitalityTable from './HospitalityTable';
import Hospitality from "./Hospitality"


function MainHospitality () {
  return (
    <div>
      <Navbar_Section1></Navbar_Section1>
      <Hospitality></Hospitality>
      <HospitalityTable></HospitalityTable>
      <Footer></Footer>
    </div>
  )
}

export default MainHospitality 