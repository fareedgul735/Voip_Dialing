import lady1 from "../../../public/lady_1.jpg";
import animate1 from "../../../public/animate_1.png";
import Dmj from "../../../public/Dm.jpg";
import {
  CheckCircle,
  ClipboardList,
  MessageSquare,
  Plug,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
const CallCenter = () => {
  return (
    <>
      <div className="w-full p-[12px] py-28 bg-[linear-gradient(101.26deg,_#FAF5F5_0%,_#FFF2F2_27.63%,_#F9EDFF_39.44%,_#F9F7FF_54.44%,_#999CFF_100%)]">
        <div>
          <div className="mx-12 flex flex-col lg:flex-row gap-12 items-center justify-between">
            <div className="text-center lg:text-left">
              <p className="text-sm mb-2">
                <span className="text-orange-500 font-bold">©</span>{" "}
                <span>VOIP For Small Businesses</span>
              </p>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                The small business Flexible Trusted Affordable{" "}
                <span className="text-orange-600">PBX by businesses</span>
              </h1>

              <ul className="space-y-3 mb-8 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500">•</span>
                  <span>
                    Talk, text, meet, and manage calls with AI Receptionists
                    from one phone system.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500">•</span>
                  <span>
                    Deliver first-in-call and stay connected with all your
                    customers.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500">•</span>
                  <span>
                    Set up in minutes, and run your business from anywhere, on
                    any device.
                  </span>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-orange-500 cursor-pointer shadow-md hover:bg-blue-600 text-white px-6 py-3 rounded-full transition">
                  Contact Sales
                </button>
                <button className="bg-white cursor-pointer hover:bg-blue-600 shadow-md rounded-full text-orange-500 hover:text-white px-6 py-3 transition">
                  See Pricing
                </button>
              </div>
            </div>

            <div className="relative flex justify-center w-full lg:w-auto">
              <img
                src={animate1}
                alt="VoIP Technology"
                className="rounded-lg w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-1xl object-contain"
              />

              <div
                className="
            absolute 
            bg-white rounded-lg shadow-lg px-2 py-4 text-center
            text-sm
            top-2 left-1/2 -translate-x-1/2
            lg:top-auto lg:bottom-10 lg:-left-22 lg:translate-x-0
          "
              >
                <p className="text-2xl sm:text-4xl font-bold text-orange-500">
                  20+
                </p>
                <p className="text-xs sm:text-sm text-gray-600">
                  Years Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full p-[12px] py-12">
        <div className="bg-white mx-12 rounded-2xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <img
                src={lady1}
                alt="Happy Client"
                className="rounded-lg w-150"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-xl p-6">
                <p className="text-4xl font-bold text-orange-500">12K+</p>
                <p className="text-sm text-gray-600">Happy Client</p>
              </div>
            </div>
            <div>
              <p className="text-orange-500 text-sm  mb-2">BUSINESS GROWTH</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                The small business phone system with big benefits
              </h2>
              <p className="text-gray-600 mb-6">
                Get a second phone line in minutes
              </p>
              <p className="text-gray-600 mb-6">
                Setup is easy — just pair your existing business phone numbers,
                or pick one with your local area code — and start your existing
                business phone today. All in less than 10 minutes.
              </p>

              <div className="rounded-lg p-4 mb-6 border-t border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                  <span className="text-blue-500 mr-2">📱</span>
                  Stay connected in one reliable app
                </h3>
                <p className="text-sm text-gray-600">
                  Get one app to talk, text, and meet with customers—from
                  anywhere, on any device. Never miss a call or text from
                  customers—from anywhere, on any device.
                </p>
              </div>

              <div className="rounded-lg p-4 mb-6 border-t border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                  <span className="text-purple-500 mr-2">🎯</span>
                  Create attached brand
                </h3>
                <p className="text-sm text-gray-600">
                  Build lasting relationships with branded call routing and warm
                  image transfers. And with shared contacts, everyone can pick
                  up right where the last person left off.
                </p>
              </div>

              <button className="bg-orange-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition shadow-md cursor-pointer">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full p-[12px] py-12">
        <div className="grid mx-12 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-orange-500 text-sm mb-2">BUSINESS GROWTH</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Customize your business calling with our VOIP APIs
            </h2>
            <p className="text-gray-600 mb-4">
              Create seamless cloud communications experiences that perfectly
              fit your business's specific needs. Our powerful APIs enable you
              to:
            </p>
            <p className="text-gray-600 mb-4">
              Easily integrate calling, SMS, MR, call tracking, and analytics
              into your existing systems via Cloud, platforms, and business
              apps.
            </p>
            <p className="text-gray-600 mb-6">
              Automate workflows, analyze performance, and keep your team always
              within reach—already customizable using any of our other
              integrations. Create and organize your VOIP solution with tools
              your team already uses—no complex setup required. Connect your
              VOIP solution across apps to automate and make collaboration
              easier.
            </p>
            <button className="bg-orange-500 hover:bg-blue-600 text-white px-6 py-3 cursor-pointer rounded-full transition">
              Explore More
            </button>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
              alt="Team Collaboration"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </div>
      <div className="w-full p-[12px] py-12">
        <div className="py-16">
          <div className="grid mx-12 md:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=300&fit=crop"
                  alt="Business Meeting"
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop"
                  alt="Professional"
                  className="rounded-lg shadow-lg w-full h-48 object-cover"
                />
              </div>
              <div className="space-y-4 pt-12">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=250&fit=crop"
                  alt="Team Discussion"
                  className="rounded-lg shadow-lg w-full h-48 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=250&fit=crop"
                  alt="Business Call"
                  className="rounded-lg shadow-lg w-full h-48 object-cover"
                />
              </div>
            </div>

            <div>
              <p className="text-orange-500 text-sm mb-3 uppercase tracking-wide">
                Business Growth
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Real results for small businesses of all sizes
              </h1>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <h2 className="text-5xl font-bold text-gray-900 mb-2">35%</h2>
                  <p className="text-gray-600 text-sm">
                    Increase in call handling efficiency with smart VOIP routing
                    and IVR
                  </p>
                </div>
                <div>
                  <h2 className="text-5xl font-bold text-gray-900 mb-2">
                    $1k+
                  </h2>
                  <p className="text-gray-600 text-sm">
                    Average monthly savings by switching from traditional phone
                    systems
                  </p>
                </div>
                <div>
                  <h2 className="text-5xl font-bold text-gray-900 mb-2">9.1</h2>
                  <p className="text-gray-600 text-sm">
                    Average customer satisfaction score for call quality &
                    reliability
                  </p>
                </div>
                <div>
                  <h2 className="text-5xl font-bold text-gray-900 mb-2">40%</h2>
                  <p className="text-gray-600 text-sm">
                    Reduction in missed calls using cloud-based VOIP solutions
                  </p>
                </div>
              </div>

              <button className="bg-orange-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full cursor-pointer transition shadow-lg">
                Explore More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full p-[12px] py-12">
        <div className="grid mx-12 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src={Dmj}
              alt="Office Environment"
              className="rounded-2xl shadow-2xl w-full h-[624px] object-cover"
            />
            <div className="absolute -bottom-0 -left-0 bg-white rounded-xl shadow-2xl p-6">
              <p className="text-5xl font-bold text-orange-500">12K+</p>
              <p className="text-gray-600 font-semibold">Happy Client</p>
            </div>
          </div>

          <div className="h-[650px]">
            <p className="text-orange-500 text-sm uppercase tracking-wide">
              Business Growth
            </p>
            <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-8">
              Optimize your end-to-end voice communication
            </h2>

            <div className="space-y-18">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <CheckCircle className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    View call data from every angle
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Gain complete visibility into your VOIP performance by
                    tracking call volume, duration, and times, and agent
                    performance — all from a single dashboard.
                  </p>
                </div>
              </div>

              <div className="flex items-start border-t border-gray-100 mt-1 p-2">
                <div className="flex-shrink-0 mr-4">
                  <CheckCircle className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Improve agent and team performance
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Monitor agent productivity, call quality, and response times
                    using pre-built and custom VOIP dashboards. Identify gaps
                    and improve customer conversations.
                  </p>
                </div>
              </div>

              <div className="flex items-start border-t border-gray-100 p-2">
                <div className="flex-shrink-0 mr-4">
                  <CheckCircle className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Spot calling trends across every channel
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Analyze voice, IVR, voicemail, and outbound call trends. Get
                    custom SLAs and track the full calling journey to deliver
                    consistent customer experiences.
                  </p>
                </div>
              </div>
            </div>

            <button className="mt-8 bg-orange-500 hover:bg-blue-600 cursor-pointer text-white px-8 py-3 rounded-full transition shadow-lg">
              Explore more
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white w-full p-[12px] py-12">
        <div className="mx-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
            Comprehensive features
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mx-12">
            <div className="rounded-lg p-6 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Contact Management
              </h3>
              <p className="text-gray-600 text-sm">
                Centralized database for storing and managing customer
                information.
              </p>
            </div>

            <div className="rounded-lg p-6 hover:shadow-lg transition relative">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Lead Tracking
              </h3>
              <p className="text-gray-600 text-sm">
                Automated lead scoring based on form engagement and activity.
              </p>
            </div>

            <div className="rounded-lg p-6 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Communication Tools
              </h3>
              <p className="text-gray-600 text-sm">
                Email and SMS integration for direct communication.
              </p>
            </div>

            <div className="rounded-lg p-6 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <ClipboardList className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Activity Management
              </h3>
              <p className="text-gray-600 text-sm">
                Assign tasks to team members with deadlines and reminders.
              </p>
            </div>

            <div className="rounded-lg p-6 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Automation Workflows
              </h3>
              <p className="text-gray-600 text-sm">
                Trigger-based workflows for leads, deals, or customer
                activities.
              </p>
            </div>

            <div className="rounded-lg p-6 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Plug className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Integration Support
              </h3>
              <p className="text-gray-600 text-sm">
                Seamless integration with tools like Gmail, Outlook, Slack, and
                Zapier.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full p-[12px] py-12">
        <div
          className="
      relative 
      mx-12 
      min-h-[420px] sm:min-h-[480px] lg:min-h-[490px]
      rounded-2xl 
      shadow-2xl 
      bg-cover bg-center bg-no-repeat 
      flex 
      items-center 
      justify-center 
      lg:justify-end
    "
          style={{
            backgroundImage: "url('/audio_1.jpg')",
          }}
        >
          <div
            className="
        bg-white 
        rounded-xl 
        shadow-xl 
        p-6 sm:p-8 
        max-w-lg 
        mx-4 
        lg:mx-0 
        lg:mr-10
        text-center lg:text-left
      "
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              We Have A Team Ready To Serve You
            </h2>

            <p className="text-gray-600 mb-4 text-sm sm:text-base">
              Our dedicated support team works around the clock to ensure your
              communication stays smooth and uninterrupted.
            </p>

            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              With fast responses and expert guidance, we make sure you're
              always connected when it matters most.
            </p>

            <button className="bg-orange-500 hover:bg-blue-600 cursor-pointer text-white px-8 py-3 sm:py-4 rounded-full font-semibold transition shadow-lg uppercase">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallCenter;
