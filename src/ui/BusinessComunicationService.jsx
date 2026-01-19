import React, { useState, useEffect } from "react";
import { Cloud, MessageSquare, Phone, Hash, Settings } from "lucide-react";
import { CustomButton, CustomButtonTwin } from "./CustomButton";

const BusinessCommunicationServices = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: Cloud,
      title: "Cloud PBX",
      description:
        "Cloud PBX Everything your business needs to be efficient and stay connected",
      mainTitle: "Cloud Phone Systems",
      mainSubtitle: "Unified, Simplified and Efficient",
      mainDescription:
        "Cloud PBX delivers everything your business needs to communicate efficiently. Built for remote teams and multi-location businesses, our cloud phone systems are secure, scalable, and easy to manage.",
      features: [
        "Don't buy expensive equipment",
        "Advanced Class 5 PBX features",
        "Geographic flexibility for remote teams",
      ],
      stats: { years: "20+", calls: "509+" },
    },
    {
      icon: MessageSquare,
      title: "Bulk SMS",
      description:
        "High-delivery SMS solutions for marketing, alerts, and customer engagement at scale.",
      mainTitle: "Bulk SMS Solutions",
      mainSubtitle: "Reach Customers Instantly",
      mainDescription:
        "Send thousands of messages instantly with our reliable SMS platform. Perfect for marketing campaigns, alerts, and customer notifications with high delivery rates.",
      features: [
        "High delivery rates guaranteed",
        "Global SMS coverage",
        "Real-time analytics and reporting",
      ],
      stats: { years: "20+", calls: "1000+" },
    },
    {
      icon: Phone,
      title: "VOIP Lines",
      description:
        "Crystal-clear VoIP calling with stable connectivity and low latency for businesses and call centers.",
      mainTitle: "VoIP Communication",
      mainSubtitle: "Crystal Clear Calling",
      mainDescription:
        "Experience superior voice quality with our VoIP solutions. Designed for businesses and call centers requiring reliable, low-latency communication channels.",
      features: [
        "Crystal-clear voice quality",
        "Stable connectivity guaranteed",
        "Low latency for seamless calls",
      ],
      stats: { years: "20+", calls: "750+" },
    },
    {
      icon: Hash,
      title: "Phone Numbers",
      description:
        "Local and international virtual phone numbers with flexible routing and failover.",
      mainTitle: "Virtual Phone Numbers",
      mainSubtitle: "Global Presence, Local Touch",
      mainDescription:
        "Establish your presence anywhere with our virtual phone numbers. Get local and international numbers with intelligent routing and failover capabilities.",
      features: [
        "Local & international numbers",
        "Flexible routing options",
        "Automatic failover protection",
      ],
      stats: { years: "20+", calls: "300+" },
    },
    {
      icon: Settings,
      title: "Equipment",
      description:
        "Plug-and-play IP phones, IP-PBX, and VoIP hardware for complete communication setups.",
      mainTitle: "Communication Equipment",
      mainSubtitle: "Professional Grade Hardware",
      mainDescription:
        "Get enterprise-grade communication hardware delivered to your door. Our plug-and-play equipment ensures seamless setup and reliable performance.",
      features: [
        "Plug-and-play setup",
        "Enterprise-grade hardware",
        "Complete communication solutions",
      ],
      stats: { years: "20+", calls: "200+" },
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const currentService = services[activeService];
  const Icon = currentService.icon;

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 mb-10 sm:mb-12 text-center md:text-left">
          <div>
            <p className="text-orange-500 flex items-center gap-2 mb-3 justify-center md:justify-start">
              <Settings className="w-5 h-5" />
              Our Services
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-3xl font-bold text-gray-900">
              Business Communication Services We Offer
            </h1>
          </div>

          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-colors self-center md:self-auto">
            Schedule Demo
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12">
          <div className="space-y-6">
            {services.map((service, index) => {
              const ServiceIcon = service.icon;
              const isActive = index === activeService;

              return (
                <div
                  key={index}
                  className={`flex gap-4 transition-all duration-500 ${
                    isActive ? "opacity-100" : "opacity-40"
                  }`}
                >
                  <div
                    className={`w-1 rounded-full transition-all duration-500 ${
                      isActive ? "bg-orange-500" : "bg-transparent"
                    }`}
                  />

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className={`p-2 rounded-lg transition-colors duration-500 ${
                          isActive ? "bg-orange-100" : "bg-gray-100"
                        }`}
                      >
                        <ServiceIcon
                          className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors duration-500 ${
                            isActive ? "text-orange-500" : "text-gray-400"
                          }`}
                        />
                      </div>
                      <h3
                        className={`text-lg sm:text-xl font-bold transition-colors duration-500 ${
                          isActive ? "text-gray-900" : "text-gray-500"
                        }`}
                      >
                        {service.title}
                      </h3>
                    </div>

                    <p
                      className={`text-sm leading-relaxed transition-colors duration-500 ${
                        isActive ? "text-gray-600" : "text-gray-400"
                      }`}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center lg:text-left">
            <div className="mb-6">
              <p className="text-orange-500 flex items-center gap-2 mb-2 justify-center lg:justify-start">
                <Settings className="w-4 h-4" />
                How We Work
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 transition-opacity duration-500">
                {currentService.mainTitle}
              </h2>

              <h3 className="text-lg sm:text-xl text-gray-600 transition-opacity duration-500">
                {currentService.mainSubtitle}
              </h3>
            </div>

            <p className="text-gray-600 text-sm sm:text-base mb-6 transition-opacity duration-500">
              {currentService.mainDescription}
            </p>

            <div className="space-y-3 mb-8 text-left">
              {currentService.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 transition-all duration-500"
                  style={{
                    opacity: 0,
                    animation: `fadeIn 0.5s ease-in ${index * 0.1}s forwards`,
                  }}
                >
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm sm:text-base">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center gap-3 justify-start lg:justify-start">
                <div className="p-3 bg-orange-100 rounded-full">
                  <Settings className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-bold text-orange-500">
                    {currentService.stats.years}
                  </p>
                  <p className="text-sm text-gray-600">Years of Experience</p>
                </div>
              </div>

              <div className="flex items-center gap-3 justify-start lg:justify-start">
                <div className="p-3 bg-orange-100 rounded-full">
                  <Phone className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-bold text-orange-500">
                    {currentService.stats.calls}
                  </p>
                  <p className="text-sm text-gray-600">Calls Per Day</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <CustomButtonTwin
                className={`cursor-pointer shadow-md bg-orange-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-orange-600 transition`}
                value={"Get Pricing"}
              />
              <CustomButton
                className={`cursor-pointer shadow-md border border-gray-200 text-gray-800 font-semibold px-6 py-3 rounded-full hover:bg-gray-50 transition`}
                value={"Contact Sales"}
              />
            </div>

            <p className="text-xs sm:text-sm text-gray-500 mt-4 text-center lg:text-left">
              No credit card required
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default BusinessCommunicationServices;
