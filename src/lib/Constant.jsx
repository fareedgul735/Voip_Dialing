import {
  LuHouse,
  LuBoxes,
  LuLayers,
  LuFactory,
  LuTag,
  LuInfo,
} from "react-icons/lu";

export const navLinks = [
  { id: "home", link: "/home", label: "Home", icon: LuHouse },
  {
    id: "products",
    link: "/products",
    label: "Products",
    icon: LuBoxes,
    submenu: [
      { label: "Product A", link: "/products/a" },
      { label: "Product B", link: "/products/b" },
    ],
  },
  {
    id: "solutions",
    link: "/solutions",
    label: "Solutions",
    icon: LuLayers,
    submenu: [
      { label: "Solution X", link: "/solutions/x" },
      { label: "Solution Y", link: "/solutions/y" },
    ],
  },
  {
    id: "industries",
    link: "/industries",
    label: "Industries",
    icon: LuFactory,
  },
  { id: "pricing", link: "/pricing", label: "Pricing", icon: LuTag },
  { id: "about", link: "/about", label: "About", icon: LuInfo },
  { id: "contact", link: "/contact", label: "Contact", icon: LuInfo },
];
