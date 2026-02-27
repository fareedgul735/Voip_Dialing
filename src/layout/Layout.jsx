import { Outlet } from "react-router";
import AnnoucementBar from "../components/AnnoucementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RequestCall from "../ui/RequestCall";

import title23 from "../../public/title6.png";
import title16 from "../../public/2016.jpg";
import title21 from "../../public/2021.png";
import dummy3 from "../../public/dummy3.png";
import dummy4 from "../../public/dummy4.png";
import ScrollToTop from "../lib/ScrollToTop";
import BackToTop from "../lib/BackToTop.jsx";

const Layout = () => {
  return (
    <div className="w-full">
      <ScrollToTop />
      <BackToTop />
      <AnnoucementBar />
      <Navbar />
      <Outlet />
      <div
        className="bg-[#FBF7F4] flex items-center justify-center p-[12px] py-12"
        id="requestCall"
      >
        <RequestCall />
      </div>
      <div className="award-winner w-full px-4 md:px-12 py-8">
        <div className="flex items-center lg:justify-between gap-8 overflow-x-auto lg:overflow-visible no-scrollbar custom-scrollbar">
          <h1 className="text-orange-400 text-lg md:text-2xl font-bold text-center">
            Award Winners
          </h1>
          <div className="flex flex-col items-center gap-2 min-w-[140px]">
            <img
              src={title16}
              alt="Award 1"
              className="w-20 md:w-24 object-contain"
            />
            <p className="text-sm md:text-base text-gray-700 text-center">
              Best Design
            </p>
          </div>

          <div className="flex flex-col items-center gap-2 min-w-[140px]">
            <img
              src={title21}
              alt="Award 2"
              className="w-20 md:w-24 object-contain"
            />
            <p className="text-sm md:text-base text-gray-700 text-center">
              Innovation Award
            </p>
          </div>

          <div className="flex flex-col items-center gap-2 min-w-[140px]">
            <img
              src={title23}
              alt="Award 3"
              className="w-20 md:w-24 object-contain"
            />
            <p className="text-sm md:text-base text-gray-700 text-center">
              Excellence
            </p>
          </div>

          <div className="flex flex-col items-center gap-2 min-w-[140px]">
            <img
              src={dummy3}
              alt="Award 4"
              className="w-20 md:w-24 object-contain"
            />
            <p className="text-sm md:text-base text-gray-700 text-center">
              Top Performer
            </p>
          </div>

          <div className="flex flex-col items-center gap-2 min-w-[140px]">
            <img
              src={dummy4}
              alt="Award 5"
              className="w-20 md:w-24 object-contain"
            />
            <p className="text-sm md:text-base text-gray-700 text-center">
              Customer Choice
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
