import { useState } from "react";


import { CheckCircle } from "lucide-react";

import { ChevronLeft, ChevronRight } from "lucide-react";

import HeadPhones from "../../public/HeadPhone.png";
import CallCenter from "../../public/CallCenter.png";
import Dots from "../../public/Dots.png";

import Doctor1 from "../../public/Doctor 1.png";
import Doctor2 from "../../public/Doctor 2.png";
import Doctor3 from "../../public/Doctor 3.png";
import Doctor4 from "../../public/Doctor 4.jpg";
import Doctor5 from "../../public/Doctor 5.png";
import Detailed from "../../public/VoipDeatiling.png";
import BusinessCommunicationServices from "../ui/BusinessComunicationService";
import HeroSection from "../ui/HeroSection";
import BrandName from "../ui/BrandName";

const LandingPage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
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
      <div className="p-[28px] bg-[linear-gradient(101.26deg,_#FAF5F5_0%,_#FFF2F2_27.63%,_#F9EDFF_39.44%,_#F9F7FF_54.44%,_#999CFF_100%)]">
        <HeroSection />
      </div>
      <div className="w-full p-[28px] h-60 flex justify-end mt-20 mb-4 px-4">
        <BrandName />
      </div>
      <div className="w-full bg-[#FAF9F6]">
        <BusinessCommunicationServices />
      </div>
      <div className="container mx-auto px-6 py-16">
        <div className="bg-white rounded-3xl  overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative p-12">
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

              <div className="absolute bottom-42 right-42 bg-white rounded-2xl p-6 shadow-xl z-12">
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
                environments. Our system supports IP phones, softphones, mobile
                apps, and WebRTC clients, enabling businesses to communicate
                effortlessly across multiple locations.
              </p>

              <p className="text-gray-600 mb-8 leading-relaxed">
                VoipDailing integrates seamlessly with leading CRM and business
                applications, allowing you to streamline workflows and maximize
                productivity. With a secure, feature-rich, and reliable Cloud
                PBX solution, VoipDailing empowers businesses to stay connected,
                efficient, and future-ready.
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
      <div className="w-full  bg-white flex items-center justify-center p-6">
        <div className="max-w-7xl w-full bg-white rounded-2xl  overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-8">
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
      <div className="w-full bg-[#FAF9F6] flex flex-col">
        <div className="text-center py-3 text-xs tracking-widest text-orange-400 font-semibold">
          SOFTWARE DEMO
        </div>

        <h1 className="text-2xl md:text-3xl font-semibold text-center text-slate-800 mb-4">
          Get up and running in minutes
        </h1>

        <div className="mx-auto w-full max-w-6xl bg-white/80 rounded-2xl shadow-xl shadow-orange-300 border border-orange-100 p-2 md:p-4 flex-1">
          <img src={Detailed} />
        </div>
      </div>
      <div className="w-full bg-gradient-to-b from-orange-50 to-white">
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

              <div className="bg-white border border-sky-500 rounded-2xl shadow-xl p-8 max-w-2xl mx-auto relative z-10 border border-gray-100">
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
    </>
  );
};

export default LandingPage;
