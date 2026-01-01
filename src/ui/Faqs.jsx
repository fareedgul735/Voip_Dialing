import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQAccordion() {
  const [openItems, setOpenItems] = useState({});

  const faqs = [
    {
      id: 1,
      question: "Does Biotix remember previous conversations?",
      answer:
        "Yes, Biotix maintains context throughout your conversation session, allowing for more natural and coherent interactions based on previous exchanges.",
    },
    {
      id: 2,
      question: "Does Biotix integrate with other software tools?",
      answer:
        "Biotix offers seamless integration with popular business tools and platforms through our API and native connectors, enabling smooth workflow automation.",
    },
    {
      id: 3,
      question: "Biotix handle sensitive customer information?",
      answer:
        "We employ enterprise-grade encryption and comply with international data protection standards to ensure your customer information remains secure and confidential.",
    },
    {
      id: 4,
      question: "Is the memory feature in Biotix automatic?",
      answer:
        "Yes, the memory feature works automatically during your session, intelligently storing relevant context to provide more personalized and accurate responses.",
    },
    {
      id: 5,
      question: "Is Biotix capable of voice interaction?",
      answer:
        "Yes, Biotix supports voice interactions, allowing users to communicate naturally through speech for a more accessible and convenient experience.",
    },
    {
      id: 6,
      question: "How do I set up Biotix for my business?",
      answer:
        "Setting up Biotix is straightforward - simply sign up, configure your business parameters, train the AI with your specific data, and integrate it with your existing systems.",
    },
    {
      id: 7,
      question: "How does Biotix handle large volumes of queries?",
      answer:
        "Biotix is built on scalable infrastructure that can handle thousands of concurrent queries, ensuring consistent performance even during peak usage times.",
    },
    {
      id: 8,
      question: "What kind of support does Biotix provide?",
      answer:
        "We offer 24/7 customer support through multiple channels including email, chat, and phone, along with comprehensive documentation and onboarding assistance.",
    },
  ];

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className=" bg-orange-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-500 text-sm">
            How Spitflox can benefit your business, understanding its features
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-orange-100 rounded-lg overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-orange-200 transition-colors"
              >
                <span className="text-gray-800 text-sm font-medium pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openItems[faq.id] ? (
                    <Minus className="w-4 h-4 text-gray-600" />
                  ) : (
                    <Plus className="w-4 h-4 text-gray-600" />
                  )}
                </div>
              </button>

              {openItems[faq.id] && (
                <div className="px-5 pb-4 pt-0">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
