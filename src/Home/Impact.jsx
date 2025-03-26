// import React, { useState } from "react";
// import one from "../images/employability.png";
// import two from "../images/economy growth-icon.png";
// import three from "../images/fostering innovation-icon.png";
// import four from "../images/social equity.png";

// import "../App.css"
// function Impact() {
//   const [isClicked,setisClicked] = useState("false")
//   const values = [
//     {
//       heading: "Enhancing Employability",
//       desc: "Equipping individuals with the skills required to secure meaningful employment and improve their livelihoods.",
//       img: one,
//     },
//     {
//       heading: "Supporting Economic Growth",
//       desc: "Contributing to national development by creating a skilled workforce that can drive industrial and economic progress.",
//       img: two,
//     },
//     {
//       heading: "Fostering Innovation",
//       desc: "Encouraging the adoption of new technologies and practices that keep India at the forefront of global innovation.",
//       img: three,
//     },
//     {
//       heading: "Promoting Social Equity",
//       desc: "Ensuring that education and training opportunities are available to all, fostering a more inclusive and equitable society.",
//       img: four,
//     },
//   ];
//   return (
//     <div >
//       <div className=" max-w-full flex flex-col  md:items-center">
//         <h2 className="relative text-2xl md:text-3xl  font-bold">
//           <span className="relative z-10 block pb-2">The Impact We Create</span>
//           <span className="absolute left-0 bottom-0 w-full h-[4px] bg-gradient-to-r from-red-700 to-transparent"></span>
//         </h2>
//       </div>

//       <div className="bg-black p-5 border m-6 rounded-xl">
//         <div className="flex flex-col gap-4 border-b-2 p-6">
//           {values.map(function (data, index) {
//             return (
//               <>
//                 <div
//                   className={`relative group flex flex-col items-center lg:flex-row lg:justify-around gap-10 p-2  border-[#D1D5DC] ${
//                     index !== values.length - 1 ? "border-b-2" : ""
//                   }  `} onClick={()=> setisClicked(!isClicked)}
//                 >
//                   <h1 className={` text-xl md:text-2xl z-10   font-bold ${isClicked?"text-bule-700":"text-gray-300"} `}>
//                     {data.heading}
//                   </h1>
//                   <p className={`text-gray-300 text-normal md:text-xl z-10  ${isClicked?"text-red-700":"text-gray-300"}`}>
//                     {data.desc}
//                   </p>
//                   <div className=" w-12 h-12  md:w-24 md:h-24 rounded-full z-10 ">
//                     <img src={data.img} className="w-fit" alt="" />
//                   </div>
//                   <span className={`element absolute top-0 right-0 bottom-0 left-0  transition-transform duration-500 bg-white ${isClicked?"-translate-x-0 scale-x-100 ":"scale-x-0 -translate-x-full"}`}></span>
//                 </div>
//               </>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Impact;  


// import React, { useState } from "react";
// import one from "../images/employability.png";
// import two from "../images/economy growth-icon.png";
// import three from "../images/fostering innovation-icon.png";
// import four from "../images/social equity.png";

// import "../App.css";

// function Impact() {
//   const [activeIndex, setActiveIndex] = useState(null); // Track the active division

//   const values = [
//     {
//       heading: "Enhancing Employability",
//       desc: "Equipping individuals with the skills required to secure meaningful employment and improve their livelihoods.",
//       img: one,
//     },
//     {
//       heading: "Supporting Economic Growth",
//       desc: "Contributing to national development by creating a skilled workforce that can drive industrial and economic progress.",
//       img: two,
//     },
//     {
//       heading: "Fostering Innovation",
//       desc: "Encouraging the adoption of new technologies and practices that keep India at the forefront of global innovation.",
//       img: three,
//     },
//     {
//       heading: "Promoting Social Equity",
//       desc: "Ensuring that education and training opportunities are available to all, fostering a more inclusive and equitable society.",
//       img: four,
//     },
//   ];

//   return (
//     <div>
//       <div className="max-w-full flex flex-col md:items-center">
//         <h2 className="relative text-2xl md:text-3xl font-bold">
//           <span className="relative z-10 block pb-2">The Impact We Create</span>
//           <span className="absolute left-0 bottom-0 w-full h-[4px] bg-gradient-to-r from-red-700 to-transparent"></span>
//         </h2>
//       </div>

