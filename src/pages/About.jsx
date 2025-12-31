import { useState } from "react";

import title1 from "../../public/title1.png";
import title2 from "../../public/title2.png";
import title4 from "../../public/title4.png";
import title5 from "../../public/title5.png";
import title6 from "../../public/title6.png";
import title7 from "../../public/title7.png";

import Doctor1 from "../../public/Doctor 1.png";
import Doctor2 from "../../public/Doctor 2.png";
import Doctor3 from "../../public/Doctor 3.png";
import Doctor4 from "../../public/Doctor 4.jpg";
import Doctor5 from "../../public/Doctor 5.png";
import Done from "../../public/Done.png";
import { Check } from "lucide-react";

import { ChevronLeft, ChevronRight } from "lucide-react";
import FAQItem from "../ui/Faqs";
import CallCenter from "../../public/CallCenter.png";

const About = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const [openIndex, setOpenIndex] = useState(null);

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const features = [
    "Crystal Clear Calls - With Quality Of Service Priority",
    "Easy Multiple Phone Number Assignment (after login)",
    "IP-PBX FailOver redundancy",
    "No term or usage commitment",
    "Unlimited outgoing concurrent calls",
    "LIVE Online Detailed Call & Cost Reports",
    "Quick, easy & simple implementation",
    "Huge Saving over PSTN Network",
  ];
  const faqData = [
    {
      question: "Does Biotic remember previous conversations?",
      answer:
        "Yes, Biotic has advanced memory capabilities that allow it to remember context from previous interactions within the same session. For enterprise plans, conversation history can be stored and referenced across multiple sessions to provide consistent and personalized responses.",
    },
    {
      question: "Is Biotic capable of voice interaction?",
      answer:
        "Absolutely! Biotic supports both text and voice interactions. Our voice recognition technology allows users to speak naturally, and Biotic can respond with synthesized speech or text, making it accessible across various use cases and user preferences.",
    },
    {
      question: "Does Biotic integrate with other software tools?",
      answer:
        "Yes, Biotic offers seamless integration with a wide range of business tools including CRM systems, project management platforms, communication tools, and productivity software. Our API allows for custom integrations with virtually any system your business uses.",
    },
    {
      question: "How do I set up Biotic for my business?",
      answer:
        "Setting up Biotic is straightforward. After signing up, you'll have access to our setup wizard that guides you through configuration. Most businesses can have Biotic operational within 30 minutes. We also offer professional onboarding services for enterprise clients.",
    },
    {
      question: "Can Biotic handle sensitive customer information?",
      answer:
        "Yes, Biotic is built with enterprise-grade security. We use end-to-end encryption for all data transmissions, comply with GDPR and other privacy regulations, and offer customizable data retention policies. Your sensitive information is protected with multiple layers of security.",
    },
    {
      question: "How does Biotic handle large volumes of queries?",
      answer:
        "Biotic uses scalable cloud infrastructure that automatically adjusts to handle any volume of queries. Our load balancing and distributed processing ensure consistent performance even during peak usage times, with 99.9% uptime guaranteed for all enterprise plans.",
    },
    {
      question: "Is the memory feature in Biotic automatic?",
      answer:
        "The memory feature can be configured based on your needs. By default, Biotic remembers context within conversations. You can customize memory settings through our dashboard to control what information is retained and for how long, with options for automatic or manual memory management.",
    },
    {
      question: "What kind of support does Biotic provide?",
      answer:
        "We provide comprehensive support including 24/7 technical assistance, dedicated account managers for enterprise clients, extensive documentation, video tutorials, and a community forum. All plans include email support, with premium options offering phone and live chat support.",
    },
  ];

  const testimonials = [
    {
      text: "VoIPDialing has completely upgraded our communication. The call quality is excellent, uptime is consistent, and their support team is always quick to help. It's been a reliable solution for our growing business.",
      author: "Alex Hales",
      position: "Operations Manager",
    },
  ];

  const [formData, setFormData] = useState({
    name: "Key Points",
    phoneEmail: "salend@vandaling.com",
    subject: "702-927-7777\n855-VDualing (855-834-2546)",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name && formData.phoneEmail) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);

      console.log("Form submitted:", formData);
    } else {
      alert("Please fill in at least your name and phone number.");
    }
  };
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100">
        <div className="container mx-auto px-6 py-12">
          <div className="p-[18px] grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-orange-100 rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-orange-600 font-medium text-sm">
                  About Us
                </span>
              </div>

              <h1 className="text-3xl lg:text-6xl font-bold text-gray-900 leading-tight">
                A Smarter Communication Platform for Growing Businesses
              </h1>

              <p className="text-gray-600 text-lg leading-relaxed">
                At VoIPDialing, our focus is on helping businesses communicate
                smarter. We deliver reliable, high-quality VoIP solutions built
                on advanced technology and clean, efficient workflows so every
                call is clear, secure, and cost-effective.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full transition-colors">
                  See Pricing
                </button>
                <button className="bg-orange-50 hover:bg-orange-100 text-orange-600 font-semibold px-8 py-3 rounded-full transition-colors">
                  Talk to sales
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-200/50 to-purple-200/50 rounded-3xl p-8 backdrop-blur-sm">
                <div className="bg-white rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center justify-center mb-4">
                    <div className="flex items-center gap-3 bg-gray-50 rounded-full px-4 py-2">
                      <div className="flex -space-x-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"></div>
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"></div>
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-orange-400"></div>
                      </div>
                      <div className="text-left">
                        <div className="flex text-yellow-400 text-xs">
                          ★★★★★
                        </div>
                        <div className="text-xs text-gray-600">
                          10,000+ Reviews
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl h-64 flex items-center justify-center relative overflow-hidden">
                    <div className="text-center">
                      <div className="w-100">
                        <img
                          src={CallCenter}
                          alt="Main User"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-4 right-4 bg-white rounded-2xl shadow-xl p-4">
                    <div className="text-5xl font-bold text-orange-500">
                      20+
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      Years Experience
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-4">
            Why us?
          </h2>

          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            VoIPDialing delivers reliable, high-quality VoIP solutions that
            simplify business communication. Our platform is designed for
            clarity, stability, and efficiency helping organizations connect
            better while reducing costs.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white border-2 border-orange-100 rounded-2xl p-6 hover:border-orange-300 transition-colors hover:shadow-lg"
              >
                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-orange-500" strokeWidth={3} />
                </div>
                <p className="text-gray-800 font-medium leading-snug">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-white flex items-center justify-center p-6">
        <div className="max-w-7xl w-full bg-white rounded-2xl shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative p-6 flex items-center justify-center">
            <div className="relative w-full h-full">
              <img
                src="https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&w=1200&auto=format&fit=crop"
                alt="Happy client using VoIP"
                className="w-full h-full object-cover rounded-2xl"
              />

              <div className="absolute -bottom-6 left-6 bg-white shadow-lg rounded-xl px-6 py-4">
                <div className="text-3xl font-bold text-orange-500">20K+</div>
                <div className="text-gray-600 text-sm">Happy Client</div>
              </div>
            </div>
          </div>
          <div className="p-8 flex flex-col justify-center">
            <p className="uppercase tracking-widest text-orange-500 font-semibold mb-2">
              Mission
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
              Our Mission Statement
            </h1>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our mission is to simplify business communication by delivering a
              powerful, reliable, and feature-rich Cloud VoIP platform that
              helps organizations connect, grow, and succeed—anytime, anywhere.
              With over 20 years of experience in call center management and
              telephony services integration, we enable businesses to maximize
              the value of modern communication technology while reducing
              operational costs and complexity. We provide enterprise-grade
              Class 5 VoIP dialing features designed to improve call handling,
              boost team productivity, and deliver exceptional customer
              experiences—without compromising reliability or performance. While
              many providers operate at 80–90% stability, we are committed to
              maintaining 99%+ platform reliability and call accuracy, backed by
              a customer-first approach and a proven record of satisfaction.
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-white flex items-center justify-center p-6">
        <div className="max-w-7xl w-full bg-white rounded-2xl shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-8 flex flex-col justify-center">
            <p className="uppercase tracking-widest text-orange-500 font-semibold mb-2">
              Our Communities
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
              Reliable Communication Anyone AnyWhere
            </h1>
            <p className="text-gray-600 leading-relaxed mb-8">
              We deliver scalable, secure, and cost-effective VoIP solutions
              designed to keep your business connected without interruptions.
              Our cloud platform ensures crystal-clear voice quality, high
              availability, and seamless performance so your teams communicate
              better and your customers receive the experience they deserve.
            </p>
            <br />

            <p className="text-gray-600 leading-relaxed mb-8">
              We deliver scalable, secure, and cost-effective VoIP solutions
              designed to keep your business connected without interruptions.
              Our cloud platform ensures crystal-clear voice quality, high
              availability, and seamless performance so your teams communicate
              better and your customers receive the experience they deserve.
            </p>
            <div className="flex gap-2">
              <div className="box bg-white shadow-md w-50 h-20 flex justify-center flex-col items-center  border border-b border-orange-600 rounded-[12px]">
                <h3 className="text-orange-600 text-2xl md:text-4xl font-bold text-gray-900 leading-tight ">
                  100+
                </h3>
                <p className="text-gray-600 leading-relaxed">Happy Clients</p>
              </div>
              <div className="box bg-white shadow-md w-50 h-20 flex justify-center flex-col items-center  border border-b border-orange-600 rounded-[12px]">
                <h3 className="text-orange-600 text-2xl md:text-4xl font-bold text-gray-900 leading-tight ">
                  825
                </h3>
                <p className="text-gray-600 leading-relaxed">Projects Done</p>
              </div>
              <div className="box bg-white shadow-md w-50 h-20 flex justify-center flex-col items-center  border border-b border-orange-600 rounded-[12px]">
                <h3 className="text-orange-600 text-2xl md:text-4xl font-bold text-gray-900 leading-tight ">
                  4
                </h3>
                <p className="text-gray-600 leading-relaxed">Award Won</p>
              </div>
            </div>
          </div>
          <div className="relative p-6 flex items-center justify-center">
            <div className="relative w-full h-full">
              <img
                src={Done}
                alt="Happy client using VoIP"
                className="w-full h-full object-cover rounded-2xl"
              />

              <div className="absolute -bottom-6 left-6 bg-white shadow-lg rounded-xl px-6 py-4">
                <div className="text-3xl font-bold text-orange-500">20K+</div>
                <div className="text-gray-600 text-sm">Happy Client</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-60 flex justify-end mt-20 mb-4 px-4">
        <div className="relative flex items-center gap-6 p-8 bg-orange-50 rounded-4xl shadow-sm w-[85%] ml-auto">
          <div className="absolute top-12 -left-40 bg-orange-500 text-white rounded-2xl px-10 py-8 text-center shadow-lg z-10">
            <h2 className="text-4xl font-bold">200+</h2>
            <p className="mt-3 leading-snug text-sm">
              Certified & <br />
              Authorized <br />
              Reseller/Integrator
            </p>
          </div>

          <div className="flex-1 pl-16">
            <div className="flex justify-between">
              <p className="font-semibold text-gray-800 mb-6 leading-relaxed">
                We Empower your business with seamless,
                <br />
                high-quality calling solutions.
              </p>

              <p className="flex gap-2 w-100 font-semibold text-gray-800 mb-6 leading-relaxed">
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  rem molestiae consequatur!
                </span>
                <img
                  src={title6}
                  className="h-10 object-contain opacity-90"
                  alt="logo"
                />
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-8">
              <img
                src={title1}
                className="h-20 object-contain opacity-90"
                alt="logo"
              />
              <img
                src={title2}
                className="h-20 object-contain opacity-90"
                alt="logo"
              />
              <img
                src={title4}
                className="h-20 object-contain opacity-90"
                alt="logo"
              />
              <img
                src={title5}
                className="h-20 object-contain opacity-90"
                alt="logo"
              />
              <img
                src={title6}
                className="h-20 object-contain opacity-90"
                alt="logo"
              />
              <img
                src={title7}
                className="h-20 object-contain opacity-90"
                alt="logo"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-4">
            <p className="text-orange-400 uppercase tracking-wider text-sm font-semibold">
              Testimonials
            </p>
          </div>

          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
            What Our Clients are Saying
          </h2>

          <div className="relative flex items-center justify-center">
            <div className="absolute -left-8 top-0 w-20 h-20 rounded-full bg-gradient-to-br from-orange-400 to-pink-400 overflow-hidden shadow-lg">
              <div className="w-full h-full bg-orange-300">
                <img src={Doctor1} />
              </div>
            </div>

            <div className="absolute -left-4 bottom-12 w-16 h-16 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 overflow-hidden shadow-lg">
              <div className="w-full h-full bg-orange-300">
                <img src={Doctor5} />
              </div>
            </div>

            <div className="absolute -right-8 top-4 w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 overflow-hidden shadow-lg">
              <div className="w-full h-full bg-orange-300">
                <img src={Doctor2} />
              </div>
            </div>

            <div className="absolute -right-4 bottom-8 w-16 h-16 rounded-full bg-gradient-to-br from-purple-300 to-purple-400 overflow-hidden shadow-lg">
              <div className="w-full h-full bg-orange-300">
                <img src={Doctor3} />
              </div>
            </div>

            <div className="absolute right-1/3 bottom-2 w-14 h-14 rounded-full bg-gradient-to-br from-orange-300 to-orange-400 overflow-hidden shadow-lg">
              <div className="w-full h-full bg-orange-300">
                <img src={Doctor4} />
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto relative z-10 border border-gray-100">
              <div className="flex justify-center mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
              </div>

              <p className="text-gray-600 text-center mb-6 leading-relaxed">
                {testimonials[currentTestimonial].text}
              </p>

              <div className="text-center">
                <p className="text-orange-500 font-semibold">
                  {testimonials[currentTestimonial].author}
                </p>
                <p className="text-gray-400 text-sm">
                  {testimonials[currentTestimonial].position}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button className="w-10 h-10 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center text-white shadow-lg transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center text-white shadow-lg transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto mb-10">
            How Biotic can benefit your business, understanding its features
          </p>

          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#FF6B35]">8</div>
              <div className="text-gray-600">Total Questions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#FF6B35]">1</div>
              <div className="text-gray-600">Open at a Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#FF6B35]">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              index={index}
              isOpen={openIndex === index}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-[#FF6B35] to-[#ff8b35] rounded-3xl text-white">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="max-w-2xl">
              <h3 className="text-3xl font-bold mb-4">
                Need more detailed answers?
              </h3>
              <p className="text-white/90 text-lg">
                Our sales and support teams are ready to answer any specific
                questions about how Biotic can transform your business
                operations.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-white text-[#FF6B35] font-bold rounded-xl hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg">
                Schedule a Demo
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 hover:scale-105 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-24 w-full bg-white shadow-2xl rounded-xl overflow-hidden flex flex-col md:flex-row">
        <div className="bg-[#FF6B35] text-white p-8 md:p-12 lg:p-16 flex-1">
          <div className="max-w-md">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              READY TO
              <br />
              GROW BUSINESS
              <br />
              <span className="text-white font-black">WITH US</span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold mb-6 mt-8">
              REQUEST A CALL
            </h2>

            <p className="text-lg md:text-xl mb-10 opacity-90 leading-relaxed">
              Our team will call you back promptly to discuss how we can help
              grow your business.
            </p>

            <div className="h-px bg-white/20 my-8"></div>
          </div>
        </div>

        <div className="bg-white p-8 md:p-12 lg:p-16 flex-1 flex items-center">
          <div className="w-full max-w-md mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-8">
              Request a Call
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35] outline-none transition"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phoneEmail"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Phone & Email (optional)
                </label>
                <input
                  type="text"
                  id="phoneEmail"
                  name="phoneEmail"
                  value={formData.phoneEmail}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35] outline-none transition"
                  placeholder="Enter phone number"
                  required
                />
                <p className="text-sm text-gray-500 mt-1 italic">
                  Email is optional but helpful for follow-up
                </p>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Subject
                </label>
                <textarea
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35] outline-none transition resize-none"
                  placeholder="What would you like to discuss?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#FF6B35] hover:bg-[#e55a2b] text-white font-semibold py-4 px-6 rounded-lg transition duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Request a Call
              </button>

              {isSubmitted && (
                <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-lg border border-green-200 animate-pulse">
                  ✓ Thank you! We'll call you back shortly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
