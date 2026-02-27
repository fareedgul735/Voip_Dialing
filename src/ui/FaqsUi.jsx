import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQAccordion() {
  const [openItems, setOpenItems] = useState({});

  const faqs = [
    {
      id: 1,
      question: "Minimum Requirements?",
      answer:
        "IP-PBX with External IP-Data Connection with QoS (recommended minimum of 80 kbps per concurrent call, plus bandwidth for fluctuation, and for internet browsing as needed)-QoS enabled Network (Recommended)-IP Phones/Soft Phones as applies to your application-Network switches & routers as needed by customer",
    },
    {
      id: 2,
      question: "What is VoIP?",
      answer:
        "VoIP stands for Voice over Internet Protocol (IP). VoIP phone service operates by using your high-speed Internet connection to transfer your voice calls. As opposed to a traditional landline, VoIP uses your IP-phone or soft-phone on your computer to place and receive calls. The call is sent over the Internet in & out to the PSTN Network (Plan Switched Telephone Network).",
    },
    {
      id: 3,
      question: "How do I contact you?",
      answer:
        "Address:Voip Dialing Inc.PO Box 33357Las Vegas, NV 89133ONLINE FORM: HERE(www.voipdialing.com/contactus)EMAIL: support@voipdialing.comPHONE: 855-VDialing (855-834-2546)",
    },
    {
      id: 4,
      question: "Can I get a number of an area code other than mine?",
      answer:
        "Yes, you can select an area code different from the area in which you are located. Simply select a Phone Number number of an area code of your choice, which will be pointed to your system.",
    },
    {
      id: 5,
      question: "Do you provide E911 or E411 Directory Listing?",
      answer:
        "For one of the recommended & detailed speed tests - Click Here(voipdialing.com/speedtest)",
    },
    {
      id: 6,
      question: "What CODEC do you support?",
      answer:
        "We support most Audio Codec protocols available in the VoIP Industry.SIP: G711-ULaw, G711, ALaw, G729, H323, GSM610, GSM729 and others.Traditional Fax: T.38 pass-through.vFax: Contact Us.Video: H.264 or H.263.For more customizable solution please submit your request HERE.",
    },
    {
      id: 7,
      question: "How quick can I dial?",
      answer:
        "Upon your account being verified, you can start dialing Immediately!",
    },
    {
      id: 8,
      question: "How do I sign up?",
      answer:
        "#1 - Select a Plan & Register HERE(www.Voipdialing.com/siptrunks/index/plan/)#2 - Confirm Your Email, then Login#3 - Enter Your PBX external IP addressYou're Ready to Dial! At this point, you can use your free-dial minutes, add funds to your account and order Phone Numbers as needed.",
    },
  ];

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="w-full">
      <div className="mx-4 sm:mx-8 lg:mx-12">
        <div className="text-left lg:text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-3">
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
