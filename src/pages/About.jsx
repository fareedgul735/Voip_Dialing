import { useState } from "react";

import Doctor1 from "../../public/Doctor 1.png";
import Doctor2 from "../../public/Doctor 2.png";
import Doctor3 from "../../public/Doctor 3.png";
import Doctor4 from "../../public/Doctor 4.jpg";
import Doctor5 from "../../public/Doctor 5.png";
import Done from "../../public/Done.png";
import { Check } from "lucide-react";

import { ChevronLeft, ChevronRight } from "lucide-react";
import CallCenter from "../../public/CallCenter.png";
import FAQAccordion from "../ui/FaqsUi";
import BrandName from "../ui/BrandName";

const About = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

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

  const testimonials = [
    {
      text: "VoIPDialing has completely upgraded our communication. The call quality is excellent, uptime is consistent, and their support team is always quick to help. It's been a reliable solution for our growing business.",
      author: "Alex Hales",
      position: "Operations Manager",
    },
  ];
  return (
    <>
      <div className="w-full bg-[linear-gradient(101.26deg,_#FAF5F5_0%,_#FFF2F2_27.63%,_#F9EDFF_39.44%,_#F9F7FF_54.44%,_#999CFF_100%)]">
        <div className="container mx-auto px-6 py-12">
          <div className="p-[18px] grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-orange-100 rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-orange-600 font-medium text-sm">
                  About Us
                </span>
              </div>

              <h1 className="text-3xl lg:text-6xl font-bold text-gray-900 leading-tight">
                A Smarter Communication Platform for Growing Businesses
              </h1>

              <p className="text-gray-600 text-lg leading-relaxed">
                At VoIPDialing, our focus is on helping businesses communicate
                smarter. We deliver reliable, high-quality VoIP solutions built
                on advanced technology and clean, efficient workflows so every
                call is clear, secure, and cost-effective.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full transition-colors">
                  See Pricing
                </button>
                <button className="bg-orange-50 hover:bg-orange-100 text-orange-600 font-semibold px-8 py-3 rounded-full transition-colors">
                  Talk to sales
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-200/50 to-purple-200/50 rounded-3xl p-8 backdrop-blur-sm">
                <div className="bg-white rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center justify-center mb-4">
                    <div className="flex items-center gap-3 bg-gray-50 rounded-full px-4 py-2">
                      <div className="flex -space-x-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"></div>
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"></div>
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-orange-400"></div>
                      </div>
                      <div className="text-left">
                        <div className="flex text-yellow-400 text-xs">
                          ★★★★★
                        </div>
                        <div className="text-xs text-gray-600">
                          10,000+ Reviews
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl h-64 flex items-center justify-center relative overflow-hidden">
                    <div className="text-center">
                      <div className="w-100">
                        <img
                          src={CallCenter}
                          alt="Main User"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-4 right-4 bg-white rounded-2xl shadow-xl p-4">
                    <div className="text-5xl font-bold text-orange-500">
                      20+
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      Years Experience
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-4">
          Why us?
        </h2>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          VoIPDialing delivers reliable, high-quality VoIP solutions that
          simplify business communication. Our platform is designed for clarity,
          stability, and efficiency helping organizations connect better while
          reducing costs.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border-2 border-orange-100 rounded-2xl p-6 hover:border-orange-300 transition-colors hover:shadow-lg"
            >
              <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Check className="w-6 h-6 text-orange-500" strokeWidth={3} />
              </div>
              <p className="text-gray-800 font-medium leading-snug">
                {feature}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full  bg-white flex items-center justify-center p-6">
        <div className="max-w-7xl w-full bg-white rounded-2xl shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative p-6 flex items-center justify-center">
            <div className="relative w-full h-full">
              <img
                src="https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&w=1200&auto=format&fit=crop"
                alt="Happy client using VoIP"
                className="w-full h-full object-cover rounded-2xl"
              />

              <div className="absolute -bottom-6 left-6 bg-white shadow-lg rounded-xl px-6 py-4">
                <div className="text-3xl font-bold text-orange-500">20K+</div>
                <div className="text-gray-600 text-sm">Happy Client</div>
              </div>
            </div>
          </div>
          <div className="p-8 flex flex-col justify-center">
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
      <div className="w-full  bg-white flex items-center justify-center p-6">
        <div className="max-w-7xl w-full bg-white rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-8 flex flex-col justify-center">
            <p className="uppercase tracking-widest text-orange-500 font-semibold mb-2">
              Our Communities
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
              Reliable Communication Anyone AnyWhere
            </h1>
            <p className="text-gray-600 leading-relaxed mb-8">
              We deliver scalable, secure, and cost-effective VoIP solutions
              designed to keep your business connected without interruptions.
              Our cloud platform ensures crystal-clear voice quality, high
              availability, and seamless performance so your teams communicate
              better and your customers receive the experience they deserve.
            </p>
            <br />

            <p className="text-gray-600 leading-relaxed mb-8">
              We deliver scalable, secure, and cost-effective VoIP solutions
              designed to keep your business connected without interruptions.
              Our cloud platform ensures crystal-clear voice quality, high
              availability, and seamless performance so your teams communicate
              better and your customers receive the experience they deserve.
            </p>
            <div className="flex gap-2">
              <div className="box bg-white shadow-md w-50 h-20 flex justify-center flex-col items-center  border border-b border-orange-600 rounded-[12px]">
                <h3 className="text-orange-600 text-2xl md:text-4xl font-bold text-gray-900 leading-tight ">
                  100+
                </h3>
                <p className="text-gray-600 leading-relaxed">Happy Clients</p>
              </div>
              <div className="box bg-white shadow-md w-50 h-20 flex justify-center flex-col items-center  border border-b border-orange-600 rounded-[12px]">
                <h3 className="text-orange-600 text-2xl md:text-4xl font-bold text-gray-900 leading-tight ">
                  825
                </h3>
                <p className="text-gray-600 leading-relaxed">Projects Done</p>
              </div>
              <div className="box bg-white shadow-md w-50 h-20 flex justify-center flex-col items-center  border border-b border-orange-600 rounded-[12px]">
                <h3 className="text-orange-600 text-2xl md:text-4xl font-bold text-gray-900 leading-tight ">
                  4
                </h3>
                <p className="text-gray-600 leading-relaxed">Award Won</p>
              </div>
            </div>
          </div>
          <div className="relative p-6 flex items-center justify-center">
            <div className="relative w-full h-full">
              <img
                src={Done}
                alt="Happy client using VoIP"
                className="w-full h-full object-cover rounded-2xl"
              />

              <div className="absolute -bottom-6 left-6 bg-white shadow-lg rounded-xl px-6 py-4">
                <div className="text-3xl font-bold text-orange-500">20K+</div>
                <div className="text-gray-600 text-sm">Happy Client</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-60 flex justify-end mt-20 mb-4 px-4">
        <BrandName />
      </div>
      <div className="w-full py-16 px-4">
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

            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto relative z-10 border border-gray-100">
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
      <div className="w-full mx-auto px-4 py-8">
        <FAQAccordion />
      </div>
    </>
  );
};

export default About;
