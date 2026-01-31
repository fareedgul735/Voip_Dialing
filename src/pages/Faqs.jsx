import BrandName from "../ui/BrandName";
import FAQAccordion from "../ui/FaqsUi";

const Faqs = () => {
  return (
    <div className="w-full bg-gradient-to-b from-red-50 via-white to-white">
      <div className="faqs">
        <FAQAccordion />
      </div>
      <div className="w-full p-[8px] h-70 flex justify-end mt-30 mb-4 px-4">
        <BrandName />
      </div>
    </div>
  );
};

export default Faqs;
