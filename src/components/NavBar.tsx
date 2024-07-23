import { navLinks } from "../constance";
import logo from "../assets/shared/desktop/logo-dark.png";
import hamburger from "../assets/shared/mobile/icon-hamburger.svg";

const NavBar = () => {
  return (
    <nav className="max-container my-8 md:my-12 flex items-center justify-between">
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
        <img className="md:hidden cursor-pointer" src={hamburger} alt="" />
      </div>
    </nav>
  );
};

export default NavBar;
