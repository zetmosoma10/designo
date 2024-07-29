import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

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
        <div className="max-container mb-[-150px] lg:mb-[-100px] z-10">
          <CTA />
        </div>
        <div className="">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
