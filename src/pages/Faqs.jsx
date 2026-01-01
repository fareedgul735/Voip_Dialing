import ContactInformation from "../ui/ContactInformation";
import CustomUi from "../ui/CustomUi";
import FAQAccordion from "../ui/Faqs";

const Faqs = () => {
  return (
    <div className="w-full">
      <div className="faqs">
        <FAQAccordion />
      </div>
      <div className="w-full h-60 flex justify-end mt-20 mb-4 px-4">
        <CustomUi />
      </div>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
        <ContactInformation />
      </div>
    </div>
  );
};

export default Faqs;
