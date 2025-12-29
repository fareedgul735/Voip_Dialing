import { createBrowserRouter, Navigate } from "react-router";
 import LandingPage from "../../pages/LandingPage";
import Layout from "../../layout/Layout";
import About from "../../pages/About";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to={"home"} replace={true} /> },
      { path: "home", element: <LandingPage /> },
      { path: "about", element: <About /> },
    ],
  },

]);

export default routes;
