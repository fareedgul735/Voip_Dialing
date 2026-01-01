import { FaFacebook, FaLinkedin, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router";

const AnnouncementBar = () => {
  return (
    <div className="bg-sky-600 text-white text-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-2">
        <div className="flex gap-4">
          <span className="flex justify-center items-center gap-2">
            <span>
              <MdEmail />
            </span>
            <span> dummy@gmail.com</span>
          </span>
          <span className="flex justify-center items-center gap-2">
            <span>
              <FaPhoneAlt />
            </span>
            <span> +09271 8999 000 </span>
          </span>
          <span className="flex justify-center items-center gap-2">
            <span>-</span>
            <span>(8899 7766 55 99000) </span>
          </span>
        </div>

        <div className="flex gap-4 items-center">
          <Link to={"/blogs"}>Blogs</Link>
          <Link to={"/shops"}>Shops</Link>
          <Link to={"/faqs"}>Faq`s</Link>

          <div className=" rounded flex justify-center items-center gap-2">
            <span className="flex justify-center items-center w-5 h-5 bg-orange-600 text-white rounded-full">
              <FaFacebook />
            </span>
            <span className="flex justify-center items-center w-5 h-5 bg-orange-600 text-white rounded-full">
              <FaTwitter />
            </span>
            <span className="flex justify-center items-center w-5 h-5 bg-orange-600 text-white rounded-full">
              <FaLinkedin />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
