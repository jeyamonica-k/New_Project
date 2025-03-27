import React from 'react'
import Navbar_Section1 from '../NavBarSec/Navbar_Section1'
import Footer from "../NavBarSec/Footer"
import MediaTable from './MediaTable'
import Media from "./Media"

function MainMedia() {
  return (
   <div>
     <Navbar_Section1></Navbar_Section1>
     <Media></Media>
     <MediaTable></MediaTable>
      <Footer></Footer>
   </div>
  )
}

export default MainMedia