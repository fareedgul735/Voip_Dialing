import { Link } from "react-router";
import { Mail, Phone, Facebook, Twitter, Linkedin } from "lucide-react";

const AnnouncementBar = () => {
  return (
    <div className="bg-sky-600 text-white text-sm">
      <div className="max-w-7xl mx-auto flex justify-around items-center py-2">
        <div className="flex gap-4">
          <span className="flex justify-center items-center gap-2">
            <span>
              <Mail />
            </span>
            <span> dummy@gmail.com</span>
          </span>
          <span className="flex justify-center items-center gap-2">
            <span>
              <Phone />
            </span>
            <span> +09271 8999 000 </span>
          </span>
          <span className="flex justify-center items-center gap-2">
            <span>-</span>
            <span>(8899 7766 55 99000) </span>
          </span>
        </div>
          <span className="!bg-orange-600 rounded p-[4px] hover:shadow shadow-orange-200 cursor-pointer">Request a Call </span>

        <div className="flex gap-4 items-center">
          <Link to={"/blogs"}>Blogs</Link>
          <Link to={"/shops"}>Shops</Link>
          <Link to={"/faqs"}>Faq`s</Link>

          <div className=" rounded flex justify-center items-center gap-2">
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
  );
};

export default AnnouncementBar;
