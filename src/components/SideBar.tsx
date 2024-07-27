import React from "react";
import { navLinks } from "../constance";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <aside className="bg-black bg-opacity-15 min-h-screen w-full text-2xl tracking-[2px] uppercase">
      <ul className="bg-black text-white space-y-8 p-12 px-6 ">
        {navLinks.map((item) => (
          <li className="active:underline" key={item.link}>
            <NavLink to={item.to}>{item.link}</NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;
