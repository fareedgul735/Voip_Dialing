import { useState } from "react";
import Downloads from "../ui/Product";
import AwardsNews from "../ui/Award";
import dummy1 from "../../public/dummy1.png";
import BrandName from "../ui/BrandName";

const Blogs = () => {
  const [activeTab, setActiveTab] = useState("Blog");

  const blogPosts = [
    {
      id: 1,
      category: "Featured",
      date: "June 24, 2025",
      title: "Why Businesses Choose VOIP for AI Chatbots and CRM Success",
      description:
        "VoIP Dialing Inc., CEO & Founder, Ben Navon announces the ribbon cutting ceremony celebrating the expansion of their VoIP solutions at their offices located at 5940 South Rainbow Blvd. VoIP Dialing Inc., CEO & Founder, Ben Navon announces the ribbon cutting ceremony celebrating the expansion of their VoIP solutions at their offices located at 5940 South Rainbow Blvd.",
      isFeatured: true,
    },
    {
      id: 2,
      category: "Resource",
      date: "June 24, 2025",
      title: "Your Ultimate AI-Driven Partner for Business Growth",
      description: "",
      isFeatured: false,
    },
    {
      id: 3,
      category: "Resource",
      date: "June 24, 2025",
      title: "Why Biotix is the Future of form Customer Management",
      description: "",
      isFeatured: false,
    },
    {
      id: 4,
      category: "Resource",
      date: "June 24, 2025",
      title: "Sales and Support with Biotix's AI Powered CRM Solution",
      description: "",
      isFeatured: false,
    },

    {
      id: 1,
      category: "Featured",
      date: "June 24, 2025",
      title: "Why Businesses Choose VOIP for AI Chatbots and CRM Success",
      description:
        "VoIP Dialing Inc., CEO & Founder, Ben Navon announces the ribbon cutting ceremony celebrating the expansion of their VoIP solutions at their offices located at 5940 South Rainbow Blvd. VoIP Dialing Inc., CEO & Founder, Ben Navon announces the ribbon cutting ceremony celebrating the expansion of their VoIP solutions at their offices located at 5940 South Rainbow Blvd.",
      isFeatured: true,
    },
    {
      id: 2,
      category: "Resource",
      date: "June 24, 2025",
      title: "Your Ultimate AI-Driven Partner for Business Growth",
      description: "",
      isFeatured: false,
    },
    {
      id: 3,
      category: "Resource",
      date: "June 24, 2025",
      title: "Why Biotix is the Future of form Customer Management",
      description: "",
      isFeatured: false,
    },
    {
      id: 4,
      category: "Resource",
      date: "June 24, 2025",
      title: "Sales and Support with Biotix's AI Powered CRM Solution",
      description: "",
      isFeatured: false,
    },
  ];

  const tabs = ["Blog", "Product Data Sheet", "Press Release", "Announcement"];

  const renderContent = () => {
    if (activeTab === "Blog") {
      return (
        <div className="space-y-8">
          <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-gray-100 text-gray-700 px-4 py-1.5 rounded-full text-sm font-medium">
                    Featured
                  </span>
                  <span className="text-gray-500 text-sm">June 24, 2025</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Why Businesses Choose VOIP for AI Chatbots and CRM Success
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  VoIP Dialing Inc., CEO & Founder, Ben Navon announces the
                  ribbon cutting ceremony celebrating the expansion of their
                  VoIP solutions at their offices located at 5940 South Rainbow
                  Blvd. VoIP Dialing Inc., CEO & Founder, Ben Navon announces
                  the ribbon cutting ceremony celebrating the expansion of their
                  VoIP solutions at their offices located at 5940 South Rainbow
                  Blvd. VoIP Dialing Inc., CEO & Founder, Ben Navon announces
                  the ribbon cutting ceremony celebrating the expansion of their
                  VoIP solutions at their offices located at 5940 South Rainbow
                  Blvd.
                </p>
                <button className="cursor-pointer text-orange-500 font-semibold hover:text-orange-600 transition-colors">
                  Read more
                </button>
              </div>
              <div className="lg:w-96">
                <div className="bg-gradient-to-br from-pink-50 to-orange-50 rounded-xl p-8 h-full flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=300&fit=crop"
                    alt="Blog laptop"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Read all articles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts
                .filter((post) => !post.isFeatured)
                .map((post) => (
                  <div
                    key={post.id}
                    className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="bg-gradient-to-br from-pink-50 to-orange-50 p-8">
                      <img
                        src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=300&fit=crop"
                        alt="Blog laptop"
                        className="w-full h-auto rounded-lg shadow-md"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="bg-orange-50 text-orange-600 px-3 py-1 rounded-full text-xs font-medium">
                          {post.category}
                        </span>
                        <span className="text-gray-500 text-xs">
                          {post.date}
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-4 leading-snug">
                        {post.title}
                      </h4>
                      <button className="cursor-pointer text-orange-500 font-semibold text-sm hover:text-orange-600 transition-colors">
                        Read more
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      );
    } else if (activeTab === "Product Data Sheet") {
      return (
        <div className="bg-white rounded-2xl shadow-sm p-12 border border-gray-100">
          <Downloads />
        </div>
      );
    } else if (activeTab === "Press Release") {
      return (
        <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 lg:p-12 border border-gray-100">
          <AwardsNews />
        </div>
      );
    } else if (activeTab === "Announcement") {
      return (
        <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-12 border border-gray-100">
          <div
            className="
          w-full 
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
          gap-6
        "
          >
            <div className="flex justify-center">
              <img
                src={dummy1}
                alt="Announcement"
                className="w-full max-w-sm rounded-xl object-cover"
              />
            </div>

            <div className="flex justify-center">
              <img
                src={dummy1}
                alt="Announcement"
                className="w-full max-w-sm rounded-xl object-cover"
              />
            </div>

            <div className="flex justify-center">
              <img
                src={dummy1}
                alt="Announcement"
                className="w-full max-w-sm rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Blog</h1>
          <p className="text-gray-600 mb-6">Read our latest articles</p>

          <div className="flex flex-wrap gap-3">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`cursor-pointer px-6 py-2.5 rounded-full font-medium transition-all ${
                  activeTab === tab
                    ? "bg-orange-500 text-white shadow-md"
                    : "bg-white text-gray-700 border border-orange-200 hover:border-orange-300 hover:bg-orange-50"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {renderContent()}
      </div>
      <div className="w-full p-[28px] h-60 flex justify-end mt-20 mb-4 px-4">
        <BrandName />
      </div>
    </div>
  );
};

export default Blogs;
