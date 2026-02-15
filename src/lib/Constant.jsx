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
    title: "Multi-Location & Remote Workforce Ready",
    desc: "One cloud PBX system connects all offices and remote teams, enabling seamless calling from anywhere.",
  },
  {
    icon: Shield,
    title: "Reliable & Secure Cloud PBX",
    desc: "High availability, enterprise security, call recording, and backups ensure uninterrupted business communication.",
  },
  {
    icon: Phone,
    title: "Reduce Business Phone Costs",
    desc: "Eliminate on-site hardware and maintenance with a cost-effective cloud VoIP phone system.",
  },
  {
    icon: DollarSign,
    title: "Affordable & Competitive Pricing",
    desc: "Feature-rich Cloud PBX plans with nationwide calling at transparent, competitive rates.",
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
    title: "Las Vegas Local Numbers",
    desc: "Choose 702 or 725 area code numbers to build trust with local customers and increase answer rates for your business.",
  },
  {
    icon: Clock,
    title: "Toll-Free Business Numbers",
    desc: "Get 800, 888, 877, and other toll-free numbers to expand nationwide while maintaining a professional image.",
  },
  {
    icon: ShieldCheck,
    title: "Vanity Phone Numbers",
    desc: "Create a memorable branded phone number that improves marketing performance and customer recall.",
  },
  {
    icon: TrendingUp,
    title: "Instant Number Activation",
    desc: "Activate your virtual business phone number within minutes and forward calls to any device or VoIP system.",
  },
];

export const features = [
  { text: "Auto Attendant (IVR)", column: 1 },
  { text: "Call Queues & Intelligent Call Routing", column: 1 },
  { text: "Ring Groups & Hunt Groups", column: 1 },
  { text: "Voicemail to Email", column: 1 },
  { text: "Call Recording & Call Logs", column: 1 },
  { text: "Conference Calling", column: 1 },
  { text: "Time-Based Routing", column: 2 },
  { text: "Caller ID & Call Blocking", column: 2 },
  { text: "Mobile & Desktop Softphones", column: 2 },
  { text: "Number Porting (Keep your Las Vegas numbers)", column: 2 },
  { text: "Voicemail & Voicemail-to-Email", column: 3 },
  { text: "Custom Music on Hold", column: 3 },
  { text: "Flexible Call Recording Options", column: 3 },
  { text: "Detailed Call Reporting", column: 3 },
  { text: "Advanced Call Routing Rules", column: 3 },
  { text: "Caller ID Management & Prefix Control", column: 3 },
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
  { text: "HD Voice Quality on Every Call", column: 1 },
  { text: "Local Las Vegas Phone Numbers", column: 1 },
  { text: "Multi-Device Support (Desktop, Mobile, Tablet)", column: 1 },

  { text: "Call Forwarding & Auto Attendants", column: 2 },
  { text: "Voicemail-to-Email Transcriptions", column: 2 },
  { text: "Instant Line Provisioning & Scalability", column: 2 },

  { text: "Call Forwarding & Auto Attendants", column: 3 },
  { text: "Voicemail-to-Email Transcriptions", column: 3 },
  { text: "Instant Line Provisioning & Scalability", column: 3 },
];

export const PhoneFeatures = [
  { text: "HD Voice Quality on Every Call", column: 1 },
  { text: "Local Las Vegas Phone Numbers (702 & 725)", column: 1 },
  { text: "Vanity Numbers for Branding & Marketing", column: 1 },

  { text: "SMS-Enabled Business Numbers", column: 2 },
  { text: "Toll-Free Numbers (800, 888, 877)", column: 2 },
  { text: "Multi-Device Support (Desktop, Mobile, Tablet)", column: 2 },

  { text: "Call Forwarding & Auto Attendants", column: 3 },
  { text: "Instant Number Activation & Provisioning", column: 3 },
  { text: "CRM & Software Integration for Business", column: 3 },
];

