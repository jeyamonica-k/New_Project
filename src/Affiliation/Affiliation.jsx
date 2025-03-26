import React from 'react'
import Navbar_Section1 from '../NavBarSec/Navbar_Section1'
import Footer from "../NavBarSec/Footer"

function Affiliation() {
  const place_holder=["Enter your name","Enter your phone number ","Enter your city","Enter your postal code","Enter youe website","Enter your sector"]
  const label=["Applicant Name *","Phone Number *","City *","Postal Code *","Website","Sector *"]
  return (
    <div>
      <Navbar_Section1></Navbar_Section1>
      <div className='flex flex-col gap-4 items-center p-2 m-2'>
        <h1 className='text-xl md:text-2xl text-red-600 font-mono'>ADD YOUR PROFILE</h1>
        <div className='border-transparent border-4 w-[65%] md:w-[60%]  shadow-2xl '>
          <h1 className='text-blue-950  text-normal md:text-xl lg:text-2xl font-bold m-2 mt-3 md:m-6'>Personal Information:</h1>
          <div className='p-4 '>
            {
              place_holder.map(function(data,index){
                return (<>
                <div className='flex flex-col gap-2 p-2 md:gap-10 md:p-6 md:mx-2.5'>
                <div className='flex flex-col'>
                <label className=' text-xs  md:text-sm text-blue-950'>{label[index]}</label>
                <input type='text' placeholder={data} className=' p-2 md:p-3 border-transparent bg-[#ECEFF1]'></input>
                </div>
                </div>
               </>)
              })
            }
            <div className='flex justify-end p-2 md:p-6'>
              <button className=' bg-blue-950 py-2 border rounded-md text-white px-3 active:bg-orange-600 active:scale-105 hover:bg-orange-600 hover:scale-105'>Next</button></div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Affiliation 