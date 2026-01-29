import { CheckCircle } from "lucide-react";

import HeadPhones from "../../public/HeadPhone.png";
import CallCenter from "../../public/CallCenter.png";
import Dots from "../../public/Dots.png";

import Detailed from "../../public/VoipDeatiling.png";
import BusinessCommunicationServices from "../ui/BusinessComunicationService";
import HeroSection from "../ui/HeroSection";
import BrandName from "../ui/BrandName";
import Testominals from "../ui/Testominals";
import { CustomButton, CustomButtonTwin } from "../ui/CustomButton";

const LandingPage = () => {
  return (
    <>
      <div className="p-[28px] bg-[linear-gradient(101.26deg,_#FAF5F5_0%,_#FFF2F2_27.63%,_#F9EDFF_39.44%,_#F9F7FF_54.44%,_#999CFF_100%)]">
        <HeroSection />
      </div>
      <div className="w-full p-[8px] h-70 flex justify-end mt-30 mb-4 px-4">
        <BrandName />
      </div>
      <div className="w-full bg-[#FAF9F6]">
        <BusinessCommunicationServices />
      </div>
      <div className="w-full mx-auto px-4 sm:px-6 py-10 sm:py-14 lg:py-16">
        <div className="bg-white rounded-3xl overflow-hidden">
          <div className="grid max-w-7xl mx-auto grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left Column with Image */}
            <div className="relative p-6 sm:p-8 md:p-10 lg:p-12 flex justify-center">
              {/* Headphones Logo */}
              <div className="w-16 sm:w-28 md:w-32 mb-4">
                <img src={HeadPhones} alt="logo" />
              </div>

              {/* Decorative Dots */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-28">
                <div className="w-20 sm:w-24 md:w-32">
                  <img src={Dots} alt="dots" />
                </div>
              </div>

              {/* Call Center Image - Centered and Bigger */}
              <div className="relative z-10 flex justify-center items-center h-72 sm:h-80 md:h-96 lg:h-[28rem]">
                <div className="w-80 sm:w-96 md:w-[28rem]">
                  <img
                    src={CallCenter}
                    alt="Call Center"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>

              {/* Experience Badge */}
              <div className="absolute bottom-6 right-4 sm:bottom-8 sm:right-6 md:bottom-10 md:right-10 bg-white rounded-2xl p-4 sm:p-5 md:p-6 shadow-xl z-20">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-500">
                  20+
                </div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">
                  Years Experience
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 md:p-10 lg:p-12 text-center md:text-left">
              <div className="text-orange-500 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3 sm:mb-4">
                BUSINESS GROWTH
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
                Grow your business stronger
              </h2>

              <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                VoipDailing delivers a powerful SIP-based Cloud PBX platform
                that runs seamlessly across cloud, on-premise, and hybrid
                environments. Our system supports IP phones, softphones, mobile
                apps, and WebRTC clients.
              </p>

              <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
                VoipDailing integrates seamlessly with leading CRM and business
                applications, helping you streamline workflows and maximize
                productivity.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <CustomButtonTwin
                  className="cursor-pointer shadow-md bg-orange-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-orange-600 transition"
                  value="Explore Services"
                />
                <CustomButton
                  className="cursor-pointer shadow-md border border-gray-200 text-gray-800 font-semibold px-6 py-3 rounded-full hover:bg-gray-50 transition"
                  value="Get Started"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white flex items-center justify-center px-4 sm:px-6 py-10 sm:py-14">
        <div className="max-w-7xl mx-auto bg-white rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-center text-center lg:text-left">
            <p className="uppercase tracking-widest text-orange-500 font-semibold mb-2 text-xs sm:text-sm">
              Benefits
            </p>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
              Benefits of working with
              <br className="hidden sm:block" />
              Voip Dialing
            </h1>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
              At Voip Dialing®, we go beyond basic calling to deliver
              enterprise-grade communication you can rely on. Experience
              crystal-clear voice quality, advanced security, and fast,
              hassle-free implementation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 sm:mb-8 text-left">
              {[
                "99.9% Network Reliability",
                "Crystal-Clear Voice Quality",
                "Cost-Efficient Plans",
                "Fast Setup & Expert Support",
                "Unlimited outgoing concurrent calls",
                "No term or usage commitment",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 mt-1" />
                  <span className="text-gray-800 text-sm font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center lg:justify-start">
              <CustomButtonTwin
                className={`cursor-pointer shadow-md bg-orange-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-orange-600 transition`}
                value={"Get Pricing"}
              />
              <CustomButton
                className={`cursor-pointer shadow-md border border-gray-200 text-gray-800 font-semibold px-6 py-3 rounded-full hover:bg-gray-50 transition`}
                value={"Contact Sales"}
              />

              <span className="text-gray-400 text-xs sm:text-sm">
                No credit card required
              </span>
            </div>
          </div>

          <div className="relative p-4 sm:p-6 flex items-center justify-center">
            <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-full">
              <img
                src="https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&w=1200&auto=format&fit=crop"
                alt="Happy client using VoIP"
                className="w-full h-full object-cover rounded-2xl"
              />

              <div className="absolute bottom-4 left-4 sm:-bottom-6 sm:left-6 bg-white shadow-lg rounded-xl px-4 sm:px-6 py-3 sm:py-4">
                <div className="text-2xl sm:text-3xl font-bold text-orange-500">
                  12K+
                </div>
                <div className="text-gray-600 text-xs sm:text-sm">
                  Happy Client
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#FAF9F6] flex flex-col">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-3  tracking-widest text-orange-400">
            <span className="text-lg"> SOFTWARE DEMO</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold text-center text-slate-800 mb-4">
            Get up and running in minutes
          </h1>

          <div className="mx-auto w-full max-w-6xl bg-white/80 rounded-2xl shadow-xl shadow-orange-300 border border-orange-100 p-2 md:p-4 flex-1">
            <img src={Detailed} />
          </div>
        </div>
      </div>
      <div className="w-full bg-gradient-to-b from-orange-50 to-white">
        <Testominals />
      </div>
    </>
  );
};

export default LandingPage;
