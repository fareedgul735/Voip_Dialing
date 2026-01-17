import { Mail, Phone } from "lucide-react";
import { useState } from "react";

const RequestCall = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
  });

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Request submitted! Our team will call you back promptly.");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="w-full max-w-5xl bg-[#FBF7F4] rounded-3xl shadow-2xl overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="bg-[#F26722] p-8 md:p-12 text-white md:w-2/5 relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-sm font-medium tracking-wider mb-3 opacity-90">
              READY TO
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Grow Business
              <br />
              With Us
            </h1>

            <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg mb-12">
              See Pricing
            </button>

            <div className="border-t border-white/30 pt-8 space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5" />
                <span className="text-sm">sales@cpodialing.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5" />
                <div className="text-sm">
                  <span>702-827-2777</span>
                  <span className="mx-2">•</span>
                  <span>855-VDailing (855-834-2544)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-orange-400/30 rounded-full"></div>
        </div>

        <div className="p-8 md:p-12 md:w-3/5 relative">
          <div className="max-w-md mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              REQUEST A CALL
            </h2>
            <p className="text-gray-500 text-sm mb-8">
              Our team will call you back promptly.
            </p>

            <div className="space-y-5">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone #"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email(optional)"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-gray-600"
                >
                  <option value="">Subject</option>
                  <option value="sales">Sales Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-[#F26722] text-white py-3 rounded-full font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Request a Call
              </button>
            </div>
          </div>

          <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-br from-orange-200/40 to-yellow-200/40 rounded-tl-full"></div>
        </div>
      </div>
    </div>
  );
};

export default RequestCall;
