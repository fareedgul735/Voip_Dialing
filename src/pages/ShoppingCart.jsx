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
    <div className="w-full bg-gradient-to-b from-red-50 via-white to-white px-4 sm:px-8 lg:px-12 py-12">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT SIDE - CART ITEMS */}
        <div className="lg:col-span-2 bg-orange-50 rounded-2xl border border-orange-300">
          <div className="bg-orange-100 border-b-2 border-orange-400 px-4 sm:px-6 py-3">
            <h1 className="text-base sm:text-md font-bold text-gray-900">
              Shopping Cart
            </h1>
          </div>

          <div className="space-y-3 p-4 sm:p-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-orange-50 border border-orange-300 rounded-xl p-3"
              >
                {/* Left Info */}
                <div className="flex items-center gap-3 flex-1">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-orange-500 hover:text-orange-600"
                  >
                    ✕
                  </button>

                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
                      {item.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      {item.detail}
                    </p>
                  </div>
                </div>

                {/* Price */}
                <div className="text-sm sm:text-base text-gray-700 font-medium sm:text-right">
                  ${item.price.toFixed(2)}/month
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE - TOTALS */}
        <div className="w-full lg:max-w-[420px] lg:sticky lg:top-6 self-start">
          <div className="w-full bg-white rounded-2xl border border-orange-400 overflow-hidden">
            <div className="bg-orange-100 border-b border-orange-400 px-4 sm:px-6 py-3">
              <h1 className="text-base font-bold text-gray-900">
                Shopping Cart Totals
              </h1>
            </div>

            <div className="p-4 sm:p-6">
              {/* Totals */}
              <div className="space-y-2 mb-6 text-sm sm:text-base">
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

              {/* Coupon */}
              <div className="mb-4">
                <span className="font-semibold block mb-2">Apply Coupon</span>

                <div className="flex flex-col sm:flex-row gap-2">
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

              {/* Login Button */}
              <Link to={"/signin"}>
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 rounded-full mb-4 transition-colors">
                  Log In
                </button>
              </Link>

              <p className="text-center text-sm text-gray-700 mb-4">
                Don't have an account?{" "}
                <Link
                  to={"/signup"}
                  className="text-orange-500 hover:text-orange-600 font-medium underline"
                >
                  Create an account
                </Link>
              </p>

              {/* Final Total */}
              <div className="border-t pt-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <div className="text-gray-600 text-sm">Total Price</div>
                    <div className="text-2xl sm:text-3xl font-bold text-gray-900">
                      ${calculateTotal()}
                    </div>
                  </div>

                  <Link to={"/checkout"}>
                    <button className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full transition-colors">
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
