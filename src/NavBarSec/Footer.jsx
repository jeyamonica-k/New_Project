import React from "react";
import logo from '../images/logo.png'
function Footer() {
  const course_data = [
    "Child Education",
    "Arts and Design",
    "Health Sciences",
    "Media and Communication",
    "Beautician Education",
    "Automobile Education",
    "Fire & Safety",
    "Agriculture Education",
    "Communication and Soft Skills",
    "Sports Education",
    "Computer Education",
    "Hospitality Education",
    "Language School",
  ];
  const procedure_data = [
    "Attestation",
    "Approval Procedure",
    "Sample Certificate",
    "Apply Affiliation",
    "Results",
    "Downloads",
  ];
  const course_part1=[ "Child Education",
    "Arts and Design",
    "Health Sciences",
    "Media and Communication",
    "Beautician Education",
    "Automobile Education","Fire & Safety"]
    const course_part2=[ 
      "Agriculture Education",
      "Communication and Soft Skills",
      "Sports Education",
      "Computer Education",
      "Hospitality Education",
      "Language School"]
  return (
  <>
    <div className="max-w-full flex flex-col m-1 gap-2 border-t-2 border-blue-950 rounded-t-3xl p-4 md:flex-row md:m-7  md:justify-around">
      <div className="flex flex-col gap-3 md:w-[20%]">
        <h1 className="text-2xl font-bold text-red-600">ICVTE</h1>
        <h3 className="font-medium text-blue-900">
          "A Unit of Aatral Charitable and Educational Trust"
        </h3>
        <img src={logo} alt="" className="w-36" />
      </div>
      <div className="flex flex-col gap-3 md:hidden">
        <h1 className="text-red-600 font-bold  border-t-2  hover:cursor-pointer border-transparent p-1 active:border-b-blue-900 hover:border-b-blue-900">Courses</h1>
        {course_data.map(function (item) {
          return (
            <p className="text-blue-900 font-normal p-2  border border-transparent  hover:cursor-pointer active:bg-blue-950 hover:bg-blue-950 active:text-white hover:text-white active:border hover:border rounded-md">
              {item}
            </p>
          );
        })}
      </div>
      <div className=" hidden md:flex flex-col gap-3 md:w-[20%] ">
        <h1 className="text-red-600 font-bold border border-b-2 hover:cursor-pointer border-transparent p-1 active:border-b-blue-900 hover:border-b-blue-900">Courses</h1>
        {course_part1.map(function (item) {
          return (
            <p className="text-blue-900 font-normal p-2  border border-transparent hover:cursor-pointer active:bg-blue-950 active:text-white active:border hover:bg-blue-950 hover:text-white  hover:border rounded-md">
              {item}
            </p>
          );
        })}
      </div>
      <div className=" hidden md:flex flex-col gap-3 md:w-[20%]">
        <h1 className="text-red-600 font-bold border border-b-2 hover:cursor-pointer border-transparent p-1 hover:border-b-blue-900">Courses</h1>
        {course_part2.map(function (item) {
          return (
            <p className="text-blue-900 font-normal p-2  border border-transparent hover:cursor-pointer active:bg-blue-950 active:text-white active:border hover:bg-blue-950 hover:text-white  hover:border rounded-md">
              {item}
            </p>
          );
        })}
      </div>
      
      <div className="flex flex-col gap-3 md:w-[20%]">
        <h1 className="text-red-600 font-bold border border-b-2 hover:cursor-pointer border-transparent p-1 active:border-b-blue-900 hover:border-b-blue-900">Procedure</h1>
        {procedure_data.map(function (item) {
          return (
            <p className="text-blue-900 font-normal p-2  border border-transparent hover:cursor-pointer active:bg-blue-950 active:text-white active:border hover:bg-blue-950 hover:text-white  hover:border rounded-md">
              {item}
            </p>
          );
        })}
      </div>
      <div className="flex flex-col gap-3 md:w-[20%]">
        <h1 className="text-red-600 font-bold border border-b-2 hover:cursor-pointer border-transparent p-1 active:border-b-blue-900 hover:border-b-blue-900">Legal</h1>
        <p className="text-blue-900 font-normal p-2  border border-transparent active:bg-blue-950 active:text-white active:border hover:bg-blue-950 hover:cursor-pointer hover:text-white  hover:border rounded-md">
          Terms and Conditions
        </p>
      </div>
      <div className="flex flex-col gap-3 md:w-[20%]">
        <h1 className="text-red-600 font-bold border border-b-2 hover:cursor-pointer border-transparent p-1  active:border-b-blue-900 hover:border-b-blue-900">Follow Us</h1>
        <div className="flex gap-1">
          <i className="fa-brands fa-facebook hover:cursor-pointer " ></i>
          <i className="fa-brands fa-instagram hover:cursor-pointer"></i>
          <i className="fa-brands fa-linkedin-in hover:cursor-pointer"></i>
          <i className="fa-brands fa-x-twitter hover:cursor-pointer"></i>
        </div>
        <p className='text-blue-900 font-normal active:text-red-600 hover:text-red-600 hover:cursor-pointer'>Email: info@icvte.com</p>
        <p className='text-blue-900 font-normal  active:text-red-600   hover:text-red-600 hover:cursor-pointer'>Phone: +91 9789832552</p>
      </div>
      <div className="bg-[#192C57] p-2 m-0.5 md:hidden">
        <p className=" text-gray-500">Copyright © 2024 All Rights Reserved by ICVTE & Designed by VISKAMNIX</p>
      </div>

    </div>
    <div className="hidden md:block bg-[#192C57] p-5 m-5">
        <p className=" text-gray-500 font-medium text-xl text-center">Copyright © 2024 All Rights Reserved by ICVTE & Designed by VISKAMNIX</p>
      </div>
      </>
  );
}

export default Footer;
