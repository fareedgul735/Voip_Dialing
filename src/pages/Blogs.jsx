import React, { useState } from "react";
import ContactInformation from "../ui/ContactInformation";
import CustomUi from "../ui/CustomUi";

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
          <div className="text-center max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-orange-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Product Data Sheets
            </h3>
            <p className="text-gray-600 mb-8">
              Explore detailed specifications and technical information about
              our products. Data sheets coming soon!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-6 border-2 border-dashed border-gray-200">
                <p className="text-gray-400 font-medium">
                  AI Chatbot Solutions
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 border-2 border-dashed border-gray-200">
                <p className="text-gray-400 font-medium">
                  CRM Integration Guide
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (activeTab === "Press Release") {
      return (
        <div className="bg-white rounded-2xl shadow-sm p-12 border border-gray-100">
          <div className="text-center max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-orange-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Press Releases
            </h3>
            <p className="text-gray-600 mb-8">
              Stay updated with our latest company news and announcements. Press
              releases will be published here.
            </p>
            <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-lg p-8 border border-orange-100">
              <p className="text-gray-500 italic">
                No press releases available at the moment. Check back soon for
                updates!
              </p>
            </div>
          </div>
        </div>
      );
    } else if (activeTab === "Announcement") {
      return (
        <div className="bg-white rounded-2xl shadow-sm p-12 border border-gray-100">
          <div className="text-center max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-orange-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Announcements
            </h3>
            <p className="text-gray-600 mb-8">
              Important updates and announcements from our team. Stay informed
              about new features and updates.
            </p>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-lg p-6 border border-orange-100 text-left">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">
                      Coming Soon
                    </p>
                    <p className="text-gray-600 text-sm">
                      New announcements will be posted here. Stay tuned for
                      exciting updates!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Blog</h1>
          <p className="text-gray-600 mb-6">Read our latest articles</p>

          <div className="flex flex-wrap gap-3">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all ${
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
        <CustomUi />
      </div>
      <div className="p-[28px] bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
        <ContactInformation />
      </div>
    </div>
  );
};

export default Blogs;
