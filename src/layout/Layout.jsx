import { Outlet } from "react-router";
import AnnoucementBar from "../components/AnnoucementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RequestCall from "../ui/RequestCall";

import title6 from "../../public/title6.png";
import dummy3 from "../../public/dummy3.png";
import dummy4 from "../../public/dummy4.png";
const Layout = () => {
  return (
    <div className="w-full">
      <AnnoucementBar />
      <Navbar />
      <Outlet />
      <div className="bg-[#FBF7F4] flex items-center justify-center p-4" id="requestCall">
        <RequestCall />
      </div>
      <div className="award-winnerw-full px-4 md:px-12 py-8">
        <h1 className="text-orange-400 text-xl md:text-2xl font-bold text-center mb-8">
          Award Winners
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center justify-items-center">
          <div className="flex flex-col items-center gap-2">
            <img
              src={title6}
              alt="Award 1"
              className="w-20 md:w-24 object-contain"
            />
            <p className="text-sm md:text-base text-gray-700 text-center">
              Best Design
            </p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <img
              src={title6}
              alt="Award 2"
              className="w-20 md:w-24 object-contain"
            />
            <p className="text-sm md:text-base text-gray-700 text-center">
              Innovation Award
            </p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <img
              src={title6}
              alt="Award 3"
              className="w-20 md:w-24 object-contain"
            />
            <p className="text-sm md:text-base text-gray-700 text-center">
              Excellence
            </p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <img
              src={dummy3}
              alt="Award 4"
              className="w-20 md:w-24 object-contain"
            />
            <p className="text-sm md:text-base text-gray-700 text-center">
              Top Performer
            </p>
          </div>

          <div className="flex flex-col items-center gap-2">
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
