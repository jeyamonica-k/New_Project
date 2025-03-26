import React from "react";
import Navbar_Section1 from "../NavBarSec/Navbar_Section1";
import ImageSlider from "./ImageSlider";
import Coursecard from "./Coursecard";
import AnimatedSection from "./AnimatedSection";
import Training from "./Training";
import StratigicPriorities from "./StratigicPriorities";
import Footer from '../NavBarSec/Footer'
import CombinedDivision from "./CombinedDivision";


function MainHome() {
  return (
    <div >
      <Navbar_Section1></Navbar_Section1>
      <ImageSlider></ImageSlider>
      <Coursecard></Coursecard>
      <AnimatedSection></AnimatedSection>
      <Training></Training>
      <StratigicPriorities></StratigicPriorities>
      <CombinedDivision></CombinedDivision>
      <Footer></Footer>
    </div>
  );
}

export default MainHome;
