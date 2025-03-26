// import React, { useState } from 'react'
// import SideNav from './SideNav'
// import { Link } from 'react-router-dom'


// function Menubar() {

//    const [counter,setCounter]=useState(false)
//     function handlenavbar(){
//       setCounter(!counter)
//     }
  


//   return (
//     <>
//     <div className={`lg:hidden `}  >
//     <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke-width="1.5"
//             stroke="currentColor"
//             class="size-12 cursor-pointer md:size-14 "
//             onClick={handlenavbar}
           
//           >
//             <path
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
//             />
//           </svg>
         
//     </div>
//     {
//         counter ? <div  style={{width:"100%", height:"100vh" }}
//         className={`bg-[#F5F3F3] absolute top-0  right-0 flex flex-col p-3  items-center gap-3  z-50  transition-transform duration-500 ease-in-out 
//       ${counter?"translate-x-0":"translate-x-full"}`}>
//          <div className="flex justify-end p-1 m-1">
//       <Link to={"/"}>
//       <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke-width="1.5"
//             stroke="currentColor"
//             class="size-10"
//             onClick={()=> setCounter(!counter)}
           
//           >
//             <path
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
//             />
//           </svg>
//           </Link>
//       </div>
         
//          <SideNav></SideNav>
         
          
//           </div>:""
//       }
   
    
    
//     </>
//   )
// }

// export default Menubar  
import React, { useState } from 'react';
import SideNav from './SideNav';
import { Link } from 'react-router-dom';

function Menubar() {
  const [counter, setCounter] = useState(false);

  // Toggle function for the navbar
  function handlenavbar() {
    setCounter(!counter);
  }

  return (
    <>
      <div className="lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-12 cursor-pointer md:size-14"
          onClick={handlenavbar}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>

      {counter && (
        <div
          style={{ width: '100%', height: '100vh' }} // Adjust width to your sidebar size
          className={`bg-[#F5F3F3] absolute top-0 right-0 flex flex-col p-3 items-center gap-3 z-50 transform ${
            counter ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-500 ease-in-out`}
        >
          <div className=" absolute top-0 right-0.5 p-1 m-1" >
            <Link to={"/"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-10"
                onClick={() => setCounter(!counter)}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </Link>
          </div>

          <SideNav />
        </div>
      )}
    </>
  );
}

export default Menubar;
