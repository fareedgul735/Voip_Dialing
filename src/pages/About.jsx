import Done from "../../public/Done.png";
import { Check } from "lucide-react";
import CallCenter from "../../public/CallCenter.png";
import FAQAccordion from "../ui/FaqsUi";
import BrandName from "../ui/BrandName";
import Testominals from "../ui/Testominals";
import Dots from "../../public/Dots.png";

const About = () => {
  const features = [
    "Crystal Clear Calls - With Quality Of Service Priority",
    "Easy Multiple Phone Number Assignment (after login)",
    "IP-PBX FailOver redundancy",
    "No term or usage commitment",
    "Unlimited outgoing concurrent calls",
    "LIVE Online Detailed Call & Cost Reports",
    "Quick, easy & simple implementation",
    "Huge Saving over PSTN Network",
  ];

  return (
    <>
      <div className="w-full bg-[linear-gradient(101.26deg,_#FAF5F5_0%,_#FFF2F2_27.63%,_#F9EDFF_39.44%,_#F9F7FF_54.44%,_#999CFF_100%)] p-[12px] py-12">
        <div className="grid mx-4 md:mx-8 lg:mx-12 grid-cols-1 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full lg:mx-0">
              <span className="text-orange-500 font-bold">©</span>
              <span className="text-gray-600 font-medium text-sm">
                About Us
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold text-gray-900 leading-tight">
              A Smarter Communication Platform for Growing Businesses
            </h1>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              At VoIPDialing, our focus is on helping businesses communicate
              smarter. We deliver reliable, high-quality VoIP solutions built on
              advanced technology and clean, efficient workflows so every call
              is clear, secure, and cost-effective.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-orange-500 shadow-md cursor-pointer hover:bg-blue-600 text-white px-8 py-3 rounded-full transition">
                See Pricing
              </button>
              <button className="bg-white shadow-md cursor-pointer hover:bg-blue-600 hover:text-white text-orange-600 px-8 py-3 rounded-full transition">
                Talk to Sales
              </button>
            </div>
          </div>
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <div className="absolute rounded blur-2xl"></div>
              <div className="relative">
                <div className="flex justify-center mt-12 lg:mt-0">
                  <div className="flex absolute top-2 left-2 lg:top-12 lg:left-2 items-center gap-3 bg-white rounded px-4 py-2 shadow z-12">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"></div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"></div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-orange-400"></div>
                    </div>
                    <div>
                      <div className="text-yellow-400 text-xs">★★★★★</div>
                      <div className="text-xs text-gray-600">
                        10,000+ Reviews
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" flex justify-center">
                  <div className="absolute bottom-4 left-4 sm:-bottom-2 sm:-left-6">
                    <div className="w-20 sm:w-24 md:w-32">
                      <img src={Dots} alt="dots" />
                    </div>
                  </div>

                  <div className="relative z-10 flex justify-center items-center h-72 sm:h-80 md:h-96 lg:h-[28rem]">
                    <div className="w-80 sm:w-96 md:w-[28rem]">
                      <img
                        src={CallCenter}
                        alt="Call Center"
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="absolute bottom-6 right-4 sm:bottom-8 sm:right-6 md:bottom-10 md:right-10 bg-white rounded-2xl p-4 sm:p-5 md:p-6 shadow-xl z-20">
                    <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-500">
                      20+
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 font-medium">
                      Years Experience
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#FAF9F6] p-[12px] py-12">
        <div className="mx-4 md:mx-8 lg:mx-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-left lg:text-center text-gray-900 mb-4">
            Why us?
          </h2>

          <p className="text-left lg:text-center text-gray-600 max-w-3xl mx-auto mb-12">
            VoIPDialing delivers reliable, high-quality VoIP solutions that
            simplify business communication. Our platform is designed for
            clarity, stability, and efficiency helping organizations connect
            better while reducing costs.
          </p>
        </div>

        <div className="grid mx-4 md:mx-8 lg:mx-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white flex flex-col justify-center items-center border-2 border-orange-200 rounded-2xl p-6 hover:border-orange-300 transition-colors hover:shadow-lg"
            >
              <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto lg:mx-0">
                <Check
                  className="w-6 h-6 text-red-500 font-bold"
                  strokeWidth={3}
                />
              </div>

              <p className="text-gray-800 font-medium leading-snug text-center lg:text-center">
                {feature}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full bg-white flex items-center justify-center p-[12px] py-12">
        <div className="mx-4 md:mx-8 lg:mx-12 rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="relative flex items-center justify-center">
            <div className="relative w-[634px] h-[548px]">
              <img
                src="https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&w=1200&auto=format&fit=crop"
                alt="Happy client using VoIP"
                className="w-full h-full object-cover rounded-2xl"
              />

              <div className="absolute -bottom-2 -right-0 lg:-bottom-6 lg:-right-12 bg-white shadow-lg rounded-xl px-6 py-6 lg:px-8 lg:py-8">
                <div className="text-5xl font-bold text-orange-500">20K+</div>
                <div className="text-gray-600 text-sm">Happy Client</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="uppercase tracking-widest text-orange-500 font-semibold mb-2">
              Mission
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
              Our Mission Statement
            </h1>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our mission is to simplify business communication by delivering a
              powerful, reliable, and feature-rich Cloud VoIP platform that
              helps organizations connect, grow, and succeed—anytime, anywhere.
              With over 20 years of experience in call center management and
              telephony services integration, we enable businesses to maximize
              the value of modern communication technology while reducing
              operational costs and complexity. We provide enterprise-grade
              Class 5 VoIP dialing features designed to improve call handling,
              boost team productivity, and deliver exceptional customer
              experiences—without compromising reliability or performance. While
              many providers operate at 80–90% stability, we are committed to
              maintaining 99%+ platform reliability and call accuracy, backed by
              a customer-first approach and a proven record of satisfaction.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-white flex items-center justify-center p-[12px] py-12">
        <div className="mx-4 md:mx-8 lg:mx-12 rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center text-left">
            <p className="uppercase tracking-widest text-orange-500 mb-2">
              Our Communities
            </p>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
              Reliable Communication Anyone AnyWhere
            </h1>

            <p className="text-gray-600 leading-relaxed mb-6">
              We deliver scalable, secure, and cost-effective VoIP solutions
              designed to keep your business connected without interruptions.
              Our cloud platform ensures crystal-clear voice quality, high
              availability, and seamless performance so your teams communicate
              better and your customers receive the experience they deserve.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              We deliver scalable, secure, and cost-effective VoIP solutions
              designed to keep your business connected without interruptions.
              Our cloud platform ensures crystal-clear voice quality, high
              availability, and seamless performance so your teams communicate
              better and your customers receive the experience they deserve.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-md mx-2 lg:mx-0">
              <div className="bg-white shadow-md h-20 flex flex-col justify-center items-center border-b-2 border-orange-600 rounded-xl">
                <h3 className="text-orange-600 text-2xl sm:text-3xl md:text-4xl font-bold">
                  100+
                </h3>
                <p className="text-gray-600 text-sm">Happy Clients</p>
              </div>

              <div className="bg-white shadow-md h-20 flex flex-col justify-center items-center border-b-2 border-orange-600 rounded-xl">
                <h3 className="text-orange-600 text-2xl sm:text-3xl md:text-4xl font-bold">
                  825
                </h3>
                <p className="text-gray-600 text-sm">Projects Done</p>
              </div>

              <div className="bg-white shadow-md h-20 flex flex-col justify-center items-center border-b-2 border-orange-600 rounded-xl">
                <h3 className="text-orange-600 text-2xl sm:text-3xl md:text-4xl font-bold">
                  4
                </h3>
                <p className="text-gray-600 text-sm">Award Won</p>
              </div>
            </div>
          </div>

          <div className="relative p-4 sm:p-6 flex items-center justify-center">
            <div className="relative w-full max-w-md sm:max-w-lg">
              <img
                src={Done}
                alt="Happy client using VoIP"
                className="w-full h-auto object-cover rounded-2xl"
              />
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
      <div className="w-full p-[12px] py-12 mt-8 mb-8">
        <FAQAccordion />
      </div>
    </>
  );
};

export default About;
