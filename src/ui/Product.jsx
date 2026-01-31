import { Download } from "lucide-react";
import dummy2 from "../../public/dummy2.png";

const Card = ({}) => {
  return (
    <div className="border border-orange-300 rounded-2xl p-4 bg-white flex flex-col items-center shadow-sm">
      <div className="w-[300px] h-[412px] flex items-center justify-center mb-4">
        <img src={dummy2} className="w-full h-full object-contain" />
      </div>

      <button className="mt-auto w-full rounded-full bg-orange-500 hover:bg-orange-600 transition text-white text-xs py-2 flex items-center justify-center gap-2">
        <Download size={14} />
        Download
      </button>
    </div>
  );
};

export default function Downloads() {
  return (
    <div className="py-12">
      <div className="mx-auto space-y-16">
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Company Profile</h3>
              <Card />
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Equipment</h3>
              <Card />
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Connectivity</h3>
              <Card />
            </div>
          </div>
        </section>

        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                SIP Trunk & Cloud PBX
              </h3>
              <Card />
            </div>

            <div className="mt-12">
              <Card />
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">
                SIP Trunk & Cloud PBX
              </h3>
              <Card />
            </div>
            <div className="mt-12">
              <Card />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
