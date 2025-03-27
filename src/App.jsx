import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import  InstituteLogin from './Institute_login/InstituteLogin'
import AdminLogin from "./Institute_login/AdminLogin"
import MainCourse from "./Course_sec/MainCourse"
import MainAbout from './About Us/MainAbout'
import MainContact from './ContactUs/MainContact'
import MainHome from "./Home/MainHome"
import Download from "./Affiliation/Download"
import Result from "./Affiliation/Result"
import Affiliation from "./Affiliation/Affiliation"
import MainChildEducation from './ChildEducation/MainChildEducation'
import MainArtandDesign from "./Arts and Design/MainArtandDesign"
import MainHeathScience from "./Health Science/MainHeathScience"
import MainMedia from "./Media/MainMedia"
import MainBeautician from "./Beautician/MainBeautician"
import MainAutomobile from "./Automobile/MainAutomobile"
import MainFireSafety from "./FireSafety/MainFireSafety"
import MainAgriculture from './Agriculture/MainAgriculture'
import MainCommunication from './Communication/MainCommunication'
import MainSports from './Sports/MainSports'
import MainComputer from './Computer/MainComputer'
import MainHospitality from './Hospitality/MainHospitality'
import MainSchool from './School/MainSchool'
import MainTermandCondition from './TermsandCondition/MainTermandCondition'
import MainApproval from './Approval/MainApproval'
import MainCertificate from './SampleCertificate/MainCertificate'
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
      <Route path="/download" element={<Download/>}></Route>
      <Route path="/result" element={<Result/>}></Route>
      <Route path="/affliation" element={<Affiliation/>}></Route>
      <Route path='/childeducation' element={<MainChildEducation></MainChildEducation>}></Route>
      <Route path='/artanddesign' element={<MainArtandDesign></MainArtandDesign>}></Route>
      <Route path='/healthscience' element={<MainHeathScience></MainHeathScience>}></Route>
      <Route path='/mediaandcommunication' element={<MainMedia></MainMedia>}></Route>
      <Route path="/beautician" element={<MainBeautician/>}></Route>
      <Route path="/automobile" element={<MainAutomobile/>}></Route>
      <Route path="/firesafety" element={<MainFireSafety/>}></Route>
      <Route path="/agriculture" element={<MainAgriculture/>}></Route>
      <Route path="/communication" element={<MainCommunication/>}></Route>
      <Route path="/sports" element={<MainSports/>}></Route>
      <Route path="/computer" element={<MainComputer/>}></Route>
      <Route path="/hospitality" element={<MainHospitality/>}></Route>
      <Route path="/language" element={<MainSchool/>}></Route>
      <Route path="/termsandcondition" element={<MainTermandCondition/>}></Route>
      <Route path="/approval" element={<MainApproval/>}></Route>
      <Route path="/samplecertificate" element={<MainCertificate/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App