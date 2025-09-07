import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-indigo-500 text-white mt-10">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <img src="/images/Logo 2.png" alt="logo" className="w-28 h-10 inline-block object-cover ml-[-4px]"/>
        

          <p className="mt-3 text-gray-200">
            Fast, secure and reliable UPI payments ⚡
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-bold mb-3 ">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-gray-300">About Us</a></li>
            <li><a href="/contact" className="hover:text-gray-300">Contact Us</a></li>
            <li><a href="/support" className="hover:text-gray-300">Support</a></li>
            <li><a href="/privacy" className="hover:text-gray-300">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-gray-300">Terms Of Use</a></li>
            <li><a href="/refund" className="hover:text-gray-300">Refund Cancellation</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-bold mb-3">Contact Us</h3>
         Email:{" "}
          <a
            href="mailto:support@example.com"
            className="text-white hover:underline"
          >
            support@firstupay.com
          </a>
          <br />
           Phone:{" "}
          <a
            href="tel:+919876543210"
            className="text-white hover:underline"
          >
            +91-1234567890
          </a>
          <div className="flex space-x-4 mt-3">
             <a href="#" className="hover:text-gray-300"><FaFacebookF /></a>
            <a href="#" className="hover:text-gray-300"><FaInstagram /></a>
            <a href="#" className="hover:text-gray-300"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-gray-300"><FaTwitter /></a>
          </div>
        </div>

      </div>

      <hr/>

      <div className="border-t border-indigo-500 text-center py-4 text-sm text-gray-200">
        Copyright © {new Date().getFullYear()} First Track Solution Technologies Private Limited. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
