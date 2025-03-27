import React from 'react'
import Navbar_Section1 from '../NavBarSec/Navbar_Section1'
import Child_Hero from './Child_Hero'
import Child_Table from './Child_Table'
import Footer from "../NavBarSec/Footer"

function MainChildEducation() {
  return (
    <div>
      <Navbar_Section1></Navbar_Section1>
      <Child_Hero></Child_Hero>
     <Child_Table></Child_Table>
     <Footer></Footer>
    </div>
  )
}

export default MainChildEducation