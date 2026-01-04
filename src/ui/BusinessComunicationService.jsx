import React, { useState, useEffect } from "react";
import { Cloud, MessageSquare, Phone, Hash, Settings } from "lucide-react";

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
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <p className="text-orange-500 flex items-center gap-2 mb-4">
              <Settings className="w-5 h-5" />
              Our Services
            </p>
            <h1 className="text-3xl md:text-3xl font-bold text-gray-900">
              Business Communication Services We Offer
            </h1>
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-colors">
            Schedule Demo
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
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
                      isActive ? "bg-orange-500" : "bg-transperency"
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
                          className={`w-6 h-6 transition-colors duration-500 ${
                            isActive ? "text-orange-500" : "text-gray-400"
                          }`}
                        />
                      </div>
                      <h3
                        className={`text-xl font-bold transition-colors duration-500 ${
                          isActive ? "text-gray-900" : "text-gray-500"
                        }`}
                      >
                        {service.title}
                      </h3>
                    </div>
                    <p
                      className={`text-sm transition-colors duration-500 ${
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

          <div className="">
            <div className="mb-6">
              <p className="text-orange-500 flex items-center gap-2 mb-2">
                <Settings className="w-4 h-4" />
                How We Work
              </p>
              <h2 className="text-3xl font-bold text-gray-900 mb-2 transition-opacity duration-500">
                {currentService.mainTitle}
              </h2>
              <h3 className="text-xl text-gray-600 transition-opacity duration-500">
                {currentService.mainSubtitle}
              </h3>
            </div>

            <p className="text-gray-600 mb-6 transition-opacity duration-500">
              {currentService.mainDescription}
            </p>

            <div className="space-y-3 mb-8">
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
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-orange-100 rounded-full">
                  <Settings className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-orange-500">
                    {currentService.stats.years}
                  </p>
                  <p className="text-sm text-gray-600">Years of Experience</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-orange-100 rounded-full">
                  <Phone className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-orange-500">
                    {currentService.stats.calls}
                  </p>
                  <p className="text-sm text-gray-600">Calls Per Day</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Get Pricing
              </button>
              <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-50 px-6 py-3 rounded-lg font-semibold transition-colors">
                Contact Sales
              </button>
            </div>

            <p className="text-sm text-gray-500 mt-4">
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
