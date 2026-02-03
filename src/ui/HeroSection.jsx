import { useState, useEffect } from "react";

import image1 from "../../public/image1.jpg";
import image2 from "../../public/image2.jpg";
import image3 from "../../public/image3.png";
import image4 from "../../public/image4.jpg";
import image5 from "../../public/image5.png";
import image6 from "../../public/image6.jpg";
import image7 from "../../public/image7.jpg";
import image8 from "../../public/iimage8.jpg";
import image9 from "../../public/image9.jpg";

import { CustomButton, CustomButtonTwin } from "./CustomButton";
import { Link } from "react-router";

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      badge: "No term or usage commitment",
      image: image5,
      title: (
        <>
          <span>
            Reliable
            <span className="highlight bg-purple-500">Cloud PBX</span>
            for
          </span>
          <span>
            <span className="highlight bg-purple-500">Growing</span>
            Bussiness
          </span>
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
      image: image4,
      title: (
        <>
          Boost Your <span className="highlight bg-orange-500">Business</span>
          <br />
          <span className="highlight bg-orange-500">
            Communication
          </span> with <br />
          Reliable VoIP Solutions
        </>
      ),
      features: [
        "Crystal-clear conversational VoIP routes",
        "Stable dialer & SIP connectivity worldwide",
        "Low latency with high ASR & ACD",
        "Flexible, scalable, and cost-effective VoIP plans",
      ],
      stats: { count: "12K+", label: "Happy Clients World Widw" },
    },
    {
      badge: "High Delivery Rates",
      image: image3,
      title: (
        <>
          Reach <span className="highlight bg-purple-500">Customers</span>
          <br />
          <span className="highlight bg-purple-500">Instantly</span> with Our{" "}
          <br />
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
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[activeSlide];

  return (
    <div className="md:p-[8px]">
      <div className="grid mx-12 grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6 text-center md:text-left">
          <div
            key={`badge-${activeSlide}`}
            className="inline-flex items-center bg-white px-7 py-2 rounded-[18px] shadow-md animate-fadeIn"
          >
            <span className="text-orange-600 font-medium">
              {currentSlide.badge}
            </span>
          </div>

          <h1
            key={`title-${activeSlide}`}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-[#0B1C2D] leading-tight animate-fadeIn"
          >
            {currentSlide.title}
          </h1>

          <ul className="space-y-3 text-gray-700">
            {currentSlide.features.map((feature, index) => (
              <li
                key={`${activeSlide}-${index}`}
                className="flex items-center gap-3 animate-slideIn"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className="w-2 h-2 bg-orange-500 rounded-full" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
            <CustomButtonTwin
              className="shadow-md bg-orange-500 text-white font-semibold px-6 py-3 rounded-full cursor-pointer hover:bg-blue-500 transition"
              value={<span className="text-[14px]">Talk to Sales</span>}
            />
            <Link to={"/pricing"}>
            <CustomButton
              className="bg-white shadow-md border hover:text-white border-gray-200 text-gray-800 font-semibold cursor-pointer px-6 py-3 rounded-full hover:bg-blue-500 transition"
              value={<span className="text-[14px]">Get Pricing</span>}
            />
            </Link>
          </div>
        </div>

        <div className="relative h-[400px] sm:h-[450px] md:h-[500px] flex items-center justify-center">
          <div
            key={`main-image-${activeSlide}`}
            className={`w-full animate-fadeIn flex justify-center
    ${activeSlide === 0 ? "max-w-7xl" : "max-w-md"}
  `}
          >
            <img
              src={currentSlide.image}
              alt="Business Communication"
              className={`transition-all duration-500 object-cover

      ${
        activeSlide === 0
          ? "rounded-lg w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl object-contain"
          : ""
      }

      ${activeSlide === 1 ? "rounded-2xl scale-110 h-[420px]" : ""}

      ${activeSlide === 2 ? "rounded-xl h-[460px] md:h-[520px]" : ""}
    `}
            />
          </div>

          {activeSlide === 1 && (
            <>
              <div className="absolute -top-6 left-1/2 w-14 h-14 rounded-full bg-white overflow-hidden">
                <img src={image6} className="w-full h-full object-cover" />
              </div>

              <div className="absolute top-10 -left-6 w-14 h-14 rounded-full bg-white overflow-hidden">
                <img src={image7} className="w-full h-full object-cover" />
              </div>

              <div className="absolute top-10 -right-6 w-14 h-14 rounded-full bg-white overflow-hidden">
                <img src={image8} className="w-full h-full object-cover" />
              </div>

              <div className="absolute bottom-24 right-10 w-14 h-14 rounded-full bg-white overflow-hidden">
                <img src={image9} className="w-full h-full object-cover" />
              </div>
            </>
          )}

          {activeSlide === 2 && (
            <>
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-white rounded-full overflow-hidden animate-float">
                <img src={image2} className="w-full h-full object-cover" />
              </div>

              <div
                className="absolute top-10 -right-4 w-12 h-12 bg-white rounded-full overflow-hidden animate-float"
                style={{ animationDelay: "0.5s" }}
              >
                <img src={image1} className="w-full h-full object-cover" />
              </div>

              <div
                className="absolute top-1/2 -right-4 w-12 h-12 bg-white rounded-full overflow-hidden animate-float"
                style={{ animationDelay: "1s" }}
              >
                <img src={image2} className="w-full h-full object-cover" />
              </div>

              <div
                className="absolute bottom-20 -left-4 w-12 h-12 bg-white rounded-full overflow-hidden animate-float"
                style={{ animationDelay: "1.5s" }}
              >
                <img src={image1} className="w-full h-full object-cover" />
              </div>
            </>
          )}

          {activeSlide !== 0 && (
            <div className="absolute flex gap-2 flex-col justify-center items-center w-[217px] h-[127px] bottom-8 -left-12 bg-white px-6 py-4 rounded-xl shadow-lg animate-slideUp">
              <p className="text-orange-500 text-4xl font-bold">
                {currentSlide.stats.count}
              </p>
              <p className="text-sm text-gray-600 text-center">
                {currentSlide.stats.label}
              </p>
            </div>
          )}
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

        @keyframes highlight {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
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

        .highlight {
          display: inline-block;
          padding: 0.25rem 0.75rem;
          margin: 0.15rem 0;
          border-radius: 0.375rem;
          color: white;
          animation: highlight 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
