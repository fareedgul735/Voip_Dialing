import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import BrandName from "../ui/BrandName";

const VoIPPricingInterface = () => {
  const [activeStep, setActiveStep] = useState(null);
  const [openCollapse, setOpenCollapse] = useState(null);

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
      label: "+ Phone Numbers",
      status: "0 Number Selected",
      price: "$0.00",
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

  const handleStepClick = (stepId) => {
    setActiveStep(stepId);
    setOpenCollapse(collapseItems[stepId]?.id || null);
  };

  const handleCollapseToggle = (id, index) => {
    setOpenCollapse(openCollapse === id ? null : id);
    setActiveStep(index);
  };

  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center mb-8">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <div
                onClick={() => handleStepClick(step.id)}
                className={`flex-1 py-3 px-4 text-center font-medium cursor-pointer transition-colors ${
                  activeStep === step.id
                    ? "bg-orange-500 text-white"
                    : "bg-teal-600 text-white hover:bg-teal-700"
                }`}
              >
                {step.label}
              </div>
              {index < steps.length - 1 && (
                <div className="flex items-center justify-center w-8 bg-teal-600">
                  <ChevronRight className="text-white" size={24} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="flex gap-6">
          <div className="flex-1 bg-white rounded-lg shadow-sm border border-gray-200">
            {collapseItems.map((item, index) => (
              <div
                key={item.id}
                className="border-b border-gray-200 last:border-b-0"
              >
                <div
                  onClick={() => handleCollapseToggle(item.id, index)}
                  className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3 flex-1">
                    <ChevronDown
                      className={`text-gray-500 transition-transform ${
                        openCollapse === item.id ? "rotate-0" : "-rotate-90"
                      }`}
                      size={20}
                    />
                    <span className="font-medium text-gray-700">
                      {item.label}
                    </span>
                    {item.status && (
                      <span className="text-sm text-gray-500">
                        {item.status}
                      </span>
                    )}
                  </div>
                  <span className="font-semibold text-gray-700">
                    {item.price}
                  </span>
                </div>

                {openCollapse === item.id && (
                  <div className="px-4 py-6 bg-gray-50 border-t border-gray-200">
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
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="w-100 rounded-lg p-6 border border-orange-200 h-fit">
            <h2 className="text-lg border-b border-orange-400 font-semibold text-gray-800 mb-4">
              Shopping Cart Totals
            </h2>

            <div className="flex items-center justify-center py-16 text-gray-500">
              No Item Added
            </div>

            <div className="mt-8 flex justify-between items-center pt-4 border-t border-orange-200">
              <div className="flex gap-3">
                <button className="flex-1 py-2.5 px-4 bg-orange-400 text-white rounded-lg font-medium hover:bg-orange-500 transition-colors">
                  Next
                </button>
                <button className="flex-1 py-2.5 px-4 bg-white text-orange-500 border border-orange-300 rounded-lg font-medium hover:bg-orange-50 transition-colors">
                  Checkout
                </button>
              </div>
              <div className="flex flex-col justify-between items-center mb-4">
                <span className="text-sm text-gray-600">Total Price</span>
                <span className="text-2xl font-bold text-gray-800">0.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full p-[28px] h-60 flex justify-end mt-20 mb-4 px-4">
        <BrandName />
      </div>
    </div>
  );
};

export default VoIPPricingInterface;
