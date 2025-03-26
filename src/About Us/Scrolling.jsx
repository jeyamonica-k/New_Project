

import React from 'react';
import '../App.css'; // For custom styles
import one from '../images/contributer1.jpeg'
import two from '../images/contributer2.jpeg'
import three from '../images/contributer3.jpeg'
import four from '../images/contributer4.jpeg'

const Scrolling = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[400px]">
      {/* Heading */}
      <h1 className="text-5xl text-blue-950 font-bold mb-6">Approved by</h1>

      {/* Scrolling Images Container */}
      <div className="relative overflow-hidden w-full mt-2">
        {/* Inner flex container that holds the images */}
        <div className="flex space-x-9 animate-scroll">
          {/* Add your images */}
          <img src={one} alt="Image 1" className="h-52 w-auto"/>
          <img src={two} alt="Image 2" className="h-52 w-auto"/>
          <img src={three} alt="Image 3" className="h-52 w-auto"/>
          <img src={four} alt="Image 4" className="h-52 w-auto"/>
          <img src={one} alt="Image 5" className="h-52 w-auto"/>
          <img src={two} alt="Image 6" className="h-52 w-auto"/>
        </div>
      </div>
    </div>
  );
}

export default Scrolling;
