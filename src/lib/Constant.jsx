import { DollarSign, Phone, Shield, Users } from "lucide-react";
import { ShieldCheck, RefreshCw, TrendingUp, MapPin } from "lucide-react";
import { Send, MessageSquare, BarChart3 } from "lucide-react";
import { Clock } from "lucide-react";
import { Globe, Star } from "lucide-react";

import { Cloud, MessageCircle, PhoneCall, Hash, HardDrive } from "lucide-react";
import Blog from "../../public/blog.png";
import Voiping from "../../public/Voiping.png";

import cloudService1 from "../../public/72972799ae5aa340804da7288e49224fbde304c5.png";
import cloudService2 from "../../public/e5beb8c37329203becb3c099b277e7c2c6a04de0.png";

export const Card = [
  {
    icon: Users,
    title: "Work From Anywhere",
    desc: "Employees can make and receive business calls from desk phones, laptops, or mobile devices whether they are in the office or working remotely in Las Vegas.",
  },
  {
    icon: Shield,
    title: "Scale as You Grow",
    desc: "Add users, extensions, or departments in minutes. Perfect for expanding teams, seasonal demand, and high call volume businesses.",
  },
  {
    icon: Phone,
    title: "Reduce Telecom Costs",
    desc: "Eliminate expensive PBX hardware, maintenance contracts, and outdated phone lines. Enjoy predictable monthly pricing.",
  },
  {
    icon: DollarSign,
    title: "Present a Professional Image",
    desc: "Auto attendants, call routing, and voicemail to email ensure every caller experiences a polished and organized business.",
  },
];

export const EquipmentCard = [
  {
    icon: Users,
    title: "Crystal Clear Call Quality",
    desc: "Enterprise grade SIP phones deliver HD voice clarity so every customer interaction sounds professional.",
  },
  {
    icon: Shield,
    title: "Seamless Cloud Integration",
    desc: "All devices are fully compatible with our Cloud PBX platform, ensuring smooth setup and centralized management.",
  },
  {
    icon: Phone,
    title: "Remote and Hybrid Workforce Ready",
    desc: "Support in office and remote employees with desk phones, wireless headsets, and softphone applications.",
  },
  {
    icon: DollarSign,
    title: "Scalable for Growing Teams",
    desc: "Easily add new phones, extensions, or accessories as your Las Vegas business expands.",
  },
];

export const BulkCard = [
  {
    icon: Send,
    title: "Bulk SMS Campaigns",
    desc: "Send thousands of promotional or transactional messages instantly to customers across Las Vegas with high delivery success rates.",
  },
  {
    icon: MessageSquare,
    title: "Two-Way Business Messaging",
    desc: "Enable real-time conversations with customers, allowing replies for bookings, support, confirmations, and inquiries.",
  },
  {
    icon: BarChart3,
    title: "SMS Analytics & Reporting",
    desc: "Track delivery status, response rates, and campaign performance to measure ROI and optimize your SMS marketing strategy.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Reliable Messaging",
    desc: "Our Las Vegas Business SMS platform ensures encrypted delivery, compliance standards, and enterprise-grade reliability.",
  },
];

export const VoipCard = [
  {
    icon: PhoneCall,
    title: "High-Quality VoIP Calls",
    desc: "Enjoy crystal-clear voice quality on every call with our enterprise-grade VoIP lines in Las Vegas.",
  },
  {
    icon: Clock,
    title: "Instant Setup & Activation",
    desc: "Get your VoIP lines up and running in minutes, without complex hardware installation or downtime.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Reliable Lines",
    desc: "All VoIP lines are encrypted and backed by redundant cloud infrastructure for uninterrupted service.",
  },
  {
    icon: TrendingUp,
    title: "Scalable for Any Business",
    desc: "Add or remove lines quickly as your Las Vegas business grows — ideal for seasonal demand or expanding teams.",
  },
];

export const CardPhone = [
  {
    icon: PhoneCall,
    title: "Strong Local Credibility",
    desc: "Use 702 or 725 area code numbers to show customers you are part of the Las Vegas community.",
  },
  {
    icon: Clock,
    title: "Expanded Reach",
    desc: "Add toll free numbers to serve customers across Nevada and nationwide while maintaining a professional image.",
  },
  {
    icon: ShieldCheck,
    title: "Brand Recognition",
    desc: "Choose vanity numbers that are easy to remember and reinforce your company name or service.",
  },
  {
    icon: TrendingUp,
    title: "Instant Activation",
    desc: "Secure and activate your business phone number quickly without hardware or long setup times.",
  },
];

export const features = [
  { text: "Auto Attendant and IVR", column: 1 },
  { text: "Call Queues and intelligent call routing", column: 1 },
  { text: "Ring Groups and Hunt Groups", column: 1 },
  { text: "Voicemail to Email", column: 1 },
  { text: "Call Recording and detailed call logs", column: 1 },
  { text: "Conference Calling", column: 1 },
  { text: "Time-Based Routing", column: 2 },
  { text: "Caller ID & Call Blocking", column: 2 },
  { text: "Mobile & Desktop Softphones", column: 2 },
  { text: "Number Porting for Las Vegas phone numbers", column: 2 },
  { text: "Custom Music on Hold", column: 3 },
  { text: "Advanced Call Reporting and analytics", column: 3 },
  { text: "Flexible Call Routing Rules", column: 3 },
  { text: "CRM and device integration", column: 3 },
];

