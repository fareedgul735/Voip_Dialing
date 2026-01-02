import { Mail, Phone, MapPin } from "lucide-react";
import FAQAccordion from "../ui/FaqsUi";
import CustomUi from "../ui/CustomUi";
import title6 from "../../public/title6.png";
import dummy3 from "../../public/dummy3.png";
import dummy4 from "../../public/dummy4.png";

export default function Contact() {
  return (
    <div className="p-[48px] flex flex-col items-center justify-center bg-gradient-to-br from-[#fff3ec] to-[#fffaf7] px-6">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h1 className="text-4xl font-bold mb-4">Contact us</h1>
          <p className="text-gray-500 max-w-md mb-10">
            Quick way to request a call back, we prioritize your experience and
            are committed to resolving any issues you may encounter.
          </p>

          <div className="space-y-6 text-sm">
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
              <input className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none" />
            </div>

            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Phone</label>
              <input
                type="tel"
                className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Department</label>
              <select className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none">
                <option>Select department</option>
                <option>Sales</option>
                <option>Support</option>
                <option>Billing</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="text-sm font-medium">Message</label>
              <textarea
                placeholder="Enter your message"
                className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none h-32 resize-none"
              />
            </div>

            <div className="md:col-span-2">
              <button
                type="button"
                className="w-full h-12 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <div>
        <FAQAccordion />
      </div>
      <div className="w-full p-4">
        <CustomUi />
      </div>
      <div className="award-winners w-full flex justify-evenly items-center gap-4 mt-12">
        <h1 className="text-orange-400 text-3xl">Award Winners</h1>
        <div className="img">
          <img src={title6} className="w-20" />
        </div>
        <div className="img">
          <img src={title6} className="w-20" />
        </div>
        <div className="img">
          <img src={title6} className="w-20" />
        </div>
        <div className="img">
          <img src={dummy3} />
        </div>
        <div className="img">
          <img src={dummy4} />
        </div>
      </div>
    </div>
  );
}