//       <div className="bg-black p-5 border m-6 rounded-xl">
//         <div className="flex flex-col gap-4 border-b-2 p-6">
//           {values.map((data, index) => {
//             return (
//               <div
//                 key={index}
//                 className={`relative group flex flex-col items-center lg:flex-row lg:justify-around gap-10 p-2 border-[#D1D5DC] ${
//                   index !== values.length - 1 ? "border-b-2" : ""
//                 }`}
//                 onClick={() => setActiveIndex(index === activeIndex ? null : index)} // Toggle active index
//               >
//                 <h1
//                   className={`text-xl md:text-2xl z-10 font-bold ${
//                     activeIndex === index ? "text-blue-700" : "text-gray-300"
//                   }`}
//                 >
//                   {data.heading}
//                 </h1>
//                 <p
//                   className={`text-gray-300 text-normal md:text-xl z-10 ${
//                     activeIndex === index ? "text-red-700" : "text-gray-300"
//                   }`}
//                 >
//                   {data.desc}
//                 </p>
//                 <div className="w-12 h-12 md:w-24 md:h-24 rounded-full z-10">
//                   <img src={data.img} className="w-fit" alt="" />
//                 </div>
//                 <span
//                   className={`element absolute top-0 right-0 bottom-0 left-0 transition-transform duration-500 bg-white ${
//                     activeIndex === index
//                       ? "-translate-x-0 scale-x-100"
//                       : "scale-x-0 -translate-x-full"
//                   }`}
//                 ></span>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Impact;  

import React, { useState } from "react";
import one from "../images/employability.png";
import two from "../images/economy growth-icon.png";
import three from "../images/fostering innovation-icon.png";
import four from "../images/social equity.png";

import "../App.css";

function Impact() {
  const [activeIndex, setActiveIndex] = useState(null); // Track the active division

  const values = [
    {
      heading: "Enhancing Employability",
      desc: "Equipping individuals with the skills required to secure meaningful employment and improve their livelihoods.",
      img: one,
    },
    {
      heading: "Supporting Economic Growth",
      desc: "Contributing to national development by creating a skilled workforce that can drive industrial and economic progress.",
      img: two,
    },
    {
      heading: "Fostering Innovation",
      desc: "Encouraging the adoption of new technologies and practices that keep India at the forefront of global innovation.",
      img: three,
    },
    {
      heading: "Promoting Social Equity",
      desc: "Ensuring that education and training opportunities are available to all, fostering a more inclusive and equitable society.",
      img: four,
    },
  ];

  return (
    <div>
      <div className="max-w-full flex flex-col md:items-center">
        <h2 className="relative text-2xl md:text-3xl font-bold">
          <span className="relative z-10 block pb-2">The Impact We Create</span>
          <span className="absolute left-0 bottom-0 w-full h-[4px] bg-gradient-to-r from-red-700 to-transparent"></span>
        </h2>
      </div>

      <div className="bg-black p-5 border m-6 rounded-xl">
        <div className="flex flex-col gap-4 border-b-2 p-6">
          {values.map((data, index) => {
            return (
              <div
                key={index}
                className={`relative group flex flex-col items-center lg:flex-row lg:justify-around gap-10 p-2 border-[#D1D5DC] ${
                  index !== values.length - 1 ? "border-b-2" : ""
                } ${
                  activeIndex === index ? "bg-white" : "" // Add bg-white class conditionally
                }`}
                onClick={() => setActiveIndex(index === activeIndex ? null : index)} // Toggle active index
              >
                <h1
                  className={`text-xl md:text-2xl z-10 font-bold ${
                    activeIndex === index ? "text-blue-700" : "text-gray-300"
                  }`}
                >
                  {data.heading}
                </h1>
                <p
                  className={`text-gray-300 text-normal md:text-xl z-10 ${
                    activeIndex === index ? "text-red-700" : "text-gray-300"
                  }`}
                >
                  {data.desc}
                </p>
                <div className="w-12 h-12 md:w-24 md:h-24 rounded-full z-10">
                  <img src={data.img} className="w-fit" alt="" />
                </div>
                <span
                  className={`element absolute top-0 right-0 bottom-0 left-0 transition-transform duration-500 bg-white ${
                    activeIndex === index
                      ? "-translate-x-0 scale-x-100"
                      : "scale-x-0 -translate-x-full"
                  }`}></span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Impact;
