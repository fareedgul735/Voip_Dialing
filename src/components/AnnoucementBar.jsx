import { NavLink } from "react-router";
import { Phone, Facebook, Twitter, Linkedin } from "lucide-react";

const AnnouncementBar = () => {
  return (
    <div className="hidden lg:flex bg-sky-600 text-white text-sm">
      <div className="w-full mx-12 px-4 py-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-8">
            <span className="flex items-center gap-2 text-[12px]">
              <Phone size={18} />
              +09271 8999 000
            </span>

            <span className="text-[12px]">- (8899 7766 55 99000) -</span>

            <span
              onClick={() => {
                document
                  .getElementById("requestCall")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-orange-600 rounded px-2 py-1 hover:shadow shadow-orange-200 cursor-pointer"
            >
              <span className="text-[13px]">Request a Call</span>
            </span>
          </div>
          <div className="flex items-center gap-6">
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                `hover:text-orange-400 ${isActive ? "text-orange-400" : ""}`
              }
            >
              Blogs
            </NavLink>

            <NavLink
              to="/pricing"
              className={({ isActive }) =>
                `hover:text-orange-400 ${isActive ? "text-orange-400" : ""}`
              }
            >
              Shops
            </NavLink>

            <NavLink
              to="/faqs"
              className={({ isActive }) =>
                `hover:text-orange-400 ${isActive ? "text-orange-400" : ""}`
              }
            >
              Faq`s
            </NavLink>

            <div className="flex gap-2">
              <span className="flex justify-center items-center w-5 h-5 bg-orange-600 rounded-full">
                <Facebook size={12} />
              </span>
              <span className="flex justify-center items-center w-5 h-5 bg-orange-600 rounded-full">
                <Twitter size={12} />
              </span>
              <span className="flex justify-center items-center w-5 h-5 bg-orange-600 rounded-full">
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
