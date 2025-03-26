import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import  InstituteLogin from './Institute_login/InstituteLogin'
import AdminLogin from "./Institute_login/AdminLogin"
import MainCourse from "./Course_sec/MainCourse"
import MainAbout from './About Us/MainAbout'
import MainContact from './ContactUs/MainContact'
import MainHome from "./Home/MainHome"
function App() {
  return (
    <div className="over-flow-x-hidden w-[100%]">
      <BrowserRouter>
      <Routes>
      <Route path="/InstituteLogin" element={<InstituteLogin/>}></Route>
      <Route path="/Adminlogin" element={<AdminLogin/>}></Route>
      <Route path="/Courses" element={<MainCourse/>}></Route>
      <Route path="/Contact" element={<MainContact/>}></Route>
      <Route path="/About" element={<MainAbout/>}></Route>
      <Route path="/" element={<MainHome/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App