import React from "react";
import { navLinks } from "../constance";

const SideBar = () => {
  return (
    <aside className="bg-black bg-opacity-15 min-h-screen w-full text-2xl tracking-[2px] uppercase">
      <ul className="bg-black text-white space-y-8 p-12 px-6 ">
        {navLinks.map((item) => (
          <li className="active:underline" key={item.link}>
            <a href="#">{item.link}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;
