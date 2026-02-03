import React, { useState } from "react";
import BrandName from "../ui/BrandName";

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
    { id: 0, label: "Phone#s", collapseId: "phone" },
    { id: 1, label: "Cloud PBX", collapseId: "cloud" },
    { id: 2, label: "Dialing Plans", collapseId: "dialing" },
    { id: 3, label: "SMS", collapseId: "sms" },
    { id: 4, label: "IP Phones", collapseId: "equipment" },
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
      label: "+ Cloud PBX",
      status: "Platform Selected",
      price: "$0.00",
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

  const toggleNumberSelection = (number) => {
    setSelectedNumbers((prev) =>
      prev.includes(number)
        ? prev.filter((n) => n !== number)
        : [...prev, number],
    );
  };

  const displayedNumbers = showAllNumbers
    ? availableNumbers
    : availableNumbers.slice(0, 5);

  return (
    <div className="w-full bg-gradient-to-b from-red-50 via-white to-white p-[12px] py-12">
      <style>{`
        .orange-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .orange-scrollbar::-webkit-scrollbar-track {
          background: #fed7aa;
          border-radius: 4px;
        }
        .orange-scrollbar::-webkit-scrollbar-thumb {
          background: #f97316;
          border-radius: 4px;
        }
        .orange-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #ea580c;
        }
      `}</style>
      <div className="mx-12">
        <div className="flex items-center mb-8">
          {steps.map((step, index) => (
            <div
              key={step.id}
              onClick={() => {
                setActiveStep(step.id);
                setOpenCollapse(step.collapseId);
              }}
              className={`flex justify-center items-center py-1 px-17 text-center font-medium cursor-pointer transition-colors
                ${
                  activeStep === step.id
                    ? "bg-orange-500 text-white"
                    : "bg-[#027DB6] text-white hover:bg-[#027DB7]"
                }`}
              style={{
                marginLeft: index === 0 ? "0" : "-20px",
                zIndex: steps.length - index,
              }}
            >
              <span className="text-[12px]">{step.label}</span>
            </div>
          ))}
        </div>

        <div className="flex gap-6">
          <div className="flex-1 space-y-3">
            {collapseItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-md border border-orange-400 overflow-hidden"
              >
                <div
                  onClick={() => {
                    const stepIndex = steps.findIndex(
                      (s) => s.collapseId === item.id,
                    );

                    setActiveStep(stepIndex !== -1 ? stepIndex : null);
                    setOpenCollapse(openCollapse === item.id ? null : item.id);
                  }}
                  className="flex items-center justify-between px-4 py-2.5 cursor-pointer hover:bg-orange-50"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-medium text-gray-700 text-sm">
                      {item.label}
                    </span>
                    {item.status && (
                      <span className="text-xs text-gray-500">
                        {item.status}
                      </span>
                    )}
                  </div>
                  <span className="text-sm font-semibold text-gray-700">
                    {item.price}
                  </span>
                </div>

                {openCollapse === item.id && (
                  <div className="px-5 py-4 bg-orange-50 border-t border-orange-400">
                    {item.id === "phone" && (
                      <div className="flex gap-8">
                        <div className="flex-1">
                          <h3 className="text-sm font-semibold mb-3">
                            Search For Local or Toll Free Numbers
                          </h3>

                          <div className="relative mb-4">
                            <input
                              value={searchValue}
                              onChange={(e) => setSearchValue(e.target.value)}
                              className="w-full px-4 py-2.5 border border-orange-400 rounded-md text-center font-semibold"
                            />
                            <button
                              onClick={() => setSearchValue("")}
                              className="absolute right-3 top-1/2 -translate-y-1/2 text-orange-500"
                            >
                              ✕
                            </button>
                          </div>

                          <div className="grid grid-cols-4 gap-2 mb-2">
                            {areaCodes.map((code) => (
                              <button
                                key={code}
                                className={`py-2 rounded-full text-sm border ${
                                  code === "720"
                                    ? "bg-orange-500 text-white border-orange-500"
                                    : "bg-orange-100 border-orange-200"
                                }`}
                              >
                                {code}
                              </button>
                            ))}
                          </div>

                          <div className="grid grid-cols-4 gap-2">
                            {areaCodes.map((code) => (
                              <button
                                key={`${code}-2`}
                                className="py-2 rounded-full text-sm bg-orange-100 border border-orange-200"
                              >
                                {code}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="flex-1">
                          <div className="flex justify-between mb-3">
                            <h3 className="text-sm font-semibold text-orange-500">
                              Phone Numbers
                            </h3>
                            <span className="text-sm text-orange-500">
                              Add To Cart
                            </span>
                          </div>

                          <div className="space-y-2 max-h-56 overflow-y-auto orange-scrollbar">
                            {displayedNumbers.map((number) => (
                              <div
                                key={number}
                                className="flex justify-between items-center"
                              >
                                <span className="text-sm">{number}</span>
                                <label className="relative inline-block w-10 h-5">
                                  <input
                                    type="checkbox"
                                    checked={selectedNumbers.includes(number)}
                                    onChange={() =>
                                      toggleNumberSelection(number)
                                    }
                                    className="sr-only peer"
                                  />
                                  <span className="absolute inset-0 bg-gray-300 rounded-full peer-checked:bg-orange-500"></span>
                                  <span className="absolute left-1 top-0.5 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-transform"></span>
                                </label>
                              </div>
                            ))}
                          </div>

                          <button
                            onClick={() => setShowAllNumbers(!showAllNumbers)}
                            className="mt-2 text-sm text-orange-500"
                          >
                            {showAllNumbers ? "− Show less" : "+ Expand more"}
                          </button>
                        </div>
                      </div>
                    )}

                    {item.id === "cloud" && (
                      <div className="space-y-6">
                        <div className="border border-orange-300 rounded-md p-4">
                          <h3 className="font-semibold text-orange-500 mb-4 border-b border-orange-200 pb-2">
                            Dedicated Hosted Phone System
                          </h3>

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
                          ].map((plan, i) => (
                            <div
                              key={i}
                              className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0"
                            >
                              <div className="flex items-center gap-2">
                                <span className="text-orange-500 text-lg">
                                  ●
                                </span>
                                <span className="text-sm font-medium text-gray-800">
                                  {plan.name}
                                </span>
                              </div>
                              <span className="text-xs text-gray-600">
                                {plan.desc}
                              </span>
                              <span className="font-semibold text-gray-800">
                                {plan.price}
                              </span>
                              <label className="relative inline-block w-10 h-5">
                                <input
                                  type="checkbox"
                                  className="sr-only peer"
                                />
                                <span className="absolute inset-0 bg-gray-300 rounded-full peer-checked:bg-orange-500"></span>
                                <span className="absolute left-1 top-0.5 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-transform"></span>
                              </label>
                            </div>
                          ))}
                        </div>

                        <div className="border border-orange-300 rounded-md p-4">
                          <h3 className="font-semibold text-orange-500 mb-4 border-b border-orange-200 pb-2">
                            Optional Add-On Features
                          </h3>

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
                              name: "Initial Cloud/PBX Configuration",
                              desc: "$199 (one time fee)",
                              price: "Waived with all qualified packages",
                            },
                            {
                              name: "Hourly Remote Support/Config",
                              desc: "$95/hour",
                              price: "Minimum 60 min, then every 30 min",
                            },
                            {
                              name: "Optional support plan",
                              desc: "$250/month",
                              price: "Monthly plan with 12 month Commitment",
                            },
                            {
                              name: "Onsite Labor",
                              desc: "$120/hour+travel cost & time",
                              price: "Minimum 2 hours, in hourly increments",
                            },
                          ].map((addon, i) => (
                            <div
                              key={i}
                              className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0"
                            >
                              <div className="flex items-center gap-2 flex-1">
                                <span className="text-orange-500 text-lg">
                                  ●
                                </span>
                                <span className="text-sm font-medium text-gray-800">
                                  {addon.name}
                                </span>
                              </div>
                              <span className="text-xs text-gray-600 flex-1 text-center">
                                {addon.desc}
                              </span>
                              <span className="font-semibold text-gray-800 flex-1 text-right mr-4">
                                {addon.price}
                              </span>
                              <label className="relative inline-block w-10 h-5">
                                <input
                                  type="checkbox"
                                  className="sr-only peer"
                                />
                                <span className="absolute inset-0 bg-gray-300 rounded-full peer-checked:bg-orange-500"></span>
                                <span className="absolute left-1 top-0.5 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-transform"></span>
                              </label>
                            </div>
                          ))}
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                          <div className="border border-orange-300 rounded-md p-4">
                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                              <span className="text-orange-500">●</span>
                              PBX Features
                            </h4>
                            {[
                              "Call Transfer / Forwarding",
                              "Voicemail/VM to Email",
                              "Follow Me",
                              "Auto-Attendant/IVR",
                              "Do Not Disturb",
                              "Ext. to Ext. calling",
                              "Custom Music On Hold",
                              "Office Hours",
                              "Remote Users",
                              "Multiple Offices",
                            ].map((f, i) => (
                              <div
                                key={i}
                                className="text-sm py-1 flex items-center gap-2"
                              >
                                <span className="text-orange-500">✓</span>
                                {f}
                              </div>
                            ))}
                          </div>

                          <div className="border border-orange-300 rounded-md p-4">
                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                              <span className="text-orange-500">●</span>
                              Key Advantages
                            </h4>
                            {[
                              "Easily scalable as you grow",
                              "Geographical Flexibility",
                              "Complete Cloud Services",
                              "Don't buy expensive equipment",
                              "Easy to Use",
                              "Quick, turnkey setup",
                              "Works with all VoIP Phones",
                            ].map((a, i) => (
                              <div
                                key={i}
                                className="text-sm py-1 flex items-center gap-2"
                              >
                                <span className="text-orange-500">✓</span>
                                {a}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="text-xs text-gray-600 italic">
                          * PBX orders are processed within 1 to 3 business days
                          from the time placed, varied by the speed we collect
                          the desired specs from you.
                        </div>
                      </div>
                    )}

                    {item.id !== "phone" && item.id !== "cloud" && (
                      <p className="text-sm text-gray-600">
                        Dummy content for {item.label}
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="w-[420px] sticky top-6 self-start">
            <div className="w-full bg-white rounded-2xl border-1 border-orange-400 overflow-hidden">
              <div className="bg-orange-100 border-b-1 border-orange-400 px-6 py-3">
                <h1 className="text-md font-bold text-gray-900">
                  Shopping Cart Totals
                </h1>
              </div>

              <div className="px-6 py-28">
                <div className="text-center text-gray-800 text-lg font-medium">
                  No Item Added
                </div>
              </div>

              {/* Footer with Buttons */}
              <div className="p-[12px] shadow-md pb-6 flex items-center gap-3">
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-10 py-3 rounded-full transition-colors">
                  Next
                </button>

                <button className="bg-white hover:bg-orange-50 text-orange-500 font-semibold px-8 py-3 rounded-full border-2 border-orange-500 transition-colors">
                  Checkout
                </button>

                <div className="ml-auto text-right">
                  <div className="text-sm text-gray-700 mb-0.5">
                    Total Price
                  </div>
                  <div className="text-3xl font-bold text-gray-900">0.00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full p-[8px] h-70 flex justify-end mt-30 mb-4 px-4">
        <BrandName />
      </div>
    </div>
  );
};

export default VoIPPricingInterface;
