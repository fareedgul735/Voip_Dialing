import { useState } from "react";
import { CustomButton } from "../ui/CustomButton";
import { activeStyle, baseBtn, inactiveStyle } from "../lib/styles";
import { Phone, MessageSquare, Wifi, Hash, Package, Check } from "lucide-react";

import { CheckCircle } from "lucide-react";

import { ChevronLeft, ChevronRight } from "lucide-react";

import image1 from "../../public/image1.jpg";
import image2 from "../../public/image2.jpg";
import image3 from "../../public/image3.png";

import title1 from "../../public/title1.png";
import title2 from "../../public/title2.png";
import title4 from "../../public/title4.png";
import title5 from "../../public/title5.png";
import title6 from "../../public/title6.png";
import title7 from "../../public/title7.png";

import HeadPhones from "../../public/HeadPhone.png";
import CallCenter from "../../public/CallCenter.png";
import Dots from "../../public/Dots.png";

import Doctor1 from "../../public/Doctor 1.png";
import Doctor2 from "../../public/Doctor 2.png";
import Doctor3 from "../../public/Doctor 3.png";
import Doctor4 from "../../public/Doctor 4.jpg";
import Doctor5 from "../../public/Doctor 5.png";
import Detailed from "../../public/VoipDeatiling.png";

