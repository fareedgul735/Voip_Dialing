import { Link, NavLink } from "react-router";
import { Mail, Phone, Facebook, Twitter, Linkedin } from "lucide-react";

const AnnouncementBar = () => {
  return (
    <div className="bg-sky-600 text-white text-sm">
      <div className="mx-12 px-8 py-2 overflow-x-auto scrollbar-hide">
        <div className="flex justify-start lg:justify-between items-center gap-6 px-4 lg:px-0">
          <div className="flex gap-8 flex-shrink-0">
            <span className="flex justify-center items-center gap-2">
              <Phone size={18} />
              <span className="text-[12px]">+09271 8999 000</span>
            </span>
            <span className="flex justify-center items-center gap-2 text-[12px]">
              -<span>(8899 7766 55 99000)</span> -
            </span>
            <span
              onClick={() => {
                document
                  .getElementById("requestCall")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="!bg-orange-600 rounded p-[4px] hover:shadow shadow-orange-200 cursor-pointer flex-shrink-0"
            >
              <span className="text-[13px]">Request a Call</span>
            </span>
          </div>
          <div className="flex gap-4 items-center flex-shrink-0">
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                `text-white-700 hover:text-orange-400 ${
                  isActive ? "text-orange-400" : ""
                }`
              }
            >
              Blogs
            </NavLink>

            <NavLink
              to="/pricing"
              className={({ isActive }) =>
                `text-white-700 hover:text-orange-400 ${
                  isActive ? "text-orange-400" : ""
                }`
              }
            >
              Shops
            </NavLink>

            <NavLink
              to="/faqs"
              className={({ isActive }) =>
                `text-white-700 hover:text-orange-400 ${
                  isActive ? "text-orange-400" : ""
                }`
              }
            >
              Faq`s
            </NavLink>

            <div className="flex gap-2">
              <span className="flex justify-center items-center w-5 h-5 bg-orange-600 text-white rounded-full">
                <Facebook size={12} />
              </span>
              <span className="flex justify-center items-center w-5 h-5 bg-orange-600 text-white rounded-full">
                <Twitter size={12} />
              </span>
              <span className="flex justify-center items-center w-5 h-5 bg-orange-600 text-white rounded-full">
                <Linkedin size={12} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
