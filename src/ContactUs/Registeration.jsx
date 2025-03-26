import React from 'react'
import one from '../images/download.jpg'
function Registeration() {
  return (
    <div className='flex flex-col gap-5 p-1 m-2 mx-10 md:mx-16 lg:flex-row lg:justify-center xl:mt-24 2xl:mt-64'>
      <div className='flex flex-col lg:w-[60%] '>
        <h1 className='text-xl font-bold'>Get in Touch</h1>
        <div className='flex flex-col gap-5 mt-2 mb-2 md:flex-row md:flex-wrap md:gap-8'>
          <input type="text" placeholder='Your Name' className='bg-[#F9F9F9] p-2 border-2 border-transparent rounded-md md:w-[40%] md:grow active:border-orange-300  hover:border-orange-300' />
          <input type="text" placeholder='E-mail'  className='bg-[#F9F9F9] p-2 border-2 border-transparent rounded-md  md:w-[40%] md:grow active:border-orange-300   hover:border-orange-300'/>
          <input type="text" placeholder='Phone Number'  className='bg-[#F9F9F9] p-2 border-2 border-transparent rounded-md  md:w-[40%] md:grow active:border-orange-300  hover:border-orange-300' />
          <input type="text" placeholder='Place'  className='bg-[#F9F9F9] p-2 border-2 border-transparent rounded-md  md:w-[40%] md:grow active:border-orange-300   hover:border-orange-300' />
        </div>
        <textarea placeholder='Write Your Message' className='bg-[#F9F9F9] p-2 border-2 border-transparent rounded-md h-36 mb-2 md:mt-7 active:border-orange-300  hover:border-orange-300'></textarea>
        <button className='bg-[#D94426] p-2 border-transparent rounded-md w-28 md:mt-5 active:shadow-2xl hover:shadow-2xl'>Submit</button>
      </div>
      <div className='  '>
        <img src={one} alt="" className=' w-[100%] lg:h-[100%]  ' />
      </div>
    </div>
  )
}

export default Registeration