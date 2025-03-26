import React from 'react'
import aboutimg from '../images/aboutas.jpeg'

function AboutUs() {
  return (
    <>
   <div className='relative'>
    <img src={aboutimg} alt="AboutUs" className=' h-96 w-full md:h-screen ' />
    <div className='border-4 border-blue-950 p-3 bg-white w-fit absolute bottom-0 left-0 md:bottom-72 md:left-20 lg:left-80  lg:p-4  '>
      <p className='text-xl font-bold text-red-700 md:text-2xl lg:text-4xl'>Indian Council Of Vocational And Technical Education</p>
    </div>
   </div>
   <div className='flex justify-center md:m-5 lg:mx-60'>
   <div className='flex flex-col items-start p-2 m-2 '>
    <p className="text-blue-950 font-bold text-normal md:text-xl">Founder’s Message</p>
    <h1 className='text-red-700 text-2xl font-bold mb-2 mt-2 md:text-3xl md:mb-4 '>Empowering Future Generations through Skill Development</h1>
    <p className='text-blue-950 text-normal font-medium text-justify md:text-xl '>It is with immense pride and passion that I welcome you to the Indian Council of Vocational and Technical Education (ICVTE). As the Founder and Chairperson, I envisioned ICVTE as a beacon of opportunity—a place where education transcends boundaries and empowers individuals to thrive in today’s competitive job market.</p><br /><br />
    <p  className='text-blue-950 text-normal font-medium text-justify md:text-xl'>My journey has been one of unwavering commitment to education. With over three decades of national and international experience, I’ve witnessed firsthand the transformative power of skill development. From leading academic institutions to receiving accolades such as the Best Teacher Award and Best Innovative Principal, my heart remains dedicated to nurturing curious minds.</p><br /><br />
    <p  className='text-blue-950 text-normal font-medium text-justify md:text-xl'>At ICVTE, we bridge the gap between learning and livelihood. Our industry-relevant programs, guided by experienced faculty, equip learners with practical skills. Our state-of-the-art facilities and flexible learning options ensure accessibility for all. And our unwavering commitment to career support—whether through job placements or entrepreneurial ventures—fuels our mission. But beyond the accolades and infrastructure lies our true purpose: molding the future generation of educators and leaders. Just as a teacher sparks curiosity in a child’s eyes, ICVTE ignites the flames of possibility in every learner. Together, we shape a skilled workforce that contributes to our nation’s economic growth.</p> 
    </div>
   </div>
    </>
  )
}

export default AboutUs