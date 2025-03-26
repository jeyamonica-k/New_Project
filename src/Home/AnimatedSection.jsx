import React, { useState, useEffect, useRef } from "react";

import image from "../images/slide.jpeg"
import "../App.css"
const AnimatedSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } // Adjust visibility trigger threshold
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef}>
      <div  className="max-w-full  flex justify-center 2xl:h-auto mx-9 min-h-screen md:mx-14  xl:mx-32 2xl:left-12 2xl:p-0 items-center   overflow-hidden">
      <div className=" flex flex-col md:items-center   md:flex-row ">
        
       {/* Image */}

        <div
          className={`w-[100%]  md:w-[40%] xl:w-[30%] 2xl:w-[25%]  p-2 transform transition-all duration-700 ease-in-out ml-3 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
        >
          <img
            src={image} 
            alt="Feature"
            className=" w-[100%] md:h-[420px]  lg:h-[650px] xl:h-[450px] transition-all duration-700 transform active:scale-90 hover:scale-90"

          />
        </div>

        {/* description */}
        <div
          className={ ` w-[100%]  md:w-[60%] xl:w-[70%]  text-justify p-6  transform transition-all duration-1000 ease-in-out ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
        >
          
          <h2 className="text-[#192C57] text-sm md:text-2xl  lg:text-4xl font-bold mb-2 p-1 gradient-border ">Welcome to the Indian Council of Vocational and Technical Education (ICVTE)</h2>
          <h3 className=" text-base lg:text-3xl font-medium text-gray-800 mb-2 p-1">Empowering Future Generations through Skill Development</h3>
          <p className="text-black mt-2 text-sm lg:text-xl p-3 ">
          The Indian Council of Vocational and Technical Education (ICVTE) is dedicated to transforming the landscape of vocational and technical education in India. Incorporated under the legislation of the Ministry of Corporate Affairs, Government of India, ICVTE is committed to providing high-quality vocational training programs that equip individuals with the skills and knowledge needed to excel in today’s competitive job market. Our mission is to promote vocational and technical education to ensure that every learner, irrespective of their age or background, has access to the tools necessary for personal and professional growth.
          </p>          
        </div>

        
      </div>
    </div>
    </div>
  );
};

export default AnimatedSection;


// import React, { useState, useEffect, useRef } from "react";
// import image from "../images/slide.jpeg";
// import "../App.css";

// const AnimatedSection = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div
//       ref={sectionRef}
//       className="flex justify-center 2xl:h-auto mx-9 min-h-screen md:mx-14 xl:mx-32 2xl:left-12 2xl:p-0 items-center overflow-hidden"
//     >
//       <div className="flex flex-col md:items-center md:flex-row">
//         {/* Image */}
//         <div
//           className={`w-[100%] md:w-[40%] xl:w-[30%] 2xl:w-[25%] p-2 transform transition-all duration-700 ease-in-out ml-3 ${
//             isVisible ? "translate-x-0 opacity-100" : "translate-x-[10%] opacity-0"
//           }`}
//         >
//           <img
//             src={image}
//             alt="Feature"
//             className="w-[100%] md:h-[420px] lg:h-[650px] xl:h-[450px] transition-all duration-700 transform active:scale-90 hover:scale-90"
//           />
//         </div>

//         {/* Description */}
//         <div
//           className={`w-[100%] md:w-[60%] xl:w-[70%] text-justify p-6 transform transition-all duration-1000 ease-in-out ${
//             isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
//           }`}
//         >
//           <h1 className="text-[#192C57] text-xl md:text-2xl lg:text-4xl font-bold mb-2 p-3 gradient-border">
//             Welcome to the Indian Council of Vocational and Technical Education (ICVTE)
//           </h1>
//           <h2 className="text-base lg:text-3xl font-medium text-gray-800 mb-2 p-3">
//             Empowering Future Generations through Skill Development
//           </h2>
//           <p className="text-black mt-2 text-sm lg:text-xl p-3">
//             The Indian Council of Vocational and Technical Education (ICVTE) is dedicated to transforming the landscape of vocational and technical education in India. Incorporated under the legislation of the Ministry of Corporate Affairs, Government of India, ICVTE is committed to providing high-quality vocational training programs that equip individuals with the skills and knowledge needed to excel in today’s competitive job market. Our mission is to promote vocational and technical education to ensure that every learner, irrespective of their age or background, has access to the tools necessary for personal and professional growth.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AnimatedSection;
