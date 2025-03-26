import React from 'react'
import Navbar_Section1 from '../NavBarSec/Navbar_Section1'
import ContactDetail from './ContactDetail'
import Registeration from './Registeration'
import Footer from '../NavBarSec/Footer'

function MainContact() {
  return (
    <div>
      <Navbar_Section1></Navbar_Section1>
      <ContactDetail></ContactDetail>
      <Registeration></Registeration>
      <Footer></Footer>
    </div>
  )
}

export default MainContact