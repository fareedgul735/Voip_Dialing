import { FaFacebook, FaLinkedin, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const AnnouncementBar = () => {
  return (
    <div className="w-full bg-sky-600 text-white text-sm">
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
            <span> dummy@gmail.com</span>
          </span>
          <span className="flex justify-center items-center gap-2">
            <span>-</span>
            <span> dummy@gmail.com</span>
          </span>
        </div>

        <div className="flex gap-4 items-center">
          <span className="cursor-pointer">Blog</span>
          <span className="cursor-pointer">Shop</span>
          <span className="cursor-pointer">FAQ</span>

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
