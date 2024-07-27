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
      <div>
        <div>
          <CTA />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
