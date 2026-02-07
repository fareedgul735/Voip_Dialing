import { useState } from "react";
import { Link } from "react-router";

export default function ShoppingCart() {
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

  return (
    <div className="w-full bg-gradient-to-b from-red-50 via-white to-white p-[12px] py-12">
      <div className="mx-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-orange-50 rounded-2xl border-1 border-orange-300 p-6">
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
                    <h3 className="font-semibold text-gray-900">{item.name}</h3>
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

        <div className="w-[420px] sticky top-6 self-start">
          <div className="w-full bg-white rounded-2xl border-1 border-orange-400 overflow-hidden">
            <div className="bg-orange-100 border-b-1 border-orange-400 px-6 py-3">
              <h1 className="text-md font-bold text-gray-900">
                Shopping Cart Totals
              </h1>
            </div>
            <div className="p-[12px]">
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-gray-700">
                  <span>Items Total</span>
                  <span>${calculateTotal()}</span>
                </div>

                <div className="flex justify-between text-gray-700">
                  <span>Setup Fees</span>
                  <span>0.00</span>
                </div>

                <div className="flex justify-between text-gray-700">
                  <span>Coupon</span>
                  <span>- 0.00</span>
                </div>

                <div className="flex justify-between text-gray-700">
                  <span>Shipping</span>
                  <span>N/A</span>
                </div>

                <div className="flex justify-between text-gray-700">
                  <span>Sales Tax</span>
                  <span>N/A</span>
                </div>
              </div>

              <div className="mb-2">
                <div className="flex items-center gap-2 mb-2">
                  <svg
                    className="w-5 h-5 text-orange-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                    />
                  </svg>
                  <span className="font-semibold">Apply Coupon</span>
                </div>

                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter coupon code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-full focus:outline-none focus:border-orange-400"
                  />
                  <button className="px-6 py-3 text-orange-500 font-medium hover:text-orange-600">
                    Apply
                  </button>
                </div>
              </div>

              <Link to={"/signin"}>
                <button className="w-full cursor-pointer hover:shadow-md bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 rounded-full mb-4 transition-colors">
                  Log In
                </button>
              </Link>

              <p className="text-center text-gray-700 mb-4">
                Don't have an account?{" "}
                <Link
                  to={"/signup"}
                  className="text-orange-500 hover:text-orange-600 font-medium underline"
                >
                  Create an account
                </Link>
              </p>

              <div className="border-t-2 border-gray-200 pt-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-gray-600 mb-1">Total Price</div>
                    <div className="text-3xl font-bold text-gray-900">
                      ${calculateTotal()}
                    </div>
                  </div>
                  <Link to={"/checkout"}>
                    <button className="bg-orange-500 cursor-pointer hover:shadow-md hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full transition-colors">
                      Continue
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
