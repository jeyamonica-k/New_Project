import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css"

function SideNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  return (
    <div >
      <div className="flex flex-col gap-10 items-center ">
       <p></p>
        {/* <Link to={"/"} >
          <p className="active:text-red-500">Home</p>
        </Link> */}
        <Link to={"/About"}>
          <p className="active:text-red-500">About Us</p>
        </Link>
        <Link to={"/Courses"}>
          <p className="active:text-red-500">Courses</p>
        </Link>
        <div className="relative">
        <Link>
          <p className="active:text-red-500" onClick={()=>setIsScrolled(!isScrolled)}>Procedure</p>
        </Link>
        <div className={`absolute  w-[250%] bg-[#192C57] m-1 p-1 z-10 border-transparent rounded-md  left-[-60%] ${isScrolled?"block":"hidden"}`}>
          <div className="flex flex-col gap-3  ">
           <Link to='/language'> <p className="text-normal  text-white active:bg-[#D94426] p-1  border-transparent rounded-md">
              Attestation
            </p></Link>
          <Link to='/approval'> <p className="text-normal  text-white active:bg-[#D94426] p-1 border-transparent rounded-md">
              Approval Procedure
            </p></Link>
           <Link to='/samplecertificate'> <p className="text-normal  text-white active:bg-[#D94426] p-1 border-transparent rounded-md">
              Sample Certificate
            </p></Link>
          </div>
        </div>
        </div>
        
        <Link to={"/Contact"}>
          <p className="active:text-red-500">Contact Us</p>
        </Link>
        <Link to={"/Institutelogin"}><p className={`
                  relative p-2 bg-blue-950 text-white cursor-pointer border border-transparent rounded-md 
                  shadow-2xl transition-all duration-500
                  active:bg-transparent active:text-blue-950 active:shadow-none
                  before:absolute before:top-0 before:left-0 before:w-0 before:h-[2px]
                  before:bg-red-700 before:transition-all before:duration-500
                  active:before:w-full
                  after:absolute after:bottom-0 after:right-0 after:w-0 after:h-[2px]
                  after:bg-red-700 after:transition-all after:duration-500
                  active:after:w-full
                  before:shadow-[0_5px_15px_rgba(0,0,0,0.4)]
                  after:shadow-[0_-5px_15px_rgba(0,0,0,0.4)]`}>Institute Login</p></Link>
            <Link to={"/Adminlogin"}><p className={`
                  relative p-2 bg-blue-950 text-white cursor-pointer border border-transparent rounded-md 
                  shadow-2xl transition-all duration-500
                  active:bg-transparent active:text-blue-950 active:shadow-none
                  before:absolute before:top-0 before:left-0 before:w-0 before:h-[2px]
                  before:bg-red-700 before:transition-all before:duration-500
                  active:before:w-full
                  after:absolute after:bottom-0 after:right-0 after:w-0 after:h-[2px]
                  after:bg-red-700 after:transition-all after:duration-500
                  active:after:w-full
                  before:shadow-[0_5px_15px_rgba(0,0,0,0.4)]
                  after:shadow-[0_-5px_15px_rgba(0,0,0,0.4)]`}>Admin Login</p></Link>
        
      </div>
    </div>
  );
}

export default SideNav;
