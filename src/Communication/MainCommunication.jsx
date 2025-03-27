import React from 'react'
import Navbar_Section1 from "../NavBarSec/Navbar_Section1";
import Footer from "../NavBarSec/Footer";
import Communication from './Communication';
import CommunicationTable from './CommunicationTable';

function MainCommunication() {
  return (
    <div>
      <Navbar_Section1></Navbar_Section1>
      <Communication></Communication>
      <CommunicationTable></CommunicationTable>
      <Footer></Footer>
    </div>
  )
}

export default MainCommunication