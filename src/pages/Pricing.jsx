import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

const VoIPPricingInterface = () => {
  const [activeStep, setActiveStep] = useState(null);
  const [openCollapse, setOpenCollapse] = useState(null);
  const [searchValue, setSearchValue] = useState("72");
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [showAllNumbers, setShowAllNumbers] = useState(false);

  const availableNumbers = [
    "7205908898",
    "7205908902",
    "7205908903",
    "7205908904",
    "7205908907",
    "7205908908",
    "7205908909",
    "7205908910",
  ];

  const areaCodes = ["720", "722", "726", "727"];

  const steps = [
    { id: 0, label: "Phone#s" },
    { id: 1, label: "Cloud PBX" },
    { id: 2, label: "Dialing Plans" },
    { id: 3, label: "SMS" },
    { id: 4, label: "IP Phones" },
  ];

  const collapseItems = [
    {
      id: "phone",
      label: "− Phone Numbers",
      status: `${selectedNumbers.length} Number Selected`,
      price: "",
    },
    {
      id: "cloud",
      label: "− Cloud PBX",
      status: "Platform Selected",
      price: "0 Selected",
    },
    {
      id: "dialing",
      label: "+ Dialing Plans",
      status: "Outbound Usage",
      price: "$0.00",
    },
    { id: "sms", label: "+ SMS", status: "", price: "$0.00" },
    { id: "equipment", label: "+ Equipment", status: "", price: "$0.00" },
  ];

  const handleStepClick = (stepId) => {
    setActiveStep(stepId);
    setOpenCollapse(collapseItems[stepId]?.id || null);
  };

  const handleCollapseToggle = (id, index) => {
    setOpenCollapse(openCollapse === id ? null : id);
    setActiveStep(index);
  };

  const toggleNumberSelection = (number) => {
    setSelectedNumbers((prev) =>
      prev.includes(number)
        ? prev.filter((n) => n !== number)
        : [...prev, number]
    );
  };

  const displayedNumbers = showAllNumbers
    ? availableNumbers
    : availableNumbers.slice(0, 5);

  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center mb-8">
          {steps.map((step, index) => (
            <div
              key={step.id}
              onClick={() => handleStepClick(step.id)}
              className={`relative flex-1 py-3 px-6 text-center font-medium cursor-pointer transition-colors ${
                activeStep === step.id
                  ? "bg-orange-500 text-white"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
              style={{
                clipPath:
                  index === steps.length - 1
                    ? "polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%, 20px 50%)"
                    : "polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%, 20px 50%)",
                marginLeft: index === 0 ? "0" : "-20px",
                zIndex: steps.length - index,
              }}
            >
              {step.label}
            </div>
          ))}
        </div>

        <div className="flex gap-6">
          <div className="flex-1 space-y-3">
            {collapseItems.map((item, index) => (
              <div
                key={item.id}
                className="bg-white rounded-lg border-2 border-orange-400 overflow-hidden"
              >
                <div
                  onClick={() => handleCollapseToggle(item.id, index)}
                  className="flex items-center justify-between p-4 cursor-pointer hover:bg-orange-50 transition-colors"
                >
                  <div className="flex items-center gap-3 flex-1">
                    <span className="font-medium text-gray-700">
                      {item.label}
                    </span>
                    {item.status && (
                      <span className="text-sm text-gray-600">
                        {item.status}
                      </span>
                    )}
                  </div>
                  <span className="font-semibold text-gray-800">
                    {item.price}
                  </span>
                </div>

                {openCollapse === item.id && (
                  <div className="px-6 py-6 bg-orange-50 border-t-2 border-orange-400">
                    {item.id === "phone" ? (
                      <div className="flex gap-8">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-800 mb-4">
                            Search For Local or Toll Free Numbers
                          </h3>

                          <div className="relative mb-6">
                            <input
                              type="text"
                              value={searchValue}
                              onChange={(e) => setSearchValue(e.target.value)}
                              className="w-full px-4 py-3 border-2 border-orange-400 rounded-lg text-center text-xl font-semibold focus:outline-none focus:ring-2 focus:ring-orange-300"
                            />
                            <button
                              onClick={() => setSearchValue("")}
                              className="absolute right-4 top-1/2 -translate-y-1/2 text-orange-500 hover:text-orange-600"
                            >
                              ✕
                            </button>
                          </div>

                          <div className="grid grid-cols-4 gap-3 mb-3">
                            {areaCodes.map((code) => (
                              <button
                                key={code}
                                className={`py-2.5 rounded-full font-medium transition-colors ${
                                  code === "720"
                                    ? "bg-orange-500 text-white border-2 border-orange-500"
                                    : "bg-orange-50 text-gray-700 border-2 border-orange-200 hover:bg-orange-100"
                                }`}
                              >
                                {code}
                              </button>
                            ))}
                          </div>

                          <div className="grid grid-cols-4 gap-3">
                            {areaCodes.map((code) => (
                              <button
                                key={`${code}-2`}
                                className={`py-2.5 rounded-full font-medium transition-colors ${
                                  code === "720"
                                    ? "bg-orange-500 text-white border-2 border-orange-500"
                                    : "bg-orange-50 text-gray-700 border-2 border-orange-200 hover:bg-orange-100"
                                }`}
                              >
                                {code}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold text-orange-500">
                              Phone Numbers
                            </h3>
                            <span className="text-sm font-medium text-orange-500">
                              Add To Cart
                            </span>
                          </div>

                          <div className="space-y-3 max-h-64 overflow-y-auto">
                            {displayedNumbers.map((number) => (
                              <div
                                key={number}
                                className="flex items-center justify-between py-2"
                              >
                                <div className="flex items-center gap-2">
                                  <span className="text-orange-500">✓</span>
                                  <span className="text-gray-700 font-medium">
                                    {number}
                                  </span>
                                </div>
                                <div className="flex items-center gap-3">
                                  <span className="text-gray-700 font-semibold">
                                    $0.99/month
                                  </span>
                                  <label className="relative inline-block w-12 h-6">
                                    <input
                                      type="checkbox"
                                      checked={selectedNumbers.includes(number)}
                                      onChange={() =>
                                        toggleNumberSelection(number)
                                      }
                                      className="sr-only peer"
                                    />
                                    <span className="absolute inset-0 bg-gray-300 rounded-full cursor-pointer transition-colors peer-checked:bg-orange-500"></span>
                                    <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-6"></span>
                                  </label>
                                </div>
                              </div>
                            ))}
                          </div>

                          <button
                            onClick={() => setShowAllNumbers(!showAllNumbers)}
                            className="mt-4 text-orange-500 font-medium hover:text-orange-600 flex items-center gap-1"
                          >
                            + {showAllNumbers ? "Show less" : "Expand more"}
                          </button>
                        </div>
                      </div>
                    ) : item.id === "cloud" ? (
                      <div className="space-y-6">
                        <div className="bg-white rounded-lg border-2 border-orange-300 p-5">
                          <h3 className="text-base font-bold text-gray-800 mb-4">
                            Dedicated Hosted Phone System
                          </h3>
                          <div className="space-y-3">
                            {[
                              {
                                name: "HostedPBX Basic",
                                desc: "Up to 20 Extensions",
                                price: "$49.99/month",
                              },
                              {
                                name: "HostedPBX Professional",
                                desc: "Up to 2 Extensions",
                                price: "$49.99/month",
                              },
                              {
                                name: "HostedPBX Call Center",
                                desc: "Up to 60 Extensions with Active Agent Panel",
                                price: "$49.99/month",
                              },
                            ].map((plan, idx) => (
                              <div
                                key={idx}
                                className="flex items-center justify-between py-2"
                              >
                                <div className="flex items-center gap-3 flex-1">
                                  <span className="text-orange-500 text-sm">
                                    ●
                                  </span>
                                  <div>
                                    <span className="font-medium text-gray-800">
                                      {plan.name}
                                    </span>
                                  </div>
                                </div>
                                <span className="text-sm text-gray-600 mx-4">
                                  {plan.desc}
                                </span>
                                <span className="font-semibold text-gray-800 mr-4">
                                  {plan.price}
                                </span>
                                <label className="relative inline-block w-12 h-6">
                                  <input
                                    type="checkbox"
                                    className="sr-only peer"
                                  />
                                  <span className="absolute inset-0 bg-gray-300 rounded-full cursor-pointer transition-colors peer-checked:bg-orange-500"></span>
                                  <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-6"></span>
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-white rounded-lg border-2 border-orange-300 p-5">
                          <h3 className="text-base font-bold text-gray-800 mb-4">
                            Optional Add-On Features
                          </h3>
                          <div className="space-y-2.5">
                            {[
                              {
                                name: "Call Recording",
                                desc: "All calls, Per system",
                                price: "$20/month",
                              },
                              {
                                name: "Active Agent Panel",
                                desc: "$99 (one time fee)",
                                price: "Ineligible",
                              },
                              {
                                name: "Do-It-Yourself Configuration",
                                desc: "FREE",
                                price: "",
                              },
                              {
                                name: "Initial CloudPBX Configuration",
                                desc: "$199 (one time fee)",
                                price: "Waived with all qualified packages",
                              },
                              {
                                name: "Hourly Remote Support/Config",
                                desc: "$75/hour",
                                price: "Minimum 60 min, then every 30 min",
                              },
                              {
                                name: "Optional support plan",
                                desc: "$250/month",
                                price: "Monthly rate with 20 hr/mo commitment",
                              },
                              {
                                name: "Onsite Labor",
                                desc: "$120/hour+travel cost & time",
                                price: "Minimum 2 hours, in hourly increments",
                              },
                            ].map((feature, idx) => (
                              <div
                                key={idx}
                                className="flex items-center justify-between py-1.5"
                              >
                                <div className="flex items-center gap-2 flex-1">
                                  <span className="text-orange-500 text-xs">
                                    ●
                                  </span>
                                  <span className="text-sm font-medium text-gray-800">
                                    {feature.name}
                                  </span>
                                </div>
                                <span className="text-xs text-gray-600 mx-4">
                                  {feature.desc}
                                </span>
                                <span className="text-xs text-gray-700 mr-4 min-w-[180px] text-right">
                                  {feature.price}
                                </span>
                                {idx < 2 && (
                                  <label className="relative inline-block w-12 h-6">
                                    <input
                                      type="checkbox"
                                      className="sr-only peer"
                                    />
                                    <span className="absolute inset-0 bg-gray-300 rounded-full cursor-pointer transition-colors peer-checked:bg-orange-500"></span>
                                    <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-6"></span>
                                  </label>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                          <div className="bg-white rounded-lg border-2 border-orange-300 p-5">
                            <h3 className="text-base font-bold text-gray-800 mb-3">
                              PBX Features
                            </h3>
                            <div className="space-y-1.5">
                              {[
                                "Call Forward / Forwarding",
                                "Voicemail/VM to Email",
                                "Follow Me",
                                "Auto-Attendant/IVR",
                                "Do Not Disturb",
                                "Ext. to Ext. Calling",
                                "Custom Music On Hold",
                                "Office Hours",
                                "Remote Users",
                                "Multiple Offices",
                              ].map((feature, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-center gap-2"
                                >
                                  <span className="text-orange-500 text-xs">
                                    ✓
                                  </span>
                                  <span className="text-sm text-gray-700">
                                    {feature}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="bg-white rounded-lg border-2 border-orange-300 p-5">
                            <h3 className="text-base font-bold text-gray-800 mb-3">
                              Key Advantages
                            </h3>
                            <div className="space-y-1.5">
                              {[
                                "Easily scalable as you grow",
                                "Geographical Flexibility",
                                "Complete Cloud Services",
                                "Don't buy expensive equipment",
                                "Easy to Use",
                                "Quick, turnkey setup",
                                "Works with all VoIP Phones",
                              ].map((advantage, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-center gap-2"
                                >
                                  <span className="text-orange-500 text-xs">
                                    ✓
                                  </span>
                                  <span className="text-sm text-gray-700">
                                    {advantage}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        <p className="text-xs text-gray-600 italic px-2">
                          * PBX orders are processed within 1 to 3 business days
                          from the time placed, varied by the speed we collect
                          the desired specs from you.
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <p className="text-gray-600">
                          This is dummy content for {item.label}. Add your form
                          fields, options, or configuration settings here.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="p-4 bg-white rounded border border-gray-200">
                            <div className="text-sm font-medium text-gray-700 mb-2">
                              Option 1
                            </div>
                            <div className="text-xs text-gray-500">
                              Sample option description
                            </div>
                          </div>
                          <div className="p-4 bg-white rounded border border-gray-200">
                            <div className="text-sm font-medium text-gray-700 mb-2">
                              Option 2
                            </div>
                            <div className="text-xs text-gray-500">
                              Sample option description
                            </div>
                          </div>
                        </div>
                        <button className="mt-4 px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition-colors">
                          Add to Cart
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="w-80 bg-orange-50 rounded-lg p-6 border border-orange-200 h-fit">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Shopping Cart Totals
            </h2>

            <div className="flex items-center justify-center py-16 text-gray-500">
              No Item Added
            </div>

            <div className="mt-8 pt-4 border-t border-orange-200">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-600">Total Price</span>
                <span className="text-2xl font-bold text-gray-800">0.00</span>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 py-2.5 px-4 bg-orange-400 text-white rounded-lg font-medium hover:bg-orange-500 transition-colors">
                  Next
                </button>
                <button className="flex-1 py-2.5 px-4 bg-white text-orange-500 border border-orange-300 rounded-lg font-medium hover:bg-orange-50 transition-colors">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoIPPricingInterface;
