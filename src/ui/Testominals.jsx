import { ChevronLeft, ChevronRight } from "lucide-react";

import Doctor1 from "../../public/Doctor 1.png";
import Doctor2 from "../../public/Doctor 2.png";
import Doctor3 from "../../public/Doctor 3.png";
import Doctor4 from "../../public/Doctor 4.jpg";
import Doctor5 from "../../public/Doctor 5.png";
import { useState } from "react";

const Testominals = () => {
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
    <div className="w-full bg-gradient-to-b from-orange-50 to-white">
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-4">
            <p className="text-orange-400 uppercase tracking-wider text-1xl ">
              Testimonials
            </p>
          </div>

          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
            What Our Clients are Saying
          </h2>

          <div className="relative flex items-center justify-center">
            <div className="absolute -left-6 top-2 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br from-orange-400 to-pink-400 overflow-hidden shadow-lg z-19">
              <img src={Doctor1} className="w-full h-full object-cover" />
            </div>

            <div className="absolute -left-4 bottom-10 w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 overflow-hidden shadow-lg z-19">
              <img src={Doctor5} className="w-full h-full object-cover" />
            </div>

            <div className="absolute -right-6 top-4 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 overflow-hidden shadow-lg z-19">
              <img src={Doctor2} className="w-full h-full object-cover" />
            </div>

            <div className="absolute -right-4 bottom-8 w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-purple-300 to-purple-400 overflow-hidden shadow-lg z-19">
              <img src={Doctor3} className="w-full h-full object-cover" />
            </div>

            <div className="absolute right-1/3 bottom-2 w-7 h-7 sm:w-9 sm:h-9 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-gradient-to-br from-orange-300 to-orange-400 overflow-hidden shadow-lg z-19">
              <img src={Doctor4} className="w-full h-full object-cover" />
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
            <button className="w-10 h-10 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center text-white shadow-lg">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center text-white shadow-lg">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
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
                      <div className="bg-gray-800 rounded-lg p-4 w-48 h-32 shadow-2xl" />
                    )}
                    {index === 1 && (
                      <div className="bg-white rounded-2xl p-4 w-32 h-56 shadow-2xl" />
                    )}
                    {index === 2 && (
                      <div className="bg-gray-800 rounded-xl p-4 w-56 h-40 shadow-2xl" />
                    )}
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testominals;
