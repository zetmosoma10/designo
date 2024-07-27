import { useEffect, useState } from "react";
import { navLinks } from "../constance";
import logo from "../assets/shared/desktop/logo-dark.png";
import hamburger from "../assets/shared/mobile/icon-hamburger.svg";
import closeIcon from "../assets/shared/mobile/icon-close.svg";
import SideBar from "./SideBar";

const NavBar = () => {
  const [toggle, setToggle] = useState(true);

  const showNav = () => {
    setToggle(true);
  };

  const removeNav = () => {
    setToggle(false);
  };

  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [toggle]);

  return (
    <>
      <nav className="relative my-8 md:my-12">
        <div className="max-container flex items-center justify-between">
          <a href="#">
            <img className="w-[196px]" src={logo} alt="" />
          </a>
          <div className="flex items-center">
            <ul className="hidden md:flex md:items-center uppercase gap-10">
              {navLinks.map((item) => (
                <li key={item.link}>
                  <a
                    className="text-dark_grey text-sm tracking-[2px] hover:underline"
                    href="#"
                  >
                    {item.link}
                  </a>
                </li>
              ))}
            </ul>
            {toggle ? (
              <img
                className="md:hidden cursor-pointer"
                onClick={removeNav}
                src={closeIcon}
                alt=""
              />
            ) : (
              <img
                className="md:hidden cursor-pointer"
                onClick={showNav}
                src={hamburger}
                alt=""
              />
            )}
          </div>
        </div>
        {toggle && (
          <div className="absolute top-[58px] left-0 w-full md:hidden">
            <SideBar />
          </div>
        )}
      </nav>
    </>
  );
};

export default NavBar;
