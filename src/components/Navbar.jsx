import { LuChevronDown, LuShoppingCart } from "react-icons/lu";
import { CustomButton } from "../ui/CustomButton";
import { useState } from "react";
import { activeStyle, baseBtn, inactiveStyle, navActive, navBase, navInactive } from "../lib/styles";
import logo from "../../public/logo.png";
import { navLinks } from "../lib/Constant.jsx";
import { NavLink } from "react-router-dom";



const Navbar = () => {
  const [activeBtn, setActiveBtn] = useState("login");

  return (
    <div className="w-full bg-white shadow">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
        <div className="w-32">
          <img src={logo} alt="logo" />
        </div>

        <ul className="flex gap-2 relative">
          {navLinks.map(({ id, link, label, icon: Icon, submenu }) => (
            <li key={id} className="relative group">
              <NavLink
                to={link}
                className={({ isActive }) =>
                  `${navBase} ${
                    isActive ? navActive : navInactive
                  } flex items-center gap-1`
                }
              >
                {label}
                {submenu && <LuChevronDown className="w-4 h-4 ml-1" />}
              </NavLink>

              {submenu && (
                <ul className="absolute left-0 top-full mt-1 w-40 bg-white shadow-md rounded-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all">
                  {submenu.map((item, index) => (
                    <li key={index}>
                      <NavLink
                        to={item.link}
                        className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-md"
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <div className="flex gap-4 items-center">
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
            <LuShoppingCart />
          </div>

          <CustomButton
            onClick={() => setActiveBtn("login")}
            className={`
              ${baseBtn}
              ${activeBtn === "login" ? activeStyle : inactiveStyle}
              hover:!opacity-90 active:!scale-90
            `}
            value="Login"
          />

          <CustomButton
            onClick={() => setActiveBtn("signup")}
            className={`
              ${baseBtn}
              ${activeBtn === "signup" ? activeStyle : inactiveStyle}
              hover:!opacity-90 active:!scale-90
            `}
            value="Get Started"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
