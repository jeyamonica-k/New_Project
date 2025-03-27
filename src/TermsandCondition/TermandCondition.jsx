// import React from 'react'
// import "../App.css"
// function TermandCondition() {
//   return (
//     <div className='w-[50%] flex flex-col justify-center items-center mt-5 p-3  shadow-[0_5px_15px_rgba(0,0,0,0.3)] '>
//     <div className=' flex flex-col gap-2 p-2 m-2'>
//     <div className='flex flex-col gap-2 items-center border-b-2 border-red-500'>
//     <h1 className='text-[#192C57] font-bold text-xl'>TERMS AND CONDITIONS</h1>
//     </div>
//     <div className='flex flex-col items-start gap-2 px-6'>
//      <ul className='list-disc  pl-5 spacing'>
//        <li>Trust/Society/Proprietorship/private Ltd etc.. institutions can apply for affiliation through online or offline mode</li>
//        <li>Shifting or name change of the institutions should be intimated through mail to ICVTE programme office</li>
//        <li>The ICVTE Courses offered in the institution should be full-time courses. If the management wants to run part-time courses, special permission should be obtained from the ICVTE Programme Office</li> 
//        <li>The Following Titles are not allowed in the Institute's Name</li></ul>
//        <ol className='list-decimal pl-5 font-control'>
//          <li >COMMUNITY</li>
//          <li>COMMUNITY COLLEGE</li>
//          <li>NURSING</li>
//          <li>ENGINEERING</li>
//          <li>ENGINEERING TECHNOLOGY</li>
//          <li>VOCATIONAL COLLEGE</li>
//          <li>ITI/ITC</li>
//        </ol>
//        <ul  className='list-disc  pl-5 spacing'>
//          <li>Institute which run other Certificate, Diploma or Degree Courses should not award any certificate merging the same with the ICVTE</li>
//          <li>Facilities Required</li>
//        </ul>
//        <ol className='list-decimal pl-5 font-control'>
//          <li>Classroom</li>
//          <li>Practical room according to the courses</li>
//          <li>Front office</li>
//          <li>Rest room</li>
//          <li>Lab/Library according to the courses</li>
//          <li>Name Board</li>
//        </ol>
//        <ul className='list-disc  pl-5 spacing'>
//          <li>The validity of affiliation of a Training Center is for a year from the date of affiliation. The Training Center has to apply for the renewal of affiliation at least one month in advance of the affiliation expiry date.</li>
//          <li>Any advertisement using Govt. of India Emblem, giving false information to public without the consent of the ICVTE is punishable. If it is so, It will lead to cancellation of the approval of the institute.</li>
//        </ul>
//     </div>
//    </div></div>
//   )
// }

// export default TermandCondition 

import React from 'react';
import "../App.css";

function TermandCondition() {
  return (
    <div className="flex justify-center items-center min-h-screen px-4 mt-5 mb-5"> {/* Added padding for small screens */}
      <div className="w-full sm:w-[75%] md:w-[70%] lg:w-[50%] flex flex-col justify-center items-center sm p-3 shadow-[0_5px_15px_rgba(0,0,0,0.3)]">
        <div className="flex flex-col sm:p-0.5 gap-2 p-2 m-2">
          <div className="flex flex-col gap-2 items-center border-b-2 border-red-500 ">
            <h1 className="text-[#192C57] font-bold text-xl md:text-2xl heading">TERMS AND CONDITIONS</h1> {/* Responsive text size */}
          </div>
          <div className="flex flex-col items-start gap-2 sm:px-0 px-6">
            <ul className="list-disc pl-5 spacing">
              <li>Trust/Society/Proprietorship/private Ltd etc.. institutions can apply for affiliation through online or offline mode</li>
              <li>Shifting or name change of the institutions should be intimated through mail to ICVTE programme office</li>
              <li>The ICVTE Courses offered in the institution should be full-time courses. If the management wants to run part-time courses, special permission should be obtained from the ICVTE Programme Office</li>
              <li>The Following Titles are not allowed in the Institute's Name</li>
            </ul>
            <ol className="list-decimal pl-5 font-control">
              <li>COMMUNITY</li>
              <li>COMMUNITY COLLEGE</li>
              <li>NURSING</li>
              <li>ENGINEERING</li>
              <li>ENGINEERING TECHNOLOGY</li>
              <li>VOCATIONAL COLLEGE</li>
              <li>ITI/ITC</li>
            </ol>
            <ul className="list-disc pl-5 spacing">
              <li>Institute which run other Certificate, Diploma or Degree Courses should not award any certificate merging the same with the ICVTE</li>
              <li>Facilities Required</li>
            </ul>
            <ol className="list-decimal pl-5 font-control">
              <li>Classroom</li>
              <li>Practical room according to the courses</li>
              <li>Front office</li>
              <li>Rest room</li>
              <li>Lab/Library according to the courses</li>
              <li>Name Board</li>
            </ol>
            <ul className="list-disc pl-5 spacing">
              <li>The validity of affiliation of a Training Center is for a year from the date of affiliation. The Training Center has to apply for the renewal of affiliation at least one month in advance of the affiliation expiry date.</li>
              <li>Any advertisement using Govt. of India Emblem, giving false information to public without the consent of the ICVTE is punishable. If it is so, It will lead to cancellation of the approval of the institute.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermandCondition;
