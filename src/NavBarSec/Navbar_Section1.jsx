import React from 'react'
import one from '../images/logo.png'
import Navbar from '../NavBarSec/Navbar'
import Menubar from '../NavBarSec/Menubar'

import { useState, useEffect } from "react";

function Navbar_Section1() {
const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
    <div className='flex items-center justify-between shadow-lg  sticky top-0 z-70 bg-white max-w-full'>
    <div>
      <img src={one} alt="logo"  className= {` md:w-40 transition-all duration-800 ${
            isScrolled ? "w-20 p-0 m-0  " : " w-32 lg:w-44 " 
          }`} />
    </div>
    
    <Navbar isScrolled={isScrolled}></Navbar>
    <Menubar></Menubar>
   
    </div>
    {/* <Hero></Hero> */}
   
    </>

  )
}

export default Navbar_Section1

