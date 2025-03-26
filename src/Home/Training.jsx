
import React from 'react'

import img1 from "../images/revelant_program1.jpeg";
import img2 from "../images/revelant_program2.jpeg";
import img3 from "../images/revelant_program3.jpeg";
import img4 from "../images/revelant_program4.jpeg";

function Training() {

const values=[{
  src:img1,
  heading:"Industry-Relevant Programs",
  desc:"Our courses are designed in collaboration with industry experts to ensure that our students acquire skills that are in demand"
},{
  src:img2,
  heading:"Experienced Faculty",
  desc:"Learn from highly qualified and experienced instructors who bring real-world expertise into the classroom."
},{
  src:img3,
  heading:"State of the Art Facilities",
  desc:"Benefit from our modern training facilities equipped with the latest technology and tools."
},{
  src:img4,
  heading:"Career Support",
  desc:"Receive guidance and support for job placements and entrepreneurial ventures through our extensive network of industry partners"
}]

  return (
    <>
    <div className="flex flex-col items-center  mb-3 p-2">
        <h2 className="relative text-2xl md:text-3xl lg:text-4xl  font-bold ">
          <span className="relative z-10 block pb-2 text-blue-950">What we do at ICVTE</span>
          <span className="absolute left-0 bottom-0 w-full h-[4px] bg-gradient-to-r from-red-700 to-transparent"></span>
        </h2>
      </div>
    <div className='flex flex-col items-center gap-5 p-2 m-2 lg:m-0  lg:flex-row lg:mb-18 lg:mx-12'>
      
   {
    values.map(function(data,index){
      return(
        <div className={` max-w-full relative w-[300px] h-[400px] md:w-[500px] md:h-[600px] lg:w-[450px] lg:h-[400px] group overflow-hidden ${index=== 1 || index === 3 ? "lg:mt-20":""}`}>
         {/* Image with blur effect on hover */}
    <img
      src={data.src}
      alt="Example"
      className="w-full h-full object-cover transition duration-300 group-active:blur-[2px] group-hover:blur-[2px] group-active:scale-105 group-hover:scale-105"
    />
  
    {/* Top Red Diagonal Covering Left Top Corner */}
    <div className="absolute top-0 left-0 w-full h-[15%] bg-red-600 transform -skew-y-18 origin-top-left transition-all duration-300 scale-0 group-active:opacity-100 group-hover:scale-100"></div>
  
    {/* Bottom Blue Diagonal from Bottom-Left to Top-Right */}
    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-blue-950 transform -skew-y-11 origin-bottom-right transition-all duration-300 scale-0 group-active:opacity-100 group-hover:scale-100"></div>
  
    {/* Paragraph positioned between image and bottom slanted blue line */}
    <div className="opacity-0 transition-all duration-300 group-active:opacity-100 group-hover:opacity-100 flex-col gap-1 absolute bottom-0 left-0  p-1 m-1 ">
    <h2 className="text-white text-xl font-bold md:text-2xl  md:p-3 md:m-3">{data.heading}</h2>
    <p className="text-red-500 md:text-xl  md:p-3 md:m-3 text-justify">{data.desc}</p>
    </div>
    </div>
      )
    })
   }
    </div>
    </>
  )
}

export default Training