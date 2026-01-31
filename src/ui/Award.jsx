import title6 from "../../public/title6.png";

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full bg-orange-100 text-orange-600 text-xs font-medium px-3 py-1">
    {children}
  </span>
);

const AwardCard = ({ year }) => (
  <div className="w-full bg-white rounded-xl shadow-sm border border-gray-100 py-12 sm:p-8 flex flex-col md:flex-row gap-6">
    <div className="flex-1">
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3 mb-3">
        <Badge>Featured</Badge>
        <span className="text-xs text-gray-400 mt-1 sm:mt-0">
          FEB 12, {year}
        </span>
      </div>

      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-1 leading-snug">
        VoIP Dialing Inc. Received {year} INTERNET TELEPHONY Product of the Year
        Award
      </h2>

      <p className="text-sm text-gray-500 mb-4">by VoIP Dialing</p>

      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
        Las Vegas, Nevada, January {year} – VoIP Dialing Inc. announced today
        that TMC, a global, integrated media company, has named VoIP Dialing as
        a recipient of a {year} INTERNET TELEPHONY Product of the Year Award.
        VoIP Dialing.com is a leading provider for Voice Over IP calling
        solutions, mostly supporting Call-Centers and other large & small
        businesses across the US.
      </p>
    </div>

    <div className="flex-shrink-0 flex justify-center md:justify-end">
      <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full border-4 border-red-600 flex items-center justify-center overflow-hidden">
        <img
          src={title6}
          alt={`Award ${year}`}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
);

export default function AwardsNews() {
  return (
    <div>
      <div className="mx-auto space-y-10">
        <AwardCard year="2023" />
        <AwardCard year="2021" />

        <section className="space-y-6">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-indigo-700 mb-2">
              About VoIP Dialing Inc
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Our extensive experience in call center management & telephony
              services integration for more than 20 years enables our customers
              to reap the rewards of our knowledge, advanced and technology
              while saving money.
            </p>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-indigo-700 mb-2">
              About INTERNET TELEPHONY magazine
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              INTERNET TELEPHONY has been the IP Communications Authority since
              1998. Beginning with the first issue, INTERNET TELEPHONY magazine
              has been providing unbiased views of the complex converged
              communications space.
            </p>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-indigo-700 mb-2">
              About TMC
            </h3>
            <ul className="list-disc pl-5 text-sm sm:text-base text-gray-600 space-y-1">
              <li>Unique, turnkey online Communities boost search results.</li>
              <li>
                In-Person and Online Events boost brands and thought leadership.
              </li>
              <li>
                Publications provide insights and newsletters bolster brand
                reputations.
              </li>
              <li>Content Marketing Services help generate leads.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
