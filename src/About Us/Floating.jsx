
import React from 'react';
import '../App.css'; // Custom styles for animations

const Floating = () => {
  return (
    <div className="relative h-[500px] bg-[#030852] overflow-hidden flex justify-center items-center p-1 md:h-[400px] ">
      {/* Centered Content */}
      <div className="flex flex-col gap-4 text-center z-10 m-1">
        <h1 className="text-3xl font-bold text-white mb-4 md:text-4xl" >Dharmar Thenmozhi, M.Sc., M.A., M.Ed., M. Phil.</h1>
        <p className="text-normal md:text-xl text-gray-400">Founder & Chairperson Indian Council of Vocational and Technical Education</p>
        <h2 className='font-bold text-xl text-orange-700 md:text-2xl'>Trust Members</h2>
        <div className='flex flex-col items-center gap-4 md:flex-row md:justify-center'>
          <p className='font-bold text-normal transition-transform duration-300 active:scale-105 hover:scale-105 hover:cursor-pointer text-white p-4 bg-[#353A76] w-[60%] rounded-lg md:text-xl md:w-[30%]  '>Mr.Bala Murugan</p>
          <p className='font-bold text-normal transition-transform duration-300 active:scale-105 hover:scale-105 hover:cursor-pointer text-white p-4 bg-[#353A76] w-[60%] rounded-lg md:text-xl md:w-[30%]'>Mr.Saravanan</p>
        </div>
      </div>

      {/* Floating Bubbles */}
      <div className="absolute top-[20%] left-[10%]">
        <div className="bubble w-24 h-24 bg-[#383C77] rounded-full animate-bubble1 "></div>
      </div>
      <div className="absolute top-[60%] left-[30%]">
        <div className="bubble w-16 h-16 bg-[#383C77] rounded-full animate-bubble2 "></div>
      </div>
      <div className="absolute top-[30%] right-[20%]">
        <div className="bubble w-28 h-28 bg-[#383C77] rounded-full animate-bubble3"></div>
      </div>
    </div>
  );
}

export default Floating;
