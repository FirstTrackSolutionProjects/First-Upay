import { Link, useLocation } from "react-router-dom";
import { FaHome, FaInfoCircle, FaBlog, FaCompass, FaEnvelope, FaSignInAlt,  FaMoneyBillWave, FaLifeRing, FaGift } from "react-icons/fa";
import { FiX } from "react-icons/fi";

const SideBar = ({ isOpen, toggleSideBar }) => {
  const location = useLocation();

  const isExplore = location.pathname === "/explore";

  return (
    <div
      className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Header */}
      <div className="flex justify-end items-center px-4 py-3 border-b">
       
        <button onClick={toggleSideBar} className="text-2xl ">
          <FiX />
        </button>
      </div>

      <div className="flex flex-col gap-4 p-6 text-gray-700 font-medium">
        {/* If we are on Explore page → show different sidebar */}
        {isExplore ? (
          <>
            <Link
              to="/"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-500 hover:text-white"
              onClick={toggleSideBar}
            >
              <FaHome /> Home
            </Link>
           <Link
            to="/explore/paymentsetting"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-500 hover:text-white"
            onClick={toggleSideBar}
            >
            <FaMoneyBillWave /> Billing & Payments
            </Link>

            <Link
            to="/explore/help"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-500 hover:text-white"
            onClick={toggleSideBar}
            >
            <FaLifeRing /> Help & Support
            </Link>

            <Link
            to="/refer"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-500 hover:text-white"
            onClick={toggleSideBar}
            >
            <FaGift /> Refer & Win
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-500 hover:text-white"
              onClick={toggleSideBar}
            >
              <FaHome /> Home
            </Link>
            <Link
              to="/about"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-500 hover:text-white"
              onClick={toggleSideBar}
            >
              <FaInfoCircle /> About Us
            </Link>
            <Link
              to="/blog"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-500 hover:text-white"
              onClick={toggleSideBar}
            >
              <FaBlog /> Blog
            </Link>
            <Link
              to="/explore"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-500 hover:text-white"
              onClick={toggleSideBar}
            >
              <FaCompass /> Explore
            </Link>
            <Link
              to="/contact"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-500 hover:text-white"
              onClick={toggleSideBar}
            >
              <FaEnvelope /> Contact Us
            </Link>
            <Link
              to="/login"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-500 hover:text-white"
              onClick={toggleSideBar}
            >
              <FaSignInAlt /> Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default SideBar;
