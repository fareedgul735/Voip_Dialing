const FAQItem = ({ question, answer, index, isOpen, onClick }) => {
  return (
    <div
      className={`border border-gray-300 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 ${
        isOpen ? "ring-2 ring-[#FF6B35]/30" : ""
      }`}
    >
      <button
        className={`w-full p-7 text-left flex justify-between items-center transition-all duration-300 ${
          isOpen
            ? "bg-gradient-to-r from-[#FF6B35] to-[#ff8b35] text-white"
            : "bg-white text-gray-800 hover:bg-gray-50"
        }`}
        onClick={onClick}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
      >
        <div className="flex items-start gap-4">
          <div
            className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
              isOpen ? "bg-white/20" : "bg-gray-100"
            }`}
          >
            <span
              className={`font-bold ${isOpen ? "text-white" : "text-gray-600"}`}
            >
              {index + 1}
            </span>
          </div>
          <span className="font-semibold text-xl pr-8 text-left">
            {question}
          </span>
        </div>
        <div className="flex-shrink-0">
          <span
            className={`text-3xl font-light transition-all duration-300 ${
              isOpen ? "rotate-180 scale-110" : ""
            }`}
          >
            {isOpen ? "−" : "+"}
          </span>
        </div>
      </button>

      <div
        id={`faq-answer-${index}`}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-7 bg-white border-t border-gray-200">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-2 bg-gradient-to-b from-[#FF6B35] to-[#ff8b35] rounded-full"></div>
            <p className="text-gray-700 leading-relaxed text-lg">{answer}</p>
          </div>

          {/* Additional resources (optional) */}
          {isOpen && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                  Related to your question
                </span>
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                  Business Solutions
                </span>
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                  Technical Support
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQItem;
