import { Outlet } from "react-router";
import AnnoucementBar from "../components/AnnoucementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="container">
      <div className="annoumcement-bar">
        <AnnoucementBar />
      </div>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
