import { Mail, Phone, MapPin } from "lucide-react";
import { User, Building2, MessageSquare } from "lucide-react";
import FAQAccordion from "../ui/FaqsUi";
import BrandName from "../ui/BrandName";
import { CustomButton } from "../ui/CustomButton";
import SEO from "../lib/SEO";

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Us for Business VoIP Solutions | Voip Dialing ORC"
        description="Speak with our VoIP experts to set up your cloud phone system, request a demo or get custom pricing for your business communication needs."
        url="https://voip-dialing.vercel.app/contact"
      />
      <div className="w-full p-[12px] py-12 flex flex-col items-center justify-center bg-gradient-to-b from-red-50 via-white to-white">
        <div className="mx-4 md:mx-8 lg:mx-12 grid grid-cols-1 md:grid-cols-2 gap-16 mt-2 mb-42">
          <div className="flex flex-col justify-start ">
            <div>
              <h1 className="text-4xl font-bold mb-4">Contact us</h1>
              <p className="text-gray-500 max-w-md mb-10">
                Quick way to request a call back, we prioritize your experience
                and are committed to resolving any issues you may encounter.
              </p>
            </div>

            <div className="space-y-6 mt-12 text-sm">
              <div className="flex items-start gap-3">
                <Mail className="text-orange-500 w-5 h-5 mt-1" />
                <span>sales@voipdialing.com</span>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="text-orange-500 w-5 h-5 mt-1" />
                <span>855-VDialing (855-834-2546)</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="text-orange-500 w-5 h-5 mt-1" />
                <span>
                  VoIP Dialing, Inc.
                  <br />
                  PO Box 33357
                  <br />
                  Las Vegas, NV 89133
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium">Full Name</label>
                <div className="relative mt-2">
                  <User
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                  <input className="w-full rounded-xl border border-gray-200 pl-12 pr-4 py-3 text-sm outline-none" />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">Email</label>
                <div className="relative mt-2">
                  <Mail
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                  <input
                    type="email"
                    className="w-full rounded-xl border border-gray-200 pl-12 pr-4 py-3 text-sm outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">Phone</label>
                <div className="relative mt-2">
                  <Phone
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                  <input
                    type="tel"
                    className="w-full rounded-xl border border-gray-200 pl-12 pr-4 py-3 text-sm outline-none"
                  />
                </div>
              </div>

              {/* Department */}
              <div>
                <label className="text-sm font-medium">Department</label>
                <div className="relative mt-2">
                  <Building2
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                  <select className="w-full rounded-xl border border-gray-200 pl-12 pr-4 py-3 text-sm outline-none appearance-none">
                    <option>Select department</option>
                    <option>Sales</option>
                    <option>Support</option>
                    <option>Billing</option>
                  </select>
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="text-sm font-medium">Message</label>
                <div className="relative mt-2">
                  <MessageSquare
                    className="absolute left-4 top-4 text-gray-400"
                    size={18}
                  />
                  <textarea
                    placeholder="Enter your message"
                    className="w-full rounded-xl border border-gray-200 pl-12 pr-4 py-3 text-sm outline-none h-32 resize-none"
                  />
                </div>
              </div>

              <div className="md:col-span-2">
                <CustomButton
                  value={<span> Send Message</span>}
                  type="button"
                  className="w-full h-12 cursor-pointer hover:shadow-md rounded-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold transition"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="w-full mb-12">
          <FAQAccordion />
        </div>
        <div className="w-full p-[12px] py-12 h-70 flex justify-end">
          <BrandName />
        </div>
      </div>
    </>
  );
}
