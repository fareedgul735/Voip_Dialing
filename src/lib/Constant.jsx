// import { Home, Boxes, Layers, Factory, Tag, Info } from "lucide-react";


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
      type: "solutions",
      businessType: [
        "Small medium businesses",
        "Retail",
        "Corporate Offices",
        "Call center",
        "Medical",
        "Enterprise",
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