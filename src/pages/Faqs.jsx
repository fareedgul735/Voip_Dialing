import BrandName from "../ui/BrandName";
import FAQAccordion from "../ui/FaqsUi";

const Faqs = () => {
  return (
    <div className="w-full">
      <div className="faqs">
        <FAQAccordion />
      </div>
      <div className="w-full h-60 flex justify-end mt-20 mb-4 px-4">
        <BrandName />
      </div>
   
    </div>
  );
};

export default Faqs;
