import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import logo from "../../public/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#FFE8E0] to-[#E6F0FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <div className="w-32">
              <img src={logo} alt="logo" />
            </div>

            <h3 className="text-lg font-bold mb-4 text-orange-500">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-800 hover:text-orange-500 transition-colors cursor-pointer font-medium">
                  support@yourdomain.tld
                </p>
              </div>
              <div>
                <p className="text-gray-800 hover:text-orange-500 transition-colors cursor-pointer font-medium">
                  +852121002-2012
                </p>
              </div>
              <div>
                <p className="text-gray-800 hover:text-orange-500 transition-colors cursor-pointer font-medium">
                  555-v10ailing (855-834-2546)
                </p>
              </div>

              <div className="pt-4">
                <h4 className="font-bold mb-3 text-orange-500">Follow Us</h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-gray-800 hover:text-orange-500 transition-colors"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="#"
                    className="text-gray-800 hover:text-orange-500 transition-colors"
                  >
                    <Twitter size={20} />
                  </a>
                  <a
                    href="#"
                    className="text-gray-800 hover:text-orange-500 transition-colors"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="#"
                    className="text-gray-800 hover:text-orange-500 transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-orange-500">Services</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-800 hover:text-orange-500 transition-colors font-medium"
                >
                  Call Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-800 hover:text-orange-500 transition-colors font-medium"
                >
                  Collection
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-800 hover:text-orange-500 transition-colors font-medium"
                >
                  Customer Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-800 hover:text-orange-500 transition-colors font-medium"
                >
                  Inbound Requisits
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-800 hover:text-orange-500 transition-colors font-medium"
                >
                  Outbound Calls
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-800 hover:text-orange-500 transition-colors font-medium"
                >
                  Virtual Assistance
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-orange-500">About Us</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-800 hover:text-orange-500 transition-colors font-medium"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-800 hover:text-orange-500 transition-colors font-medium"
                >
                  Leadership
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-800 hover:text-orange-500 transition-colors font-medium"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-800 hover:text-orange-500 transition-colors font-medium"
                >
                  Article & News
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-800 hover:text-orange-500 transition-colors font-medium"
                >
                  Legal Notice
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-orange-500">
              Information
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-800 hover:text-orange-500 transition-colors font-medium"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-800 hover:text-orange-500 transition-colors font-medium"
                >
                  Leadership
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-800 hover:text-orange-500 transition-colors font-medium"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-800 hover:text-orange-500 transition-colors font-medium"
                >
                  Article & News
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-800 hover:text-orange-500 transition-colors font-medium"
                >
                  Legal Notice
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-700 text-sm font-medium">
              All Rights Reserved. Copyright © 2025 VoIP Dialing
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a
                href="#"
                className="text-gray-800 hover:text-orange-500 transition-colors font-medium"
              >
                Term of use
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-orange-500 transition-colors font-medium"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-orange-500 transition-colors font-medium"
              >
                Cookie Policy
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-orange-500 transition-colors font-medium"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