export const services = [
  {
    id: 1,
    image: cloudService2,
    icon: Users,
    title: "Local & Remote Team Connectivity",
    description:
      "Connect in-office and remote teams across Las Vegas with one unified Cloud PBX system that works on desk phones, mobiles, and desktops.",
    iconColor: "bg-orange-500",
  },
  {
    id: 2,
    image: cloudService1,
    icon: PhoneCall,
    title: "Crystal-Clear Business Calling",
    description:
      "Enjoy reliable, low-latency VoIP calling optimized for Las Vegas businesses, delivering professional voice quality for every customer interaction.",
    iconColor: "bg-orange-500",
  },
  {
    id: 3,
    image: cloudService1,
    icon: ShieldCheck,
    title: "Secure Cloud PBX Infrastructure",
    description:
      "Protect your business communications with encrypted voice traffic, secure access, and redundant cloud infrastructure built for Las Vegas enterprises.",
    iconColor: "bg-orange-500",
  },
  {
    id: 4,
    image: cloudService1,
    icon: RefreshCw,
    title: "Always-On Business Continuity",
    description:
      "Keep your Las Vegas business reachable during outages with automatic call rerouting, failover, and disaster recovery support.",
    iconColor: "bg-orange-500",
  },
  {
    id: 5,
    image: cloudService1,
    icon: TrendingUp,
    title: "Instant Scalability for Business Growth",
    description:
      "Scale your Cloud PBX instantly by adding users, extensions, or numbers—ideal for growing Las Vegas companies and seasonal demand.",
    iconColor: "bg-orange-500",
  },
  {
    id: 6,
    image: cloudService1,
    icon: MapPin,
    title: "Las Vegas Local Number Presence",
    description:
      "Build trust with customers using local Las Vegas phone numbers while managing calls centrally through a powerful Cloud PBX platform.",
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
        description: "Cloud PBX Everything your Bussiness need.",
      },
      {
        label: "Bulk SMS",
        link: "/products/bulk-sms",
        icon: <MessageCircle />,
        description: "Cloud PBX Everything your Bussiness need.",
      },
      {
        label: "VOIP Lines",
        link: "/products/voip-lines",
        icon: <PhoneCall />,
        description: "Cloud PBX Everything your Bussiness need.",
      },
      {
        label: "Phone Numbers",
        link: "/products/phone-numbers",
        icon: <Hash />,
        description: "Cloud PBX Everything your Bussiness need.",
      },
      {
        label: "Equipment",
        link: "/products/equipment",
        icon: <HardDrive />,
        description: "Cloud PBX Everything your Bussiness need.",
      },
    ],
  },

  {
    id: 3,
    label: "Solutions",
    submenu: {
      businessType: [
        { label: "Small medium businesses", link: "solutions/smallbusiness" },
        { label: "Retail", link: "solutions/retails" },
        { label: "Corporate Offices", link: "solutions/CorporateOffices" },
        { label: "Call center", link: "solutions/Callcenter" },
        { label: "Medical", link: "solutions/Medical" },
        { label: "Enterprise", link: "solutions/Enterprise" },
      ],
      industry: [
        { label: "Healthcare", link: "solutions/healthcare" },
        { label: "Hospitality", link: "solutions/hospitality" },
        { label: "Internet and Telco", link: "solutions/internetTelco" },
        { label: "Insurance", link: "solutions/insurance" },
        { label: "Constructions", link: "solutions/constructions" },
        { label: "Real Estate", link: "solutions/RealEstate" },
        { label: "Marketing", link: "solutions/marketing" },
        { label: "Education", link: "solutions/education" },
        { label: "Transportation", link: "solutions/transportation" },
      ],
      solution: [
        { label: "Sip Trunks", link: "solutions/SipTrunks" },
        { label: "Cloud Phone System", link: "solutions/CloudPhoneSystem" },
        { label: "SMS", link: "solutions/SMS" },
        { label: "Dialers", link: "solutions/Dialers" },
        { label: "Global", link: "solutions/Global" },
        { label: "Multi-location", link: "solutions/Multi-location" },
        {
          label: "Unified Communication",
          link: "solutions/UnifiedCommunication",
        },
        { label: "Fax", link: "solutions/Fax" },
      ],
    },
  },

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
];