export const EquipementFeatures = [
  { text: "Auto Attendant and IVR", column: 1 },
  { text: "Call Queues and intelligent call routing", column: 1 },
  { text: "Ring Groups and Hunt Groups", column: 1 },
  { text: "Voicemail to Email", column: 1 },
  { text: "Call Recording and detailed call logs", column: 1 },
  { text: "Conference Calling", column: 1 },
  { text: "Time-Based Routing", column: 2 },
  { text: "Caller ID & Call Blocking", column: 2 },
  { text: "Mobile & Desktop Softphones", column: 2 },
  { text: "Number Porting for Las Vegas phone numbers", column: 2 },
  { text: "Custom Music on Hold", column: 3 },
  { text: "Advanced Call Reporting and analytics", column: 3 },
  { text: "Flexible Call Routing Rules", column: 3 },
  { text: "CRM and device integration", column: 3 },
];

export const featuresBulk = [
  { text: "Bulk SMS Campaign Broadcasting", column: 1 },
  { text: "Scheduled & Automated Messaging", column: 1 },
  { text: "Promotional & Transactional SMS", column: 1 },
  { text: "Custom Sender ID Support", column: 1 },
  { text: "Group & Contact List Management", column: 1 },

  { text: "Two-Way Business Messaging", column: 2 },
  { text: "Auto Replies & SMS Templates", column: 2 },
  { text: "Appointment Reminders & Alerts", column: 2 },
  { text: "OTP & Verification Messages", column: 2 },
  { text: "Customer Feedback Collection", column: 2 },

  { text: "Real-Time Delivery Reports", column: 3 },
  { text: "Campaign Performance Analytics", column: 3 },
  { text: "API Integration for Developers", column: 3 },
  { text: "Secure & Encrypted SMS Routing", column: 3 },
  { text: "Scalable Messaging Infrastructure", column: 3 },
];

export const featuresVoip = [
  { text: "HD voice quality for professional call clarity", column: 1 },
  { text: "Auto Attendant and IVR", column: 1 },
  { text: "Call forwarding and intelligent routing", column: 1 },
  { text: "Ring groups and hunt groups", column: 1 },

  { text: "Voicemail to email transcription", column: 2 },
  { text: "Call recording and detailed call logs", column: 2 },
  { text: "Time based routing", column: 2 },
  { text: "Caller ID and call blocking", column: 2 },

  { text: "Multi device support including desktop and mobile", column: 3 },
  { text: "Instant line provisioning", column: 3 },
  { text: "Number porting for Las Vegas phone numbers", column: 3 },
  { text: "Advanced reporting and analytics", column: 3 },
];

export const PhoneFeatures = [
  { text: "702 and 725 local Las Vegas area code numbers", column: 1 },
  { text: "Toll free numbers including 800, 888, 877, and more", column: 1 },
  { text: "Custom vanity phone numbers", column: 1 },
  { text: "Number porting to keep your existing Las Vegas numbers", column: 1 },

  { text: "Instant number provisioning", column: 2 },
  { text: "Call forwarding to mobile, desktop, or VoIP systems", column: 2 },
  { text: "SMS enabled business numbers", column: 2 },
  { text: "Scalable number provisioning for growing businesses", column: 2 },

  { text: "Advanced call routing and auto attendant integration", column: 3 },
  { text: "Multi device support", column: 3 },
  { text: "CRM integration capabilities", column: 3 },
  { text: "Secure cloud management dashboard", column: 3 },
];

export const services = [
  {
    id: 1,
    image: cloudService2,
    icon: Users,
    title: " Local and Remote Team Connectivity",
    description:
      "Connect multiple offices and remote employees under one unified business phone system. Everyone operates on the same professional platform regardless of location.",
    iconColor: "bg-orange-500",
  },
  {
    id: 2,
    image: cloudService1,
    icon: PhoneCall,
    title: " Crystal Clear Voice Quality",
    description:
      "Enjoy high definition voice clarity optimized for business communication in Las Vegas. Every conversation sounds professional and reliable",
    iconColor: "bg-orange-500",
  },
  {
    id: 3,
    image: cloudService1,
    icon: ShieldCheck,
    title: "Secure Cloud Infrastructure",
    description:
      "All voice traffic is encrypted and protected with enterprise level security standards to safeguard your business communications.",
    iconColor: "bg-orange-500",
  },
  {
    id: 4,
    image: cloudService1,
    icon: RefreshCw,
    title: "Automatic Failover and Business Continuity",
    description:
      "If an internet outage occurs, calls are automatically rerouted to backup numbers or mobile devices so your business remains reachable.",
    iconColor: "bg-orange-500",
  },
  {
    id: 5,
    image: cloudService1,
    icon: TrendingUp,
    title: "Instant Scalability",
    description:
      "Quickly add extensions, departments, or new phone numbers as your Las Vegas company grows.",
    iconColor: "bg-orange-500",
  },
  {
    id: 6,
    image: cloudService1,
    icon: MapPin,
    title: "Local Las Vegas Number Presence",
    description:
      "Strengthen customer trust with local Las Vegas phone numbers while managing all calls centrally through a powerful cloud dashboard.",
    iconColor: "bg-orange-500",
  },
];

