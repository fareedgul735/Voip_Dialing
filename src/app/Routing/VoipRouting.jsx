import { createBrowserRouter, Navigate } from "react-router";
import LandingPage from "../../pages/LandingPage";
import Layout from "../../layout/Layout";
import About from "../../pages/About";
import Faqs from "../../pages/Faqs";
import Blogs from "../../pages/Blogs";
import AuthLayout from "../../layout/AuthLayout";
import Signin from "../../pages/Auth/Signin";
import Signup from "../../pages/Auth/Signup";
import ForgotPassword from "../../pages/Auth/ForgotPassword";
import Contact from "../../pages/Contact";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to={"home"} replace={true} /> },
      { path: "home", element: <LandingPage /> },
      { path: "about", element: <About /> },
      { path: "faqs", element: <Faqs /> },
      { path: "blogs", element: <Blogs /> },
      { path: "contact", element: <Contact /> },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { index: true, element: <Navigate to={"signin"} replace={true} /> },
      { path: "signin", element: <Signin /> },
      { path: "signup", element: <Signup /> },
      { path: "forgotPassword", element: <ForgotPassword /> },
    ],
  },
]);

export default routes;
