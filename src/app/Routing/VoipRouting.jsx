import { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router";
import Loader from "../../ui/Loader";
import BlogDetail from "../../pages/BlogDeatiled.jsx";

// Layouts
const Layout = lazy(() => import("../../layout/Layout"));
const AuthLayout = lazy(() => import("../../layout/AuthLayout"));

// Pages
const LandingPage = lazy(() => import("../../pages/LandingPage"));
const About = lazy(() => import("../../pages/About"));
const Faqs = lazy(() => import("../../pages/Faqs"));
const Blogs = lazy(() => import("../../pages/Blogs"));
const Contact = lazy(() => import("../../pages/Contact"));
const Pricing = lazy(() => import("../../pages/Pricing"));
const Solution = lazy(() => import("../../pages/solutions/Solution.jsx"));
const Products = lazy(() => import("../../pages/products/Product.jsx"));

// Auth pages
const Signin = lazy(() => import("../../pages/Auth/Signin"));
const Signup = lazy(() => import("../../pages/Auth/Signup"));
const ForgotPassword = lazy(() => import("../../pages/Auth/ForgotPassword"));

// Optional loader component
<Loader />;

const withSuspense = (Component) => (
  <Suspense fallback={<Loader />}>
    <Component />
  </Suspense>
);

const routes = createBrowserRouter([
  {
    path: "/",
    element: withSuspense(Layout),
    children: [
      { index: true, element: <Navigate to="home" replace /> },
      { path: "home", element: withSuspense(LandingPage) },
      { path: "about", element: withSuspense(About) },
      { path: "faqs", element: withSuspense(Faqs) },
      { path: "blogs", element: withSuspense(Blogs) },
      { path: "/blogs/:id", element: <BlogDetail /> },
      { path: "pricing", element: withSuspense(Pricing) },
      { path: "contact", element: withSuspense(Contact) },
      { path: "solutions/smallbusiness", element: withSuspense(Solution) },
      { path: "products/cloud-pbx", element: withSuspense(Products) },
    ],
  },
  {
    path: "/",
    element: withSuspense(AuthLayout),
    children: [
      { index: true, element: <Navigate to="signin" replace /> },
      { path: "signin", element: withSuspense(Signin) },
      { path: "signup", element: withSuspense(Signup) },
      { path: "forgotPassword", element: withSuspense(ForgotPassword) },
    ],
  },
]);

export default routes;
