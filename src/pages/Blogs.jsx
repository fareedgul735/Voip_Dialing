import { useState } from "react";
import Downloads from "../ui/Product";
import AwardsNews from "../ui/Award";
import dummy1 from "../../public/dummy1.png";
import BrandName from "../ui/BrandName";
import Blog from "../../public/blog.png";
import { Link } from "react-router";

const Blogs = () => {
  // const id = 2;
  const [activeTab, setActiveTab] = useState("Blog");

  const blogPosts = [
    {
      id: "1",
      category: "Featured",
      date: "June 24, 2025",
      title: "Why Businesses Choose VOIP for AI Chatbots and CRM Success",
      description:
        "VoIP Dialing Inc., CEO & Founder, Ben Navon announces the ribbon cutting ceremony celebrating the expansion of their VoIP solutions at their offices located at 5940 South Rainbow Blvd. VoIP Dialing Inc., CEO & Founder, Ben Navon announces the ribbon cutting ceremony celebrating the expansion of their VoIP solutions at their offices located at 5940 South Rainbow Blvd.",
      isFeatured: true,
    },
    {
      id: "2",
      category: "Resource",
      date: "June 24, 2025",
      title: "Your Ultimate AI-Driven Partner for Business Growth",
      description: "",
      isFeatured: false,
    },
    {
      id: "3",
      category: "Resource",
      date: "June 24, 2025",
      title: "Why Biotix is the Future of form Customer Management",
      description: "",
      isFeatured: false,
    },
    {
      id: "4",
      category: "Resource",
      date: "June 24, 2025",
      title: "Sales and Support with Biotix's AI Powered CRM Solution",
      description: "",
      isFeatured: false,
    },

    {
      id: "5",
      category: "Featured",
      date: "June 24, 2025",
      title: "Why Businesses Choose VOIP for AI Chatbots and CRM Success",
      description:
        "VoIP Dialing Inc., CEO & Founder, Ben Navon announces the ribbon cutting ceremony celebrating the expansion of their VoIP solutions at their offices located at 5940 South Rainbow Blvd. VoIP Dialing Inc., CEO & Founder, Ben Navon announces the ribbon cutting ceremony celebrating the expansion of their VoIP solutions at their offices located at 5940 South Rainbow Blvd.",
      isFeatured: true,
    },
    {
      id: "6",
      category: "Resource",
      date: "June 24, 2025",
      title: "Your Ultimate AI-Driven Partner for Business Growth",
      description: "",
      isFeatured: false,
    },
    {
      id: "7",
      category: "Resource",
      date: "June 24, 2025",
      title: "Why Biotix is the Future of form Customer Management",
      description: "",
      isFeatured: false,
    },
    {
      id: "8",
      category: "Resource",
      date: "June 24, 2025",
      title: "Sales and Support with Biotix's AI Powered CRM Solution",
      description: "",
      isFeatured: false,
    },
  ];
  const featuredBlog = blogPosts[0];

  const tabs = ["Blog", "Product Data Sheet", "Press Release", "Advertisement"];

  const renderContent = () => {
    if (activeTab === "Blog") {
      return (
        <div className="space-y-8">
          <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-orange-100 text-gray-700 px-4 py-1.5 rounded-full text-sm font-medium">
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
                <Link
                  to={`/blogs/${featuredBlog.id}`}
                  className="text-gray-500 font-semibold hover:text-orange-600 transition-colors"
                >
                  Read more
                </Link>
              </div>
              <div className="lg:w-[740px]">
                <Link to={`/blogs/${featuredBlog.id}`}>
                  <div className="rounded-xl p-8 h-full flex items-center justify-center">
                    <img
                      src={Blog}
                      alt="Blog laptop"
                      className="w-full  rounded-lg shadow-lg"
                    />
                  </div>
                </Link>
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
                    <div className="p-6">
                      <Link to={`/blogs/${post.id}`}>
                        <img
                          src={Blog}
                          alt="Blog"
                          className="w-full rounded-lg shadow-md"
                        />
                      </Link>
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

                      <Link
                        to={`/blogs/${post.id}`}
                        className="text-sm font-semibold text-gray-500 hover:text-orange-600 transition-colors"
                      >
                        Read more
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      );
    } else if (activeTab === "Product Data Sheet") {
      return (
        <div>
          <Downloads />
        </div>
      );
    } else if (activeTab === "Press Release") {
      return (
        <div>
          <AwardsNews />
        </div>
      );
    } else if (activeTab === "Advertisement") {
      return (
        <div>
          <div
            className="
            py-12
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
    <div className="bg-gradient-to-b from-red-50 via-white to-white p-[12px] py-12">
      <div className="mx-12">
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
                    : "bg-orange-100 text-orange-400 border-2 border-orange-200 hover:border-orange-300 hover:bg-orange-100"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {renderContent()}
      </div>
      <div className="w-full flex justify-end mt-12 mb-12">
        <BrandName />
      </div>
    </div>
  );
};

export default Blogs;
