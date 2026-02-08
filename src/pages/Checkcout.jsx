import { useState } from "react";
import { message } from "antd";
import CartIcon from "../../public/CartIcons.png";

import {
  CreditCard,
  Calendar,
  ShieldCheck,
  User,
  Building2,
  MapPin,
  Flag,
  Hash,
  Mail,
  Phone,
  Landmark,
} from "lucide-react";
import { Link } from "react-router";

const Checkout = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Phone Numbers",
      detail: "7205908898",
      price: 0.99,
    },
    {
      id: 2,
      name: "Dedicated Hosted Phone System",
      detail: "HostedPBX Basic",
      price: 0.99,
    },
  ]);

  const [messageApi, contextHolder] = message.useMessage();
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const [formData, setFormData] = useState({
    ccNumber: "",
    expirationDate: "",
    securityCode: "",
    ccName: "",
    company: "",
    firstName: "",
    lastName: "",
    address: "",
    state: "",
    zipCode: "",
    city: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const requiredFields = {
      ccNumber: "Credit Card Number",
      expirationDate: "Expiration Date",
      securityCode: "Security Code",
      ccName: "Cardholder Name",
      firstName: "First Name",
      lastName: "Last Name",
      address: "Address",
      state: "State",
      zipCode: "Zip Code",
      city: "City",
      email: "Email",
      phone: "Phone",
    };

    for (const [field, label] of Object.entries(requiredFields)) {
      if (!formData[field] || formData[field].trim() === "") {
        messageApi.error(`${label} is required`);
        return false;
      }
    }

    // if (!/^\d{2}\/\d{4}$/.test(formData.expirationDate)) {
    //   messageApi.error("Expiration Date must be in MM/YYYY format");
    //   return false;
    // }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      messageApi.error("Please enter a valid email address");
      return false;
    }

    if (formData.ccNumber.replace(/\s/g, "").length < 13) {
      messageApi.error("Please enter a valid credit card number");
      return false;
    }

    return true;
  };

  const handlePayment = (e) => {
    e.preventDefault();

    if (validateForm()) {
      messageApi.success("Payment Successful");
      setPaymentSuccess(true);
    }
  };

  const handleDownloadInvoice = () => {
    messageApi.info("Invoice downloaded successfully");
  };

  const handleGoToDashboard = () => {
    messageApi.info("Redirecting to dashboard...");
  };

  if (paymentSuccess) {
    return (
      <div className="bg-orange-50 flex items-center justify-center p-[12px] py-12px">
        {contextHolder}
        <div className="w-[1400px] bg-white rounded-lg shadow-sm p-6">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>

          <h1 className="text-center text-gray-600 text-sm mb-6">
            Payment Success
          </h1>

          <div className="border border-gray-300 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-gray-800 font-medium mb-1">Thanks Alex!</h2>
                <p className="text-gray-800 font-medium mb-2">
                  Your VOIP service subscription has been successfully
                  activated.
                </p>
                <p className="text-gray-600 text-sm">
                  You're now ready to start making and receiving calls. Below
                  are your service details.
                </p>
              </div>
            </div>

            <hr className="my-6 border-gray-200" />

            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-700">Plan:</span>
                <span className="text-gray-800 font-medium">
                  Business VOIP Pro Plan
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-700">Phone Number:</span>
                <span className="text-gray-800 font-medium">
                  +1 (555) 234-8899
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-700">Activation Date & Time:</span>
                <span className="text-gray-800 font-medium">
                  10 Oct 2024, 10:20 PM
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-700">Billing Cycle:</span>
                <span className="text-gray-800 font-medium">Monthly</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-700">Order ID:</span>
                <span className="text-gray-800 font-medium">
                  3092038492117238
                </span>
              </div>
            </div>

            <hr className="my-6 border-gray-200" />

            <div className="flex justify-between items-center text-sm mb-6">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-orange-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                </svg>
                <span className="text-gray-700 font-medium">
                  Included Minutes
                </span>
              </div>
              <span className="text-gray-800 font-medium">
                500 Minutes / Month
              </span>
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleDownloadInvoice}
                className="bg-orange-500 hover:bg-orange-600 cursor-pointer text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors"
              >
                Download Invoice
              </button>
              <Link onClick={handleGoToDashboard} to={"/home"}>
                <button className="bg-white hover:bg-gray-50 cursor-pointer text-orange-500 border border-orange-500 px-6 py-2.5 rounded-full text-sm font-medium transition-colors">
                  Go to Dashboard
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-gradient-to-b from-red-50 via-white to-white p-[12px] py-12 flex items-center justify-center">
      {contextHolder}
      <div className="mx-12">
        <form onSubmit={handlePayment}>
          <div className="flex gap-6">
            <div className="w-[737px] bg-orange-50 rounded-2xl border-1 border-orange-300 h-[472px]">
              <div className="bg-orange-100 border-b-2 border-orange-400 px-6 py-3">
                <h1 className="text-md font-bold text-gray-900">
                  Shopping Cart Totals
                </h1>
              </div>

              <div className="space-y-2 p-6">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between bg-orange-50 border-1 border-orange-300 rounded-xl p-2"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">
                          {item.name}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-8">
                      <span className="text-gray-700">{item.detail}</span>
                      <span className="text-gray-600 font-medium whitespace-nowrap">
                        ${item.price.toFixed(2)}/month
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border-2 border-orange-300">
              <div className="bg-orange-100 border-b-2 border-orange-400 px-6 py-3">
                <h1 className="text-md font-bold text-gray-900">
                  Manage Credit Cards
                </h1>
              </div>

              <div className="space-y-4 p-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    CC Number
                  </label>
                  <div className="relative">
                    <CreditCard className="absolute left-4 top-2.5 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      name="ccNumber"
                      value={formData.ccNumber}
                      onChange={handleInputChange}
                      placeholder="1234 5678 9012 3456"
                      className="w-full pl-11 pr-12 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                    <div className="absolute right-3 top-2 flex space-x-1">
                      <img src={CartIcon} alt="Mastercard" className="h-5" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Expiration Date*
                    </label>

                    <div className="relative">
                      <Calendar className="absolute left-4 top-2.5 h-5 w-5 text-gray-400" />
                      <input
                        type="month"
                        name="expirationDate"
                        value={formData.expirationDate}
                        onChange={handleInputChange}
                        className="w-full pl-11 pr-2 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Security code
                    </label>
                    <div className="relative">
                      <ShieldCheck className="absolute left-4 top-2.5 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        name="securityCode"
                        value={formData.securityCode}
                        onChange={handleInputChange}
                        placeholder="CVC"
                        maxLength="4"
                        className="w-full pl-11 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* CC Name & Company */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      CC Name*
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-2.5 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        name="ccName"
                        value={formData.ccName}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full pl-11 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-4 top-2.5 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Company Name"
                        className="w-full pl-11 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* First Name & Last Name */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name*
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-2.5 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="First Name"
                        className="w-full pl-11 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name*
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-2.5 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Last Name"
                        className="w-full pl-11 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Address*
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-2.5 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full pl-11 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* State & Zip Code */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      State
                    </label>
                    <div className="relative">
                      <Flag className="absolute left-4 top-2.5 h-5 w-5 text-gray-400" />
                      <select
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        className="w-full pl-11 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      >
                        <option value="">Select State</option>
                        <option value="CA">California</option>
                        <option value="NY">New York</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Zip code
                    </label>
                    <div className="relative">
                      <Hash className="absolute left-4 top-2.5 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        className="w-full pl-11 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    City
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-2.5 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="City"
                      className="w-full pl-11 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-2.5 h-5 w-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-11 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-2.5 h-5 w-5 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-11 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4">
                  <div>
                    <div className="text-sm text-gray-600">Total Price</div>
                    <div className="text-2xl font-bold text-gray-800">
                      $1.98
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-12 rounded-full transition duration-200 shadow-md"
                  >
                    Pay Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
