import { ChevronLeft, ChevronRight } from "lucide-react";
import { FileText, BookOpen, LifeBuoy } from "lucide-react";
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
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      text: "VoIPDialing has completely upgraded our communication. The call quality is excellent, uptime is consistent, and their support team is always quick.",
      author: "Alex Hales",
      position: "Operations Manager",
      images: {
        topLeft: "https://randomuser.me/api/portraits/men/1.jpg",
        bottomLeft: "https://randomuser.me/api/portraits/women/1.jpg",
        topRight: "https://randomuser.me/api/portraits/men/2.jpg",
        middleRight: "https://randomuser.me/api/portraits/women/2.jpg",
        bottomRight: "https://randomuser.me/api/portraits/men/3.jpg",
      },
    },
    {
      text: "The integration was seamless and the features are exactly what we needed. Customer support is outstanding and always available when we need them.",
      author: "Sarah Johnson",
      position: "IT Director",
      images: {
        topLeft: "https://randomuser.me/api/portraits/women/3.jpg",
        bottomLeft: "https://randomuser.me/api/portraits/men/4.jpg",
        topRight: "https://randomuser.me/api/portraits/women/4.jpg",
        middleRight: "https://randomuser.me/api/portraits/men/5.jpg",
        bottomRight: "https://randomuser.me/api/portraits/women/5.jpg",
      },
    },
    {
      text: "Best decision we made for our company communications. The ROI has been incredible and our team loves the user-friendly interface available need them.",
      author: "Michael Chen",
      position: "CEO",
      images: {
        topLeft: "https://randomuser.me/api/portraits/men/6.jpg",
        bottomLeft: "https://randomuser.me/api/portraits/women/6.jpg",
        topRight: "https://randomuser.me/api/portraits/men/7.jpg",
        middleRight: "https://randomuser.me/api/portraits/women/7.jpg",
        bottomRight: "https://randomuser.me/api/portraits/men/8.jpg",
      },
    },
  ];

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection("right");
    setTimeout(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection("left");
    setTimeout(() => {
      setCurrentTestimonial(
        (prev) => (prev - 1 + testimonials.length) % testimonials.length,
      );
      setIsAnimating(false);
    }, 300);
  };

  const currentImages = testimonials[currentTestimonial].images;

  const services = [
    {
      id: 1,
      icon: M2,
      title: "Cloud PBX Service in Las Vegas",
      description:
        "Learn how Cloud PBX phone systems help Las Vegas businesses improve call handling, reduce costs, and deliver a professional customer experience.",
      iconColor: "bg-orange-500",
    },
    {
      id: 2,
      icon: M2,
      title: "VoIP Solutions for Growing Businesses",
      description:
        "Explore how scalable VoIP and Cloud PBX services support fast-growing Las Vegas companies, remote teams, and multi-location offices.",
      iconColor: "bg-orange-500",
    },
    {
      id: 3,
      icon: M2,
      title: "Cloud PBX Support & Best Practices",
      description:
        "Discover best practices, setup tips, and support insights to get the most out of your Cloud PBX phone system in Las Vegas.",
      iconColor: "bg-orange-500",
    },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-orange-50 to-white">
      <div className="py-16">
        <div className="mx-4 md:mx-8 lg:mx-12">
          <div className="text-center mb-4">
            <p className="text-orange-400 uppercase tracking-wider text-1xl">
              Testimonials
            </p>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-12">
            What Our Clients are Saying
          </h2>

          <div className="relative flex items-center justify-center">
            <div className="absolute left-2 top-2 lg:left-12 lg:top-2 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-30 lg:h-30 rounded-full overflow-hidden shadow-lg z-19 transition-opacity duration-300">
              <img
                key={`topLeft-${currentTestimonial}`}
                src={currentImages.topLeft}
                className={`w-full h-full object-cover transition-opacity duration-300 ${
                  isAnimating ? "opacity-0" : "opacity-100"
                }`}
                alt="Client"
              />
            </div>

            <div className="absolute left-10 bottom-2 lg:left-40 lg:bottom-4 w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-20 lg:h-20 rounded-full overflow-hidden shadow-lg z-19 transition-opacity duration-300">
              <img
                key={`bottomLeft-${currentTestimonial}`}
                src={currentImages.bottomLeft}
                className={`w-full h-full object-cover transition-opacity duration-300 ${
                  isAnimating ? "opacity-0" : "opacity-100"
                }`}
                alt="Client"
              />
            </div>

            <div className="absolute right-12 top-4 lg:right-22 lg:top-8 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-28 lg:h-28 rounded-full overflow-hidden shadow-lg z-19 transition-opacity duration-300">
              <img
                key={`topRight-${currentTestimonial}`}
                src={currentImages.topRight}
                className={`w-full h-full object-cover transition-opacity duration-300 ${
                  isAnimating ? "opacity-0" : "opacity-100"
                }`}
                alt="Client"
              />
            </div>

            <div className="absolute right-14 bottom-8 lg:right-44 lg:bottom-18 w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full overflow-hidden shadow-lg z-19 transition-opacity duration-300">
              <img
                key={`middleRight-${currentTestimonial}`}
                src={currentImages.middleRight}
                className={`w-full h-full object-cover transition-opacity duration-300 ${
                  isAnimating ? "opacity-0" : "opacity-100"
                }`}
                alt="Client"
              />
            </div>

            <div className="absolute right-2 -bottom-4 lg:right-22 lg:bottom-2 w-7 h-7 sm:w-9 sm:h-9 md:w-12 md:h-12 lg:w-20 lg:h-20 rounded-full overflow-hidden shadow-lg z-19 transition-opacity duration-300">
              <img
                key={`bottomRight-${currentTestimonial}`}
                src={currentImages.bottomRight}
                className={`w-full h-full object-cover transition-opacity duration-300 ${
                  isAnimating ? "opacity-0" : "opacity-100"
                }`}
                alt="Client"
              />
            </div>

            <div className="overflow-hidden max-w-2xl mx-auto relative z-10">
              <div
                className={`bg-white  rounded-2xl shadow-xl p-8 border border-gray-100 transition-all duration-300 ease-in-out ${
                  isAnimating
                    ? direction === "right"
                      ? "translate-x-full opacity-0"
                      : "-translate-x-full opacity-0"
                    : "translate-x-0 opacity-100"
                }`}
              >
                <div className="flex justify-center mb-6 ">
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
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              disabled={isAnimating}
              className="w-10 h-10 cursor-pointer bg-orange-500 hover:bg-blue-600 disabled:bg-orange-300 rounded-full flex items-center justify-center text-white shadow-lg transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={handleNext}
              disabled={isAnimating}
              className="w-10 h-10 bg-orange-500 cursor-pointer hover:bg-blue-600 disabled:bg-orange-300 rounded-full flex items-center justify-center text-white shadow-lg transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="mx-4 md:mx-8 lg:mx-12">
          <div className="text-center mb-4">
            <p className="text-orange-400 uppercase tracking-wider text-lg">
              VOIP BLOGS
            </p>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-12">
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
                    src={service.icon}
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
