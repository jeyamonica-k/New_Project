import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
function Navbar(props) {
  return (
    <div className='hidden lg:flex w-[90%]  flex-col '>
    <div>
     <h1 className= {`  text-red-700 text-2xl   font-bold text-center  border-b-2 border-b-black transition-all duration-300 ${
            props.isScrolled ? "opacity-0 p-2" : "opacity-100 py-5 mx-5 "
          }`}>Indian Council Of Vocational And Technical Education(ICVTE)</h1> 
    </div>
    <div className={`flex gap-12 items-center justify-center text-xl text-blue-900 sticky top-0 z-30 bg-white transition-all duration-800 ${
            props.isScrolled ? "mt-[-70px]  justify-around py-0" : "mt-3  py-3 mb-2 "
          }`}>
    <Link to={"/"}><p className={`hover:text-red-700 hover:cursor-pointer ${ props.isScrolled ?"text-2xl font-medium":"text-normal"}`}>Home</p></Link>
    <Link to={"/About"}><p  className={`hover:text-red-700 hover:cursor-pointer ${ props.isScrolled ?"text-2xl font-medium":"text-normal"}`}>About Us</p></Link>
    <Link to={"/Courses"}><p  className={`hover:text-red-700 hover:cursor-pointer ${ props.isScrolled ?"text-2xl font-medium":"text-normal"}`}>Courses</p></Link>
    <div className='relative procedure '>
    <Link><p  className={`hover:text-red-700 hover:cursor-pointer  ${ props.isScrolled ?"text-2xl font-medium":"text-normal"}`}>Procedure</p></Link>
    <div className=' absolute bg-[#192C57]  w-[300%]  m-1 p-3 z-50  border-transparent rounded-md lg:top-[70%] left-[-60%]  content'>
      <div className='flex flex-col gap-3'> 
      <p className='text-xl  text-white hover:bg-[#D94426] p-2  border-transparent rounded-md'>Attestation</p>
      <p className='text-xl  text-white hover:bg-[#D94426] p-2 border-transparent rounded-md'>Approval Procedure</p>
      <p className='text-xl  text-white hover:bg-[#D94426] p-2 border-transparent rounded-md'>Sample Certificate</p>
      </div>
    </div>
    </div>
    <Link to={"/Contact"}><p  className={`hover:text-red-700 hover:cursor-pointer ${ props.isScrolled ?"text-2xl font-medium":"text-normal"}`}>Contact Us</p></Link>
    <Link to={"/Institutelogin"}><p className={`
          relative p-2 bg-blue-950 text-white cursor-pointer border border-transparent rounded-md 
          shadow-2xl transition-all duration-500
          hover:bg-transparent hover:text-blue-950 hover:shadow-none
          before:absolute before:top-0 before:left-0 before:w-0 before:h-[2px]
          before:bg-red-700 before:transition-all before:duration-500
          hover:before:w-full
          after:absolute after:bottom-0 after:right-0 after:w-0 after:h-[2px]
          after:bg-red-700 after:transition-all after:duration-500
          hover:after:w-full
          before:shadow-[0_5px_15px_rgba(0,0,0,0.4)]
          after:shadow-[0_-5px_15px_rgba(0,0,0,0.4)] ${ props.isScrolled ?"text-2xl font-medium":"text-normal"}`}>Institute Login</p></Link>
    <Link to={"/Adminlogin"}><p className={`
          relative p-2 bg-blue-950 text-white cursor-pointer border border-transparent rounded-md 
          shadow-2xl transition-all duration-500
          hover:bg-transparent hover:text-blue-950 hover:shadow-none
          before:absolute before:top-0 before:left-0 before:w-0 before:h-[2px]
          before:bg-red-700 before:transition-all before:duration-500
          hover:before:w-full
          after:absolute after:bottom-0 after:right-0 after:w-0 after:h-[2px]
          after:bg-red-700 after:transition-all after:duration-500
          hover:after:w-full
          before:shadow-[0_5px_15px_rgba(0,0,0,0.4)]
          after:shadow-[0_-5px_15px_rgba(0,0,0,0.4)] ${ props.isScrolled ?"text-2xl font-medium":"text-normal"}`}>Admin Login</p></Link>
    </div>
    </div>
  )
}

export default Navbar



























