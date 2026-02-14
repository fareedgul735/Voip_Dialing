import { useState } from "react";
import BrandName from "../ui/BrandName";
import { Link } from "react-router";

const VoIPPricingInterface = () => {
  const [activeStep, setActiveStep] = useState(null);
  const [openCollapse, setOpenCollapse] = useState(null);
  const [searchValue, setSearchValue] = useState("72");
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [showAllNumbers, setShowAllNumbers] = useState(false);

  const equipmentBrands = [
    {
      brand: "Grandstream",
      products: [
        { name: "GXP1628 Small Business HD IP Phone", price: "$85" },
        {
          name: "GXP2130v2 3-Line Enterprise HD IP Phone with Bluetooth (Includes Power Supply)",
          price: "$99",
        },
        { name: "GXP2135 Multi-line High Performance IP Phone", price: "$115" },
        { name: "GXP2140 Enterprise 4-Line IP Phone", price: "$139" },
        { name: "GXP2160 Enterprise 6-Line IP Phone", price: "$159" },
      ],
    },
    {
      brand: "Yealink",
      products: [
        { name: "T31P Entry Level IP Phone", price: "$79" },
        { name: "T43U Gigabit Business IP Phone", price: "$129" },
        { name: "T46U Executive IP Phone", price: "$179" },
      ],
    },
    {
      brand: "Polycom",
      products: [
        { name: "VVX 250 Business IP Phone", price: "$139" },
        { name: "VVX 350 Mid-Range IP Phone", price: "$179" },
        { name: "VVX 450 Color Display IP Phone", price: "$229" },
      ],
    },
    {
      brand: "Cisco",
      products: [
        { name: "Cisco 7821 IP Phone", price: "$149" },
        { name: "Cisco 8841 Business IP Phone", price: "$249" },
        { name: "Cisco 8861 Video IP Phone", price: "$329" },
      ],
    },
  ];

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
      <div className="mx-4 sm:mx-6 md:mx-8 lg:mx-12">
        <div className="flex items-center mb-6 lg:mb-8 overflow-x-auto">
          {steps.map((step, index) => (
            <div
              key={step.id}
              onClick={() => {
                setActiveStep(step.id);
                setOpenCollapse(step.collapseId);
              }}
              className={`flex justify-center items-center py-1 px-8 lg:px-17 text-center font-medium cursor-pointer transition-colors whitespace-nowrap
        border border-r border-white
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
              <span className="text-[11px] sm:text-[12px]">{step.label}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 space-y-3">
            {collapseItems.map((item) => (
              <div
                key={item.id}
                className="bg-orange-50 rounded-md border border-orange-400 overflow-hidden"
              >
                <div
                  onClick={() => {
                    const stepIndex = steps.findIndex(
                      (s) => s.collapseId === item.id,
                    );
                    setActiveStep(stepIndex !== -1 ? stepIndex : null);
                    setOpenCollapse(openCollapse === item.id ? null : item.id);
                  }}
                  className="flex items-center justify-between px-4 py-3 cursor-pointer"
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
                      <div className="flex flex-col md:flex-row gap-6 lg:gap-8">
                        {/* Search Area */}
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

                          {/* Area Codes Grid */}
                          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mb-2">
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

                          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
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

                        {/* Phone Numbers List */}
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
                      <div
                        className="space-y-6 bg-orange-50 p-4 custom-scrollbar"
                        style={{
                          maxHeight: "80vh",
                          overflowY: "auto",
                          WebkitOverflowScrolling: "touch",
                        }} // smooth swipe
                      >
                        {/* Hosted Phone System */}
                        <div className="border border-orange-300 rounded-md p-4">
                          <h3 className="font-semibold text-black mb-4 border-b border-orange-200 pb-2">
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
                              className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 border-b border-gray-100 last:border-0 gap-2"
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

                        {/* Optional Add-ons */}
                        <div className="border border-orange-300 rounded-md p-4 bg-orange-50">
                          <h3 className="font-semibold text-black mb-4 border-b border-orange-200 pb-2">
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
                              className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 border-b border-gray-100 last:border-0 gap-2"
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

                        {/* PBX Features & Key Advantages */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="border border-orange-300 rounded-md p-4">
                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                              <span className="text-orange-500">●</span> PBX
                              Features
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
                              <span className="text-orange-500">●</span> Key
                              Advantages
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

                    {item.id === "dialing" && (
                      <div
                        className="space-y-6 bg-orange-50 p-4 custom-scrollbar"
                        style={{
                          maxHeight: "80vh",
                          overflowY: "auto",
                          WebkitOverflowScrolling: "touch",
                        }}
                      >
                        {/* Extensions Section */}
                        <div className="border border-orange-300 rounded-md overflow-hidden">
                          <div className="bg-orange-100 px-4 py-2 flex justify-between items-center">
                            <h3 className="font-semibold text-gray-800 text-sm">
                              Extensions with Unlimited In & Out Minutes
                            </h3>
                            <label className="relative inline-block w-10 h-5">
                              <input type="checkbox" className="sr-only peer" />
                              <span className="absolute inset-0 bg-gray-300 rounded-full peer-checked:bg-orange-500"></span>
                              <span className="absolute left-1 top-0.5 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-transform"></span>
                            </label>
                          </div>

                          <div className="p-4 text-sm text-gray-700">
                            <p className="italic mb-4">
                              * 1 to 4 Extensions = <b>$24.99/month</b>, 5 or
                              more = <b>$19.99/month</b>
                            </p>

                            <div className="flex items-center justify-end gap-3">
                              <button className="px-3 py-1 border border-orange-400 rounded text-orange-500">
                                −
                              </button>
                              <span className="px-4 py-1 border border-orange-400 rounded bg-yellow-100 font-semibold">
                                Quantity
                              </span>
                              <button className="px-3 py-1 border border-orange-400 rounded text-orange-500">
                                +
                              </button>
                            </div>

                            <div className="text-right mt-3 font-semibold">
                              $0.00 / month
                            </div>
                          </div>
                        </div>

                        {/* SIP Trunks Section */}
                        <div className="border border-orange-300 rounded-md overflow-hidden">
                          <div className="bg-orange-100 px-4 py-2">
                            <h3 className="font-semibold text-gray-800 text-sm">
                              Metered Usage – SIP Trunks (Unlimited Concurrent
                              Calls)
                            </h3>
                          </div>

                          <div className="p-4 space-y-4 text-sm">
                            <p className="italic text-gray-600">
                              * Incoming: Local $0.007/min, TF $0.015/min
                            </p>

                            {/* Plans */}
                            {[
                              {
                                name: "Pay As You Go",
                                rate: "$0.03/min in & out",
                                price: "$10.00/month",
                              },
                              {
                                name: "Outbound Small Office",
                                rate: "$0.0150/min*",
                                price: "$150.00/month",
                              },
                              {
                                name: "Outbound Saving",
                                rate: "$0.0099/min*",
                                price: "$250.00/month",
                              },
                              {
                                name: "Outbound Pro",
                                rate: "$0.0079/min*",
                                price: "$500.00/month",
                              },
                            ].map((plan, i) => (
                              <div
                                key={i}
                                className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-orange-200 pb-3 gap-2"
                              >
                                <div>
                                  <div className="font-medium text-gray-800">
                                    {plan.name}
                                  </div>
                                  <div className="text-xs text-gray-600">
                                    {plan.rate}
                                  </div>
                                </div>

                                <div className="flex items-center gap-4">
                                  <span className="font-semibold">
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
                              </div>
                            ))}

                            {/* Dialer Plans */}
                            <div className="pt-4 space-y-3">
                              {[
                                {
                                  name: "Outbound – Dialer Flat",
                                  rate: "$0.0079/min*",
                                  price: "$100.00/month",
                                },
                                {
                                  name: "Outbound – Dialer Max",
                                  rate: "Blended* (Download Rates)",
                                  price: "$500.00/month",
                                },
                              ].map((plan, i) => (
                                <div
                                  key={i}
                                  className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2"
                                >
                                  <div>
                                    <div className="font-medium text-gray-800">
                                      {plan.name}
                                    </div>
                                    <div className="text-xs text-gray-600">
                                      {plan.rate}
                                    </div>
                                  </div>

                                  <div className="flex items-center gap-4">
                                    <span className="font-semibold">
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
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {item.id === "sms" && (
                      <div
                        className="space-y-6 bg-orange-50 p-4 custom-scrollbar"
                        style={{
                          maxHeight: "80vh",
                          overflowY: "auto",
                          WebkitOverflowScrolling: "touch",
                        }}
                      >
                        {/* Conversational SMS */}
                        <div className="border border-orange-300 rounded-md overflow-hidden">
                          <div className="bg-orange-100 px-4 py-2 flex justify-between items-center">
                            <h3 className="font-semibold text-sm text-gray-800">
                              Conversational SMS{" "}
                              <span className="font-normal">
                                $4.99 / number each
                              </span>
                            </h3>
                            <span className="text-xs text-gray-600 cursor-pointer">
                              Click to Select
                            </span>
                          </div>

                          <div className="p-6 bg-white">
                            <div className="flex items-center gap-4 bg-orange-50 border-l-4 border-orange-400 px-6 py-4 text-center w-full justify-center">
                              <div>
                                <div className="font-medium text-gray-800">
                                  No phone number was selected
                                </div>
                                <div className="text-sm text-gray-600">
                                  You can go to above <b>'Phone Number'</b> tab
                                  to add numbers.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Conversational & Campaign SMS – Metered */}
                        <div className="border border-orange-300 rounded-md overflow-hidden">
                          <div className="bg-orange-100 px-4 py-2">
                            <h3 className="font-semibold text-sm text-gray-800">
                              Conversational & Campaign SMS – Metered
                              <span className="font-normal">
                                {" "}
                                (1 credit = 1 message)
                              </span>
                            </h3>
                          </div>

                          {/* Scrollable table wrapper */}
                          <div
                            className="p-6 bg-white overflow-x-auto custom-scrollbar"
                            style={{ WebkitOverflowScrolling: "touch" }}
                          >
                            <table className="min-w-[600px] text-sm">
                              <thead>
                                <tr className="bg-orange-50 text-gray-700">
                                  <th className="text-left px-4 py-2">
                                    SMS Count
                                  </th>
                                  <th className="text-center px-4 py-2">
                                    Price Per Month
                                  </th>
                                  <th className="text-right px-4 py-2">
                                    Selected Count
                                  </th>
                                </tr>
                              </thead>

                              <tbody>
                                {[
                                  { count: "2,500 msgs/month", price: "$15" },
                                  { count: "10,000 msgs/month", price: "$55" },
                                  {
                                    count: "100,000 msgs/month",
                                    price: "$470",
                                  },
                                  {
                                    count: "1,000,000 msgs/month",
                                    price: "$4,000",
                                  },
                                ].map((row, i) => (
                                  <tr
                                    key={i}
                                    className="border-b last:border-0 hover:bg-orange-50"
                                  >
                                    <td className="px-4 py-4">{row.count}</td>
                                    <td className="px-4 py-4 text-center font-medium">
                                      {row.price}
                                    </td>
                                    <td className="px-4 py-4">
                                      <div className="flex justify-end items-center gap-2">
                                        <button className="w-7 h-7 border border-orange-400 rounded text-orange-500">
                                          −
                                        </button>
                                        <div className="w-10 h-7 border border-orange-400 rounded text-center text-sm flex items-center justify-center">
                                          0
                                        </div>
                                        <button className="w-7 h-7 border border-orange-400 rounded text-orange-500">
                                          +
                                        </button>
                                      </div>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>

                            <div className="text-xs text-gray-600 italic text-center mt-6">
                              * Conversational SMS & Campaign SMS for all
                              eligible phone numbers are included with the
                              selected metered plan above
                            </div>
                          </div>
                        </div>

                        {/* No Package Selected */}
                        <div className="bg-orange-50 border-l-4 border-orange-400 px-6 py-5 text-center">
                          <div className="font-medium text-gray-800">
                            No Package was selected
                          </div>
                          <div className="text-sm text-gray-600 mt-1">
                            In the table above, select an Unlimited 1 to 1
                            Conversational SMS to the number/s you wish, or
                            choose a metered package which will apply to all
                            eligible numbers on your account and enable A2P
                            functions.
                          </div>
                        </div>
                      </div>
                    )}
                    {item.id === "equipment" && (
                      <div className="space-y-4 bg-orange-50">
                        <div className="text-sm text-gray-700">
                          <div className="font-medium">Need to buy phones?</div>
                          <div className="text-xs text-gray-600">
                            <u>Limited Time Offer:</u> Up to 10% of equipment
                            purchase is credited back against 2nd month MRC
                            billing
                          </div>
                        </div>

                        {equipmentBrands.map((section, idx) => (
                          <details
                            key={idx}
                            className="border border-orange-400 rounded-md bg-white"
                          >
                            {/* Header */}
                            <summary className="cursor-pointer list-none flex justify-between items-center bg-orange-100 px-4 py-2 font-medium text-gray-800">
                              <span>{section.brand}</span>
                              <span className="text-sm text-gray-600">
                                Open
                              </span>
                            </summary>

                            {/* Body */}
                            <div
                              className="p-4 overflow-x-auto custom-scrollbar"
                              style={{ WebkitOverflowScrolling: "touch" }}
                            >
                              <table className="min-w-[600px] text-sm">
                                <thead>
                                  <tr className="bg-orange-50 text-gray-700">
                                    <th className="text-left px-3 py-2">
                                      Image
                                    </th>
                                    <th className="text-left px-3 py-2">
                                      Name
                                    </th>
                                    <th className="text-center px-3 py-2">
                                      Price
                                    </th>
                                    <th className="text-right px-3 py-2">
                                      Qty
                                    </th>
                                  </tr>
                                </thead>

                                <tbody>
                                  {section.products.map((p, i) => (
                                    <tr
                                      key={i}
                                      className="border-b last:border-0 hover:bg-orange-50"
                                    >
                                      <td className="px-3 py-3">
                                        <div className="w-12 h-12 bg-gray-100 rounded" />
                                      </td>

                                      <td className="px-3 py-3">{p.name}</td>

                                      <td className="px-3 py-3 text-center font-medium">
                                        {p.price}
                                      </td>

                                      <td className="px-3 py-3">
                                        <div className="flex justify-end items-center gap-2">
                                          <button className="w-7 h-7 border border-orange-400 rounded text-orange-500">
                                            −
                                          </button>
                                          <div className="px-3 py-1 border border-orange-400 rounded text-xs">
                                            Quantity
                                          </div>
                                          <button className="w-7 h-7 border border-orange-400 rounded text-orange-500">
                                            +
                                          </button>
                                        </div>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </details>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="w-full lg:w-[420px] lg:sticky lg:top-6 self-start">
            <div className="w-full bg-white rounded-2xl border border-orange-400 overflow-hidden">
              <div className="bg-orange-100 border-b border-orange-400 px-6 py-3">
                <h1 className="text-md font-bold text-gray-900">
                  Shopping Cart Totals
                </h1>
              </div>

              <div className="px-4 sm:px-6 py-16 sm:py-20 lg:py-28">
                <div className="text-center text-gray-800 text-lg font-medium">
                  No Item Added
                </div>
              </div>

              <div className="p-4 shadow-md pb-6 flex flex-col sm:flex-row items-center gap-3">
                <button className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold px-10 py-3 rounded-full transition-colors">
                  Next
                </button>

                <Link to={"/shoppingcart"} className="w-full sm:w-auto">
                  <button className="w-full bg-white hover:bg-orange-50 text-orange-500 font-semibold px-8 py-3 rounded-full border-2 border-orange-500 transition-colors">
                    Checkout
                  </button>
                </Link>

                <div className="sm:ml-auto text-center sm:text-right">
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
