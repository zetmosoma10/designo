import { BsTwitterX } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../constance";
import logo from "../assets/shared/desktop/logo-light.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-[253px] pb-16 md:pt-[166px] md:pb-20 lg:pt-36 lg:pb-[72px] z">
      <div className="max-container flex flex-col items-center md:block text-center md:text-left">
        <div className="md:flex md:items-center md:justify-between md:border-b md:border-b-white md:pb-10 md:border-opacity-10">
          <Link to="/" className="pb-8 inline-block md:pb-0">
            <img className="w-[196px]" src={logo} alt="" />
          </Link>
          <ul className="md:flex md:items-center mt-8 md:mt-0 space-y-8 md:space-y-0 md:space-x-10">
            {navLinks.map((item) => (
              <li
                className="hover:underline transition-all duration-150"
                key={item.link}
              >
                <NavLink to={item.to} className="text-base tracking-[2px]">
                  {item.link}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:flex md:items-center md:justify-between mt-10 md:mt-8">
          <div className="md:flex md:items-center md:space-x-12">
            <ul className="text-white text-opacity-50">
              <li className="font-bold">Designo Central Office</li>
              <li>3886 Wellington Street</li>
              <li>Toronto, Ontario M9C 3J5</li>
            </ul>
            <ul className="text-white text-opacity-50 mt-10 md:mt-0">
              <li className="font-bold">Contact Us (Central Office)</li>
              <li>P : +1 253-863-8967</li>
              <li>M : contact@designo.co</li>
            </ul>
          </div>
          <ul className="md:self-end flex items-center justify-between text-peach space-x-4 mt-10 md:mt-0">
            <li className="hover:text-light_peach">
              <a href="#">
                <FaFacebookSquare size="24px" />
              </a>
            </li>
            <li className="hover:text-light_peach">
              <a href="#">
                <IoLogoYoutube size="24px" />
              </a>
            </li>
            <li className="hover:text-light_peach">
              <a href="#">
                <BsTwitterX size="24px" />
              </a>
            </li>
            <li className="hover:text-light_peach">
              <a href="#">
                <FaPinterest size="24px" />
              </a>
            </li>
            <li className="hover:text-light_peach">
              <a href="#">
                <IoLogoInstagram size="24px" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
