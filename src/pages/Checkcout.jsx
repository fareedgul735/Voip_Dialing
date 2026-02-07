import { useState } from "react";
import { message } from "antd";
import CartIcon from "../../public/CartIcons.png";

const Checkout = () => {
  const [couponCode, setCouponCode] = useState("");
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

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2);
  };
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

    if (!/^\d{2}\/\d{4}$/.test(formData.expirationDate)) {
      messageApi.error("Expiration Date must be in MM/YYYY format");
      return false;
    }

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
      <div className="w-full bg-gradient-to-b from-red-50 via-white to-white p-[12px] py-12 flex items-center justify-center">
        {contextHolder}
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
          <div className="mb-6">
            <svg
              className="w-20 h-20 text-green-500 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Payment Successful!
          </h2>
          <p className="text-gray-600 mb-8">
            Your transaction has been completed successfully.
          </p>
          <div className="space-y-3">
            <button
              onClick={handleDownloadInvoice}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
            >
              Download Invoice
            </button>
            <button
              onClick={handleGoToDashboard}
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg transition duration-200"
            >
              Go to Dashboard
            </button>
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
            <div className="bg-orange-50 rounded-2xl border-1 border-orange-300 p-6">
              <h2 className="text-xl font-semibold mb-6">Shopping Cart</h2>

              <div className="space-y-2">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between bg-orange-50 border-1 border-orange-300 rounded-xl p-2"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-orange-500 hover:text-orange-600"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
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

            <div className="bg-white rounded-lg border-2 border-orange-300 p-6">
              <h2 className="text-lg font-bold text-gray-800 mb-4">
                Manage Credit Cards
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    CC Number
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="ccNumber"
                      value={formData.ccNumber}
                      onChange={handleInputChange}
                      placeholder="1234 5678 9012 3456"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
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
                    <input
                      type="text"
                      name="expirationDate"
                      value={formData.expirationDate}
                      onChange={handleInputChange}
                      placeholder="mm/yyyy"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Security code
                    </label>
                    <input
                      type="text"
                      name="securityCode"
                      value={formData.securityCode}
                      onChange={handleInputChange}
                      placeholder="CVC"
                      maxLength="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* CC Name & Company */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      CC Name*
                    </label>
                    <input
                      type="text"
                      name="ccName"
                      value={formData.ccName}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Company Name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* First Name & Last Name */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name*
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name*
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Address */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Address*
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                {/* State & Zip Code */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      State
                    </label>
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      <option value="">Select State</option>
                      <option value="AL">Alabama</option>
                      <option value="AK">Alaska</option>
                      <option value="AZ">Arizona</option>
                      <option value="CA">California</option>
                      <option value="FL">Florida</option>
                      <option value="NY">New York</option>
                      <option value="TX">Texas</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Zip code
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
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
                    className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-12 rounded-lg transition duration-200 shadow-md"
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