export const BulkServices = [
  {
    id: 1,
    image: cloudService2,
    icon: Send,
    title: "Bulk SMS Campaign Broadcasting",
    description:
      "Send promotional and transactional SMS campaigns instantly to thousands of customers across Las Vegas with high delivery success rates.",
    iconColor: "bg-orange-500",
  },
  {
    id: 2,
    image: cloudService1,
    icon: MessageSquare,
    title: "Two-Way Business Messaging",
    description:
      "Engage customers in real-time with two-way SMS conversations for bookings, confirmations, support, and customer inquiries.",
    iconColor: "bg-orange-500",
  },
  {
    id: 3,
    image: cloudService1,
    icon: ShieldCheck,
    title: "Secure & Compliant Messaging",
    description:
      "Our Las Vegas Business SMS platform ensures encrypted message routing, data protection, and compliance-ready communication.",
    iconColor: "bg-orange-500",
  },
  {
    id: 4,
    image: cloudService1,
    icon: BarChart3,
    title: "Real-Time SMS Analytics",
    description:
      "Track delivery reports, response rates, and campaign performance to measure ROI and optimize your SMS marketing strategy.",
    iconColor: "bg-orange-500",
  },
  {
    id: 5,
    image: cloudService1,
    icon: Clock,
    title: "Scheduled & Automated Messaging",
    description:
      "Schedule SMS campaigns, appointment reminders, alerts, and automated notifications for your Las Vegas customers.",
    iconColor: "bg-orange-500",
  },
  {
    id: 6,
    image: cloudService1,
    icon: MapPin,
    title: "Las Vegas Local Business Reach",
    description:
      "Build stronger local customer relationships with targeted SMS marketing campaigns designed specifically for Las Vegas businesses.",
    iconColor: "bg-orange-500",
  },
];

export const VoipServices = [
  {
    id: 1,
    image: cloudService2,
    icon: Users,
    title: "Connect Local & Remote Teams",
    description:
      "Keep your Las Vegas team connected with dedicated VoIP lines accessible from desktops, mobiles, and tablets.",
    iconColor: "bg-orange-500",
  },
  {
    id: 2,
    image: cloudService1,
    icon: PhoneCall,
    title: "High-Quality VoIP Lines",
    description:
      "Experience crystal-clear voice calls optimized for Las Vegas businesses, ensuring professional communication.",
    iconColor: "bg-orange-500",
  },
  {
    id: 3,
    image: cloudService1,
    icon: ShieldCheck,
    title: "Secure & Reliable Connectivity",
    description:
      "All VoIP lines are encrypted and hosted on redundant cloud infrastructure for uninterrupted business operations.",
    iconColor: "bg-orange-500",
  },
  {
    id: 4,
    image: cloudService1,
    icon: RefreshCw,
    title: "Business Continuity & Failover",
    description:
      "Automatically reroute calls during outages or internet issues, keeping your Las Vegas business always reachable.",
    iconColor: "bg-orange-500",
  },
  {
    id: 5,
    image: cloudService1,
    icon: TrendingUp,
    title: "Instant Scalability",
    description:
      "Add new lines, extensions, or numbers in minutes — ideal for growing Las Vegas businesses and seasonal demand.",
    iconColor: "bg-orange-500",
  },
  {
    id: 6,
    image: cloudService1,
    icon: MapPin,
    title: "Local Las Vegas Presence",
    description:
      "Use local Las Vegas numbers to build trust with customers while managing calls centrally with cloud VoIP lines.",
    iconColor: "bg-orange-500",
  },
];

