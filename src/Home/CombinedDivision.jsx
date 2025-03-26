import React from 'react';
import image from "../images/Company_logo.png";
import Impact from "./Impact";
import Company from "./Company";

function CombinedDivision() {
  return (
    <div className='relative max-w-full '>
      {/* Company Section */}
      <div className='relative z-10'>
        <Company />
      </div>

      {/* Logo Section as Fixed Background */}
      <div className='relative w-full h-[300px] sm:h-[250px] md:h-[300px] lg:h-[400px] flex justify-center items-center bg-cover bg-fixed' 
           style={{ 
             backgroundImage: `url(${image})`, 
             backgroundSize: 'contain',  
             backgroundPosition: 'center',  
             backgroundRepeat: 'no-repeat'  
           }}>
        <div className='absolute inset-0 bg-white opacity-0'></div> 
      </div>

      {/* Impact Section */}
      <div className='relative z-10'>
        <Impact />
      </div>
    </div>
  );
}

export default CombinedDivision;



