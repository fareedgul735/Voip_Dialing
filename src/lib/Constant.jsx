import { Home, Boxes, Layers, Factory, Tag, Info } from "lucide-react";

export const navLinks = [
  { id: "home", link: "/home", label: "Home", icon: Home },
  {
    id: "products",
    link: "/products",
    label: "Products",
    icon: Boxes,
    submenu: [
      { label: "Product A", link: "/products/a" },
      { label: "Product B", link: "/products/b" },
    ],
  },
  {
    id: "solutions",
    link: "/solutions",
    label: "Solutions",
    icon: Layers,
    submenu: [
      { label: "Solution X", link: "/solutions/x" },
      { label: "Solution Y", link: "/solutions/y" },
    ],
  },
  {
    id: "industries",
    link: "/industries",
    label: "Industries",
    icon: Factory,
  },
  { id: "pricing", link: "/pricing", label: "Pricing", icon: Tag },
  { id: "about", link: "/about", label: "About", icon: Info },
  { id: "contact", link: "/contact", label: "Contact", icon: Info },
];
