
import React, { useEffect,useState } from 'react'
import one from "../images/communication and soft skills background image.jpeg"

function Communication() {

const [animate,setAnimate]=useState(true);

useEffect(()=>{
  const timer=setTimeout(()=> setAnimate(false),1000);
  return ()=>
    clearTimeout(timer);
},[]);

  return (
    <div className="flex flex-col relative shadow-xl m-4 ">
      <div className='flex-grow'>
      <img src={one} alt="" className=' w-full h-[600px] lg:h-[500px] xl:h-[550px] object-cover  ' />
      <div className={`absolute left-0 bottom-[5%] flex flex-col p-2 m-3 gap-2 bg-black/50 md:w-[70%] transition-all duration-1000 ${animate?"translate-y-full opacity-0":"translate-y-0 opacity-100"}`}>
        <h3 className='text-white md:text-2xl lg:text-3xl font-bold'>Communication and Soft Skills</h3>
        <p className='text-gray-300 md:text-xl lg:text-2xl font-medium'>Communication and soft skills involve effective verbal and non-verbal interactions, teamwork, problem-solving and emotional intelligence.</p>
      </div>
      </div>
    </div>
  )
}

export default Communication