import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-indigo-500 text-white mt-10">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold">UPI Pay</h2>
          <p className="mt-3 text-gray-200">
            Fast, secure and reliable UPI payments ⚡
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-bold mb-3 ">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-gray-300">Home</a></li>
            <li><a href="/about" className="hover:text-gray-300">About Us</a></li>
            <li><a href="/contact" className="hover:text-gray-300">Contact Us</a></li>
            <li><a href="/support" className="hover:text-gray-300">Support</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-bold mb-3">Contact Us</h3>
          <p>Email: support@firstupay.com</p>
          <p>Phone: +91 1234567890</p>
          <div className="flex space-x-4 mt-3">
             <a href="#" className="hover:text-gray-300"><FaFacebookF /></a>
            <a href="#" className="hover:text-gray-300"><FaInstagram /></a>
            <a href="#" className="hover:text-gray-300"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-gray-300"><FaTwitter /></a>
          </div>
        </div>

      </div>

      <div className="border-t border-indigo-500 text-center py-4 text-sm text-gray-200">
        © {new Date().getFullYear()} First Upay. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
