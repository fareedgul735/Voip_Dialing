import React, { useState, useEffect } from "react";
import { Cloud, MessageSquare, Phone, Hash, Settings } from "lucide-react";
import { CustomButton, CustomButtonTwin } from "./CustomButton";
import { Link } from "react-router";

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
        "Complete cloud-based communication services",
        "Easily scalable as your business grows",
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

  return (
    <div className="container">
      <div className="mx-4 md:mx-8 lg:mx-12">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 mb-10 text-center md:text-left">
          <div>
            <p className="text-orange-500 flex items-center gap-2 mb-3 justify-center md:justify-start">
              <Settings className="w-5 h-5" />
              Our Services
            </p>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Business Communication Services We Offer
            </h1>
          </div>

          <div className="flex gap-3 justify-center md:justify-end mt-4 md:mt-0">
            <Link>
              <CustomButtonTwin
                className="cursor-pointer shadow-md bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition"
                value={<span>Schedule Demo</span>}
              />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[25%_75%] gap-10">
          <div className="space-y-4">
            {services.map((service, index) => {
              const ServiceIcon = service.icon;
              const isActive = index === activeService;

              return (
                <div
                  key={index}
                  onClick={() => setActiveService(index)}
                  className={`flex gap-4 p-3 rounded-md cursor-pointer transition-all duration-300
                  ${isActive ? "bg-white" : ""}`}
                >
                  <div
                    className={`w-1 rounded-full ${isActive ? "bg-orange-500" : ""}`}
                  />

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <div
                        className={`p-2 rounded-lg ${isActive ? "bg-orange-100" : ""}`}
                      >
                        <ServiceIcon
                          className={`w-5 h-5 ${isActive ? "text-orange-500" : "text-gray-400"}`}
                        />
                      </div>
                      <h3
                        className={`text-lg font-bold ${isActive ? "text-gray-900" : "text-gray-500"}`}
                      >
                        {service.title}
                      </h3>
                    </div>

                    <p
                      className={`text-sm ${isActive ? "text-gray-600" : "text-gray-400"}`}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="space-y-4 ml-2">
            <p className="text-orange-500 flex items-center gap-2 mb-2">
              <Settings className="w-4 h-4" />
              How We Work
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
              {currentService.mainTitle}
            </h2>
            <h3 className="text-lg text-gray-600 mb-4">
              {currentService.mainSubtitle}
            </h3>

            <p className="text-gray-600 mb-6">
              {currentService.mainDescription}
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              {currentService.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-center gap-3">
                <Settings className="w-8 h-8 text-orange-500" />
                <div>
                  <p className="text-2xl font-bold text-orange-500">
                    {currentService.stats.years}
                  </p>
                  <p className="text-sm text-gray-600">Years of Experience</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-8 h-8 text-orange-500" />
                <div>
                  <p className="text-2xl font-bold text-orange-500">
                    {currentService.stats.calls}
                  </p>
                  <p className="text-sm text-gray-600">Calls Per Day</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-start mb-4">
              <Link to={"/pricing"}>
                <CustomButtonTwin
                  className="cursor-pointer shadow-md bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition"
                  value={<span>Get Pricing</span>}
                />
              </Link>
              <Link to={"/contact"}>
                <CustomButton
                  className="cursor-pointer shadow-md border border-gray-200 text-gray-800 px-6 py-3  hover:text-white rounded-full hover:bg-blue-500 transition"
                  value={<span>Contact Sales</span>}
                />
              </Link>
            </div>

            <p className="text-xs text-gray-500 mt-2">
              No credit card required
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCommunicationServices;
