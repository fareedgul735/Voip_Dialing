import title1 from "../../public/title1.png";
import title2 from "../../public/title2.png";
import title4 from "../../public/title4.png";
import title5 from "../../public/title5.png";
import title6 from "../../public/title6.png";
import title7 from "../../public/title7.png";

const CustomUi = () => {
  return (
    <div className="relative flex items-center gap-6 p-8 bg-orange-50 rounded-4xl shadow-sm w-[85%] ml-auto">
      <div className="absolute top-12 -left-40 bg-orange-500 text-white rounded-2xl px-10 py-8 text-center shadow-lg z-10">
        <h2 className="text-4xl font-bold">200+</h2>
        <p className="mt-3 leading-snug text-sm">
          Certified & <br />
          Authorized <br />
          Reseller/Integrator
        </p>
      </div>

      <div className="flex-1 pl-16 p-[12px]">
        <div className="flex justify-between">
          <p className="font-semibold text-gray-800 mb-6 leading-relaxed">
            We Empower your business with seamless,
            <br />
            high-quality calling solutions.
          </p>

          <p className="flex gap-2 w-100 font-semibold text-gray-800 mb-6 leading-relaxed">
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos rem
              molestiae consequatur!
            </span>
            <img
              src={title6}
              className="h-10 object-contain opacity-90"
              alt="logo"
            />
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-8">
          <img
            src={title1}
            className="h-20 object-contain opacity-90"
            alt="logo"
          />
          <img
            src={title2}
            className="h-20 object-contain opacity-90"
            alt="logo"
          />
          <img
            src={title4}
            className="h-20 object-contain opacity-90"
            alt="logo"
          />
          <img
            src={title5}
            className="h-20 object-contain opacity-90"
            alt="logo"
          />
          <img
            src={title6}
            className="h-20 object-contain opacity-90"
            alt="logo"
          />
          <img
            src={title7}
            className="h-20 object-contain opacity-90"
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
};

export default CustomUi;
