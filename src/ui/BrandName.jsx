import React, { useEffect, useRef, useState } from "react";

import title1 from "../../public/title1.png";
import title2 from "../../public/title2.png";
import title4 from "../../public/title4.png";
import title5 from "../../public/title5.png";
import title6 from "../../public/title6.png";
import title7 from "../../public/title7.png";

const BrandName = () => {
  const scrollContainerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  const logos = [
    { name: "XORCOM", image: title1 },
    { name: "NEC", image: title2 },
    { name: "Poly", image: title4 },
    { name: "Yeastar", image: title5 },
    { name: "XORCOM", image: title6 },
    { name: "NEC", image: title7 },
    { name: "3CX", image: title2 },
  ];

  const duplicatedLogos = [...logos, ...logos];

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let position = 0;
    let animationId;

    const animate = () => {
      if (!isHovering) {
        position -= 0.5;

        if (Math.abs(position) >= container.scrollWidth / 2) {
          position = 0;
        }

        container.style.transform = `translateX(${position}px)`;
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [isHovering]);

  return (
    <div
      className="relative mx-12 w-full lg:w-[85%] mb-8  sm:p-8
      bg-[linear-gradient(180deg,_#E2C8B5_0%,_rgba(255,224,208,0.8)_20%,_rgba(226,200,181,0)_100%)]
      rounded-4xl shadow-sm"
    >
      <div
        className="absolute w-[232px] h-[224px] bg-orange-500 text-white rounded-2xl flex flex-col justify-center items-center gap-2 text-center shadow-lg z-10
        px-6 py-4 sm:px-8 sm:py-6
        -top-8 left-1/2 -translate-x-1/2
        md:top-6
        lg:top-12 lg:-left-28 lg:translate-x-0"
      >
        <h2 className="text-2xl sm:text-3xl lg:text-6xl font-bold">200+</h2>
        <p className="mt-2 text-[14px] leading-snug">
          Certified & <br />
          Authorized <br />
          Reseller / Integrator
        </p>
      </div>

      <div className="pt-12 sm:pt-28 lg:pt-0 lg:pl-16">
        <div
          className="relative mt-12"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="overflow-hidden rounded-xl">
            <div
              ref={scrollContainerRef}
              className="flex gap-16 py-2 px-6"
              style={{ willChange: "transform" }}
            >
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex items-center justify-center px-8"
                >
                  <img
                    src={logo.image}
                    alt={logo.name}
                    className="h-20 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandName;
