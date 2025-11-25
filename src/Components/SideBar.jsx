import { Link, useLocation } from "react-router-dom";
import { FaHome, FaInfoCircle, FaBlog, FaCompass, FaEnvelope, FaSignInAlt,  FaMoneyBillWave, FaRegFileAlt, FaClipboardList, FaUserCircle, FaLifeRing, FaGift } from "react-icons/fa";
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
      <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex justify-end items-center px-4 py-3 border-b flex-shrink-0">
       
        <button onClick={toggleSideBar} className="text-2xl ">
          <FiX />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-6 text-gray-700 font-medium flex flex-col gap-4">
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

            <div className="flex flex-col items-center bg-gray-50 rounded-lg p-3 shadow-sm">
              <img
                src="/images/FirstUpay-qr.jpg"
                alt="FirstUpay QR"
                className="w-40 h-30 object-contain rounded-lg"
              />
              <p className="mt-2 text-sm text-gray-700 font-medium text-center">
                Scan & Pay using FirstUpay
              </p>
               <p className="text-xs text-gray-500 text-center">
                UPI: 12345678907@firstupay
              </p>
            </div>

             {/* Action Buttons */}
            <div className="flex gap-2 w-full justify-center">
              <button className="px-3 py-1.5 text-xs bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition">
                Share QR
              </button>
              <button className="px-3 py-1.5 text-xs bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition">
                Save QR
              </button>
              {/* <button className="px-3 py-1.5 text-xs bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition">
                Add to Home
              </button> */}
            </div>
          

           <Link
            to="/explore/paymentsetting"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-500 hover:text-white"
            onClick={toggleSideBar}
            >
            <FaMoneyBillWave /> Billing & Payments
            </Link>

            <Link
            to="/explore/savedbills"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-500 hover:text-white"
            onClick={toggleSideBar}
            >
            <FaRegFileAlt /> Saved Bills
            </Link>

            <Link
            to="/explore/orderbooking"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-500 hover:text-white"
            onClick={toggleSideBar}
            >
            <FaClipboardList /> My Records
            </Link>

            <Link
            to="/explore/accountcenter"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-500 hover:text-white"
            onClick={toggleSideBar}
            >
            <FaUserCircle /> Account Center
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
            {/* <Link
              to="/explore"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-500 hover:text-white"
              onClick={toggleSideBar}
            >
              <FaCompass /> Explore
            </Link> */}
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
    </div>
  );
};

export default SideBar;
