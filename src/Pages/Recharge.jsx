

// import { Link } from "react-router-dom";
// import { FaMobileAlt, FaBolt, FaBroadcastTower, FaGasPump, FaSatelliteDish, FaGooglePlay, FaRegCreditCard, FaShieldAlt } from "react-icons/fa";

// export default function Recharge() {
//   const rechargeItems = [
//     { name: "Credit Card Bill", icon: <FaRegCreditCard size={28} className="text-indigo-600" />, link: "/credit-card" },
//     { name: "Insurance / LIC", icon: <FaShieldAlt size={28} className="text-blue-600" />, link: "/insurance" },
//     { name: "Mobile Postpaid", icon: <FaMobileAlt size={28} className="text-orange-600" />, link: "/postpaid" },
//     { name: "Fastag Recharge", icon: <FaBolt size={28} className="text-yellow-500" />, link: "/fastag" },
//     { name: "Broadband Landline", icon: <FaBroadcastTower size={28} className="text-green-600" />, link: "/broadband" },
//     { name: "Electricity Bill", icon: <FaBolt size={28} className="text-red-600" />, link: "/electricity-bill" },
//     { name: "Book Gas Cylinder", icon: <FaGasPump size={28} className="text-red-600" />, link: "/cylinder" },
//     { name: "DTH Recharge", icon: <FaSatelliteDish size={28} className="text-purple-600" />, link: "/dth-recharge" },
//     { name: "Google Play Recharge", icon: <FaGooglePlay size={28} className="text-pink-600" />, link: "/google-play" },
//   ];

//   return (
//     <div className="p-4">
//       <h2 className="text-lg font-semibold mb-4 text-gray-800">Recharges and Bills</h2>
//       <div className="grid grid-cols-3 gap-4">
//         {rechargeItems.map((item, idx) => (
//           <Link
//             key={idx}
//             to={item.link}
//             className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg shadow hover:bg-indigo-50 transition"
//           >
//             {item.icon}
//             <span className="mt-2 text-sm font-medium text-gray-700 text-center">{item.name}</span>
//           </Link>
//         ))}
      
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { FaSearch, FaUser } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function Recharge() {
  const [tab, setTab] = useState("prepaid");

  const recents = [
    { name: "Test", number: "1234567890", last: "₹579 on 05 Sep 2025" },
    { name: "Test", number: "1234567890", last: "₹11 on 10 Jul 2025" },
    { name: "Test", number: "1234567890", last: "₹22 on 30 Apr 2025" },
    { name: "Test", number: "1234567890", last: "₹199 on 15 Mar 2025" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white p-4">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
      
        <h1 className="text-lg font-semibold text-gray-800">Mobile Recharge</h1>
      </div>

      {/* Tabs */}
      <div className="flex bg-gray-200 rounded-full p-1 mb-4">
        <button
          onClick={() => setTab("prepaid")}
          className={`flex-1 py-2 text-sm font-medium rounded-full ${
            tab === "prepaid"
              ? "bg-indigo-600 text-white"
              : "text-gray-700 hover:bg-gray-300"
          }`}
        >
          Prepaid
        </button>
        <button
          onClick={() => setTab("postpaid")}
          className={`flex-1 py-2 text-sm font-medium rounded-full ${
            tab === "postpaid"
              ? "bg-indigo-600 text-white"
              : "text-gray-700 hover:bg-gray-300"
          }`}
        >
          Postpaid
        </button>
      </div>

      {/* Search Bar */}
      <div className="flex items-center bg-white shadow-md rounded-full px-4 py-2 mb-6">
        <FaSearch className="text-gray-400" />
        <input
          type="text"
          placeholder="Search by Number or Name"
          className="ml-2 flex-1 outline-none text-sm"
        />
          <FaUser className="text-orange-500 text-lg cursor-pointer " />
      </div>

      {/* Reminder Card */}
      <div className="bg-indigo-100 p-4 rounded-2xl shadow-sm mb-6">
        <h2 className="text-gray-800 font-medium">
          Be reminded before your plan validity expires
        </h2>
        <p className="text-xs text-gray-600 mt-1">
          Allow access to your text messages to fetch your bills and remind on
          time.
        </p>
        <button className="mt-3 bg-indigo-600 text-white text-sm px-4 py-2 rounded-lg">
          Allow
        </button>
      </div>

      {/* Recents */}
      <div>
        <h2 className="text-gray-800 font-semibold mb-3">Recents</h2>
        <div className="space-y-3">
          {recents.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm"
            >
              <div>
                <h3 className="font-medium text-gray-800">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.number}</p>
                <p className="text-xs text-gray-500">Last Recharge: {item.last}</p>
              </div>
              <BsThreeDotsVertical className="text-gray-500 text-xl" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
