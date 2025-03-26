import React from "react";
import CricleandBorder from "./CricleandBorder";

import { useEffect, useRef, useState } from "react";

function Company() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
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

  const values = [
    {
      id: 1,
      heading: "Promote Vocational Education",
      desc: "Democratize education by making it accessible to all, regardless of their social economic status.",
    },
    {
      id: 2,
      heading: "Foster Skill Development",
      desc: "Provide industry-relevant skills that enhance employability and entrepreneurship opportunities.",
    },
    {
      id: 3,
      heading: "Support Economic Growth",
      desc: "Contribute to the nation’s economic development by creating a skilled workforce that meets the demands of various industries",
    },
  ];
  return (
    <div ref={sectionRef}>
      {/* main div */}
      <div
        className={`max-w-full flex flex-col gap-2 p-5 m-5 lg:mx-18 lg:my-12 transform transition-all duration-1000 ease-in-out  ${
          isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        } `}
      >
        {/* <div className={`flex flex-col items-start md:items-center `}>
          <h1 className='text-blue-950 text-2xl font-bold inline-block p-2 md:text-3xl '>Pathways For Company Growth</h1>
          <span className=' ml-2  md:w-[65%] lg:w-[55%] xl:w-[35%] 2xl:w-[20%] w-[60%] h-[4px] bg-gradient-to-r from-red-700  to-transparent block'></span>
        </div> */}

        <div className="flex flex-col items-center  mb-3 p-2">
          <h2 className="relative text-2xl md:text-3xl lg:text-4xl  font-bold ">
            <span className="relative z-10 block pb-2 text-blue-950">
              Pathways For Company Growth
            </span>
            <span className="absolute left-0 bottom-0 w-full h-[4px] bg-gradient-to-r from-red-700 to-transparent"></span>
          </h2>
        </div>
        <div className="flex flex-col gap-2 p-2.5 mt-3">
          <h1 className="text-red-600 font-medium text-xl md:text-2xl">
            Our Mission At ICVTE:
          </h1>
          <p className="text-blue-950 text-justify md:text-xl">
            our mission is to bridge the gap between education and employment by
            offering comprehensive vocational training programs. We aim too.
          </p>
        </div>
        <div className="flex flex-col gap-2 xl:flex-row">
          {values.map(function (data) {
            return (
              <>
                <div className="flex flex-col gap-2 p-2.5 ">
                  <CricleandBorder data={data.id}></CricleandBorder>
                  <h1 className="font-medium text-xl md:text-2xl">
                    {data.heading}
                  </h1>
                  <p className="text-gray-700 md:text-xl">{data.desc}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Company;
