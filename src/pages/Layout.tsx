import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CTA from "../components/CTA";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <div className="grid mt-[120px] ">
        <div className="max-container mb-[-150px] lg:mb-[-100px]">
          <CTA />
        </div>
        <div className="-z-20">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
