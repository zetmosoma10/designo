import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "../constance";
import logo from "../assets/shared/desktop/logo-dark.png";
import hamburger from "../assets/shared/mobile/icon-hamburger.svg";
import closeIcon from "../assets/shared/mobile/icon-close.svg";
import SideBar from "./SideBar";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  const showNav = () => {
    setToggle(true);
  };

  const removeNav = () => {
    setToggle(false);
  };

  useEffect(() => {
    if (toggle) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Cleanup on component unmount
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [toggle]);

  return (
    <>
      <nav className="relative my-8 md:my-12">
        <div className="max-container flex items-center justify-between">
          <Link to="/">
            <img className="w-[196px]" src={logo} alt="" />
          </Link>
          <div className="flex items-center">
            <ul className="hidden md:flex md:items-center uppercase gap-10">
              {navLinks.map((item) => (
                <li key={item.link}>
                  <NavLink
                    className="text-dark_grey text-sm tracking-[2px] hover:underline"
                    to={item.to}
                    style={({ isActive }) => {
                      return {
                        fontWeight: isActive ? "medium" : "",
                        textDecoration: isActive ? "underline" : "",
                      };
                    }}
                  >
                    {item.link}
                  </NavLink>
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
        <AnimatePresence>
          {toggle && (
            <motion.div
              className="absolute top-[58px] left-0 w-full md:hidden z-[1001]"
              initial={{ x: "-100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100vw", opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <SideBar removeNav={removeNav} />
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default NavBar;
