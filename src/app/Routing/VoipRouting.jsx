import { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router";
import Loader from "../../ui/Loader";

// ====================
// Layouts (Lazy)
// ====================
const Layout = lazy(() => import("../../layout/Layout"));
const AuthLayout = lazy(() => import("../../layout/AuthLayout"));

// ====================
// Main Pages (Lazy)
// ====================
const LandingPage = lazy(() => import("../../pages/LandingPage"));
const About = lazy(() => import("../../pages/About"));
const Faqs = lazy(() => import("../../pages/Faqs"));
const Blogs = lazy(() => import("../../pages/Blogs"));
const BlogDetail = lazy(() => import("../../pages/BlogDeatiled.jsx"));
const Contact = lazy(() => import("../../pages/Contact"));
const Pricing = lazy(() => import("../../pages/Pricing"));
const Checkcout = lazy(() => import("../../pages/Checkcout.jsx"));
const ShoppingCart = lazy(() => import("../../pages/ShoppingCart.jsx"));

// ====================
// Solutions (Lazy)
// ====================
const Solution = lazy(() => import("../../pages/solutions/Solution.jsx"));
const Retail = lazy(() => import("../../pages/solutions/Retail.jsx"));
const CorePorate = lazy(() => import("../../pages/solutions/CorePorate.jsx"));
const CallCenter = lazy(() => import("../../pages/solutions/CallCenter.jsx"));
const Medical = lazy(() => import("../../pages/solutions/Medical.jsx"));
const EnterPrise = lazy(() => import("../../pages/solutions/EnterPrise.jsx"));
const HealthCare = lazy(() => import("../../pages/solutions/Healthcare.jsx"));
const Hospitality = lazy(() => import("../../pages/solutions/Hospitality.jsx"));
const Insurance = lazy(() => import("../../pages/solutions/Insurance.jsx"));
const Internet = lazy(() => import("../../pages/solutions/Internet.jsx"));
const Marketing = lazy(() => import("../../pages/solutions/Marketing.jsx"));
const Trunks = lazy(() => import("../../pages/solutions/Trunks.jsx"));
const Transpotation = lazy(
  () => import("../../pages/solutions/Transportation.jsx"),
);
const SMS = lazy(() => import("../../pages/solutions/SMS.jsx"));
const MultiLocation = lazy(
  () => import("../../pages/solutions/MultiLocation.jsx"),
);
const Global = lazy(() => import("../../pages/solutions/Global.jsx"));
const Fax = lazy(() => import("../../pages/solutions/FAX.jsx"));
const CloudPhoneSystem = lazy(
  () => import("../../pages/solutions/CloudPhoneSystem.jsx"),
);
const Communication = lazy(
  () => import("../../pages/solutions/Communication.jsx"),
);
const Constructions = lazy(
  () => import("../../pages/solutions/Constructions.jsx"),
);
const Dailers = lazy(() => import("../../pages/solutions/Dailers.jsx"));
const Education = lazy(() => import("../../pages/solutions/Eductaion.jsx"));
const RealEstate = lazy(() => import("../../pages/solutions/RealEstate.jsx"));

// ====================
// Products (Lazy)
// ====================
const Products = lazy(() => import("../../pages/products/Product.jsx"));
const BulkSMS = lazy(() => import("../../pages/products/BulkSms.jsx"));
const VoipLines = lazy(() => import("../../pages/products/VoipLines.jsx"));
const PhoneNumbers = lazy(
  () => import("../../pages/products/PhoneNumbers.jsx"),
);
const Equipement = lazy(() => import("../../pages/products/Equipement.jsx"));

// ====================
// Auth Pages (Lazy)
// ====================
const Signin = lazy(() => import("../../pages/Auth/Signin"));
const Signup = lazy(() => import("../../pages/Auth/Signup"));
const ForgotPassword = lazy(() => import("../../pages/Auth/ForgotPassword"));

// ====================
// Suspense Wrapper
// ====================
const withSuspense = (Component) => (
  <Suspense fallback={<Loader />}>
    <Component />
  </Suspense>
);

// ====================
// Routes
// ====================
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
      { path: "blogs/:id", element: withSuspense(BlogDetail) },
      { path: "pricing", element: withSuspense(Pricing) },
      { path: "checkout", element: withSuspense(Checkcout) },
      { path: "shoppingCart", element: withSuspense(ShoppingCart) },
      { path: "contact", element: withSuspense(Contact) },

      // Solutions
      { path: "solutions/smallbusiness", element: withSuspense(Solution) },
      { path: "solutions/retails", element: withSuspense(Retail) },
      { path: "solutions/CorporateOffices", element: withSuspense(CorePorate) },
      { path: "solutions/Callcenter", element: withSuspense(CallCenter) },
      { path: "solutions/Enterprise", element: withSuspense(EnterPrise) },
      { path: "solutions/Medical", element: withSuspense(Medical) },
      { path: "solutions/healthcare", element: withSuspense(HealthCare) },
      { path: "solutions/hospitality", element: withSuspense(Hospitality) },
      { path: "solutions/insurance", element: withSuspense(Insurance) },
      { path: "solutions/internetTelco", element: withSuspense(Internet) },
      { path: "solutions/marketing", element: withSuspense(Marketing) },
      { path: "solutions/SipTrunks", element: withSuspense(Trunks) },
      {
        path: "solutions/transportation",
        element: withSuspense(Transpotation),
      },
      { path: "solutions/SMS", element: withSuspense(SMS) },
      {
        path: "solutions/Multi-location",
        element: withSuspense(MultiLocation),
      },
      { path: "solutions/Global", element: withSuspense(Global) },
      { path: "solutions/Fax", element: withSuspense(Fax) },
      {
        path: "solutions/CloudPhoneSystem",
        element: withSuspense(CloudPhoneSystem),
      },
      {
        path: "solutions/UnifiedCommunication",
        element: withSuspense(Communication),
      },
      { path: "solutions/constructions", element: withSuspense(Constructions) },
      { path: "solutions/Dialers", element: withSuspense(Dailers) },
      { path: "solutions/education", element: withSuspense(Education) },
      { path: "solutions/RealEstate", element: withSuspense(RealEstate) },

      // Products
      { path: "products/cloud-pbx", element: withSuspense(Products) },
      { path: "products/bulk-sms", element: withSuspense(BulkSMS) },
      { path: "products/voip-lines", element: withSuspense(VoipLines) },
      { path: "products/phone-numbers", element: withSuspense(PhoneNumbers) },
      { path: "products/equipment", element: withSuspense(Equipement) },
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
