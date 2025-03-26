import React from 'react'

function Result() {
  return (
    <div className='flex flex-col gap-4 p-2 m-5'>
      <div className='flex flex-col gap-2'>
        <div>
          <h1 className='text-blue-950 text-3xl font-bold text-center'>ICVTE STUDENT RESULTS</h1>
        </div>
        <div><p className='text-justify hover:text-blue-950 active:text-blue-950'>
        The Indian Council of Vocational and Technical Education (ICVTE) presents the Student Results Page as a streamlined platform for students to easily access their academic performance details. Designed with user convenience in mind, this page allows students to quickly retrieve their results by simply entering their enrollment number. The results are displayed in a structured, tabular format, showcasing course details, marks, and grades in a visually appealing manner. With added functionality for printing results, the page ensures that students have a seamless experience while accessing and sharing their academic records.</p></div>
      </div>
      <div className='flex flex-col items-center  gap-4  md:flex-row '>
        <input type="text" placeholder='Enter Enrollment Number' className='border border-gray-400  rounded-md p-2 w-[90%] md:w-[40%] lg:w-[20%]  active:border-black hover:border-black' />
        <button className='p-2 bg-blue-950 text-white border-2 rounded-md w-[90%] md:w-[40%] lg:w-[20%]  hover:border-blue-950 hover:text-red-600 hover:bg-white  active:border-blue-950 active:text-red-600 active:bg-white'>Fetch Results</button>
        <button className='p-2 bg-green-900 text-white border-2 rounded-md w-[90%] md:w-[40%] lg:w-[20%]  hover:border-green-950 hover:text-green-600 hover:bg-white active:text-green-600 active:bg-white'>Print Results</button>
      </div>
    </div>
  )
}

export default Result