const LandingPage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [activeBtn, setActiveBtn] = useState("login");

  const [formData, setFormData] = useState({
    name: "Key Points",
    phoneEmail: "salend@vandaling.com",
    subject: "702-927-7777\n855-VDualing (855-834-2546)",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name && formData.phoneEmail) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);

      console.log("Form submitted:", formData);
    } else {
      alert("Please fill in at least your name and phone number.");
    }
  };

  const testimonials = [
    {
      text: "VoIPDialing has completely upgraded our communication. The call quality is excellent, uptime is consistent, and their support team is always quick to help. It's been a reliable solution for our growing business.",
      author: "Alex Hales",
      position: "Operations Manager",
    },
  ];

  const services = [
    {
      title: "Cloud PBX Service",
      description:
        "The system allows for precise campaign starting enabling marketers to plan.",
      image: "desktop",
    },
    {
      title: "Cloud PBX Service",
      description:
        "The system allows for precise campaign starting enabling marketers to plan.",
      image: "mobile",
    },
    {
      title: "Cloud PBX Service",
      description:
        "The system allows for precise campaign starting enabling marketers to plan.",
      image: "tablet",
    },
  ];

  return (
    <>
      <div
        className="container w-full bg-gradient-to-r from-[#FFE8E0] to-[#E6F0FF]"
        // style={{ backgroundImage: `url('/bg_image.png')` }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4 py-20 items-center">
          <div>
            <div className="flex justify-center items-center panel bg-white w-70 h-8 rounded-[18px] mb-2 shadow-md">
              <span className="text-orange-600">
                No term or usage commitment
              </span>
            </div>

            <h1 className="text-4xl font-bold text-[#0B1C2D] leading-tight">
              Boost Your Business <br />
              Communication with <br />
              Reliable VoIP Solutions
            </h1>

            <ul className="mt-6 space-y-3 list-disc list-inside text-gray-700">
              <li>Crystal-clear conversations</li>
              <li>Scalable & cost-effective</li>
              <li>Flexible VoIP plans</li>
              <li>Reliable and secure connections</li>
            </ul>
            <div className="flex mt-6">
              <CustomButton
                onClick={() => setActiveBtn("login")}
                className={`
            ${baseBtn}
            ${activeBtn === "login" ? activeStyle : inactiveStyle}
            hover:!opacity-90 active:!scale-90
          `}
                value="Get Pricing"
              />

              <CustomButton
                onClick={() => setActiveBtn("signup")}
                className={`
            ${baseBtn}
            ${activeBtn === "signup" ? activeStyle : inactiveStyle}
            hover:!opacity-90 active:!scale-90
          `}
                value="Contact Sales"
              />
            </div>
          </div>

          <div className="relative">
            <div className="w-100 ml-12">
              <img
                src={image3}
                alt="Main User"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="border border-white border-2 absolute -top-4 -left-4 w-12 h-12 bg-white rounded-full shadow overflow-hidden">
              <img
                src={image1}
                alt="Profile 1"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="border border-white border-2 absolute top-10 -right-4 w-12 h-12 bg-white rounded-full shadow overflow-hidden">
              <img
                src={image2}
                alt="Profile 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="border border-white border-2 absolute top-100 -right-4 w-12 h-12 bg-white rounded-full shadow overflow-hidden">
              <img
                src={image2}
                alt="Profile 2"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="border border-white border-2 absolute bottom-6  w-12 h-12 bg-white rounded-full shadow overflow-hidden">
              <img
                src={image1}
                alt="Profile 3"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute bottom-4 right-22 bg-white px-6 py-4 rounded-xl shadow">
              <p className="text-orange-500 text-2xl font-bold">12K+</p>
              <p className="text-sm text-gray-600">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-60 flex justify-end mt-20 mb-4 px-4">
        <div className="relative flex items-center gap-6 p-8 bg-orange-50 rounded-4xl shadow-sm w-[85%] ml-auto">
          <div className="absolute top-12 -left-40 bg-orange-500 text-white rounded-2xl px-10 py-8 text-center shadow-lg z-10">
            <h2 className="text-4xl font-bold">200+</h2>
            <p className="mt-3 leading-snug text-sm">
              Certified & <br />
              Authorized <br />
              Reseller/Integrator
            </p>
          </div>

          <div className="flex-1 pl-16">
            <div className="flex justify-between">
              <p className="font-semibold text-gray-800 mb-6 leading-relaxed">
                We Empower your business with seamless,
                <br />
                high-quality calling solutions.
              </p>

              <p className="flex gap-2 w-100 font-semibold text-gray-800 mb-6 leading-relaxed">
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  rem molestiae consequatur!
                </span>
                <img
                  src={title6}
                  className="h-10 object-contain opacity-90"
                  alt="logo"
                />
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-8">
              <img
                src={title1}
                className="h-20 object-contain opacity-90"
                alt="logo"
              />
              <img
                src={title2}
                className="h-20 object-contain opacity-90"
                alt="logo"
              />
              <img
                src={title4}
                className="h-20 object-contain opacity-90"
                alt="logo"
              />
              <img
                src={title5}
                className="h-20 object-contain opacity-90"
                alt="logo"
              />
              <img
                src={title6}
                className="h-20 object-contain opacity-90"
                alt="logo"
              />
              <img
                src={title7}
                className="h-20 object-contain opacity-90"
                alt="logo"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-6 py-12">
          <div className="flex justify-between items-center mb-12">
            <div className="text-orange-500 flex items-center gap-2 text-sm font-medium">
              <Package className="w-4 h-4" />
              Our Services
            </div>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium shadow-lg transition-all">
              Schedule Demo
            </button>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12">
            Business Communication Services We Offer
          </h1>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <Phone className="w-5 h-5 text-orange-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Cloud PBX
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Cloud PBX Everything your business needs to be efficient and
                  fully connected
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <MessageSquare className="w-5 h-5 text-orange-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Bulk SMS
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  High-delivery SMS solutions for marketing, alerts, and
                  customer engagement at scale.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <Wifi className="w-5 h-5 text-orange-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    VOIP Lines
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Crystal-clear VoIP calling with stable connectivity and low
                  latency for businesses and call centers.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <Hash className="w-5 h-5 text-orange-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Phone Numbers
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Local and international virtual phone numbers with flexible
                  routing and failover.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <Package className="w-5 h-5 text-orange-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Equipment
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Plug-and-play IP phones, IP-PBX, and VoIP hardware for
                  complete communication setups
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-orange-500 flex items-center gap-2 text-sm font-medium mb-4">
                <Wifi className="w-4 h-4" />
                How We Work
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Cloud Phone Systems
              </h2>
              <p className="text-2xl font-bold text-gray-800 mb-6">
                Unified, Simplified and Efficient
              </p>

              <p className="text-gray-600 mb-8 text-sm leading-relaxed">
                Cloud PBX delivers everything your business needs to communicate
                efficiently. Built for remote teams and multi-location
                businesses, our cloud phone systems are secure, scalable, and
                easy to manage.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-2">
                  <div className="bg-orange-500 rounded-full p-1 mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm text-gray-700">
                    Don't buy expensive equipment
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="bg-orange-500 rounded-full p-1 mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm text-gray-700">
                    Complete cloud-based communication services
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="bg-orange-500 rounded-full p-1 mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm text-gray-700">
                    Advanced Class 5 PBX features
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="bg-orange-500 rounded-full p-1 mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm text-gray-700">
                    Easily scalable as your business grows
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="bg-orange-500 rounded-full p-1 mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm text-gray-700">
                    Geographic flexibility for remote teams
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Package className="w-8 h-8 text-orange-500" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-800">20+</div>
                    <div className="text-sm text-gray-600">
                      Years of Experience
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Phone className="w-8 h-8 text-orange-500" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-800">509+</div>
                    <div className="text-sm text-gray-600">Calls Per Day</div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium shadow-lg transition-all">
                  Get Pricing
                </button>
                <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-3 rounded-full font-medium transition-all">
                  Contact Sales
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-4">
                No credit card required
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-16">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative bg-gradient-to-br from-blue-100 to-blue-200 p-12">
                <div className="w-32">
                  <img src={HeadPhones} alt="logo" />
                </div>

                <div className="absolute bottom-8 left-8 grid grid-cols-5 gap-2">
                  <div className="w-32">
                    <img src={Dots} alt="logo" />
                  </div>
                </div>

                <div className="relative z-10 flex justify-center items-end h-96">
                  <div>
                    <div className="w-100 mb-32">
                      <img
                        src={CallCenter}
                        alt="Main User"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-12 right-12 bg-white rounded-2xl p-6 shadow-xl">
                  <div className="text-5xl font-bold text-orange-500 mb-1">
                    20+
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    Years Experience
                  </div>
                </div>
              </div>

              <div className="p-12">
                <div className="text-orange-500 text-sm font-semibold tracking-wider uppercase mb-4">
                  BUSINESS GROWTH
                </div>

                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                  Grow your business stronger
                </h2>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  VoipDailing delivers a powerful SIP-based Cloud PBX platform
                  that runs seamlessly across cloud, on-premise, and hybrid
                  environments. Our system supports IP phones, softphones,
                  mobile apps, and WebRTC clients, enabling businesses to
                  communicate effortlessly across multiple locations.
                </p>

                <p className="text-gray-600 mb-8 leading-relaxed">
                  VoipDailing integrates seamlessly with leading CRM and
                  business applications, allowing you to streamline workflows
                  and maximize productivity. With a secure, feature-rich, and
                  reliable Cloud PBX solution, VoipDailing empowers businesses
                  to stay connected, efficient, and future-ready.
                </p>

                <div className="flex gap-4">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium shadow-lg transition-all">
                    Explore Services
                  </button>
                  <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-3 rounded-full font-medium transition-all">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white flex flex-col">
        <div className="text-center py-3 text-xs tracking-widest text-orange-400 font-semibold">
          SOFTWARE DEMO
        </div>

        <h1 className="text-2xl md:text-3xl font-semibold text-center text-slate-800 mb-4">
          Get up and running in minutes
        </h1>

        <div className="mx-auto w-full max-w-6xl bg-white/80 rounded-2xl shadow-xl border border-orange-100 p-2 md:p-4 flex-1">
          <img src={Detailed} />
        </div>
      </div>
      <div className="min-h-screen bg-white flex items-center justify-center p-6">
        <div className="max-w-7xl w-full bg-white rounded-2xl shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-8 flex flex-col justify-center">
            <p className="uppercase tracking-widest text-orange-500 font-semibold mb-2">
              Benefits
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
              Benefits of working with
              <br />
              Voip Dialing
            </h1>
            <p className="text-gray-600 leading-relaxed mb-8">
              At Voip Dialing®, we go beyond basic calling to deliver
              enterprise-grade communication you can rely on. Experience
              crystal-clear voice quality, prioritized Quality of Service across
              our IP network, advanced security, and fast, hassle-free
              implementation—so your business stays connected without
              complexity.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                "99.9% Network Reliability",
                "Crystal-Clear Voice Quality",
                "Cost-Efficient Plans",
                "Fast Setup & Expert Support",
                "Unlimited outgoing concurrent calls",
                "No term or usage commitment",
              ].map((item) => (
                <div key={item} className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5" />
                  <span className="text-gray-800 text-sm font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button className="bg-orange-500 text-white font-semibold px-5 py-2.5 rounded-full hover:bg-orange-600 transition">
                Get Pricing
              </button>
              <button className="border border-gray-200 text-gray-800 font-semibold px-5 py-2.5 rounded-full hover:bg-gray-50 transition">
                Contact Sales
              </button>
              <span className="text-gray-400 text-sm">
                No credit card required
              </span>
            </div>
          </div>

          <div className="relative p-6 flex items-center justify-center">
            <div className="relative w-full h-full">
              <img
                src="https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&w=1200&auto=format&fit=crop"
                alt="Happy client using VoIP"
                className="w-full h-full object-cover rounded-2xl"
              />

              <div className="absolute -bottom-6 left-6 bg-white shadow-lg rounded-xl px-6 py-4">
                <div className="text-3xl font-bold text-orange-500">12K+</div>
                <div className="text-gray-600 text-sm">Happy Client</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
        <div className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-4">
              <p className="text-orange-400 uppercase tracking-wider text-sm font-semibold">
                Testimonials
              </p>
            </div>

            <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
              What Our Clients are Saying
            </h2>

            <div className="relative flex items-center justify-center">
              <div className="absolute -left-8 top-0 w-20 h-20 rounded-full bg-gradient-to-br from-orange-400 to-pink-400 overflow-hidden shadow-lg">
                <div className="w-full h-full bg-orange-300">
                  <img src={Doctor1} />
                </div>
              </div>

              <div className="absolute -left-4 bottom-12 w-16 h-16 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 overflow-hidden shadow-lg">
                <div className="w-full h-full bg-orange-300">
                  <img src={Doctor5} />
                </div>
              </div>

              <div className="absolute -right-8 top-4 w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 overflow-hidden shadow-lg">
                <div className="w-full h-full bg-orange-300">
                  <img src={Doctor2} />
                </div>
              </div>

              <div className="absolute -right-4 bottom-8 w-16 h-16 rounded-full bg-gradient-to-br from-purple-300 to-purple-400 overflow-hidden shadow-lg">
                <div className="w-full h-full bg-orange-300">
                  <img src={Doctor3} />
                </div>
              </div>

              <div className="absolute right-1/3 bottom-2 w-14 h-14 rounded-full bg-gradient-to-br from-orange-300 to-orange-400 overflow-hidden shadow-lg">
                <div className="w-full h-full bg-orange-300">
                  <img src={Doctor4} />
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto relative z-10 border border-gray-100">
                <div className="flex justify-center mb-6">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                </div>

                <p className="text-gray-600 text-center mb-6 leading-relaxed">
                  {testimonials[currentTestimonial].text}
                </p>

                <div className="text-center">
                  <p className="text-orange-500 font-semibold">
                    {testimonials[currentTestimonial].author}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {testimonials[currentTestimonial].position}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <button className="w-10 h-10 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center text-white shadow-lg transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center text-white shadow-lg transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-4">
              <p className="text-orange-400 uppercase tracking-wider text-sm font-semibold">
                VOIP BLOGS
              </p>
            </div>

            <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
              The Services you really need for growing fast
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-orange-300 via-pink-300 to-blue-500 p-8 h-80 flex items-center justify-center shadow-xl hover:shadow-2xl transition-shadow">
                    <div className="relative w-full h-full flex items-center justify-center">
                      {index === 0 && (
                        <div className="bg-gray-800 rounded-lg p-4 w-48 h-32 shadow-2xl">
                          <div className="bg-white rounded h-full"></div>
                        </div>
                      )}
                      {index === 1 && (
                        <div className="bg-white rounded-2xl p-4 w-32 h-56 shadow-2xl">
                          <div className="bg-gray-100 rounded h-full"></div>
                        </div>
                      )}
                      {index === 2 && (
                        <div className="bg-gray-800 rounded-xl p-4 w-56 h-40 shadow-2xl">
                          <div className="bg-blue-400 rounded h-full"></div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mb-24 w-full bg-white shadow-2xl rounded-xl overflow-hidden flex flex-col md:flex-row">
        <div className="bg-[#FF6B35] text-white p-8 md:p-12 lg:p-16 flex-1">
          <div className="max-w-md">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              READY TO
              <br />
              GROW BUSINESS
              <br />
              <span className="text-white font-black">WITH US</span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold mb-6 mt-8">
              REQUEST A CALL
            </h2>

            <p className="text-lg md:text-xl mb-10 opacity-90 leading-relaxed">
              Our team will call you back promptly to discuss how we can help
              grow your business.
            </p>

            <div className="h-px bg-white/20 my-8"></div>
          </div>
        </div>

        <div className="bg-white p-8 md:p-12 lg:p-16 flex-1 flex items-center">
          <div className="w-full max-w-md mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-8">
              Request a Call
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35] outline-none transition"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phoneEmail"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Phone & Email (optional)
                </label>
                <input
                  type="text"
                  id="phoneEmail"
                  name="phoneEmail"
                  value={formData.phoneEmail}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35] outline-none transition"
                  placeholder="Enter phone number"
                  required
                />
                <p className="text-sm text-gray-500 mt-1 italic">
                  Email is optional but helpful for follow-up
                </p>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Subject
                </label>
                <textarea
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35] outline-none transition resize-none"
                  placeholder="What would you like to discuss?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#FF6B35] hover:bg-[#e55a2b] text-white font-semibold py-4 px-6 rounded-lg transition duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Request a Call
              </button>

              {isSubmitted && (
                <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-lg border border-green-200 animate-pulse">
                  ✓ Thank you! We'll call you back shortly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
