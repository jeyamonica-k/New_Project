import React from "react";
import one from "../images/child _education.png";
import two from "../images/arts_design.jpeg";
import three from "../images/HealthScinceFronedImage.jpeg";
import four from "../images/media_comm.jpeg";
import five from "../images/beauty_education.jpeg";
import six from "../images/Automobile_Eduction.png";
import seven from "../images/Fire_eduction.png";
import eight from "../images/agricultureeducation.jpeg";
import nine from "../images/Communication_soft skill.png";
import ten from "../images/sports_educationCD1.jpeg";
import eleven from "../images/Computer_Eduction.png";
import twelve from "../images/hospitalitymgmtfrond.jpeg";
import thirteen from "../images/language_school.png";


function Hero() {
  const input_values = [
    {
      src: one,
      title: "Child Education",
      desc: "Child care education emphasizes play-based learning, Montessori methods and Waldorf education using educational toys, books, crafts and musical instruments.",
    },
    {
      src: two,
      title: "Arts and Design",
      desc: "Explore our exquisite range of arts and design services, including intricate embroidery, bespoke saree designing, vibrant fabric painting and cozy wool knitting.",
    },
    {
      src: three,
      title: "Health Sciences",
      desc: "Health Science covers medical research, diagnostics, patient care, public health and healthcare technology.",
    },
    {
      src: four,
      title: "Media and Communication",
      desc: "Media and Communication focus on journalism, digital media, public relations, advertising and interpersonal communication skills.",
    },
    {
      src: five,
      title: "Beautician Education",
      desc: "Beautician education equips students with essential skills in skincare, makeup, hair styling and nail care. Courses cover techniques, product knowledge.",
    },
    {
      src: six,
      title: "Automobile Education",
      desc: "Automobile education covers vehicle mechanics, automotive technology, repair techniques, diagnostics and maintenance practices.",
    },
    {
      src: seven,
      title: "Fire & Safety",
      desc: "Fire & Safety education involves fire prevention, emergency response, safety protocols, risk management and hazard assessment.",
    },
    {
      src: eight,
      title: "Agriculture Education",
      desc: "Agriculture education includes crop management, soil science, animal husbandry, sustainable farming practices and agricultural technology",
    },
    {
      src: nine,
      title: "Communication and Soft Skills",
      desc: "Communication and soft skills involve effective verbal and non-verbal interactions, teamwork, problem-solving and emotional intelligence.",
    },
    {
      src: ten,
      title: "Sports Education",
      desc: "Sports education covers athletic training, physical fitness, sports management, coaching techniques and game strategy.",
    },
    {
      src: eleven,
      title: "Computer Education",
      desc: "Computer education includes programming, software development, hardware maintenance, cybersecurity and digital literacy.",
    },
    {
      src: twelve,
      title: "Hospitality Education",
      desc: "Unlock your potential with our specialized hospitality education programs. Excel as a Receptionist, Office Administrator, or in Professional and Patient Customer Service.",
    },
    {
      src: thirteen,
      title: "Language School",
      desc: "Enhance fluency in various languages with immersive courses taught by expert instructors. Learn grammar, vocabulary, and pronunciation through interactive methods.",
    },
  ];

  return (
    <>
      <div className=" flex flex-col gap-9 justify-center items-center m-7 w-[80%] mx-auto   ">
        {input_values.map(function (data) {
          return (
            <>
              <div className="flex flex-col shadow-2xl lg:flex-row ">
                <img
                  src={data.src}
                  alt=""
                  className="w-[100%] h-[50%]  md:h-[30%] lg:w-[25%] lg:h-[20%] "
                />
                <div className="p-1 flex flex-col md:p-3  lg:w-[60%] ">
                  <h1 className="text-2xl font-bold text-blue-950 p-3 md:text-3xl">
                    {data.title}
                  </h1>
                  <p className="text-xl p-3 my-2 md:text-2xl">{data.desc}</p>
                  <button className="p-2 m-2 w-fit font-medium text-red-600 border-2 border-black active:bg-red-600 hover:bg-red-600 active:text-black active:border-none hover:text-black hover:border-none cursor-pointer md:text-2xl">
                    Read More
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
      
    </>
  );
}

export default Hero;
