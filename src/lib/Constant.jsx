import { DollarSign, Phone, Shield, Users } from "lucide-react";
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

export const features = [
  { text: "Smart Auto Attendant (IVR)", column: 1 },
  { text: "Built-in Conference Rooms", column: 1 },
  { text: "Call Tracking & Analytics", column: 1 },
  { text: "Fast, Turnkey Deployment", column: 1 },
  { text: "Call Queues & Ring Groups", column: 1 },
  { text: "Easy Phone Number Porting", column: 1 },
  { text: "Fast, Turnkey Deployment", column: 2 },
  { text: "Holiday & Custom Greetings", column: 2 },
  { text: "Follow-Me & Find-Me Routing", column: 2 },
  { text: "Agent Monitoring & Call Whispering", column: 2 },
  { text: "Voicemail & Voicemail-to-Email", column: 3 },
  { text: "Custom Music on Hold", column: 3 },
  { text: "Flexible Call Recording Options", column: 3 },
  { text: "Detailed Call Reporting", column: 3 },
  { text: "Advanced Call Routing Rules", column: 3 },
  { text: "Caller ID Management & Prefix Control", column: 3 },
];

export const services = [
  {
    id: 1,
    image: cloudService2,
    icon: Users,
    title: "Cloud Service",
    description:
      "These tools consolidate data from various touchpoints, offering.",
    iconColor: "bg-orange-500",
  },
  {
    id: 2,
    image: cloudService1,
    icon: Phone,
    title: "Cloud Service",
    description:
      "These tools consolidate data from various touchpoints, offering.",
    iconColor: "bg-orange-500",
  },
  {
    id: 3,
    image: cloudService1,
    icon: Cloud,
    title: "Cloud Service",
    description:
      "These tools consolidate data from various touchpoints, offering.",
    iconColor: "bg-orange-500",
  },
  {
    id: 4,
    image: cloudService1,
    icon: Phone,
    title: "Cloud Service",
    description:
      "These tools consolidate data from various touchpoints, offering.",
    iconColor: "bg-orange-500",
  },
  {
    id: 5,
    image: cloudService1,
    icon: Cloud,
    title: "Cloud Service",
    description:
      "These tools consolidate data from various touchpoints, offering.",
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
