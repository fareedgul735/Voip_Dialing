import { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
// import { FiX, FiChevronRight, FiArrowLeft } from "react-icons/fi";
import { Home, Box, Layers, DollarSign, Info, Phone } from "lucide-react";
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
import { navActive, navBase, navInactive } from "../lib/styles";
import { CustomButton, CustomButtonTwin } from "../ui/CustomButton";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
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
      <div className="mx-0 lg:mx-12 flex justify-between items-center px-4 py-4">
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
                    <div className="w-[1400px] bg-white rounded-2xl shadow-2xl p-8">
                      {Array.isArray(item.submenu) && (
                        <div className="grid grid-cols-4 md:grid-cols-5 gap-6">
                          {item.submenu.slice(0, 8).map((sub, i) => (
                            <div key={i}>
                              <NavLink
                                to={sub.link}
                                className={({ isActive }) =>
                                  `flex flex-col items-start p-5 rounded-xl transition
            ${isActive ? "bg-orange-100 ring-2 ring-orange-400" : "bg-orange-50 hover:bg-orange-100 hover:shadow-md"}`
                                }
                              >
                                <div className="flex items-center mb-3 space-x-3">
                                  <div className="text-orange-500">
                                    {sub.icon}
                                  </div>
                                  <h4 className="font-semibold text-lg">
                                    {sub.label}
                                  </h4>
                                </div>
                                <p className="text-sm text-gray-600">
                                  {sub.description}
                                </p>
                              </NavLink>

                              <div className="mt-4 space-y-6">
                                {(
                                  sub.enterpriseNames || [
                                    `Enterprise`,
                                    `Enterprise`,
                                    `Enterprise`,
                                    `Enterprise`,
                                    `Enterprise`,
                                    `Enterprise`,
                                    `Enterprise`,
                                    `Enterprise`,
                                  ]
                                ).map((name, idx) => (
                                  <p
                                    key={idx}
                                    className="text-sm hover:bg-orange-50 py-1 px-1 rounded-sm text-gray-800 hover:text-orange-600 transition cursor-pointer"
                                  >
                                    {name}
                                  </p>
                                ))}
                              </div>
                            </div>
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
                              {item.submenu.industry.map((b, i) => (
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
                            <h4 className="font-semibold mb-3">By Solution</h4>
                            <ul className="space-y-2 text-sm">
                              {item.submenu.solution.map((b, i) => (
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
            <Link to={"/shoppingCart"}>
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
          <div className="relative h-full overflow-hidden px-4">
            <div
              className={`absolute inset-0 transition-transform duration-300 ${
                activeMenu ? "-translate-x-full" : "translate-x-0"
              }`}
            >
              <div className="border-b border-gray-300 pb-6 mb-6">
                <img src={logo} alt="logo" className="w-26 mx-2" />
              </div>

              <ul className="flex flex-col space-y-3">
                {navLinks.map((item) => {
                  const isActive = location.pathname === item.link;

                  const baseStyle =
                    "flex items-center gap-3 px-3 py-2 text-[15px] transition-all rounded-xl border";

                  const activeStyle = isActive
                    ? "bg-orange-50 border-orange-500 text-gray-900"
                    : "border-transparent hover:bg-orange-50 text-gray-800";

                  return (
                    <li key={item.id}>
                      {!item.submenu ? (
                        <NavLink
                          to={item.link}
                          onClick={() => setOpen(false)}
                          className={`${baseStyle} ${activeStyle}`}
                        >
                          {item.label === "Home" && <Home size={18} />}
                          {item.label === "Pricing" && <DollarSign size={18} />}
                          {item.label === "About" && <Info size={18} />}
                          {item.label === "Contact" && <Phone size={18} />}
                          {item.label}
                        </NavLink>
                      ) : (
                        <button
                          onClick={() => setActiveMenu(item)}
                          className={`${baseStyle} ${activeStyle} w-full justify-between`}
                        >
                          <div className="flex items-center gap-3">
                            {item.label === "Products" && <Box size={18} />}
                            {item.label === "Solutions" && <Layers size={18} />}
                            {item.label}
                          </div>
                          <span>›</span>
                        </button>
                      )}
                    </li>
                  );
                })}
              </ul>

              <div className="border-t border-gray-300 my-6"></div>

              <div className="flex flex-col gap-3">
                <Link
                  to="/signin"
                  className="w-full text-center border border-gray-300 py-2 rounded-lg text-gray-700 hover:border-orange-500 hover:text-orange-500 transition-all"
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  className="w-full text-center bg-orange-500 text-white py-2 rounded-full font-medium hover:bg-orange-600 transition-all"
                >
                  Sign Up
                </Link>
              </div>
            </div>

            <div
              className={`absolute inset-0 bg-white transition-transform duration-300 ${
                activeMenu ? "translate-x-0" : "translate-x-full"
              }`}
            >
              {activeMenu && (
                <>
                  <div className="flex items-center gap-3 border-b pb-4 mb-6">
                    <button onClick={() => setActiveMenu(null)}>←</button>
                    <h2 className="font-semibold text-lg">
                      {activeMenu.label}
                    </h2>
                  </div>

                  {Array.isArray(activeMenu.submenu) &&
                    activeMenu.submenu.map((sub, i) => (
                      <NavLink
                        key={i}
                        to={sub.link}
                        onClick={() => setOpen(false)}
                        className="block text-[14px] mb-6 text-gray-700 hover:text-blue-600"
                      >
                        {sub.label}
                      </NavLink>
                    ))}

                  {typeof activeMenu.submenu === "object" &&
                    !Array.isArray(activeMenu.submenu) &&
                    Object.entries(activeMenu.submenu).map(
                      ([key, arr], idx) => (
                        <div key={idx} className="mb-6">
                          <p className="text-gray-400 uppercase text-xs tracking-wider mb-3">
                            {key.replace(/([A-Z])/g, " $1")}
                          </p>

                          {arr.map((sub, i) =>
                            sub.link ? (
                              <NavLink
                                key={i}
                                to={sub.link}
                                onClick={() => setOpen(false)}
                                className="block text-[14px] mb-2 text-gray-700 hover:text-blue-600 auto-scroll"
                              >
                                {sub.label}
                              </NavLink>
                            ) : (
                              <span
                                key={i}
                                className="block text-[14px] mb-2 text-gray-400"
                              >
                                {sub}
                              </span>
                            ),
                          )}
                        </div>
                      ),
                    )}
                </>
              )}
            </div>
          </div>
        </Drawer>
      </div>
    </header>
  );
};

export default Navbar;
