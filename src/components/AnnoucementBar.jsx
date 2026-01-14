import { Link } from "react-router";
import { Mail, Phone, Facebook, Twitter, Linkedin } from "lucide-react";

const AnnouncementBar = () => {
  return (
    <div className="bg-sky-600 text-white text-sm">
      <div className="max-w-7xl mx-auto py-2 overflow-x-auto scrollbar-hide">
        <div className="flex min-w-max justify-start lg:justify-around items-center gap-6 px-4 lg:px-0">
          {/* Contact Info */}
          <div className="flex gap-4 flex-shrink-0">
            <span className="flex justify-center items-center gap-2">
              <Mail />
              <span>dummy@gmail.com</span>
            </span>
            <span className="flex justify-center items-center gap-2">
              <Phone />
              <span>+09271 8999 000</span>
            </span>
            <span className="flex justify-center items-center gap-2">
              -<span>(8899 7766 55 99000)</span>
            </span>
          </div>

          {/* Request Call */}
          <span
            onClick={() => {
              document
                .getElementById("requestCall")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="!bg-orange-600 rounded p-[4px] hover:shadow shadow-orange-200 cursor-pointer flex-shrink-0"
          >
            Request a Call
          </span>

          {/* Links and Social */}
          <div className="flex gap-4 items-center flex-shrink-0">
            <Link to={"/blogs"}>Blogs</Link>
            <Link to={"/pricing"}>Shops</Link>
            <Link to={"/faqs"}>Faq`s</Link>

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
