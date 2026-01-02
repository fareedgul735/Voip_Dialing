import { Download } from "lucide-react";
import dummy2 from "../../public/dummy2.png";

const Card = ({ title }) => (
  <div className="border border-orange-300 rounded-xl p-4 flex flex-col items-center bg-white">
    <h3 className="text-orange-500 text-sm font-semibold mb-2">
      VoIP Dialing Inc.
    </h3>
    <p className="text-[11px] text-gray-500 mb-3">Company Profile</p>

    <div className="w-full flex justify-center mb-4">
      <div className="w-40 h-24 bg-gray-100 rounded-md flex items-center justify-center text-xs text-gray-400">
        <img src={dummy2} alt="" />
      </div>
    </div>

    <button className="mt-auto w-full rounded-full bg-orange-500 hover:bg-orange-600 text-white text-xs py-2 flex items-center justify-center gap-2">
      <Download size={14} /> Download
    </button>
  </div>
);

export default function Downloads() {
  return (
    <div className="bg-[#fffaf7] px-6 py-12">
      <div className="max-w-7xl mx-auto space-y-12">
        <div>
          <h2 className="text-lg font-semibold mb-6">Company Profile</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Card title="Company Profile" />
            <Card title="Equipment" />
            <Card title="Connectivity" />
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-6">SIP Trunk & Cloud PBX</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-6">
            Bulk SMS & SMS Conversational
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}
