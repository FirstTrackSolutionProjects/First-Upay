import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaBlog, FaEnvelope, FaSignInAlt  } from "react-icons/fa";
import { FiX } from "react-icons/fi";

const SideBar = ({isOpen, toggleSideBar}) => {

return (
     <div
      className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >

    {/* Header */}
      <div className="flex justify-between items-center px-4 py-3 border-b">
        <h2 className="text-xl font-bold text-blue-600">Menu</h2>
        <button onClick={toggleSideBar} className="text-2xl">
          <FiX />
        </button>
      </div>

        <div className="flex flex-col gap-4 p-6 text-gray-700 font-medium">
        <Link
            to="/"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-500"
            onClick={toggleSideBar}
        > <FaHome /> Home
        </Link>
        <Link
            to="/about"
            className="flex items-center gap-3 p-3   rounded-lg hover:bg-blue-500"
             onClick={toggleSideBar}
        >
            <FaInfoCircle /> About Us
        </Link>
        <Link
            to="/blog"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-500"
             onClick={toggleSideBar}
        >
            <FaBlog /> Blog
        </Link>
        <Link
            to="/contact"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-500"
            onClick={toggleSideBar}
        >
            <FaEnvelope /> Contact Us
        </Link>
        <Link
            to="/login"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-500"
            onClick={toggleSideBar}
        >
            <FaSignInAlt /> Login
        </Link>
        </div>
    </div>
    
);
};

export default SideBar;
