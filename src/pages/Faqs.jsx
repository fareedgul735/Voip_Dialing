import BrandName from "../ui/BrandName";
import FAQAccordion from "../ui/FaqsUi";

const Faqs = () => {
  return (
    <div className="w-full bg-gradient-to-b from-red-50 via-white to-white p-[12px] py-12">
      <div className="faqs mb-22">
        <FAQAccordion />
      </div>
      <div className="w-full h-70 flex justify-end mt-12 mb-12">
        <BrandName />
      </div>
    </div>
  );
};

export default Faqs;
