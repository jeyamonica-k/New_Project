import React from "react";
import Navbar_Section1 from "../NavBarSec/Navbar_Section1";
import Footer from "../NavBarSec/Footer";
import Agriculture from "./Agriculture";
import AgricultureTable from "./AgricultureTable";

function MainAgriculture() {
  return (
    <div>
      <Navbar_Section1></Navbar_Section1>
      <Agriculture></Agriculture>
      <AgricultureTable></AgricultureTable>
      <Footer></Footer>
    </div>
  );
}

export default MainAgriculture;
