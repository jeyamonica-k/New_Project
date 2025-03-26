import React from 'react'

function CricleandBorder(props) {
  return (
    <div className='relative'>
    <div className='w-8 h-8 bg-[#192C57] md:w-12 md:h-12 md:text-xl   flex items-center justify-center text-orange-600 font-bold rounded-full z-10'>{props.data}</div>
    <div className='absolute left-4 md:left-8 top-1/2 w-full h-0.5  bg-gray-700 -z-0 translate-x-4'></div>
    </div>
  )
}

export default CricleandBorder