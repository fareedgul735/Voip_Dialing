import { DollarSign, Phone, Shield, Users } from "lucide-react";
import { ShieldCheck, RefreshCw, TrendingUp, MapPin } from "lucide-react";
import { Send, MessageSquare, BarChart3 } from "lucide-react";
import { Clock } from "lucide-react";

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
    title: "Why Businesses Choose VOIP for AI Chatbots and CRM Success",
    shortDesc:
      "VoIP Dialing Inc., CEO & Founder, Ben Navon announces the ribbon cutting ceremony celebrating the expansion of their VoIP solutions at their offices located at 5940 South Rainbow Blvd. VoIP Dialing Inc., CEO & Founder, Ben Navon announces the ribbon cutting ceremony celebrating the expansion of their VoIP solutions at their offices located at 5940 South Rainbow Blvd.VoIP Dialing Inc., CEO & Founder, Ben Navon announces the ribbon cutting ceremony celebrating the expansion of their VoIP solutions at their offices located at 5940 South Rainbow Blvd.VoIP Dialing Inc., CEO & Founder, Ben Navon announces the ribbon cutting ceremony celebrating the expansion of their VoIP solutions at their offices located at 5940 South Rainbow Blvd.",
    fullDesc:
      "VoIP Dialing Inc., CEO & Founder, Ben Navon announces the ribbon cutting ceremony celebrating the expansion of their VoIP solutions at their offices located at 5940 South Rainbow Blvd. VoIP Dialing Inc., CEO & Founder, Ben Navon announces the ribbon cutting ceremony celebrating the expansion of their VoIP solutions at their offices located at 5940 South Rainbow Blvd.VoIP Dialing Inc., CEO & Founder, Ben Navon announces the ribbon cutting ceremony celebrating the expansion of their VoIP solutions at their offices located at 5940 South Rainbow Blvd.VoIP Dialing Inc., CEO & Founder, Ben Navon announces the ribbon cutting ceremony celebrating the expansion of their VoIP solutions at their offices located at 5940 South Rainbow Blvd.",
    head_1: "Transforming Customer Relationships with AI.",
    desc_1:
      "Biotix combines the power of AI chatbots and advanced CRM capabilities to create a seamless customer experience. Its AI-driven approach ensures every customer interaction is personalized and efficient, whether it’s resolving a query, nurturing a lead, or closing a sale. By automating repetitive tasks, Biotix allows your team to focus on strategic efforts that drive growth.",
    head_2: "Intelligent Insights for Better Decision-Making",
    desc_2:
      "INTERNET TELEPHONY has been the IP Communications Authority since 1998™. Beginning with the first issue, INTERNET TELEPHONY magazine has been providing unbiased views of the complicated converged communications space. For more information, please visit www.itmag.com. Follow INTERNET TELEPHONY magazine on Twitter or join our Linked In group. Subscribe or visit www.itmag.com.",
    image_2: Voiping,
    head_3: "Scalability and Efficiency for Growing Businesses",
    desc_3:
      "Whether you’re a startup or an established enterprise, Biotix scales with your business. Its AI chatbot integration streamlines operations, reduces response times, and enhances customer satisfaction. Additionally, the platform’s automated workflows help businesses save time and resources.",
    head_4: "Intelligent Insights for Better Decision-Making",
    desc_4:
      "INTERNET TELEPHONY has been the IP Communications Authority since 1998™. Beginning with the first issue, INTERNET TELEPHONY magazine has been providing unbiased views of the complicated converged communications space. For more information, please visit www.itmag.com. Follow INTERNET TELEPHONY magazine on Twitter or join our Linked In group. Subscribe or visit www.itmag.com.",
    head_5: "Intelligent Insights for Better Decision-Making",
    desc_6:
      "INTERNET TELEPHONY has been the IP Communications Authority since 1998™. Beginning with the first issue, INTERNET TELEPHONY magazine has been providing unbiased views of the complicated converged communications space. For more information, please visit www.itmag.com. Follow INTERNET TELEPHONY magazine on Twitter or join our Linked In group. Subscribe or visit www.itmag.com.",
  },
  {
    id: "2",
    isFeatured: true,
    image_1: Blog,
    title: "Why Businesses Choose VOIP for AI Chatbots and CRM Success",
    shortDesc:
      "VoIP Dialing Inc., CEO & Founder, Ben Navon announces the ribbon cutting ceremony celebrating the expansion of their VoIP solutions at their offices located at 5940 South Rainbow Blvd. VoIP Dialing Inc., CEO & Founder, Ben Navon announces the ribbon cutting ceremony celebrating the expansion of their VoIP solutions at their offices located at 5940 South Rainbow Blvd.VoIP Dialing Inc., CEO & Founder, Ben Navon announces the ribbon cutting ceremony celebrating the expansion of their VoIP solutions at their offices located at 5940 South Rainbow Blvd.VoIP Dialing Inc., CEO & Founder, Ben Navon announces the ribbon cutting ceremony celebrating the expansion of their VoIP solutions at their offices located at 5940 South Rainbow Blvd.",
    fullDesc:
      "VoIP Dialing Inc., CEO & Founder, Ben Navon announces the ribbon cutting ceremony celebrating the expansion of their VoIP solutions at their offices located at 5940 South Rainbow Blvd. VoIP Dialing Inc., CEO & Founder, Ben Navon announces the ribbon cutting ceremony celebrating the expansion of their VoIP solutions at their offices located at 5940 South Rainbow Blvd.VoIP Dialing Inc., CEO & Founder, Ben Navon announces the ribbon cutting ceremony celebrating the expansion of their VoIP solutions at their offices located at 5940 South Rainbow Blvd.VoIP Dialing Inc., CEO & Founder, Ben Navon announces the ribbon cutting ceremony celebrating the expansion of their VoIP solutions at their offices located at 5940 South Rainbow Blvd.",
    head_1: "Transforming Customer Relationships with AI.",
    desc_1:
      "Biotix combines the power of AI chatbots and advanced CRM capabilities to create a seamless customer experience. Its AI-driven approach ensures every customer interaction is personalized and efficient, whether it’s resolving a query, nurturing a lead, or closing a sale. By automating repetitive tasks, Biotix allows your team to focus on strategic efforts that drive growth.",
    head_2: "Intelligent Insights for Better Decision-Making",
    desc_2:
      "INTERNET TELEPHONY has been the IP Communications Authority since 1998™. Beginning with the first issue, INTERNET TELEPHONY magazine has been providing unbiased views of the complicated converged communications space. For more information, please visit www.itmag.com. Follow INTERNET TELEPHONY magazine on Twitter or join our Linked In group. Subscribe or visit www.itmag.com.",
    image_2: Voiping,
    head_3: "Scalability and Efficiency for Growing Businesses",
    desc_3:
      "Whether you’re a startup or an established enterprise, Biotix scales with your business. Its AI chatbot integration streamlines operations, reduces response times, and enhances customer satisfaction. Additionally, the platform’s automated workflows help businesses save time and resources.",
    head_4: "Intelligent Insights for Better Decision-Making",
    desc_4:
      "INTERNET TELEPHONY has been the IP Communications Authority since 1998™. Beginning with the first issue, INTERNET TELEPHONY magazine has been providing unbiased views of the complicated converged communications space. For more information, please visit www.itmag.com. Follow INTERNET TELEPHONY magazine on Twitter or join our Linked In group. Subscribe or visit www.itmag.com.",
    head_5: "Intelligent Insights for Better Decision-Making",
    desc_6:
      "INTERNET TELEPHONY has been the IP Communications Authority since 1998™. Beginning with the first issue, INTERNET TELEPHONY magazine has been providing unbiased views of the complicated converged communications space. For more information, please visit www.itmag.com. Follow INTERNET TELEPHONY magazine on Twitter or join our Linked In group. Subscribe or visit www.itmag.com.",
  },
  {
    id: "3",
    isFeatured: true,
    image_1: Blog,
    title: "Why Businesses Choose VOIP for AI Chatbots and CRM Success",
    shortDesc:
      "VoIP Dialing Inc., CEO & Founder, Ben Navon announces the ribbon cutting ceremony celebrating the expansion of their VoIP solutions at their offices located at 5940 South Rainbow Blvd. VoIP Dialing Inc., CEO & Founder, Ben Navon announces the ribbon cutting ceremony celebrating the expansion of their VoIP solutions at their offices located at 5940 South Rainbow Blvd.VoIP Dialing Inc., CEO & Founder, Ben Navon announces the ribbon cutting ceremony celebrating the expansion of their VoIP solutions at their offices located at 5940 South Rainbow Blvd.VoIP Dialing Inc., CEO & Founder, Ben Navon announces the ribbon cutting ceremony celebrating the expansion of their VoIP solutions at their offices located at 5940 South Rainbow Blvd.",
    fullDesc:
      "VoIP Dialing Inc., CEO & Founder, Ben Navon announces the ribbon cutting ceremony celebrating the expansion of their VoIP solutions at their offices located at 5940 South Rainbow Blvd. VoIP Dialing Inc., CEO & Founder, Ben Navon announces the ribbon cutting ceremony celebrating the expansion of their VoIP solutions at their offices located at 5940 South Rainbow Blvd.VoIP Dialing Inc., CEO & Founder, Ben Navon announces the ribbon cutting ceremony celebrating the expansion of their VoIP solutions at their offices located at 5940 South Rainbow Blvd.VoIP Dialing Inc., CEO & Founder, Ben Navon announces the ribbon cutting ceremony celebrating the expansion of their VoIP solutions at their offices located at 5940 South Rainbow Blvd.",
    head_1: "Transforming Customer Relationships with AI.",
    desc_1:
      "Biotix combines the power of AI chatbots and advanced CRM capabilities to create a seamless customer experience. Its AI-driven approach ensures every customer interaction is personalized and efficient, whether it’s resolving a query, nurturing a lead, or closing a sale. By automating repetitive tasks, Biotix allows your team to focus on strategic efforts that drive growth.",
    head_2: "Intelligent Insights for Better Decision-Making",
    desc_2:
      "INTERNET TELEPHONY has been the IP Communications Authority since 1998™. Beginning with the first issue, INTERNET TELEPHONY magazine has been providing unbiased views of the complicated converged communications space. For more information, please visit www.itmag.com. Follow INTERNET TELEPHONY magazine on Twitter or join our Linked In group. Subscribe or visit www.itmag.com.",
    image_2: Voiping,
    head_3: "Scalability and Efficiency for Growing Businesses",
    desc_3:
      "Whether you’re a startup or an established enterprise, Biotix scales with your business. Its AI chatbot integration streamlines operations, reduces response times, and enhances customer satisfaction. Additionally, the platform’s automated workflows help businesses save time and resources.",
    head_4: "Intelligent Insights for Better Decision-Making",
    desc_4:
      "INTERNET TELEPHONY has been the IP Communications Authority since 1998™. Beginning with the first issue, INTERNET TELEPHONY magazine has been providing unbiased views of the complicated converged communications space. For more information, please visit www.itmag.com. Follow INTERNET TELEPHONY magazine on Twitter or join our Linked In group. Subscribe or visit www.itmag.com.",
    head_5: "Intelligent Insights for Better Decision-Making",
    desc_6:
      "INTERNET TELEPHONY has been the IP Communications Authority since 1998™. Beginning with the first issue, INTERNET TELEPHONY magazine has been providing unbiased views of the complicated converged communications space. For more information, please visit www.itmag.com. Follow INTERNET TELEPHONY magazine on Twitter or join our Linked In group. Subscribe or visit www.itmag.com.",
  },
  {
    id: "4",
    isFeatured: true,
    image_1: Blog,
    title: "Why Businesses Choose VOIP for AI Chatbots and CRM Success",
    shortDesc:
      "VoIP Dialing Inc., CEO & Founder, Ben Navon announces the ribbon cutting ceremony celebrating the expansion of their VoIP solutions at their offices located at 5940 South Rainbow Blvd. VoIP Dialing Inc., CEO & Founder, Ben Navon announces the ribbon cutting ceremony celebrating the expansion of their VoIP solutions at their offices located at 5940 South Rainbow Blvd.VoIP Dialing Inc., CEO & Founder, Ben Navon announces the ribbon cutting ceremony celebrating the expansion of their VoIP solutions at their offices located at 5940 South Rainbow Blvd.VoIP Dialing Inc., CEO & Founder, Ben Navon announces the ribbon cutting ceremony celebrating the expansion of their VoIP solutions at their offices located at 5940 South Rainbow Blvd.",
    fullDesc:
      "VoIP Dialing Inc., CEO & Founder, Ben Navon announces the ribbon cutting ceremony celebrating the expansion of their VoIP solutions at their offices located at 5940 South Rainbow Blvd. VoIP Dialing Inc., CEO & Founder, Ben Navon announces the ribbon cutting ceremony celebrating the expansion of their VoIP solutions at their offices located at 5940 South Rainbow Blvd.VoIP Dialing Inc., CEO & Founder, Ben Navon announces the ribbon cutting ceremony celebrating the expansion of their VoIP solutions at their offices located at 5940 South Rainbow Blvd.VoIP Dialing Inc., CEO & Founder, Ben Navon announces the ribbon cutting ceremony celebrating the expansion of their VoIP solutions at their offices located at 5940 South Rainbow Blvd.",
    head_1: "Transforming Customer Relationships with AI.",
    desc_1:
      "Biotix combines the power of AI chatbots and advanced CRM capabilities to create a seamless customer experience. Its AI-driven approach ensures every customer interaction is personalized and efficient, whether it’s resolving a query, nurturing a lead, or closing a sale. By automating repetitive tasks, Biotix allows your team to focus on strategic efforts that drive growth.",
    head_2: "Intelligent Insights for Better Decision-Making",
    desc_2:
      "INTERNET TELEPHONY has been the IP Communications Authority since 1998™. Beginning with the first issue, INTERNET TELEPHONY magazine has been providing unbiased views of the complicated converged communications space. For more information, please visit www.itmag.com. Follow INTERNET TELEPHONY magazine on Twitter or join our Linked In group. Subscribe or visit www.itmag.com.",
    image_2: Voiping,
    head_3: "Scalability and Efficiency for Growing Businesses",
    desc_3:
      "Whether you’re a startup or an established enterprise, Biotix scales with your business. Its AI chatbot integration streamlines operations, reduces response times, and enhances customer satisfaction. Additionally, the platform’s automated workflows help businesses save time and resources.",
    head_4: "Intelligent Insights for Better Decision-Making",
    desc_4:
      "INTERNET TELEPHONY has been the IP Communications Authority since 1998™. Beginning with the first issue, INTERNET TELEPHONY magazine has been providing unbiased views of the complicated converged communications space. For more information, please visit www.itmag.com. Follow INTERNET TELEPHONY magazine on Twitter or join our Linked In group. Subscribe or visit www.itmag.com.",
    head_5: "Intelligent Insights for Better Decision-Making",
    desc_6:
      "INTERNET TELEPHONY has been the IP Communications Authority since 1998™. Beginning with the first issue, INTERNET TELEPHONY magazine has been providing unbiased views of the complicated converged communications space. For more information, please visit www.itmag.com. Follow INTERNET TELEPHONY magazine on Twitter or join our Linked In group. Subscribe or visit www.itmag.com.",
  },
  {
    id: "5",
    isFeatured: true,
    image_1: Blog,
    title: "Why Businesses Choose VOIP for AI Chatbots and CRM Success",
    shortDesc:
      "VoIP Dialing Inc., CEO & Founder, Ben Navon announces the ribbon cutting ceremony celebrating the expansion of their VoIP solutions at their offices located at 5940 South Rainbow Blvd. VoIP Dialing Inc., CEO & Founder, Ben Navon announces the ribbon cutting ceremony celebrating the expansion of their VoIP solutions at their offices located at 5940 South Rainbow Blvd.VoIP Dialing Inc., CEO & Founder, Ben Navon announces the ribbon cutting ceremony celebrating the expansion of their VoIP solutions at their offices located at 5940 South Rainbow Blvd.VoIP Dialing Inc., CEO & Founder, Ben Navon announces the ribbon cutting ceremony celebrating the expansion of their VoIP solutions at their offices located at 5940 South Rainbow Blvd.",
    fullDesc:
      "VoIP Dialing Inc., CEO & Founder, Ben Navon announces the ribbon cutting ceremony celebrating the expansion of their VoIP solutions at their offices located at 5940 South Rainbow Blvd. VoIP Dialing Inc., CEO & Founder, Ben Navon announces the ribbon cutting ceremony celebrating the expansion of their VoIP solutions at their offices located at 5940 South Rainbow Blvd.VoIP Dialing Inc., CEO & Founder, Ben Navon announces the ribbon cutting ceremony celebrating the expansion of their VoIP solutions at their offices located at 5940 South Rainbow Blvd.VoIP Dialing Inc., CEO & Founder, Ben Navon announces the ribbon cutting ceremony celebrating the expansion of their VoIP solutions at their offices located at 5940 South Rainbow Blvd.",
    head_1: "Transforming Customer Relationships with AI.",
    desc_1:
      "Biotix combines the power of AI chatbots and advanced CRM capabilities to create a seamless customer experience. Its AI-driven approach ensures every customer interaction is personalized and efficient, whether it’s resolving a query, nurturing a lead, or closing a sale. By automating repetitive tasks, Biotix allows your team to focus on strategic efforts that drive growth.",
    head_2: "Intelligent Insights for Better Decision-Making",
    desc_2:
      "INTERNET TELEPHONY has been the IP Communications Authority since 1998™. Beginning with the first issue, INTERNET TELEPHONY magazine has been providing unbiased views of the complicated converged communications space. For more information, please visit www.itmag.com. Follow INTERNET TELEPHONY magazine on Twitter or join our Linked In group. Subscribe or visit www.itmag.com.",
    image_2: Voiping,
    head_3: "Scalability and Efficiency for Growing Businesses",
    desc_3:
      "Whether you’re a startup or an established enterprise, Biotix scales with your business. Its AI chatbot integration streamlines operations, reduces response times, and enhances customer satisfaction. Additionally, the platform’s automated workflows help businesses save time and resources.",
    head_4: "Intelligent Insights for Better Decision-Making",
    desc_4:
      "INTERNET TELEPHONY has been the IP Communications Authority since 1998™. Beginning with the first issue, INTERNET TELEPHONY magazine has been providing unbiased views of the complicated converged communications space. For more information, please visit www.itmag.com. Follow INTERNET TELEPHONY magazine on Twitter or join our Linked In group. Subscribe or visit www.itmag.com.",
    head_5: "Intelligent Insights for Better Decision-Making",
    desc_6:
      "INTERNET TELEPHONY has been the IP Communications Authority since 1998™. Beginning with the first issue, INTERNET TELEPHONY magazine has been providing unbiased views of the complicated converged communications space. For more information, please visit www.itmag.com. Follow INTERNET TELEPHONY magazine on Twitter or join our Linked In group. Subscribe or visit www.itmag.com.",
  },
  {
    id: "6",
    isFeatured: true,
    image_1: Blog,
    title: "Why Businesses Choose VOIP for AI Chatbots and CRM Success",
    shortDesc:
      "VoIP Dialing Inc., CEO & Founder, Ben Navon announces the ribbon cutting ceremony celebrating the expansion of their VoIP solutions at their offices located at 5940 South Rainbow Blvd. VoIP Dialing Inc., CEO & Founder, Ben Navon announces the ribbon cutting ceremony celebrating the expansion of their VoIP solutions at their offices located at 5940 South Rainbow Blvd.VoIP Dialing Inc., CEO & Founder, Ben Navon announces the ribbon cutting ceremony celebrating the expansion of their VoIP solutions at their offices located at 5940 South Rainbow Blvd.VoIP Dialing Inc., CEO & Founder, Ben Navon announces the ribbon cutting ceremony celebrating the expansion of their VoIP solutions at their offices located at 5940 South Rainbow Blvd.",
    fullDesc:
      "VoIP Dialing Inc., CEO & Founder, Ben Navon announces the ribbon cutting ceremony celebrating the expansion of their VoIP solutions at their offices located at 5940 South Rainbow Blvd. VoIP Dialing Inc., CEO & Founder, Ben Navon announces the ribbon cutting ceremony celebrating the expansion of their VoIP solutions at their offices located at 5940 South Rainbow Blvd.VoIP Dialing Inc., CEO & Founder, Ben Navon announces the ribbon cutting ceremony celebrating the expansion of their VoIP solutions at their offices located at 5940 South Rainbow Blvd.VoIP Dialing Inc., CEO & Founder, Ben Navon announces the ribbon cutting ceremony celebrating the expansion of their VoIP solutions at their offices located at 5940 South Rainbow Blvd.",
    head_1: "Transforming Customer Relationships with AI.",
    desc_1:
      "Biotix combines the power of AI chatbots and advanced CRM capabilities to create a seamless customer experience. Its AI-driven approach ensures every customer interaction is personalized and efficient, whether it’s resolving a query, nurturing a lead, or closing a sale. By automating repetitive tasks, Biotix allows your team to focus on strategic efforts that drive growth.",
    head_2: "Intelligent Insights for Better Decision-Making",
    desc_2:
      "INTERNET TELEPHONY has been the IP Communications Authority since 1998™. Beginning with the first issue, INTERNET TELEPHONY magazine has been providing unbiased views of the complicated converged communications space. For more information, please visit www.itmag.com. Follow INTERNET TELEPHONY magazine on Twitter or join our Linked In group. Subscribe or visit www.itmag.com.",
    image_2: Voiping,
    head_3: "Scalability and Efficiency for Growing Businesses",
    desc_3:
      "Whether you’re a startup or an established enterprise, Biotix scales with your business. Its AI chatbot integration streamlines operations, reduces response times, and enhances customer satisfaction. Additionally, the platform’s automated workflows help businesses save time and resources.",
    head_4: "Intelligent Insights for Better Decision-Making",
    desc_4:
      "INTERNET TELEPHONY has been the IP Communications Authority since 1998™. Beginning with the first issue, INTERNET TELEPHONY magazine has been providing unbiased views of the complicated converged communications space. For more information, please visit www.itmag.com. Follow INTERNET TELEPHONY magazine on Twitter or join our Linked In group. Subscribe or visit www.itmag.com.",
    head_5: "Intelligent Insights for Better Decision-Making",
    desc_6:
      "INTERNET TELEPHONY has been the IP Communications Authority since 1998™. Beginning with the first issue, INTERNET TELEPHONY magazine has been providing unbiased views of the complicated converged communications space. For more information, please visit www.itmag.com. Follow INTERNET TELEPHONY magazine on Twitter or join our Linked In group. Subscribe or visit www.itmag.com.",
  },
  {
    id: "7",
    isFeatured: true,
    image_1: Blog,
    title: "Why Businesses Choose VOIP for AI Chatbots and CRM Success",
    shortDesc:
      "VoIP Dialing Inc., CEO & Founder, Ben Navon announces the ribbon cutting ceremony celebrating the expansion of their VoIP solutions at their offices located at 5940 South Rainbow Blvd. VoIP Dialing Inc., CEO & Founder, Ben Navon announces the ribbon cutting ceremony celebrating the expansion of their VoIP solutions at their offices located at 5940 South Rainbow Blvd.VoIP Dialing Inc., CEO & Founder, Ben Navon announces the ribbon cutting ceremony celebrating the expansion of their VoIP solutions at their offices located at 5940 South Rainbow Blvd.VoIP Dialing Inc., CEO & Founder, Ben Navon announces the ribbon cutting ceremony celebrating the expansion of their VoIP solutions at their offices located at 5940 South Rainbow Blvd.",
    fullDesc:
      "VoIP Dialing Inc., CEO & Founder, Ben Navon announces the ribbon cutting ceremony celebrating the expansion of their VoIP solutions at their offices located at 5940 South Rainbow Blvd. VoIP Dialing Inc., CEO & Founder, Ben Navon announces the ribbon cutting ceremony celebrating the expansion of their VoIP solutions at their offices located at 5940 South Rainbow Blvd.VoIP Dialing Inc., CEO & Founder, Ben Navon announces the ribbon cutting ceremony celebrating the expansion of their VoIP solutions at their offices located at 5940 South Rainbow Blvd.VoIP Dialing Inc., CEO & Founder, Ben Navon announces the ribbon cutting ceremony celebrating the expansion of their VoIP solutions at their offices located at 5940 South Rainbow Blvd.",
    head_1: "Transforming Customer Relationships with AI.",
    desc_1:
      "Biotix combines the power of AI chatbots and advanced CRM capabilities to create a seamless customer experience. Its AI-driven approach ensures every customer interaction is personalized and efficient, whether it’s resolving a query, nurturing a lead, or closing a sale. By automating repetitive tasks, Biotix allows your team to focus on strategic efforts that drive growth.",
    head_2: "Intelligent Insights for Better Decision-Making",
    desc_2:
      "INTERNET TELEPHONY has been the IP Communications Authority since 1998™. Beginning with the first issue, INTERNET TELEPHONY magazine has been providing unbiased views of the complicated converged communications space. For more information, please visit www.itmag.com. Follow INTERNET TELEPHONY magazine on Twitter or join our Linked In group. Subscribe or visit www.itmag.com.",
    image_2: Voiping,
    head_3: "Scalability and Efficiency for Growing Businesses",
    desc_3:
      "Whether you’re a startup or an established enterprise, Biotix scales with your business. Its AI chatbot integration streamlines operations, reduces response times, and enhances customer satisfaction. Additionally, the platform’s automated workflows help businesses save time and resources.",
    head_4: "Intelligent Insights for Better Decision-Making",
    desc_4:
      "INTERNET TELEPHONY has been the IP Communications Authority since 1998™. Beginning with the first issue, INTERNET TELEPHONY magazine has been providing unbiased views of the complicated converged communications space. For more information, please visit www.itmag.com. Follow INTERNET TELEPHONY magazine on Twitter or join our Linked In group. Subscribe or visit www.itmag.com.",
    head_5: "Intelligent Insights for Better Decision-Making",
    desc_6:
      "INTERNET TELEPHONY has been the IP Communications Authority since 1998™. Beginning with the first issue, INTERNET TELEPHONY magazine has been providing unbiased views of the complicated converged communications space. For more information, please visit www.itmag.com. Follow INTERNET TELEPHONY magazine on Twitter or join our Linked In group. Subscribe or visit www.itmag.com.",
  },
];
