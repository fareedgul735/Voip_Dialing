import lady1 from "../../../public/lady_1.jpg";
import heroLogo from "../../../public/image5.png";
import FAQAccordion from "../../ui/FaqsUi";
import Detailed from "../../../public/VoipDeatiling.png";
import BrandName from "../../ui/BrandName";
import { Check } from "lucide-react";
import { CheckCircle2, Award, Phone } from "lucide-react";
import {
  BulkCard,
  BulkServices,
  featuresBulk,
  services,
} from "../../lib/Constant.jsx";
import Testominals from "../../ui/Testominals.jsx";
import { useRef, useState } from "react";
import video1 from "../../../public/video1.mp4";
import { Link } from "react-router";
import { CustomButton, CustomButtonTwin } from "../../ui/CustomButton.jsx";
import SEO from "../../lib/SEO.jsx";

const column1 = featuresBulk.filter((f) => f.column === 1);
const column2 = featuresBulk.filter((f) => f.column === 2);
const column3 = featuresBulk.filter((f) => f.column === 3);

const BulkSMS = () => {
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
      <SEO
        title="Bulk SMS Services | Voip Dialing ORC"
        description="Discover how Voip Dialing ORC delivers reliable and scalable Bulk SMS solutions for businesses, integrated with VoIP and Cloud PBX communication systems."
        url="https://voip-dialing.vercel.app/products/bulk-sms"
      />
      <div className="w-full p-3 sm:p-6 py-12 bg-[linear-gradient(101.26deg,_#FAF5F5_0%,_#FFF2F2_27.63%,_#F9EDFF_39.44%,_#F9F7FF_54.44%,_#999CFF_100%)]">
        <div className="py-12">
          <div className="mx-4 sm:mx-8 lg:mx-12 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-between">
            <div className="text-left w-full sm:w-[90%] md:w-[700px] lg:w-[758px]">
              <div className="inline-flex items-center bg-white px-4 sm:px-6 py-2 mb-4 rounded-[18px] shadow-md animate-fadeIn">
                <span className="text-blue-500 font-medium text-sm sm:text-base">
                  Bulk SMS Service in Las Vegas
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Reach Your{" "}
                <span className="bg-sky-600 text-white rounded">
                  Customers Instantly{" "}
                </span>{" "}
                With{" "}
                <span className="bg-sky-600 text-white rounded">
                  Business Text
                </span>{" "}
                Messaging
              </h1>
              <p className="text-gray-700 mb-6 text-sm sm:text-base md:text-lg">
                In Las Vegas, businesses move fast and customer expectations are
                even faster. Whether you run a medical office, restaurant,
                retail store, real estate agency, or service company, your
                customers want quick updates and simple communication. Text
                messaging delivers exactly that.
                <br />
                <br />
                VoIP Dialing provides a reliable Bulk SMS service built
                specifically for Las Vegas businesses. Send promotions,
                appointment reminders, alerts, and important updates directly to
                your customers’ mobile phones within seconds. No complicated
                setup. No extra hardware. Just a powerful and easy to use
                business SMS platform designed to help you stay connected.
              </p>
              <ul className="space-y-2 mb-6 text-gray-700 text-sm sm:text-base">
                <li className="flex flex-col sm:flex-row sm:items-start gap-2">
                  <span className="text-orange-500">•</span>
                  <span className="text-black">
                    Send thousands of promotional or transactional SMS messages
                    in seconds.
                  </span>
                </li>
                <li className="flex flex-col sm:flex-row sm:items-start gap-2">
                  <span className="text-orange-500">•</span>
                  <span className="text-black">
                    Perfect for Las Vegas retail, healthcare, hospitality, and
                    service businesses.
                  </span>
                </li>
                <li className="flex flex-col sm:flex-row sm:items-start gap-2">
                  <span className="text-orange-500">•</span>
                  <span className="text-black">
                    Manage calls and SMS together with VoIP Dialing’s unified
                    communication platform.
                  </span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Link to={"/contact"}>
                  <CustomButtonTwin
                    className="shadow-md cursor-pointer bg-orange-500 text-white text-sm md:text-base font-semibold px-5 py-2 md:px-6 md:py-3 rounded-full hover:bg-blue-500 transition"
                    value={<span>Start SMS Campaign</span>}
                  />
                </Link>

                <Link to={"/pricing"}>
                  <CustomButton
                    className="bg-white cursor-pointer shadow-md border text-sm md:text-base border-gray-200 text-gray-800 font-semibold px-5 py-2 md:px-6 md:py-3 rounded-full hover:bg-blue-500 hover:text-white transition"
                    value={<span>Get Las Vegas Pricing</span>}
                  />
                </Link>
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
              Powerful Bulk SMS Marketing for Las Vegas Businesses
            </h1>
            <p className="text-gray-600 text-md lg:text-lg max-w-4xl mx-auto leading-relaxed">
              Bulk SMS marketing is one of the most effective ways to reach
              customers in Las Vegas. With open rates significantly higher than
              email, text messaging ensures your message gets seen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {BulkCard.map((item, indx) => {
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
              Affordable Bulk SMS Plans for Las Vegas Companies
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8">
              Every Las Vegas business has different messaging needs. That is
              why we offer flexible and affordable Bulk SMS plans that scale
              with you. From small businesses sending weekly offers to larger
              companies managing high volume campaigns, you get transparent
              pricing and dependable local support.
            </p>
            <Link to={"/pricing"}>
              <CustomButtonTwin
                className="shadow-md cursor-pointer bg-orange-500 text-white text-sm md:text-base font-semibold px-5 py-2 md:px-6 md:py-3 rounded-full hover:bg-blue-500 transition"
                value={<span>View SMS Pricing</span>}
              />
            </Link>
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
                Advanced Bulk SMS Features for Las Vegas Businesses
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Our enterprise grade SMS platform is built to support both
                marketing and operational communication.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center lg:justify-end">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-orange-100 rounded-full flex items-center justify-center">
                  <Award className="w-7 h-7 sm:w-8 sm:h-8 text-orange-500" />
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-gray-900">
                    98%
                  </div>
                  <div className="text-gray-600 text-sm">SMS Open Rate</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-orange-100 rounded-full flex items-center justify-center">
                  <Phone className="w-7 h-7 sm:w-8 sm:h-8 text-orange-500" />
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-gray-900">
                    Instant
                  </div>
                  <div className="text-gray-600 text-sm">Message Delivery</div>
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
              BUSINESS SMS PLATFORM
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
              Secure and Scalable Bulk SMS Service in Las Vegas
            </h1>
            <p className="mt-4 text-gray-400">
              Security and reliability matter when you are communicating with
              customers. Our cloud based SMS platform is built with performance
              and compliance in mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BulkServices.map((service) => (
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
                Why Choose Bulk SMS for Your Las Vegas Business
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                {[
                  {
                    title: "Instant Customer Reach",
                    description:
                      "Text messages are delivered within seconds, allowing you to communicate time sensitive information immediately.",
                  },
                  {
                    title: "Higher Engagement",
                    description:
                      "SMS messages are typically read within minutes, helping you generate faster responses and stronger engagement.",
                  },
                  {
                    title: "Cost Effective Marketing",
                    description:
                      "Bulk SMS allows you to reach a targeted local audience in Las Vegas without the high costs of traditional advertising.",
                  },
                  {
                    title: "Scheduled & Automated Campaigns",
                    description:
                      "Plan campaigns in advance and automate recurring messages to reach customers at optimal times.",
                  },
                  {
                    title: "Two Way Communication",
                    description:
                      "Customers can reply directly to confirm appointments, ask questions, or request support.",
                  },
                  {
                    title: "Strong Local Presence",
                    description:
                      "Send messages from Las Vegas phone numbers to build trust and familiarity with your audience.",
                  },
                  {
                    title: "Measurable Results",
                    description:
                      "Track delivery rates, responses, and campaign performance to continuously improve your messaging strategy.",
                  },
                  {
                    title: "Secure & Reliable Messaging",
                    description:
                      "Our platform ensures encrypted SMS delivery and enterprise-grade uptime for all campaigns.",
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
                <p className="text-5xl font-bold text-orange-500 mb-1">8K+</p>
                <p className="text-sm text-gray-700 font-medium">
                  SMS Campaigns Sent
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

export default BulkSMS;
