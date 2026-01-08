import { Outlet } from "react-router";
import AnnoucementBar from "../components/AnnoucementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="w-full">
      <AnnoucementBar />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
