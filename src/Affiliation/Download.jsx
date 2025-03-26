import React from 'react'
import { Link } from 'react-router-dom';

function Download() {
  return (
    <div className='flex flex-col gap-4 m-[10%] p-2 items-center justify-center '>
      <h2 className=' text-xl md:text-2xl font-bold '>Fetch Hall Ticket</h2>
      <input type="text" name="" id="" placeholder='Enter Roll No' className='w-[70%] md:w-[35%] xl:w-[20%] p-2  border-2 rounded-md border-gray-400 active:border-black hover:border-black' />
      <button className='bg-black text-white p-2 text-normal lg:text-xl font-medium w-[70%] md:w-[35%] xl:w-[20%] border rounded-md active:bg-white active:text-black hover:bg-white hover:text-black' >Fetch Hall Ticket</button>
      <Link to={"/"}><p className='text-normal md:text-base lg:text-xl font-medium hover:underline active:underline'>Back to Welcome Page</p></Link>
    </div>
  )
}

export default Download