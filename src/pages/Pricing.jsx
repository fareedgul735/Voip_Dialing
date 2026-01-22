import React, { useState } from "react";

const VoIPPricingInterface = () => {
  const [activeStep, setActiveStep] = useState(null);
  const [openCollapse, setOpenCollapse] = useState("phone");
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
        : [...prev, number]
    );
  };

  const displayedNumbers = showAllNumbers
    ? availableNumbers
    : availableNumbers.slice(0, 5);

  return (
    <div className="w-full p-6">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-center mb-8">
          {steps.map((step, index) => (
            <div
              key={step.id}
              onClick={() => {
                setActiveStep(step.id);
                setOpenCollapse(collapseItems[step.id]?.id);
              }}
              className={`flex justify-center items-center py-1 px-19 text-center font-medium cursor-pointer transition-colors
                ${
                  activeStep === step.id
                    ? "bg-orange-500 text-white"
                    : "bg-[#027DB6] text-white hover:bg-[#027DB7]"
                }`}
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%, 20px 50%)",
                marginLeft: index === 0 ? "0" : "-20px",
                zIndex: steps.length - index,
              }}
            >
              <span className="text-[12px]">
                {step.label}
              </span>
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
                  onClick={() =>
                    setOpenCollapse(openCollapse === item.id ? null : item.id)
                  }
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
                    {item.id === "phone" ? (
                      <div className="flex gap-8">

                        <div className="flex-1">
                          <h3 className="text-sm font-semibold mb-3">
                            Search For Local or Toll Free Numbers
                          </h3>

                          <div className="relative mb-4">
                            <input
                              value={searchValue}
                              onChange={(e) =>
                                setSearchValue(e.target.value)
                              }
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
                            onClick={() =>
                              setShowAllNumbers(!showAllNumbers)
                            }
                            className="mt-2 text-sm text-orange-500"
                          >
                            {showAllNumbers
                              ? "− Show less"
                              : "+ Expand more"}
                          </button>
                        </div>
                      </div>
                    ) : (
                      <p className="text-sm text-gray-600">
                        Dummy content for {item.label}
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="w-80 bg-orange-50 border border-orange-200 rounded-lg p-5 h-fit">
            <h2 className="font-semibold mb-6">Shopping Cart Totals</h2>
            <div className="text-center text-gray-400 py-12">
              No Item Added
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between mb-4">
                <span>Total Price</span>
                <span className="text-xl font-bold">$0.00</span>
              </div>
              <div className="flex gap-3">
                <button className="flex-1 bg-orange-500 text-white py-2 rounded-md">
                  Next
                </button>
                <button className="flex-1 border border-orange-300 text-orange-500 py-2 rounded-md">
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

