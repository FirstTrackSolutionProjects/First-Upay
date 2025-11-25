import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-indigo-700 text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <img
            src="/images/Logo 2.png"
            alt="logo"
            className="w-32 h-auto object-cover"
          />

          <p className=" text-gray-200 leading-relaxed">
            Fast, secure and reliable UPI payments ⚡  
            Your trusted partner for seamless transactions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-200">
            <li><a href="/about" className="hover:text-gray-300">About Us</a></li>
            <li><a href="/contact" className="hover:text-gray-300">Contact Us</a></li>
            <li><a href="/support" className="hover:text-gray-300">Support</a></li>
            <li><a href="/privacy" className="hover:text-gray-300">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-gray-300">Terms Of Use</a></li>
            <li><a href="/refund" className="hover:text-gray-300">Refund & Cancellation</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>

          <p className="text-gray-200">
            <span className="font-medium">Email:</span>{" "}
            <a href="mailto:support@example.com" className="hover:underline">
              support@firstupay.com
            </a>
          </p>

          <p className="text-gray-200 mt-2">
            <span className="font-medium">Phone:</span>{" "}
            <a href="tel:+919876543210" className="hover:underline">
              +91-1234567890
            </a>
          </p>

          <div className="flex space-x-4 mt-4 text-xl">
            <a href="#" className="hover:text-gray-300"><FaFacebookF /></a>
            <a href="#" className="hover:text-gray-300"><FaInstagram /></a>
            <a href="#" className="hover:text-gray-300"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-gray-300"><FaTwitter /></a>
          </div>
        </div>

        {/* Mobile App Download */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Download Our App</h3>
          <p className="text-gray-200 mb-4">
            Install the app to enjoy fast & secure UPI payments anytime.
          </p>

          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 md:flex-col md:space-x-0 md:space-y-4">

            { /* Google Play Store Button */ }
              <a
              href="/app" 
              target="_blank"
              rel="noopener noreferrer"
              >
              <img
              src="/images/playstore.png"
              alt="Google Play"
              className="w-40 cursor-pointer hover:scale-105 transition-transform"
            />
            </a>

            { /* Apple App Store Button */ }
            <a
              href="/app"
              target="_blank"
              rel="noopener noreferrer"
            >

            <img
              src="/images/app.png"
              alt="App Store"
              className="w-40 cursor-pointer hover:scale-105 transition-transform"
            />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-indigo-500 text-center py-5 text-sm text-gray-200">
        © {new Date().getFullYear()} First Track Solution Technologies Private Limited.  
        All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
