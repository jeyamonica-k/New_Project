import React from 'react'
import '../App.css';


function ContactDetail() {
  return (
    <div className='flex flex-col items-center gap-6 my-7 lg:mt-12 lg:flex-row  lg:justify-between  lg:mx-44'>
      <div className='flex flex-col justify-center items-center gap-2 bg-[#071C34] md:h-[225px] lg:h-[260px] w-[80%] m-2 p-4 transition-transform duration-300 active:scale-105  hover:scale-105  hover:cursor-pointer active:shadow-2xl  hover:shadow-2xl lg:w-[30%]'>
      <i className="fa-solid fa-map-location fa-3x  text-[#D94426]"></i>
      <h1 className='font-bold text-2xl text-[#FFFFFF] xl:text-3xl'>Address</h1>
      <p className='font-medium text-xl py-1.5 text-gray-500 text-center hover:cursor-pointer active:text-blue-600 hover:text-blue-600 xl:text-xl'>69/2, Poonamallee - Selva Nagar Avadi, Tamil Nadu 600071</p>
      </div>
      <div className='  flex flex-col justify-center items-center gap-2 bg-[#071C34] md:h-[225px] lg:h-[260px] w-[80%] m-2 p-4 transition-transform duration-300 active:scale-105 hover:scale-105  hover:cursor-pointer active:shadow-2xl hover:shadow-2xl lg:w-[30%] floating'>
      <i class="fa-solid fa-envelope fa-3x text-[#D94426] m-1 " ></i>
        <h1 className='font-bold text-2xl text-[#FFFFFF]  xl:text-3xl'>Email</h1>
        <p  className='font-medium text-xl py-1.5 text-gray-500 text-center  hover:cursor-pointer  active:text-blue-600 hover:text-blue-600 xl:text-xl'>info@icvte.com</p>
      </div>
      <div className='flex flex-col justify-center items-center gap-2 bg-[#071C34] md:h-[225px] lg:h-[260px] w-[80%] m-2 p-4 transition-transform duration-300 active:scale-105 hover:scale-105  hover:cursor-pointer active:shadow-2xl hover:shadow-2xl lg:w-[30%] '>
      <i class="fa-solid fa-phone fa-3x text-[#D94426] m-1 "></i>
        <h1 className='font-bold text-2xl text-[#FFFFFF]  xl:text-3xl'>Contact NO</h1>
        <p  className='font-medium text-xl py-1.5 text-gray-500 text-center  hover:cursor-pointer active:text-blue-600  hover:text-blue-600 xl:text-xl'>+91 9789832552</p>
        <p  className='font-medium text-xl py-1.5 text-gray-500 text-center  hover:cursor-pointer active:text-blue-600 hover:text-blue-600 xl:text-xl'>+91 9363771300</p>
      </div>
    </div>
  )
}

export default ContactDetail