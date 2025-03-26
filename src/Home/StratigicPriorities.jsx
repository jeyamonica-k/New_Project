import React from 'react'
import { useEffect,useRef,useState} from 'react';
function StratigicPriorities() {

  const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.5 }
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
      <div  className={`max-w-full flex flex-col items-center gap-1 p-2 bg-black xl:justify-between h-[100%] my-2 xl:flex-row transform transition-all duration-1000 ease-in-out ${
      isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
    } `}>
      <div className={`flex flex-col gap-4  xl:justify-center xl:items-center xl:w-[100%] `}>
        <h1 className=' text-3xl font-bold text-[#FFFFFF] xl:text-5xl inline-block relative' >Strategic Priorities</h1>
        <span className='mx-auto w-1/2 h-[4px] bg-gradient-to-r from-blue-500  to-transparent align-text-bottom  block'></span>
      </div>
      <div className='flex flex-col  gap-2 xl:p-6 xl:m-9 '>
        <div  className='flex flex-col items-center gap-4 border-b-3 border-b-[#FFFFFF]  p-2'>
          <h1 className=' text-2xl font-bold text-[#FFFFFF] xl:text-3xl'>Inclusivity and Accessibility</h1>
          <p className='text-normal text-gray-300 font-light xl:text-xl text-justify'>We believe that education should be a right, not a privilege. ICVTE offers special programs for marginalized communities, including women, rural populations, and differently-abled individuals. Our goal is to make vocational education accessible to all, regardless of socio-economic background</p>
        </div>
        <div  className='flex flex-col items-center gap-2 border-b-3 border-b-[#FFFFFF]  p-2 '>
          <h1 className='text-2xl font-bold text-[#FFFFFF] xl:text-3xl' >Sustainable Development</h1>
          <p className='text-normal text-gray-300 font-light xl:text-xl  text-justify'>ICVTE is committed to promoting environmentally responsible practices. We incorporate green skills and sustainable technologies into our curricula, preparing students to be conscious and responsible members of the workforce</p>
        </div>
        <div  className='flex flex-col items-center gap-2  p-2'>
          <h1 className='text-2xl font-bold text-[#FFFFFF] xl:text-3xl'>Industry-Linked Training</h1>
          <p className='text-normal text-gray-300 font-light xl:text-xl '>Our programs are designed with a strong emphasis on practical, hands-on training. We provide apprenticeship opportunities to give students valuable on-the-job experience, bridging the gap between theoretical knowledge and practical application.</p>
        </div>
      </div>
    </div>
    </div>

  )
}

export default StratigicPriorities