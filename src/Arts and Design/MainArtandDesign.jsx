import React from 'react'
import ArtandDesign from './ArtandDesign'
import ArtandDesign_Table from './ArtandDesign_Table'
import Navbar_Section1 from '../NavBarSec/Navbar_Section1'
import Footer from "../NavBarSec/Footer"

function MainArtandDesign() {
  return (
    <div>
      <Navbar_Section1></Navbar_Section1>
      <ArtandDesign></ArtandDesign>
      <ArtandDesign_Table></ArtandDesign_Table>
     <Footer></Footer>
    </div>
  )
}

export default MainArtandDesign