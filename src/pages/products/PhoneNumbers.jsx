import lady1 from "../../../public/lady_1.jpg";
import heroLogo from "../../../public/image5.png";
import FAQAccordion from "../../ui/FaqsUi";
import Detailed from "../../../public/VoipDeatiling.png";
import BrandName from "../../ui/BrandName";
import { Check } from "lucide-react";
import { CheckCircle2, Award, Phone } from "lucide-react";
import {
  CardPhone,
  PhoneFeatures,
  PhoneServices,
} from "../../lib/Constant.jsx";
import Testominals from "../../ui/Testominals.jsx";
import { useRef, useState } from "react";
import video1 from "../../../public/video1.mp4";

const column1 = PhoneFeatures.filter((f) => f.column === 1);
const column2 = PhoneFeatures.filter((f) => f.column === 2);
const column3 = PhoneFeatures.filter((f) => f.column === 3);

const PhoneNumber = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const CloudServiceCard = ({
    image,
    icon: Icon,
    title,
    description,
    iconColor,
  }) => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105 hover:shadow-xl">
      <div className="aspect-video w-full overflow-hidden bg-gray-100">
        <img src={image} alt={title} className="w-auto h-auto object-cover" />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <div className={`${iconColor} rounded-lg p-2`}>
            <Icon className="w-4 h-4 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );

  return (
    <>
      <div className="w-full p-3 sm:p-6 py-12 bg-[linear-gradient(101.26deg,_#FAF5F5_0%,_#FFF2F2_27.63%,_#F9EDFF_39.44%,_#F9F7FF_54.44%,_#999CFF_100%)]">
        <div className="py-12">
          <div className="mx-4 sm:mx-8 lg:mx-12 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-between">
            <div className="text-left w-full sm:w-[90%] md:w-[700px] lg:w-[758px]">
              <div className="inline-flex items-center bg-white px-4 sm:px-6 py-2 mb-4 rounded-[18px] shadow-md animate-fadeIn">
                <span className="text-blue-500 font-medium text-sm sm:text-base">
                  Local, Toll-Free & Vanity Numbers Available
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Buy{" "}
                <span className="text-blue-600">Business Phone Numbers</span> in{" "}
                <span className="text-blue-600">Las Vegas</span>
              </h1>

              <p className="text-gray-700 mb-6 text-sm sm:text-base md:text-lg">
                Get local Las Vegas phone numbers, toll-free numbers, and vanity
                numbers for your business in minutes. VoIP Dialing provides
                reliable, cloud-based business phone numbers that help you build
                trust, improve customer reach, and establish a strong local
                presence in Las Vegas.
              </p>

              <ul className="space-y-2 mb-6 text-gray-700 text-sm sm:text-base">
                <li className="flex flex-col sm:flex-row sm:items-start gap-2">
                  <span className="text-orange-500">•</span>
                  <span className="text-black">
                    Instantly activate Las Vegas local business phone numbers.
                  </span>
                </li>
                <li className="flex flex-col sm:flex-row sm:items-start gap-2">
                  <span className="text-orange-500">•</span>
                  <span className="text-black">
                    Choose from toll-free, vanity, and virtual phone numbers.
                  </span>
                </li>
                <li className="flex flex-col sm:flex-row sm:items-start gap-2">
                  <span className="text-orange-500">•</span>
                  <span className="text-black">
                    Easily forward calls to any device or VoIP system.
                  </span>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <button className="bg-orange-500 shadow-sm text-white px-4 py-2 sm:px-5 sm:py-3 rounded-full hover:bg-blue-500 transition text-sm sm:text-base">
                  Browse Available Numbers
                </button>
                <button className="bg-white shadow-sm rounded-full text-orange-500 hover:text-white px-4 py-2 sm:px-5 sm:py-3 hover:bg-blue-500 transition text-sm sm:text-base">
                  Talk Sales
                </button>
              </div>
            </div>

            <div className="relative flex justify-center w-full lg:w-auto mt-6 lg:mt-0">
              <img
                src={heroLogo}
                alt="VoIP Technology"
                className="rounded-lg w-full max-w-[200px] sm:max-w-xs md:max-w-md lg:max-w-xl object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#FAF9F6] p-[12px] py-12">
        <div className="mx-4 sm:mx-8 lg:mx-12">
          <div className="text-left lg:text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Professional Business Phone Numbers in Las Vegas
            </h1>
            <p className="text-gray-600 text-md lg:text-lg max-w-4xl mx-auto leading-relaxed">
              Establish a strong local presence with Las Vegas business phone
              numbers designed for growing companies. Whether you need local 702
              or 725 area code numbers, toll-free numbers, or custom vanity
              numbers, VoIP Dialing makes it simple to activate, manage, and
              scale your communication system entirely in the cloud.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {CardPhone.map((item, indx) => {
              const Icon = item.icon;
              return (
                <div
                  key={indx}
                  className="bg-white rounded-lg border border-orange-200 p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-left lg:text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Affordable Las Vegas Business Phone Numbers for Every Company
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8">
              Whether you're a startup, small business, or enterprise in Las
              Vegas, our flexible pricing plans make it easy to get the phone
              numbers you need without expensive contracts or hardware.
            </p>
            <button className="bg-orange-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg">
              Browse Available Numbers
            </button>
          </div>
        </div>
      </div>
      <div className="w-full p-[12px] py-12">
        <div className="mx-4 sm:mx-8 lg:mx-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 mb-14">
            <div className="text-left max-w-4xl">
              <div className="text-orange-500 text-sm tracking-wider uppercase mb-4">
                FEATURES
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Enterprise-Grade Phone Number Solutions for Las Vegas Businesses
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Our VoIP Dialing phone number platform empowers Las Vegas
                businesses with local, toll-free, and vanity numbers. Enjoy
                instant activation, SMS capability, call forwarding, and
                seamless CRM integration — all without on-premise hardware.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center lg:justify-end">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-orange-100 rounded-full flex items-center justify-center">
                  <Award className="w-7 h-7 sm:w-8 sm:h-8 text-orange-500" />
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-gray-900">
                    200
                  </div>
                  <div className="text-gray-600 text-sm">
                    Years of Experience
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-orange-100 rounded-full flex items-center justify-center">
                  <Phone className="w-7 h-7 sm:w-8 sm:h-8 text-orange-500" />
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-gray-900">
                    509+
                  </div>
                  <div className="text-gray-600 text-sm">Calls Per Day</div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6">
            <div className="space-y-6">
              {column1.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              {column2.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              {column3.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#FAF9F6] flex flex-col p-[12px] py-12">
        <div className="mx-4 md:mx-8 lg:mx-12">
          <div className="text-center py-3 tracking-widest text-orange-400">
            <span className="text-lg"> SOFTWARE DEMO</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold text-center text-slate-800 mb-4">
            Get up and running in minutes
          </h1>

          <div className="mx-auto w-full max-w-6xl bg-white/80 rounded-2xl shadow-md shadow-orange-200 border border-orange-100 p-2 md:p-4 flex-1 relative overflow-hidden">
            <video
              ref={videoRef}
              src={video1}
              poster={Detailed}
              className="w-full rounded-xl"
              controls
              onEnded={() => setIsPlaying(false)}
            />

            {!isPlaying && (
              <button
                onClick={() => {
                  videoRef.current.play();
                  setIsPlaying(true);
                }}
                className="absolute inset-0 flex items-center justify-center group"
                aria-label="Play Video"
              >
                <div
                  className="w-16 cursor-pointer h-16 md:w-20 md:h-20 bg-orange-500/90 rounded-full flex items-center justify-center
                            group-hover:scale-110 transition-transform duration-300 shadow-lg"
                >
                  <svg
                    className="w-6 h-6 md:w-8 md:h-8 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="p-[12px] py-12 mt-12 mb-12">
        <div className="mx-4 sm:mx-8 lg:mx-12">
          <div className="text-left lg:text-center mb-12">
            <p className="text-orange-400 text-sm tracking-wider uppercase mb-2">
              BUSINESS PHONE NUMBERS
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
              Cloud-Powered Business Phone Numbers in Las Vegas
            </h1>
            <p className="mt-4 text-gray-400">
              VoIP Dialing provides secure, cloud-based business phone numbers
              for Las Vegas companies looking to scale without expensive
              hardware. Instantly activate local 702 or 725 numbers, toll-free
              numbers, or vanity numbers — all managed through our reliable
              cloud platform with built-in redundancy and enterprise-grade
              uptime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PhoneServices.map((service) => (
              <CloudServiceCard
                key={service.id}
                image={service.image}
                icon={service.icon}
                title={service.title}
                description={service.description}
                iconColor={service.iconColor}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="w-full p-[12px] py-12 flex justify-center">
        <div className="mx-4 sm:mx-8 lg:mx-12">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-orange-500 text-sm font-semibold mb-3 uppercase tracking-wide">
                BENEFITS
              </p>

              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-12">
                Why Choose Las Vegas Business Phone Numbers?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                {[
                  {
                    title: "Local Las Vegas Numbers",
                    description:
                      "Establish a trusted local presence with Las Vegas phone numbers (702 & 725) to build customer confidence.",
                  },
                  {
                    title: "Toll-Free & Vanity Numbers",
                    description:
                      "Expand your reach with memorable toll-free and vanity numbers, perfect for marketing campaigns.",
                  },
                  {
                    title: "SMS-Enabled Lines",
                    description:
                      "Communicate quickly with customers using business SMS-enabled numbers for promotions and updates.",
                  },
                  {
                    title: "Instant Number Provisioning",
                    description:
                      "Activate new phone numbers instantly—no waiting for setup, ideal for fast-growing Las Vegas businesses.",
                  },
                  {
                    title: "Multi-Device Support",
                    description:
                      "Receive calls on desktop, mobile, or tablet, ensuring you never miss an important customer call.",
                  },
                  {
                    title: "Seamless CRM Integration",
                    description:
                      "Integrate your phone numbers with popular CRM and business tools to streamline customer management.",
                  },
                  {
                    title: "Professional Call Handling",
                    description:
                      "Advanced call routing, auto attendants, and voicemail features provide a professional experience.",
                  },
                  {
                    title: "Reliable Business Continuity",
                    description:
                      "Keep your lines active during outages with cloud failover and automatic call forwarding.",
                  },
                ].map((item, index) => (
                  <div key={index}>
                    <h4 className="text-base flex gap-3 items-start font-semibold text-gray-900 mb-2">
                      <span className="w-6 h-6 min-w-6 text-white bg-orange-500 rounded-full flex justify-center items-center mt-0.5">
                        <Check size={14} strokeWidth={3} />
                      </span>
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-500 leading-relaxed ml-9">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex flex-col items-center justify-start pt-8">
              <img
                src={lady1}
                alt="Happy Client"
                className="w-full max-w-[658px] rounded-2xl shadow-lg"
              />

              <div className="absolute -bottom-8 left-8 bg-white rounded-xl shadow-2xl px-10 py-6 text-center">
                <p className="text-5xl font-bold text-orange-500 mb-1">12K+</p>
                <p className="text-sm text-gray-700 font-medium">
                  Happy Client
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full p-[12px] py-12 h-70 flex justify-end mt-12 mb-12">
        <BrandName />
      </div>
      <div className="w-full bg-gradient-to-b from-orange-50 to-white p-[12px] py-12">
        <Testominals />
      </div>
      <div className="faqs p-[12px] py-12">
        <FAQAccordion />
      </div>
    </>
  );
};

export default PhoneNumber;
