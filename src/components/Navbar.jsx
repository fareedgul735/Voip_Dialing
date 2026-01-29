import { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import {
  ChevronDown,
  ShoppingCart,
  Menu,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import { Drawer } from "antd";
import logo from "../../public/logo.png";
import { navLinks } from "../lib/Constant";
import {
  navActive,
  navBase,
  navInactive,
} from "../lib/styles";
import { CustomButton, CustomButtonTwin } from "../ui/CustomButton";

const Navbar = () => {
  // const [activeBtn, setActiveBtn] = useState("signup");
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isSubmenuActive = (submenu) => {
    if (Array.isArray(submenu)) {
      return submenu.some((sub) => location.pathname.startsWith(sub.link));
    }

    if (submenu?.businessType) {
      return submenu.businessType.some((b) =>
        location.pathname.startsWith(`/${b.link}`),
      );
    }

    return false;
  };

  return (
    <header className="bg-white shadow sticky top-0 z-50 w-full">
      <div className="mx-12 flex justify-between items-center px-4 py-4">
        <div className="flex gap-12 justify-center items-center">
          <img src={logo} alt="logo" className="w-20" />
          <ul className="hidden lg:flex gap-2 items-center ">
            {navLinks.map((item) => (
              <li key={item.id} className="group">
                {!item.submenu ? (
                  <NavLink
                    to={item.link}
                    className={({ isActive }) =>
                      `${navBase} ${isActive ? navActive : navInactive}`
                    }
                  >
                    {item.label}
                  </NavLink>
                ) : (
                  <span
                    className={`${navBase} flex items-center gap-1 cursor-default
                  ${isSubmenuActive(item.submenu) ? navActive : navInactive}`}
                  >
                    {item.label}
                    <ChevronDown size={16} />
                  </span>
                )}

                {item.submenu && (
                  <div
                    className="absolute left-1/2 top-full -translate-x-1/2 mt-4
                  opacity-0 invisible group-hover:visible group-hover:opacity-100
                  transition-all duration-200 z-50"
                  >
                    <div className="w-[1200px] bg-white rounded-2xl shadow-2xl p-8">
                      {Array.isArray(item.submenu) && (
                        <div className="grid grid-cols-5 gap-6">
                          {item.submenu.map((sub, i) => (
                            <NavLink
                              key={i}
                              to={sub.link}
                              className={({ isActive }) =>
                                `p-5 rounded-xl transition
                              ${
                                isActive
                                  ? "bg-orange-100 ring-2 ring-orange-400"
                                  : "bg-orange-50 hover:bg-orange-100 hover:shadow-md"
                              }`
                              }
                            >
                              <h4 className="font-semibold text-lg mb-2">
                                {sub.label}
                              </h4>
                              <p className="text-sm text-gray-600">
                                Everything your business needs
                              </p>
                            </NavLink>
                          ))}
                        </div>
                      )}

                      {!Array.isArray(item.submenu) && (
                        <div className="grid grid-cols-4 gap-8">
                          <div
                            className="rounded-2xl p-6 text-white bg-cover bg-center"
                            style={{
                              backgroundImage: "url('/bluebg.png')",
                            }}
                          >
                            <h3 className="text-2xl font-bold mb-4">
                              Get VOIP UNIFIED
                            </h3>
                            <ul className="space-y-2 text-sm">
                              <li>✔ Conversational & Dialer Dial Plans</li>
                              <li>✔ Secure, Reliable, Scalable</li>
                              <li>✔ Simple and Affordable</li>
                            </ul>

                            <Link
                              to="/contact"
                              className="inline-block mt-6 bg-white text-gray-900
                            px-4 py-2 rounded-full font-semibold"
                            >
                              Get Service Now
                            </Link>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-3">
                              By Business Type
                            </h4>
                            <ul className="space-y-2 text-sm">
                              {item.submenu.businessType.map((b, i) => (
                                <li key={i}>
                                  <NavLink
                                    to={`/${b.link}`}
                                    className={({ isActive }) =>
                                      isActive
                                        ? "text-orange-600 font-semibold"
                                        : "hover:text-orange-600"
                                    }
                                  >
                                    {b.label}
                                  </NavLink>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-3">By Industry</h4>
                            <ul className="space-y-2 text-sm">
                              {item.submenu.industry?.map((b, i) => (
                                <li key={i} className="hover:text-orange-600">
                                  {b}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-3">By Solution</h4>
                            <ul className="space-y-2 text-sm">
                              {item.submenu.solution?.map((b, i) => (
                                <li key={i} className="hover:text-orange-600">
                                  {b}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
            <Link to={"/pricing"}>
              <ShoppingCart size={18} />
            </Link>
          </div>

          <Link to="/signin">
            <CustomButton
              onClick={() => setActiveBtn("login")}
              className={`cursor-pointer transition`}
              value={<span className="text-[14px]">Login</span>}
            />
          </Link>

          <Link to="/signup">
            <CustomButtonTwin
              onClick={() => setActiveBtn("signup")}
              className={`cursor-pointer shadow-md bg-orange-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-600 transition`}
              value={<span className="text-[12px]">Get Started</span>}
            />
          </Link>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="lg:hidden bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center shadow"
        >
          <Menu size={22} />
        </button>

        <Drawer placement="left" onClose={() => setOpen(false)} open={open}>
          <img src={logo} alt="logo" className="w-32 mx-auto mb-6" />

          <ul className="flex flex-col gap-4">
            {navLinks.map((item) => (
              <li key={item.id}>
                {!item.submenu ? (
                  <NavLink
                    to={item.link}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      isActive
                        ? "text-orange-600 font-semibold"
                        : "text-gray-700 hover:text-orange-600 transition-colors"
                    }
                  >
                    {item.label}
                  </NavLink>
                ) : (
                  <>
                    <p
                      className={`font-semibold mb-2 ${
                        isSubmenuActive(item.submenu)
                          ? "text-orange-600"
                          : "text-gray-700"
                      }`}
                    >
                      {item.label}
                    </p>

                    {Array.isArray(item.submenu) &&
                      item.submenu.map((sub, i) => (
                        <NavLink
                          key={i}
                          to={sub.link}
                          onClick={() => setOpen(false)}
                          className={({ isActive }) =>
                            `block text-sm pl-4 mb-1 transition-colors ${
                              isActive
                                ? "text-orange-600 font-medium"
                                : "text-gray-600 hover:text-orange-500"
                            }`
                          }
                        >
                          {sub.label}
                        </NavLink>
                      ))}

                    {typeof item.submenu === "object" &&
                      !Array.isArray(item.submenu) &&
                      Object.entries(item.submenu).map(([key, arr], idx) => (
                        <div key={idx} className="pl-4 mb-2">
                          <p className="text-gray-400 uppercase text-xs mb-1">
                            {key.replace(/([A-Z])/g, " $1")}
                          </p>
                          {arr.map((sub, i) =>
                            sub.link ? (
                              <NavLink
                                key={i}
                                to={sub.link}
                                onClick={() => setOpen(false)}
                                className={({ isActive }) =>
                                  `block text-sm pl-4 mb-1 transition-colors ${
                                    isActive
                                      ? "text-orange-600 font-medium"
                                      : "text-gray-600 hover:text-orange-500"
                                  }`
                                }
                              >
                                {sub.label}
                              </NavLink>
                            ) : (
                              <span
                                key={i}
                                className="block text-sm pl-4 mb-1 text-gray-400"
                              >
                                {sub}
                              </span>
                            ),
                          )}
                        </div>
                      ))}
                  </>
                )}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-col gap-3 items-center">
            <Link to="/signin" className="text-gray-700 hover:text-orange-600">
              Login
            </Link>
            <Link to="/signup" className="text-gray-700 hover:text-orange-600">
              Get Started
            </Link>
          </div>

          <div className="mt-6 flex justify-center gap-3 text-white">
            <Facebook size={16} className="hover:text-orange-500" />
            <Twitter size={16} className="hover:text-orange-500" />
            <Linkedin size={16} className="hover:text-orange-500" />
          </div>
        </Drawer>
      </div>
    </header>
  );
};

export default Navbar;
