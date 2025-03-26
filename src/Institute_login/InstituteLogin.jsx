import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
function InstituteLogin() {
  return (
    <div className="flex flex-col items-center m-2 p-2 gap-3">
      <div className="flex flex-col items-center">
        <img src={logo} alt="" className="w-[50%] lg:w-[60%]" />
      </div>
      <div className="flex flex-col items-center gap-5">
        <h1 className="font-medium text-2xl lg:text-3xl">Institute Login</h1>
        <input
          type="text"
          placeholder="Username"
          className="border-2 border-gray-300 rounded-md p-2 lg:w-[150%]  lg:p-3"
        />
        <input
          type="text"
          placeholder="password"
          className="border-2 border-gray-300 rounded-md p-2 lg:w-[150%]  lg:p-3"
        />
        <button className="bg-black text-white p-2 border-2 rounded-md active:text-black hover:text-black active:bg-transparent hover:bg-transparent  active:border-black  hover:border-black active:cursor-pointer hover:cursor-pointer font-medium px-3 md:w-[50%] lg:w-[150%] lg:text-xl">
          Login
        </button>
        <Link to={"/Adminlogin"}>
        <p className="font-medium active:underline hover:underline active:cursor-pointer hover:cursor-pointer">
          Login to Admin Account?
        </p></Link>
        
        <p className="font-medium active:underline hover:underline active:cursor-pointer hover:cursor-pointer">
          Email: info@icvte.com
        </p>
        <Link to={"/"}><p className="font-medium  active:underline hover:underline active:cursor-pointer  hover:cursor-pointer ">
          Back to Welcome Page
        </p></Link>
      </div>
    </div>
  );
}

export default InstituteLogin;
