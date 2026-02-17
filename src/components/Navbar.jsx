import { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
// import { FiX, FiChevronRight, FiArrowLeft } from "react-icons/fi";
import {
  Home,
  Box,
  Layers,
  DollarSign,
  Info,
  Phone,
  ArrowLeft,
  Pointer,
  ArrowRight,
} from "lucide-react";
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
                    className={`${navBase} flex items-center gap-1 cursor-pointer
                  ${isSubmenuActive(item.submenu) ? navActive : navInactive}`}
                  >
                    {item.label}
                    <ChevronDown size={16} />
                  </span>
                )}

                {item.submenu && (
                  <div
                    className="absolute left-1/2 top-full -translate-x-1/2
      mt-6
      opacity-0 invisible
      translate-y-6 scale-95
      group-hover:opacity-100 
      group-hover:visible 
      group-hover:translate-y-0
      group-hover:scale-100
      transition-all duration-400 ease-out
      z-50"
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
          className="lg:hidden cursor-pointer bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center shadow"
        >
          <Menu size={22} />
        </button>
        <Drawer placement="left" onClose={() => setOpen(false)} open={open}>
          <div className="relative h-full overflow-x-hidden px-4">
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
                  return (
                    <li key={item.id}>
                      {!item.submenu ? (
                        <NavLink
                          to={item.link}
                          onClick={() => setOpen(false)}
                          className={({ isActive }) =>
                            `flex items-center font-bold gap-3 px-3 py-2 text-[18px] rounded-full transition ${
                              isActive
                                ? "!bg-orange-500 !text-white"
                                : "!text-gray-800 !hover:bg-orange-100"
                            }`
                          }
                        >
                          {item.label === "Home" && <Home size={22} />}
                          {item.label === "Pricing" && <DollarSign size={22} />}
                          {item.label === "About" && <Info size={22} />}
                          {item.label === "Contact" && <Phone size={22} />}
                          {item.label}
                        </NavLink>
                      ) : (
                        <button
                          onClick={() => setActiveMenu(item)}
                          className={`w-full justify-between flex items-center font-bold gap-3 px-3 py-2 text-[18px] cursor-pointer`}
                        >
                          <div className="flex items-center gap-3">
                            {item.label === "Products" && <Box size={18} />}
                            {item.label === "Solutions" && <Layers size={18} />}
                            {item.label}
                          </div>
                          <span>
                            <ArrowRight />
                          </span>
                        </button>
                      )}
                    </li>
                  );
                })}
              </ul>

              <div className="border-t border-gray-300 my-6"></div>
              <div>
                <div className="flex flex-col gap-4 items-start flex-shrink-0 p-[12px]">
                  <div className="flex gap-2">
                    <NavLink
                      to="/blogs"
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `text-sky-600 hover:text-orange-400 ${
                          isActive ? "!text-orange-400" : ""
                        }`
                      }
                    >
                      Blogs
                    </NavLink>

                    <NavLink
                      to="/pricing"
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `text-sky-600 hover:text-orange-400 ${
                          isActive ? "!text-orange-400" : ""
                        }`
                      }
                    >
                      Shops
                    </NavLink>

                    <NavLink
                      to="/faqs"
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `text-sky-600 hover:text-orange-400 ${
                          isActive ? "!text-orange-400" : ""
                        }`
                      }
                    >
                      Faq`s
                    </NavLink>
                  </div>
                  <div className="flex gap-8 flex-shrink-0 text-sky-600">
                    <span className="flex justify-center items-center gap-2">
                      <Phone size={16} />
                      <span className="text-[12px]">+09271 8999 000</span>
                    </span>
                    <span className="flex justify-center items-center gap-2 text-[12px]">
                      <span>(8899 7766 55 99000)</span>
                    </span>
                  </div>
                  <span
                    onClick={() => {
                      document
                        .getElementById("requestCall")
                        ?.scrollIntoView({ behavior: "smooth" });
                      setOpen(false);
                    }}
                    className="!bg-orange-600 !text-white rounded p-[4px] hover:shadow shadow-orange-200 cursor-pointer flex-shrink-0"
                  >
                    <span className="text-[13px]">Request a Call</span>
                  </span>

                  <div className="flex gap-2">
                    <span className="flex justify-center cursor-pointer items-center w-5 h-5 bg-orange-600 text-white rounded-full">
                      <Facebook size={12} />
                    </span>
                    <span className="flex justify-center cursor-pointer items-center w-5 h-5 bg-orange-600 text-white rounded-full">
                      <Twitter size={12} />
                    </span>
                    <span className="flex justify-center cursor-pointer items-center w-5 h-5 bg-orange-600 text-white rounded-full">
                      <Linkedin size={12} />
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <Link to="/signin">
                  <CustomButton
                    onClick={() => setActiveBtn("login")}
                    className={`w-full cursor-pointer transition shadow-md bg-orange-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-600 transition`}
                    value={<span className="text-[12px]">Login</span>}
                  />
                </Link>

                <Link to="/signup">
                  <CustomButtonTwin
                    onClick={() => setActiveBtn("signup")}
                    className={`w-full cursor-pointer shadow-md bg-orange-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-600 transition`}
                    value={<span className="text-[12px]">Get Started</span>}
                  />
                </Link>
              </div>
            </div>

            <div
              className={`absolute inset-0 bg-white transition-transform duration-300 overflow-y-auto ${
                activeMenu ? "translate-x-0" : "translate-x-full"
              }`}
            >
              {activeMenu && (
                <>
                  <div className="flex items-center gap-3 border-b pb-4 mb-6">
                    <button
                      className="cursor-pointer"
                      onClick={() => setActiveMenu(null)}
                    >
                      <ArrowLeft />
                    </button>
                    <h2 className="font-semibold text-[22px]">
                      {activeMenu.label}
                    </h2>
                  </div>

                  {Array.isArray(activeMenu.submenu) &&
                    activeMenu.submenu.map((sub, i) => (
                      <NavLink
                        key={i}
                        to={sub.link}
                        onClick={() => setOpen(false)}
                        className={({ isActive }) =>
                          `block text-[14px] font-semibold mb-6 !text-black ${
                            isActive ? "!text-orange-400" : ""
                          }`
                        }
                      >
                        {sub.label}
                      </NavLink>
                    ))}

                  {typeof activeMenu.submenu === "object" &&
                    !Array.isArray(activeMenu.submenu) &&
                    Object.entries(activeMenu.submenu).map(
                      ([key, arr], idx) => (
                        <div key={idx} className="mb-6">
                          <p className="text-gray-400 text-[16px] uppercase text-xs tracking-wider mb-3">
                            {key.replace(/([A-Z])/g, " $1")}
                          </p>

                          {arr.map((sub, i) =>
                            sub.link ? (
                              <NavLink
                                key={i}
                                to={sub.link}
                                onClick={() => setOpen(false)}
                                className={({ isActive }) =>
                                  `block text-[14px] font-semibold mb-6 !text-black auto-scroll ${
                                    isActive ? "!text-orange-400" : ""
                                  }`
                                }
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
