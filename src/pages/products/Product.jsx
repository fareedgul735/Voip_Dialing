import lady1 from "../../../public/lady_1.jpg";
import heroLogo from "../../../public/2efae453c0538a9f984231f811da4f7c2cc45dac.png";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FAQAccordion from "../../ui/FaqsUi";
import Detailed from "../../../public/VoipDeatiling.png";
import BrandName from "../../ui/BrandName";
import Doctor1 from "../../../public/Doctor 1.png";
import Doctor2 from "../../../public/Doctor 2.png";
import Doctor3 from "../../../public/Doctor 3.png";
import Doctor4 from "../../../public/Doctor 4.jpg";
import Doctor5 from "../../../public/Doctor 5.png";
import { useState } from "react";
import { Check } from "lucide-react";
import { CheckCircle2, Award, Phone } from "lucide-react";
import { Card, features, services } from "../../lib/Constant.jsx";

const column1 = features.filter((f) => f.column === 1);
const column2 = features.filter((f) => f.column === 2);
const column3 = features.filter((f) => f.column === 3);

const Products = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials = [
    {
      text: "VoIPDialing has completely upgraded our communication. The call quality is excellent, uptime is consistent, and their support team is always quick to help. It's been a reliable solution for our growing business.",
      author: "Alex Hales",
      position: "Operations Manager",
    },
  ];

  const CloudServiceCard = ({
    image,
    icon: Icon,
    title,
    description,
    iconColor,
  }) => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105 hover:shadow-xl">
      <div className="aspect-video w-full overflow-hidden bg-gray-100">
        <img src={image} alt={title} className="w-full h-full object-cover" />
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
      <div className="w-full p-[28px] bg-[linear-gradient(101.26deg,_#FAF5F5_0%,_#FFF2F2_27.63%,_#F9EDFF_39.44%,_#F9F7FF_54.44%,_#999CFF_100%)]">
        <div className="mx-auto px-4 py-12">
          <div className="flex gap-10 items-center justify-between max-w-7xl mx-auto">
            <div>
              <p className="text-blue-500 text-sm font-semibold mb-2">
                Dont Buy Expesnive Equipment
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Reliable Cloud PBX for Growing Businesses
              </h1>
              <span>
                A modern cloud-based phone system that keeps your team connected
                anytime, anywhere.
              </span>
              <ul className="space-y-2 mb-8 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span className="text-black">
                    Deliver first-in-call and stay connected with all your
                    customers.
                  </span>
                  <span className="text-orange-500 mr-2">•</span>
                  <span className="text-black">
                    Deliver first-in-call and stay connected with all your
                    customers.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span className="text-black">
                    Set up in minutes, and run your business from anywhere, on
                    any device.
                  </span>
                  <span className="text-orange-500 mr-2">•</span>
                  <span className="text-black">
                    Set up in minutes, and run your business from anywhere, on
                    any device.
                  </span>
                </li>
              </ul>
              <div className="flex gap-4">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition">
                  See Pricing
                </button>
                <button className="text-orange-500 hover:text-orange-600 px-6 py-3 font-semibold transition">
                  Talk Sales
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroLogo}
                alt="VoIP Technology"
                className="rounded-lg w-180"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#FAF9F6] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Cloud PBX Phone System for Modern Businesses
            </h1>
            <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
              Our Cloud PBX system delivers secure, high-quality VoIP calling
              for businesses of all sizes. Designed for remote teams and
              multi-location offices, it's easy to set up, cost-effective, and
              built to grow with your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {Card.map((item, indx) => {
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

          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Affordable VoIP Phones & Cloud PBX Plans
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8">
              Choose from a wide range of VoIP desk phones and softphone options
              available to buy or lease, perfectly integrated with our cloud PBX
              platform.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg">
              See Pricing
            </button>
          </div>
        </div>
      </div>
      <div className="w-full  p-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center">
            <div className="mb-12">
              <div className="text-orange-500 text-sm font-semibold tracking-wider uppercase mb-4">
                FEATURES
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Enterprise-Grade VoIP Dialing with Full Class 5 Features
              </h1>
              <p className="text-gray-600 text-lg max-w-4xl leading-relaxed">
                Power your business communications with a robust VoIP dialing
                platform built for performance, flexibility, and scale. Our
                Class 5 Cloud PBX features give you complete control over call
                flow, agent productivity, and customer experience.
              </p>
            </div>

            <div className="flex gap-12 mb-26">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                  <Award className="w-8 h-8 text-orange-500" />
                </div>
                <div>
                  <div className="text-4xl font-bold text-gray-900">20+</div>
                  <div className="text-gray-600 text-sm">
                    Years of Experience
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                  <Phone className="w-8 h-8 text-orange-500" />
                </div>
                <div>
                  <div className="text-4xl font-bold text-gray-900">509+</div>
                  <div className="text-gray-600 text-sm">Calls Per Day</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-x-12 gap-y-6">
            <div className="space-y-6">
              {column1.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              {column2.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              {column3.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">
                    {feature.text}
                  </span>
                </div>
              ))}
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
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-orange-400 text-sm font-semibold tracking-wider uppercase mb-2">
              CLOUD SERVICE
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Cloud Service of VOIP
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
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
      <div className="w-full p-[28px]">
        <div className="bg-white rounded-2xl p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-orange-500 text-md font-semibold mb-2">
                Benefits
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why move to the Cloud?
              </h2>
              <div className="w-full py-12 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-8">
                <div>
                  <h4 className="text-md flex gap-2  text-orange-400 font-semibold text-gray-800 mb-1">
                    <span className="w-6 h-6 text-white bg-orange-400 rounded-full flex justify-center items-center">
                      <Check size={14} />
                    </span>
                    Lorem
                  </h4>
                  <p className="text-sm text-gray-600">
                    Deliver first-in-call and stay connected with all your
                    customers.
                  </p>
                </div>

                <div>
                  <h4 className="text-md flex gap-2  text-orange-400 font-semibold text-gray-800 mb-1">
                    <span className="w-6 h-6 text-white bg-orange-400 rounded-full flex justify-center items-center">
                      <Check size={14} />
                    </span>
                    Lorem
                  </h4>
                  <p className="text-sm flex gap-2 text-gray-600">
                    Deliver first-in-call and stay connected with all your
                    customers.
                  </p>
                </div>

                <div>
                  <h4 className="text-md flex gap-2  text-orange-400 font-semibold text-gray-800 mb-1">
                    <span className="w-6 h-6 text-white bg-orange-400 rounded-full flex justify-center items-center">
                      <Check size={14} />
                    </span>
                    Lorem
                  </h4>
                  <p className="text-sm text-gray-600">
                    Deliver first-in-call and stay connected with all your
                    customers.
                  </p>
                </div>

                <div>
                  <h4 className="text-md flex gap-2  text-orange-400 font-semibold text-gray-800 mb-1">
                    <span className="w-6 h-6 text-white bg-orange-400 rounded-full flex justify-center items-center">
                      <Check size={14} />
                    </span>
                    Lorem
                  </h4>
                  <p className="text-sm text-gray-600">
                    Deliver first-in-call and stay connected with all your
                    customers.
                  </p>
                </div>

                <div>
                  <h4 className="text-md flex gap-2  text-orange-400 font-semibold text-gray-800 mb-1">
                    <span className="w-6 h-6 text-white bg-orange-400 rounded-full flex justify-center items-center">
                      <Check size={14} />
                    </span>
                    Lorem
                  </h4>
                  <p className="text-sm text-gray-600">
                    Deliver first-in-call and stay connected with all your
                    customers.
                  </p>
                </div>

                <div>
                  <h4 className="text-md flex gap-2  text-orange-400 font-semibold text-gray-800 mb-1">
                    <span className="w-6 h-6 text-white bg-orange-400 rounded-full flex justify-center items-center">
                      <Check size={14} />
                    </span>
                    Lorem
                  </h4>
                  <p className="text-sm text-gray-600">
                    Deliver first-in-call and stay connected with all your
                    customers.
                  </p>
                </div>

                <div>
                  <h4 className="text-md flex gap-2  text-orange-400 font-semibold text-gray-800 mb-1">
                    <span className="w-6 h-6 text-white bg-orange-400 rounded-full flex justify-center items-center">
                      <Check size={14} />
                    </span>
                    Lorem
                  </h4>
                  <p className="text-sm text-gray-600">
                    Deliver first-in-call and stay connected with all your
                    customers.
                  </p>
                </div>

                <div>
                  <h4 className="text-md flex gap-2  text-orange-400 font-semibold text-gray-800 mb-1">
                    <span className="w-6 h-6 text-white bg-orange-400 rounded-full flex justify-center items-center">
                      <Check size={14} />
                    </span>
                    Lorem
                  </h4>
                  <p className="text-sm text-gray-600">
                    Deliver first-in-call and stay connected with all your
                    customers.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={lady1}
                alt="Happy Client"
                className="rounded-lg w-150"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-xl p-6">
                <p className="text-4xl font-bold text-orange-500">12K+</p>
                <p className="text-sm text-gray-600">Happy Client</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full p-[28px] h-60 flex justify-end mt-20 mb-4 px-4">
        <BrandName />
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
      </div>
      <div className="faqs">
        <FAQAccordion />
      </div>
    </>
  );
};

export default Products;
