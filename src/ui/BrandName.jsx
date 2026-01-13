import title1 from "../../public/title1.png";
import title2 from "../../public/title2.png";
import title4 from "../../public/title4.png";
import title5 from "../../public/title5.png";
import title6 from "../../public/title6.png";
import title7 from "../../public/title7.png";

const BrandName = () => {
  return (
    <div
      className="relative flex items-center gap-6 p-6 sm:p-8 
  bg-[linear-gradient(180deg,_#E2C8B5_0%,_rgba(255,224,208,0.802083)_19.79%,_rgba(226,200,181,0)_100%)] 
  rounded-4xl shadow-sm 
  w-full lg:w-[85%] 
  mx-auto lg:ml-auto"
    >
      <div
        className="
      absolute 
      bg-orange-500 text-white rounded-2xl text-center shadow-lg z-10

      px-6 py-4 sm:px-8 sm:py-6 lg:px-10 lg:py-8

      -top-8 left-2/4 -translate-x-1/2
      md:top-6
      lg:top-12 lg:-left-30 lg:translate-x-0
    "
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">200+</h2>
        <p className="mt-2 lg:mt-3 leading-snug text-xs sm:text-sm">
          Certified & <br />
          Authorized <br />
          Reseller/Integrator
        </p>
      </div>

      <div className="flex-1 pt-24 sm:pt-28 lg:pt-0 lg:pl-16 p-3">
        <div
          className="
        flex items-center gap-6 sm:gap-8
        overflow-x-auto
        whitespace-nowrap
        scrollbar-hide
        lg:flex-wrap lg:justify-around lg:overflow-visible
      "
        >
          {[title1, title2, title4, title5, title6, title7].map((logo, i) => (
            <img
              key={i}
              src={logo}
              className="h-14 sm:h-16 lg:h-20 object-contain opacity-90 flex-shrink-0"
              alt="logo"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandName;