export const PhoneServices = [
  {
    id: 1,
    image: cloudService1,
    icon: Phone,
    title: "Local Las Vegas Numbers",
    description:
      "Establish a strong local presence with 702 and 725 area code numbers that increase trust and answer rates for Las Vegas businesses.",
    iconColor: "bg-orange-500",
  },
  {
    id: 2,
    image: cloudService2,
    icon: Globe,
    title: "Toll-Free & Nationwide Numbers",
    description:
      "Expand beyond Las Vegas with professional toll-free numbers including 800, 888, 877, and more to reach customers nationwide.",
    iconColor: "bg-orange-500",
  },
  {
    id: 3,
    image: cloudService1,
    icon: Star,
    title: "Vanity & Custom Numbers",
    description:
      "Create a memorable branded phone number to strengthen marketing campaigns and improve brand recall in Las Vegas and nationwide.",
    iconColor: "bg-orange-500",
  },
  {
    id: 4,
    image: cloudService1,
    icon: RefreshCw,
    title: "Instant Activation",
    description:
      "Activate your business phone number within minutes and start receiving calls immediately — no hardware required.",
    iconColor: "bg-orange-500",
  },
  {
    id: 5,
    image: cloudService2,
    icon: Users,
    title: "Call Forwarding & Routing",
    description:
      "Forward calls to any mobile device, desk phone, or VoIP system with advanced routing options for Las Vegas companies.",
    iconColor: "bg-orange-500",
  },
  {
    id: 6,
    image: cloudService1,
    icon: MessageCircle,
    title: "SMS-Enabled Numbers",
    description:
      "Enable business texting on your Las Vegas number to connect with customers faster and improve engagement.",
    iconColor: "bg-orange-500",
  },
];
export const navLinks = [
  { id: 1, label: "Home", link: "/home" },

  {
    id: 2,
    label: "Products",
    submenu: [
      {
        label: "Cloud PBX",
        link: "/products/cloud-pbx",
        icon: <Cloud />,
        description: "Smart cloud-based business calling system.",
      },
      {
        label: "Bulk SMS",
        link: "/products/bulk-sms",
        icon: <MessageCircle />,
        description: "Send messages to thousands instantly.",
      },
      {
        label: "VOIP Lines",
        link: "/products/voip-lines",
        icon: <PhoneCall />,
        description: "Affordable and clear internet calling.",
      },
      {
        label: "Phone Numbers",
        link: "/products/phone-numbers",
        icon: <Hash />,
        description: "Local and international business numbers.",
      },
      {
        label: "Equipment",
        link: "/products/equipment",
        icon: <HardDrive />,
        description: "VoIP compatible phones and devices.",
      },
    ],
  },

  // {
  //   id: 3,
  //   label: "Solutions",
  //   submenu: {
  //     businessType: [
  //       { label: "Small medium businesses", link: "solutions/smallbusiness" },
  //       { label: "Retail", link: "solutions/retails" },
  //       { label: "Corporate Offices", link: "solutions/CorporateOffices" },
  //       { label: "Call center", link: "solutions/Callcenter" },
  //       { label: "Medical", link: "solutions/Medical" },
  //       { label: "Enterprise", link: "solutions/Enterprise" },
  //     ],
  //     industry: [
  //       { label: "Healthcare", link: "solutions/healthcare" },
  //       { label: "Hospitality", link: "solutions/hospitality" },
  //       { label: "Internet and Telco", link: "solutions/internetTelco" },
  //       { label: "Insurance", link: "solutions/insurance" },
  //       { label: "Constructions", link: "solutions/constructions" },
  //       { label: "Real Estate", link: "solutions/RealEstate" },
  //       { label: "Marketing", link: "solutions/marketing" },
  //       { label: "Education", link: "solutions/education" },
  //       { label: "Transportation", link: "solutions/transportation" },
  //     ],
  //     solution: [
  //       { label: "Sip Trunks", link: "solutions/SipTrunks" },
  //       { label: "Cloud Phone System", link: "solutions/CloudPhoneSystem" },
  //       { label: "SMS", link: "solutions/SMS" },
  //       { label: "Dialers", link: "solutions/Dialers" },
  //       { label: "Global", link: "solutions/Global" },
  //       { label: "Multi-location", link: "solutions/Multi-location" },
  //       {
  //         label: "Unified Communication",
  //         link: "solutions/UnifiedCommunication",
  //       },
  //       { label: "Fax", link: "solutions/Fax" },
  //     ],
  //   },
  // },

  { id: 4, label: "Pricing", link: "/pricing" },
  { id: 6, label: "About", link: "/about" },
  { id: 7, label: "Contact", link: "/contact" },
];

