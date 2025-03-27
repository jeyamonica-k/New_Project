import React from 'react'
import one from '../images/certificate1.jpg'
import two from '../images/certificate2.jpg'

function Certificate() {
  return (
    <div className='flex flex-col items-center'>
      <div className='flex flex-col gap-5 p-2 m-1 w-[50%]'>
      <div className="max-w-full flex flex-col md:items-center">
        <h2 className="relative text-2xl md:text-3xl font-bold certificate_heading">
          <span className="relative z-10 block pb-2">The Impact We Create</span>
          <span className="absolute left-0 bottom-0 w-full h-[4px] bg-gradient-to-r from-red-700 to-transparent"></span>
        </h2>
      </div>
        <div className='flex flex-col items-center lg:flex-row gap-3 '>
          <img src={one} alt=""  className='w-[50%] lg:h-[600px] '/>
          <img src={two} alt=""  className='w-[50%] lg:h-[600px] ' />
        </div>
      </div>
    </div>
  )
}

export default Certificate