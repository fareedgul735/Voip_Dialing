import { ChevronLeft, ChevronRight } from "lucide-react";

import M1 from "../../public/M1.png";
import M2 from "../../public/M2.png";
import M3 from "../../public/M3.png";
import M4 from "../../public/M4.png";

import Doctor1 from "../../public/Doctor 1.png";
import Doctor2 from "../../public/Doctor 2.png";
import Doctor3 from "../../public/Doctor 3.png";
import Doctor4 from "../../public/Doctor 4.jpg";
import Doctor5 from "../../public/Doctor 5.png";
import { useState } from "react";

const Testominals = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [direction, setDirection] = useState("right"); 

  const handleNext = () => {
    setDirection("right");
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection("left");
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

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
      image: M4,
    },
    {
      title: "Cloud PBX Service",
      description:
        "The system allows for precise campaign starting enabling marketers to plan.",
      image: M2,
    },
    {
      title: "Cloud PBX Service",
      description:
        "The system allows for precise campaign starting enabling marketers to plan.",
      image: M2,
    },
  ];

  return (
    <div className="w-full  bg-gradient-to-b from-orange-50 to-white">
      <div className="py-16 px-4">
        <div className="mx-12">
          <div className="text-center mb-4">
            <p className="text-orange-400 uppercase tracking-wider text-1xl ">
              Testimonials
            </p>
          </div>

          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
            What Our Clients are Saying
          </h2>

          <div className="relative flex items-center justify-center">
            <div className="absolute left-12 top-2 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-30 lg:h-30 rounded-full  overflow-hidden shadow-lg z-19">
              <img src={Doctor5} className="w-full h-full object-cover" />
            </div>

            <div className="absolute left-40 bottom-4 w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-20 lg:h-20 rounded-full overflow-hidden shadow-lg z-19">
              <img src={Doctor1} className="w-full h-full object-cover" />
            </div>

            <div className="absolute right-22 top-8 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-28 lg:h-28 rounded-full overflow-hidden shadow-lg z-19">
              <img src={Doctor4} className="w-full h-full object-cover" />
            </div>

            <div className="absolute right-44 bottom-18 w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full overflow-hidden shadow-lg z-19">
              <img src={Doctor2} className="w-full h-full object-cover" />
            </div>

            <div className="absolute right-22 bottom-2 w-7 h-7 sm:w-9 sm:h-9 md:w-12 md:h-12 lg:w-20 lg:h-20 rounded-full overflow-hidden shadow-lg z-19">
              <img src={Doctor3} className="w-full h-full object-cover" />
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
            <button
              onClick={handlePrev}
              className="w-10 h-10 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center text-white shadow-lg"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={handleNext}
              className="w-10 h-10 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center text-white shadow-lg"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <p className="text-orange-400 uppercase tracking-wider text-lg">
              VOIP BLOGS
            </p>
          </div>

          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
            The Services you really need for growing fast
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="cursor-pointer">
                <div
                  className="rounded-3xl overflow-hidden p-6 h-80 shadow-xl flex items-center justify-center"
                  style={{
                    backgroundImage: `url(${M3})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <img
                    src={service.image}
                    alt="service"
                    className={`object-contain transition-all duration-300
    ${index === 1 ? "w-[316px] h-[380px] rounded-2xl" : "w-[316px] h-[331px]"}`}
                  />
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
