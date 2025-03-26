import React from 'react';
import one from "../images/affliation.png";
import two from "../images/results.png";
import three from "../images/downloads.png"
import "../App.css"

const course_images=[
  {
    src:one,
    title:"Apply Affliation",
    desc:"Enhance your institution's credentials - Apply for affiliation with us today!"
  },
  {
    src:two,
    title:"Results",
    desc:"Access your academic results here and stay updated on your progress."
  },
  {
    src:three,
    title:"Downloads",
    desc:"Download your certifications, hall tickets, and enrollment forms all in one place."
  }]

function Coursecard() {
  return (
    <>
      
        <div className='flex flex-col items-center  mt-12  lg:flex-row lg:justify-center lg:gap-10 max-w-full  '>
          {
            course_images.map((data,index)=>{

              return(<>
        <div className=' course-card m-5 rounded-md text-center  border-1 border-gray-300 sm:w-[80%]  lg:w-[25%] lg:h-[400px]  lg:rounded-2xl xl:w-[20%]
        shadow-md transition-all duration-500 ease-in-out transform  hover:scale-105  hover:shadow-[0px_10px_30px_rgba(0,0,0,0.7)]' >
        <img src={course_images[index].src} alt="Affliation_img" className=' w-[100%] h-[50%] rounded-t-md  lg:rounded-t-2xl  ' />
        <h1 className='text-[#192C57] font-bold text-xl my-1 md:text-2xl p-1'>{course_images[index].title}</h1>
        <p className='my-1 text-sm text-gray-800 md:text-base p-1'>"{course_images[index].desc}"</p>
        <button className='bg-[#D94426] text-white font-medium border rounded-lg py-2 px-2.5 m-2 cursor-pointer
         hover:bg-[#900000] md:mb-4'>Apply</button>
         </div>
              </>)

            })
          }
        
        
      </div>
    
    </>
  )
}

export default Coursecard
