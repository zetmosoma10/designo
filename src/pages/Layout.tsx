import React, { useEffect } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CTA from "../components/CTA";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <NavBar />
      <Outlet />
      <div className="grid mt-[120px] ">
        <div className="max-container mb-[-150px] lg:mb-[-100px]">
          <CTA />
        </div>
        <div className="-z-10">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
