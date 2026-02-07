import { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router";
import Loader from "../../ui/Loader";
import BlogDetail from "../../pages/BlogDeatiled.jsx";
import Retail from "../../pages/solutions/Retail.jsx";
import CorePorate from "../../pages/solutions/CorePorate.jsx";
import CallCenter from "../../pages/solutions/CallCenter.jsx";
import Medical from "../../pages/solutions/Medical.jsx";
import EnterPrise from "../../pages/solutions/EnterPrise.jsx";
import HealthCare from "../../pages/solutions/Healthcare.jsx";
import Hospitality from "../../pages/solutions/Hospitality.jsx";
import Insurance from "../../pages/solutions/Insurance.jsx";
import Internet from "../../pages/solutions/Internet.jsx";
import Marketing from "../../pages/solutions/Marketing.jsx";
import Trunks from "../../pages/solutions/Trunks.jsx";
import Transpotation from "../../pages/solutions/Transportation.jsx";
import SMS from "../../pages/solutions/SMS.jsx";
import MultiLocation from "../../pages/solutions/MultiLocation.jsx";
import Global from "../../pages/solutions/Global.jsx";
import Fax from "../../pages/solutions/FAX.jsx";
import CloudPhoneSystem from "../../pages/solutions/CloudPhoneSystem.jsx";
import Communication from "../../pages/solutions/Communication.jsx";
import Constructions from "../../pages/solutions/Constructions.jsx";
import Dailers from "../../pages/solutions/Dailers.jsx";
import Education from "../../pages/solutions/Eductaion.jsx";
import RealEstate from "../../pages/solutions/RealEstate.jsx";
import BulkSMS from "../../pages/products/BulkSms.jsx";
import VoipLines from "../../pages/products/VoipLines.jsx";
import PhoneNumbers from "../../pages/products/PhoneNumbers.jsx";
import Equipement from "../../pages/products/Equipement.jsx";
import Checkcout from "../../pages/Checkcout.jsx";
import ShoppingCart from "../../pages/ShoppingCart.jsx";

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
      { path: "checkout", element: <Checkcout /> },
      { path: "shoppingCart", element: <ShoppingCart /> },
      { path: "contact", element: withSuspense(Contact) },
      { path: "solutions/smallbusiness", element: withSuspense(Solution) },
      { path: "solutions/retails", element: <Retail /> },
      { path: "solutions/CorporateOffices", element: <CorePorate /> },
      { path: "solutions/Callcenter", element: <CallCenter /> },
      { path: "solutions/Enterprise", element: <EnterPrise /> },
      { path: "solutions/Medical", element: <Medical /> },
      { path: "solutions/healthcare", element: <HealthCare /> },
      { path: "solutions/hospitality", element: <Hospitality /> },
      { path: "solutions/insurance", element: <Insurance /> },
      { path: "solutions/internetTelco", element: <Internet /> },
      { path: "solutions/marketing", element: <Marketing /> },
      { path: "solutions/SipTrunks", element: <Trunks /> },
      { path: "solutions/transportation", element: <Transpotation /> },
      { path: "solutions/SMS", element: <SMS /> },
      { path: "solutions/Multi-location", element: <MultiLocation /> },
      { path: "solutions/Global", element: <Global /> },
      { path: "solutions/Fax", element: <Fax /> },
      { path: "solutions/CloudPhoneSystem", element: <CloudPhoneSystem /> },
      { path: "solutions/UnifiedCommunication", element: <Communication /> },
      { path: "solutions/constructions", element: <Constructions /> },
      { path: "solutions/Dialers", element: <Dailers /> },
      { path: "solutions/education", element: <Education /> },
      { path: "solutions/RealEstate", element: <RealEstate /> },
      { path: "products/cloud-pbx", element: withSuspense(Products) },
      { path: "products/bulk-sms", element: <BulkSMS /> },
      { path: "products/voip-lines", element: <VoipLines /> },
      { path: "products/phone-numbers", element: <PhoneNumbers /> },
      { path: "products/equipment", element: <Equipement /> },
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