export const blogDeatiledPosts = [
  {
    id: "1",
    isFeatured: true,
    image_1: Blog,
    title: "How Las Vegas Companies Leverage VOIP for AI and CRM",
    shortDesc:
      "VoIP Dialing Inc., CEO Ben Navon unveils advanced VoIP solutions at 5940 South Rainbow Blvd, Las Vegas. VoIP Dialing Inc., CEO Ben Navon unveils advanced VoIP solutions at 5940 South Rainbow Blvd, Las Vegas.VoIP Dialing Inc., CEO Ben Navon unveils advanced VoIP solutions at 5940 South Rainbow Blvd, Las Vegas.VoIP Dialing Inc., CEO Ben Navon unveils advanced VoIP solutions at 5940 South Rainbow Blvd, Las Vegas.",
    fullDesc:
      "VoIP Dialing Inc., CEO Ben Navon unveils advanced VoIP solutions at 5940 South Rainbow Blvd, Las Vegas. VoIP Dialing Inc., CEO Ben Navon unveils advanced VoIP solutions at 5940 South Rainbow Blvd, Las Vegas.VoIP Dialing Inc., CEO Ben Navon unveils advanced VoIP solutions at 5940 South Rainbow Blvd, Las Vegas.VoIP Dialing Inc., CEO Ben Navon unveils advanced VoIP solutions at 5940 South Rainbow Blvd, Las Vegas.",
    head_1: "Enhancing Customer Engagement with AI Chatbots",
    desc_1:
      "Biotix empowers Las Vegas businesses with AI chatbots and CRM tools to deliver personalized interactions. The AI ensures queries are answered quickly, leads are nurtured efficiently, and sales opportunities are maximized. Automation lets your team focus on growth strategies without losing touch with customers.",
    head_2: "Data-Driven Insights for Smarter Decisions",
    desc_2:
      "INTERNET TELEPHONY remains a leading authority in IP communications since 1998™. Its magazine offers unbiased insights on converged communication technologies. Visit www.itmag.com for detailed reports. Connect on Twitter or LinkedIn for industry updates and subscribe to stay informed.",
    image_2: Voiping,
    head_3: "Optimized Workflows for Expanding Businesses",
    desc_3:
      "From startups to established Las Vegas enterprises, Biotix scales seamlessly. Its AI chatbot integration streamlines processes, cuts response times, and improves satisfaction. Automated workflows save valuable time, letting teams focus on innovation and growth strategies.",
    head_4: "AI-Powered Analytics for Every Business",
    desc_4:
      "INTERNET TELEPHONY has provided reliable communication insights since 1998™. Its magazine guides businesses through converged communication trends. Explore www.itmag.com or follow on social media for expert analysis and updates.",
    head_5: "Next-Level Insights for Smart Business Decisions",
    desc_6:
      "INTERNET TELEPHONY continues to set standards in IP communication since 1998™. The magazine covers complex tech landscapes with clarity. Visit www.itmag.com for reports, join LinkedIn discussions, or follow on Twitter to stay current.",
  },
  {
    id: "2",
    isFeatured: true,
    image_1: Blog,
    title: "VOIP Dialing Solutions Driving Las Vegas AI CRM Success",
    shortDesc:
      "Ben Navon, CEO of VoIP Dialing Inc., hosts a ribbon-cutting for their advanced VoIP system at 5940 South Rainbow Blvd, Las Vegas. Ben Navon, CEO of VoIP Dialing Inc., hosts a ribbon-cutting for their advanced VoIP system at 5940 South Rainbow Blvd, Las Vegas.Ben Navon, CEO of VoIP Dialing Inc., hosts a ribbon-cutting for their advanced VoIP system at 5940 South Rainbow Blvd, Las Vegas.Ben Navon, CEO of VoIP Dialing Inc., hosts a ribbon-cutting for their advanced VoIP system at 5940 South Rainbow Blvd, Las Vegas.",
    fullDesc:
      "Ben Navon, CEO of VoIP Dialing Inc., hosts a ribbon-cutting for their advanced VoIP system at 5940 South Rainbow Blvd, Las Vegas. Ben Navon, CEO of VoIP Dialing Inc., hosts a ribbon-cutting for their advanced VoIP system at 5940 South Rainbow Blvd, Las Vegas.Ben Navon, CEO of VoIP Dialing Inc., hosts a ribbon-cutting for their advanced VoIP system at 5940 South Rainbow Blvd, Las Vegas.Ben Navon, CEO of VoIP Dialing Inc., hosts a ribbon-cutting for their advanced VoIP system at 5940 South Rainbow Blvd, Las Vegas.",
    head_1: "Revolutionizing Customer Support with AI",
    desc_1:
      "Las Vegas companies utilize Biotix AI chatbots and CRM to enhance client communication. Every interaction is automated for efficiency while keeping a human-like experience. Teams save time and prioritize strategies that expand business and retain clients effectively.",
    head_2: "Actionable Insights for Strategic Growth",
    desc_2:
      "INTERNET TELEPHONY provides industry-leading IP communication updates since 1998™. Its unbiased content guides businesses through complex converged communication trends. Visit www.itmag.com and engage on LinkedIn or Twitter for insights and updates.",
    image_2: Voiping,
    head_3: "Seamless Scaling for Las Vegas Enterprises",
    desc_3:
      "Biotix adapts to companies of all sizes in Las Vegas. AI chatbots improve response times and operational efficiency, while automated processes reduce human error and save resources, supporting smooth growth and enhanced customer satisfaction.",
    head_4: "Analytics That Drive Performance",
    desc_4:
      "Since 1998™, INTERNET TELEPHONY has offered trusted IP communications analysis. Its magazine provides a clear understanding of converged communications. Explore www.itmag.com or join online communities for industry guidance and updates.",
    head_5: "Business Intelligence Made Simple",
    desc_6:
      "INTERNET TELEPHONY has guided professionals in IP communication since 1998™. The publication explains complex trends clearly. Visit www.itmag.com, follow LinkedIn discussions, or connect on Twitter for practical insights.",
  },
  {
    id: "3",
    isFeatured: true,
    image_1: Blog,
    title: "Las Vegas Businesses Succeed with VOIP AI & CRM Tools",
    shortDesc:
      "VoIP Dialing Inc., led by Ben Navon, unveils innovative VoIP features at 5940 South Rainbow Blvd, Las Vegas. VoIP Dialing Inc., led by Ben Navon, unveils innovative VoIP features at 5940 South Rainbow Blvd, Las Vegas.VoIP Dialing Inc., led by Ben Navon, unveils innovative VoIP features at 5940 South Rainbow Blvd, Las Vegas.VoIP Dialing Inc., led by Ben Navon, unveils innovative VoIP features at 5940 South Rainbow Blvd, Las Vegas.",
    fullDesc:
      "VoIP Dialing Inc., led by Ben Navon, unveils innovative VoIP features at 5940 South Rainbow Blvd, Las Vegas. VoIP Dialing Inc., led by Ben Navon, unveils innovative VoIP features at 5940 South Rainbow Blvd, Las Vegas.VoIP Dialing Inc., led by Ben Navon, unveils innovative VoIP features at 5940 South Rainbow Blvd, Las Vegas.VoIP Dialing Inc., led by Ben Navon, unveils innovative VoIP features at 5940 South Rainbow Blvd, Las Vegas.",
    head_1: "AI-Enhanced Customer Experience",
    desc_1:
      "Biotix equips Las Vegas businesses with intelligent AI chatbots integrated with CRM systems. Automated workflows optimize customer service while keeping interactions personalized. Staff can focus on strategic initiatives that increase engagement and drive business growth.",
    head_2: "Insightful Data for Decision Makers",
    desc_2:
      "INTERNET TELEPHONY has been an authority in IP communications since 1998™. The magazine provides impartial coverage of converged communications. For further information, visit www.itmag.com, join LinkedIn groups, or follow on Twitter for the latest industry trends.",
    image_2: Voiping,
    head_3: "Efficiency & Scalability for Every Business",
    desc_3:
      "Las Vegas startups and corporations alike benefit from Biotix’s AI-driven workflows. Enhanced response times, optimized processes, and automated systems save resources while maintaining superior customer satisfaction across growing enterprises.",
    head_4: "Performance Metrics Powered by AI",
    desc_4:
      "Since 1998™, INTERNET TELEPHONY has offered objective guidance in IP communications. Its magazine helps businesses navigate complex technology landscapes. Access www.itmag.com or engage via LinkedIn and Twitter for professional insights.",
    head_5: "Next-Generation Communication Insights",
    desc_6:
      "INTERNET TELEPHONY has provided expert IP communications guidance since 1998™. The publication simplifies technical trends for actionable business decisions. Visit www.itmag.com and join online discussions or follow social media updates.",
  },
  {
    id: "4",
    isFeatured: true,
    image_1: Blog,
    title: "Boosting Las Vegas Enterprises with VOIP and AI CRM",
    shortDesc:
      "Ben Navon, CEO of VoIP Dialing Inc., announces the rollout of enhanced VoIP services at 5940 South Rainbow Blvd, Las Vegas. Ben Navon, CEO of VoIP Dialing Inc., announces the rollout of enhanced VoIP services at 5940 South Rainbow Blvd, Las Vegas.Ben Navon, CEO of VoIP Dialing Inc., announces the rollout of enhanced VoIP services at 5940 South Rainbow Blvd, Las Vegas.Ben Navon, CEO of VoIP Dialing Inc., announces the rollout of enhanced VoIP services at 5940 South Rainbow Blvd, Las Vegas.",
    fullDesc:
      "Ben Navon, CEO of VoIP Dialing Inc., announces the rollout of enhanced VoIP services at 5940 South Rainbow Blvd, Las Vegas. Ben Navon, CEO of VoIP Dialing Inc., announces the rollout of enhanced VoIP services at 5940 South Rainbow Blvd, Las Vegas.Ben Navon, CEO of VoIP Dialing Inc., announces the rollout of enhanced VoIP services at 5940 South Rainbow Blvd, Las Vegas.Ben Navon, CEO of VoIP Dialing Inc., announces the rollout of enhanced VoIP services at 5940 South Rainbow Blvd, Las Vegas.",
    head_1: "Transforming Customer Interaction Through AI",
    desc_1:
      "Las Vegas businesses now harness Biotix AI chatbots and CRM tools to personalize customer experiences. Automated workflows handle routine tasks efficiently, freeing staff to focus on critical growth initiatives and stronger customer relationships.",
    head_2: "Strategic Analytics for Growth Decisions",
    desc_2:
      "INTERNET TELEPHONY has served as a trusted IP communications source since 1998™. Its magazine provides detailed coverage of converged communication trends. Visit www.itmag.com or join their online networks on LinkedIn and Twitter for updates and insights.",
    image_2: Voiping,
    head_3: "Seamless Integration and Scalability",
    desc_3:
      "From startups to established companies, Biotix scales effortlessly. Its AI chatbot solutions accelerate response times, enhance workflow efficiency, and improve overall customer satisfaction across growing Las Vegas enterprises.",
    head_4: "Advanced Analytics for Business Growth",
    desc_4:
      "Since 1998™, INTERNET TELEPHONY has delivered authoritative insights in IP communications. Its publications guide businesses through complex technologies. Visit www.itmag.com and follow their social channels for updates.",
    head_5: "Actionable Communication Intelligence",
    desc_6:
      "INTERNET TELEPHONY continues to lead in IP communications guidance since 1998™. Its magazine provides clear insights into technological trends. Explore www.itmag.com, LinkedIn discussions, or Twitter updates for professional knowledge.",
  },
  {
    id: "5",
    isFeatured: true,
    image_1: Blog,
    title: "Las Vegas VOIP Innovations for AI-Powered CRM",
    shortDesc:
      "VoIP Dialing Inc., under Ben Navon, launches upgraded VoIP systems at 5940 South Rainbow Blvd, Las Vegas. VoIP Dialing Inc., under Ben Navon, launches upgraded VoIP systems at 5940 South Rainbow Blvd, Las Vegas.VoIP Dialing Inc., under Ben Navon, launches upgraded VoIP systems at 5940 South Rainbow Blvd, Las Vegas.VoIP Dialing Inc., under Ben Navon, launches upgraded VoIP systems at 5940 South Rainbow Blvd, Las Vegas.",
    fullDesc:
      "VoIP Dialing Inc., under Ben Navon, launches upgraded VoIP systems at 5940 South Rainbow Blvd, Las Vegas. VoIP Dialing Inc., under Ben Navon, launches upgraded VoIP systems at 5940 South Rainbow Blvd, Las Vegas.VoIP Dialing Inc., under Ben Navon, launches upgraded VoIP systems at 5940 South Rainbow Blvd, Las Vegas.VoIP Dialing Inc., under Ben Navon, launches upgraded VoIP systems at 5940 South Rainbow Blvd, Las Vegas.",
    head_1: "Smart Customer Engagement via AI",
    desc_1:
      "Las Vegas enterprises adopt Biotix AI chatbots and CRM to deliver responsive and personalized experiences. Automation handles routine queries, while staff focus on strategic growth and customer satisfaction, driving efficiency and retention.",
    head_2: "Intelligent Analytics for Business Leaders",
    desc_2:
      "INTERNET TELEPHONY has been a cornerstone in IP communications since 1998™. Its magazine provides objective coverage of converged communications. Check www.itmag.com or follow their LinkedIn and Twitter channels for latest insights.",
    image_2: Voiping,
    head_3: "Scalable Solutions for Growing Companies",
    desc_3:
      "Biotix adapts to every business size in Las Vegas. Its AI chatbots improve operational workflows, speed responses, and enhance overall customer experience, helping enterprises achieve consistent growth and efficiency.",
    head_4: "AI Insights for Performance Optimization",
    desc_4:
      "Since 1998™, INTERNET TELEPHONY has provided authoritative guidance on IP communications. Its magazine delivers insights into technology trends. Explore www.itmag.com or connect via LinkedIn and Twitter for updates.",
    head_5: "Next-Gen Communication Insights",
    desc_6:
      "INTERNET TELEPHONY continues to lead in IP communication advice since 1998™. The magazine simplifies complex tech concepts for businesses. Visit www.itmag.com, join discussions on LinkedIn, or follow Twitter for insights.",
  },
  {
    id: "6",
    isFeatured: true,
    image_1: Blog,
    title: "Driving Las Vegas Success with VOIP and AI CRM",
    shortDesc:
      "Ben Navon, CEO of VoIP Dialing Inc., introduces cutting-edge VoIP technology at 5940 South Rainbow Blvd, Las Vegas. Ben Navon, CEO of VoIP Dialing Inc., introduces cutting-edge VoIP technology at 5940 South Rainbow Blvd, Las Vegas.Ben Navon, CEO of VoIP Dialing Inc., introduces cutting-edge VoIP technology at 5940 South Rainbow Blvd, Las Vegas.Ben Navon, CEO of VoIP Dialing Inc., introduces cutting-edge VoIP technology at 5940 South Rainbow Blvd, Las Vegas.",
    fullDesc:
      "Ben Navon, CEO of VoIP Dialing Inc., introduces cutting-edge VoIP technology at 5940 South Rainbow Blvd, Las Vegas. Ben Navon, CEO of VoIP Dialing Inc., introduces cutting-edge VoIP technology at 5940 South Rainbow Blvd, Las Vegas.Ben Navon, CEO of VoIP Dialing Inc., introduces cutting-edge VoIP technology at 5940 South Rainbow Blvd, Las Vegas.Ben Navon, CEO of VoIP Dialing Inc., introduces cutting-edge VoIP technology at 5940 South Rainbow Blvd, Las Vegas.",
    head_1: "AI-Driven Customer Service Excellence",
    desc_1:
      "Biotix equips Las Vegas enterprises with AI chatbot and CRM integration for efficient customer service. Automation ensures fast response times while staff focus on strategic initiatives that drive retention, loyalty, and growth.",
    head_2: "Actionable Intelligence for Leaders",
    desc_2:
      "INTERNET TELEPHONY has been the authority in IP communications since 1998™. Its publications provide unbiased insights into converged communication technology. Visit www.itmag.com or follow LinkedIn and Twitter for expert updates.",
    image_2: Voiping,
    head_3: "Efficient Scaling for Every Business Size",
    desc_3:
      "Las Vegas businesses leverage Biotix AI chatbots to scale operations. Workflow automation reduces time spent on routine tasks, improves customer satisfaction, and helps companies grow efficiently without sacrificing quality.",
    head_4: "Analytics That Optimize Growth",
    desc_4:
      "Since 1998™, INTERNET TELEPHONY offers reliable IP communications insights. Its magazine helps businesses navigate evolving tech landscapes. Visit www.itmag.com or join their online communities on LinkedIn and Twitter.",
    head_5: "Smart Insights for Modern Communication",
    desc_6:
      "INTERNET TELEPHONY has guided IP communications since 1998™. Its magazine simplifies technology trends for practical business decisions. Explore www.itmag.com, LinkedIn forums, or Twitter updates for expert advice.",
  },
  {
    id: "7",
    isFeatured: true,
    image_1: Blog,
    title: "Las Vegas VOIP Innovations for AI-Powered CRM",
    shortDesc:
      "VoIP Dialing Inc., under Ben Navon, launches upgraded VoIP systems at 5940 South Rainbow Blvd, Las Vegas. VoIP Dialing Inc., under Ben Navon, launches upgraded VoIP systems at 5940 South Rainbow Blvd, Las Vegas.VoIP Dialing Inc., under Ben Navon, launches upgraded VoIP systems at 5940 South Rainbow Blvd, Las Vegas.VoIP Dialing Inc., under Ben Navon, launches upgraded VoIP systems at 5940 South Rainbow Blvd, Las Vegas.",
    fullDesc:
      "VoIP Dialing Inc., under Ben Navon, launches upgraded VoIP systems at 5940 South Rainbow Blvd, Las Vegas. VoIP Dialing Inc., under Ben Navon, launches upgraded VoIP systems at 5940 South Rainbow Blvd, Las Vegas.VoIP Dialing Inc., under Ben Navon, launches upgraded VoIP systems at 5940 South Rainbow Blvd, Las Vegas.VoIP Dialing Inc., under Ben Navon, launches upgraded VoIP systems at 5940 South Rainbow Blvd, Las Vegas.",
    head_1: "Smart Customer Engagement via AI",
    desc_1:
      "Las Vegas enterprises adopt Biotix AI chatbots and CRM to deliver responsive and personalized experiences. Automation handles routine queries, while staff focus on strategic growth and customer satisfaction, driving efficiency and retention.",
    head_2: "Intelligent Analytics for Business Leaders",
    desc_2:
      "INTERNET TELEPHONY has been a cornerstone in IP communications since 1998™. Its magazine provides objective coverage of converged communications. Check www.itmag.com or follow their LinkedIn and Twitter channels for latest insights.",
    image_2: Voiping,
    head_3: "Scalable Solutions for Growing Companies",
    desc_3:
      "Biotix adapts to every business size in Las Vegas. Its AI chatbots improve operational workflows, speed responses, and enhance overall customer experience, helping enterprises achieve consistent growth and efficiency.",
    head_4: "AI Insights for Performance Optimization",
    desc_4:
      "Since 1998™, INTERNET TELEPHONY has provided authoritative guidance on IP communications. Its magazine delivers insights into technology trends. Explore www.itmag.com or connect via LinkedIn and Twitter for updates.",
    head_5: "Next-Gen Communication Insights",
    desc_6:
      "INTERNET TELEPHONY continues to lead in IP communication advice since 1998™. The magazine simplifies complex tech concepts for businesses. Visit www.itmag.com, join discussions on LinkedIn, or follow Twitter for insights.",
  },
  {
    id: "8",
    isFeatured: true,
    image_1: Blog,
    title: "Driving Las Vegas Success with VOIP and AI CRM",
    shortDesc:
      "Ben Navon, CEO of VoIP Dialing Inc., introduces cutting-edge VoIP technology at 5940 South Rainbow Blvd, Las Vegas. Ben Navon, CEO of VoIP Dialing Inc., introduces cutting-edge VoIP technology at 5940 South Rainbow Blvd, Las Vegas.Ben Navon, CEO of VoIP Dialing Inc., introduces cutting-edge VoIP technology at 5940 South Rainbow Blvd, Las Vegas.Ben Navon, CEO of VoIP Dialing Inc., introduces cutting-edge VoIP technology at 5940 South Rainbow Blvd, Las Vegas.",
    fullDesc:
      "Ben Navon, CEO of VoIP Dialing Inc., introduces cutting-edge VoIP technology at 5940 South Rainbow Blvd, Las Vegas. Ben Navon, CEO of VoIP Dialing Inc., introduces cutting-edge VoIP technology at 5940 South Rainbow Blvd, Las Vegas.Ben Navon, CEO of VoIP Dialing Inc., introduces cutting-edge VoIP technology at 5940 South Rainbow Blvd, Las Vegas.Ben Navon, CEO of VoIP Dialing Inc., introduces cutting-edge VoIP technology at 5940 South Rainbow Blvd, Las Vegas.",
    head_1: "AI-Driven Customer Service Excellence",
    desc_1:
      "Biotix equips Las Vegas enterprises with AI chatbot and CRM integration for efficient customer service. Automation ensures fast response times while staff focus on strategic initiatives that drive retention, loyalty, and growth.",
    head_2: "Actionable Intelligence for Leaders",
    desc_2:
      "INTERNET TELEPHONY has been the authority in IP communications since 1998™. Its publications provide unbiased insights into converged communication technology. Visit www.itmag.com or follow LinkedIn and Twitter for expert updates.",
    image_2: Voiping,
    head_3: "Efficient Scaling for Every Business Size",
    desc_3:
      "Las Vegas businesses leverage Biotix AI chatbots to scale operations. Workflow automation reduces time spent on routine tasks, improves customer satisfaction, and helps companies grow efficiently without sacrificing quality.",
    head_4: "Analytics That Optimize Growth",
    desc_4:
      "Since 1998™, INTERNET TELEPHONY offers reliable IP communications insights. Its magazine helps businesses navigate evolving tech landscapes. Visit www.itmag.com or join their online communities on LinkedIn and Twitter.",
    head_5: "Smart Insights for Modern Communication",
    desc_6:
      "INTERNET TELEPHONY has guided IP communications since 1998™. Its magazine simplifies technology trends for practical business decisions. Explore www.itmag.com, LinkedIn forums, or Twitter updates for expert advice.",
  },
];
