import { DollarSign, Phone, Shield, Users, Cloud } from "lucide-react";

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
      { label: "Cloud PBX", link: "/products/cloud-pbx" },
      { label: "Bulk SMS", link: "/products/bulk-sms" },
      { label: "VOIP Lines", link: "/products/voip-lines" },
      { label: "Phone Numbers", link: "/products/phone-numbers" },
      { label: "Equipment", link: "/products/equipment" },
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
        "Healthcare",
        "Hospitality",
        "Internet and Telco",
        "Insurance",
        "Constructions",
        "Real Estate",
        "Marketing",
        "Education",
        "Transportation",
      ],
      solution: [
        "Sip Trunks",
        "Cloud Phone System",
        "SMS",
        "Dialers",
        "Global",
        "Multi-location",
        "Unified Communication",
        "Fax",
      ],
    },
  },

  { id: 4, label: "Pricing", link: "/pricing" },
  { id: 6, label: "About", link: "/about" },
  { id: 7, label: "Contact", link: "/contact" },
];
