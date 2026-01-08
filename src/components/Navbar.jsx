import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
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

const navLinks = [
  { id: 1, label: "Home", link: "/" },
  {
    id: 3,
    label: "Products",
    submenu: [
      { label: "Cloud PBX" },
      { label: "Bulk SMS" },
      { label: "VOIP Lines" },
      { label: "Phone Numbers" },
      { label: "Equipment" },
    ],
  },
  { id: 2, label: "Solutions", link: "/solutions" },
  { id: 4, label: "Pricing", link: "/pricing" },
  { id: 4, label: "Industry", link: "/industry" },
  { id: 4, label: "About", link: "/about" },
  { id: 5, label: "Contact", link: "/contact" },
];

const navBase = "px-4 py-2 text-sm font-medium rounded-full transition";
const navActive = "text-orange-600 bg-orange-50";
const navInactive = "text-gray-700 hover:text-orange-600";

const baseBtn = "px-5 py-2 rounded-full text-sm font-semibold transition";
const activeStyle = "bg-orange-500 text-white";
const inactiveStyle = "bg-gray-100 text-gray-800";

const Navbar = () => {
  const [activeBtn, setActiveBtn] = useState("signup");
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white shadow sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
        <img src={logo} alt="logo" className="w-28" />

        <ul className="hidden lg:flex gap-2 justify-center items-center relative">
          {navLinks.map((item) => (
            <li key={item.id} className="relative group">
              {item.submenu ? (
                <button
                  type="button"
                  className={`${navBase} ${navInactive} flex items-center gap-1 cursor-default`}
                >
                  {item.label}
                  <ChevronDown size={16} />
                </button>
              ) : (
                <NavLink
                  to={item.link}
                  className={({ isActive }) =>
                    `${navBase} ${isActive ? navActive : navInactive}`
                  }
                >
                  {item.label}
                </NavLink>
              )}

              {item.submenu && (
                <div
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-4
                                w-[1100px] bg-white rounded-2xl shadow-xl
                                opacity-0 invisible group-hover:visible group-hover:opacity-100
                                transition p-8 z-50"
                >
                  <div className="grid grid-cols-5 gap-6">
                    <Link
                      to="/solutions"
                      className="p-5 rounded-xl bg-orange-50 hover:bg-orange-100 transition"
                    >
                      <h4 className="font-semibold text-lg mb-2">Cloud PBX</h4>
                      <p className="text-sm text-gray-600">
                        Cloud PBX Everything your business needs
                      </p>
                    </Link>

                    {item.submenu.slice(1).map((sub, i) => (
                      <div
                        key={i}
                        className="p-5 rounded-xl bg-orange-50 cursor-default"
                      >
                        <h4 className="font-semibold text-lg mb-2">
                          {sub.label}
                        </h4>
                        <p className="text-sm text-gray-600">
                          Cloud PBX Everything your business needs
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
            <ShoppingCart size={18} />
          </div>

          <Link to="/signin">
            <button
              onClick={() => setActiveBtn("login")}
              className={`${baseBtn} ${
                activeBtn === "login" ? activeStyle : inactiveStyle
              }`}
            >
              Login
            </button>
          </Link>

          <Link to="/signup">
            <button
              onClick={() => setActiveBtn("signup")}
              className={`${baseBtn} ${
                activeBtn === "signup" ? activeStyle : inactiveStyle
              }`}
            >
              Get Started
            </button>
          </Link>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="lg:hidden bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center shadow"
        >
          <Menu size={22} />
        </button>

        <Drawer
          placement="left"
          onClose={() => setOpen(false)}
          open={open}
          width={280}
        >
          <img src={logo} alt="logo" className="w-32 mx-auto mb-6" />

          <ul className="flex flex-col gap-4 items-center">
            {navLinks.map((item) => (
              <li key={item.id}>
                {item.submenu ? (
                  <span className="font-semibold text-gray-700">
                    {item.label}
                  </span>
                ) : (
                  <NavLink to={item.link}>{item.label}</NavLink>
                )}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-col gap-3 items-center">
            <Link to="/signin">Login</Link>
            <Link to="/signup">Get Started</Link>
          </div>

          <div className="mt-6 flex justify-center gap-3">
            <Facebook size={16} />
            <Twitter size={16} />
            <Linkedin size={16} />
          </div>
        </Drawer>
      </div>
    </div>
  );
};

export default Navbar;
