import { useState, useEffect } from "react";

import image1 from "../../public/image1.jpg";
import image2 from "../../public/image2.jpg";
import image3 from "../../public/image3.png";

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeBtn, setActiveBtn] = useState("login");

  const slides = [
    {
      badge: "No term or usage commitment",
      title: (
        <>
          Boost Your Business <br />
          Communication with <br />
          Reliable VoIP Solutions
        </>
      ),
      features: [
        "Crystal-clear conversations",
        "Scalable & cost-effective",
        "Flexible VoIP plans",
        "Reliable and secure connections",
      ],
      stats: { count: "12K+", label: "Happy Clients" },
    },
    {
      badge: "24/7 Customer Support",
      title: (
        <>
          Transform Your Business <br />
          with Cloud PBX <br />
          Phone Systems
        </>
      ),
      features: [
        "Advanced call management",
        "Multi-location support",
        "Easy to manage dashboard",
        "Enterprise-grade security",
      ],
      stats: { count: "500+", label: "Daily Calls" },
    },
    {
      badge: "High Delivery Rates",
      title: (
        <>
          Reach Customers <br />
          Instantly with Our <br />
          Bulk SMS Solutions
        </>
      ),
      features: [
        "Global SMS coverage",
        "Real-time delivery reports",
        "Automated campaigns",
        "Cost-effective pricing",
      ],
      stats: { count: "1M+", label: "Messages Sent" },
    },
    {
      badge: "Global Coverage",
      title: (
        <>
          Get Virtual Phone <br />
          Numbers from <br />
          Around the World
        </>
      ),
      features: [
        "Local & international numbers",
        "Instant activation",
        "Flexible routing options",
        "No hardware required",
      ],
      stats: { count: "50+", label: "Countries" },
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[activeSlide];

  const baseBtn =
    "px-6 py-3 rounded-lg font-semibold transition-all duration-300 mr-4";
  const activeStyle = "bg-orange-500 text-white";
  const inactiveStyle = "bg-white text-orange-500 border-2 border-orange-500";

  return (
    <div className="p-6 sm:p-7 md:p-[28px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto">
        <div className="space-y-6 text-center md:text-left">
          <div
            key={`badge-${activeSlide}`}
            className="inline-flex justify-center md:justify-start items-center bg-white px-5 sm:px-6 py-2 rounded-[18px] shadow-md animate-fadeIn"
          >
            <span className="text-orange-600 font-medium">
              {currentSlide.badge}
            </span>
          </div>

          <h1
            key={`title-${activeSlide}`}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1C2D] leading-tight animate-fadeIn"
          >
            {currentSlide.title}
          </h1>

          <ul className="space-y-3 text-gray-700">
            {currentSlide.features.map((feature, index) => (
              <li
                key={`${activeSlide}-${index}`}
                className="flex items-center gap-3 animate-slideIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
            <button
              onClick={() => setActiveBtn("login")}
              className={`${baseBtn} ${
                activeBtn === "login" ? activeStyle : inactiveStyle
              } hover:opacity-90 active:scale-95`}
            >
              Get Pricing
            </button>

            <button
              onClick={() => setActiveBtn("signup")}
              className={`${baseBtn} ${
                activeBtn === "signup" ? activeStyle : inactiveStyle
              } hover:opacity-90 active:scale-95`}
            >
              Contact Sales
            </button>
          </div>
        </div>

        <div className="relative h-[400px] sm:h-[450px] md:h-[500px] flex items-center justify-center">
          <div
            key={`main-${activeSlide}`}
            className="w-full max-w-md animate-fadeIn"
          >
            <img
              src={image3}
              alt="Business Communication"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="absolute -top-4 -left-4 w-10 h-10 sm:w-12 sm:h-12 md:w-12 md:h-12 bg-white border-2 border-white rounded-full shadow-lg overflow-hidden animate-float">
            <img
              src={image2}
              alt="Profile 1"
              className="w-full h-full object-cover"
            />
          </div>

          <div
            className="absolute top-10 -right-4 w-10 h-10 sm:w-12 sm:h-12 md:w-12 md:h-12 bg-white border-2 border-white rounded-full shadow-lg overflow-hidden animate-float"
            style={{ animationDelay: "0.5s" }}
          >
            <img
              src={image1}
              alt="Profile 2"
              className="w-full h-full object-cover"
            />
          </div>

          <div
            className="absolute top-1/2 -right-4 w-10 h-10 sm:w-12 sm:h-12 md:w-12 md:h-12 bg-white border-2 border-white rounded-full shadow-lg overflow-hidden animate-float"
            style={{ animationDelay: "1s" }}
          >
            <img
              src={image2}
              alt="Profile 3"
              className="w-full h-full object-cover"
            />
          </div>

          <div
            className="absolute bottom-20 -left-4 w-10 h-10 sm:w-12 sm:h-12 md:w-12 md:h-12 bg-white border-2 border-white rounded-full shadow-lg overflow-hidden animate-float"
            style={{ animationDelay: "1.5s" }}
          >
            <img
              src={image1}
              alt="Profile 4"
              className="w-full h-full object-cover"
            />
          </div>

          <div
            key={`stats-${activeSlide}`}
            className="absolute bottom-4 right-4 md:right-20 bg-white px-6 py-4 rounded-xl shadow-lg animate-slideUp"
          >
            <p className="text-orange-500 text-2xl font-bold">
              {currentSlide.stats.count}
            </p>
            <p className="text-sm text-gray-600">{currentSlide.stats.label}</p>
          </div>

          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeSlide ? "bg-orange-500 w-8" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
        .animate-slideIn {
          animation: slideIn 0.5s ease-out;
          animation-fill-mode: both;
        }
        .animate-slideUp {
          animation: slideUp 0.6s ease-out;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
