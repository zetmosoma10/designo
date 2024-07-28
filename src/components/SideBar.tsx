import { NavLink } from "react-router-dom";
import { navLinks } from "../constance";

interface Props {
  removeNav: () => void;
}
const SideBar = ({ removeNav }: Props) => {
  return (
    <aside className="bg-black bg-opacity-15 min-h-screen w-full text-2xl tracking-[2px] uppercase z-20">
      <ul className="bg-black text-white space-y-8 p-12 px-6 ">
        {navLinks.map((item) => (
          <li className="active:underline" key={item.link}>
            <NavLink onClick={removeNav} to={item.to}>
              {item.link}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;
