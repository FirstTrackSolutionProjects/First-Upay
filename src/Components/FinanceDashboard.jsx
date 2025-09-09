import { useState } from "react";
import {
  FaMobileAlt,
  FaUniversity,
  FaBolt,
  FaWallet,
  FaPiggyBank,
  FaShieldAlt,
  FaPlane, FaBalanceScale,
  FaMoneyBillWave, FaSatelliteDish,
  FaCoins, FaReceipt,
  FaGift, FaCar, FaHandHoldingUsd
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function FinanceDashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sections = [
    {
      title: "Money Transfers",
      items: [
        { name: "To Mobile", icon: <FaMobileAlt size={28} className="text-indigo-600" />, link: "/send-money" },
        { name: "To Bank", icon: <FaUniversity size={28} className="text-green-600" />, link: "/bank" },
        { name: "Wallet Topup", icon: <FaWallet size={28} className="text-orange-600" />, link: "/wallet" },
        { name: "Check Balance", icon: <FaPiggyBank size={28} className="text-pink-600" />, link: "/balance" },
        { name: "Scan & Pay", icon: <FaShieldAlt size={28} className="text-yellow-600" />, link: "/scan" },
        { name: "Balance & History", icon: <FaReceipt size={28} className="text-red-600" />, link: "/send-money" },
        { name: "Pay Rent", icon: <FaPlane size={28} className="text-blue-600" />, link: "/rent" },
        { name: "Receive Money", icon: <FaCoins size={28} className="text-purple-600" />, link: "/receive" },
      ],
    },
    {
      title: "Recharge & Bills",
      viewAll: "/bill",
      items: [
        { name: "Mobile Recharge", icon: <FaMobileAlt size={28} className="text-purple-600" />, link: "/recharge" },
        { name: "Electricity Bill", icon: <FaBolt size={28} className="text-yellow-500" />, link: "/electricity-bill" },
        { name: "Loan RePayment", icon: <FaMoneyBillWave size={28} className="text-blue-600" />, link: "/repayment" },
        { name: "Credit Card", icon: <FaReceipt size={28} className="text-red-600" />, link: "/credit-card" },
      ],
    },
  ];
     
  const compactItems = [
    { name: "Instant Loan", icon: <FaHandHoldingUsd size={36} className="text-indigo-600" />, link: "/instant-loan" },
    { name: "Gold", icon: <FaCoins size={36} className="text-yellow-500" />, link: "/saving" },
    { name: "Insurance", icon: <FaShieldAlt size={36} className="text-green-600" />, link: "/insurance" },
    { name: "Travel", icon: <FaPlane size={36} className="text-red-600" />, link: "/travel" },
    { name: "Mutual Funds", icon: <FaBalanceScale size={36} className="text-orange-600" />, link: "/mutual-funds" },
    { name: "Refer & Earn", icon: <FaGift size={36} className="text-pink-600" />, link: "/refer" },
    { name: "Hotel Booking", icon: <FaUniversity size={36} className="text-purple-600" />, link: "/hotel" },
    { name: "Car Rental", icon: <FaCar size={36} className="text-green-600" />, link: "/rental-car" },
  ];

  const rechargeItems = [
    { name: "Mobile Recharge", icon: <FaMobileAlt size={28} className="text-purple-600" />, link: "/recharge" },
    { name: "Electricity Bill", icon: <FaBolt size={28} className="text-yellow-500" />, link: "/electricity-bill" },
    { name: "Loan Payment", icon: <FaMoneyBillWave size={28} className="text-blue-600" />, link: "/repayment" },
    { name: "Wallet Topup", icon: <FaWallet size={28} className="text-orange-600" />, link: "/wallet" },
    { name: "Credit Card", icon: <FaReceipt size={28} className="text-red-600" />, link: "/credit-card" },
    { name: "DTH Recharge", icon: <FaSatelliteDish size={28} className="text-indigo-600" />, link: "/dth-recharge" },
  ];

  return (
    <div className="p-4 space-y-6">
      {/* Normal sections with colored backgrounds */}
      {sections.map((section, idx) => (
        <div
          key={idx}
          className={`${
            section.title === "Money Transfers"
              ? "bg-gradient-to-r from-blue-100 to-purple-200"
              : "bg-gradient-to-r from-orange-100 to-pink-200"
          } rounded-xl shadow-md p-4`}
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">{section.title}</h3>
            {section.viewAll && (
              <button
                onClick={() => setIsModalOpen(true)}
                className="text-sm text-indigo-600 hover:underline"
              >
                View All
              </button>
            )}
          </div>

          <div className="grid grid-cols-4 gap-4">
            {section.items.map((item, i) => (
              <Link
                key={i}
                to={item.link}
                className="flex flex-col items-center justify-center p-2 sm:p-3 md:p-4 
                bg-white/70 rounded-lg hover:bg-indigo-50 transition"
              >
                <div className="text-xl sm:text-2xl md:text-3xl">
                  {item.icon}
                </div>
                <span className="mt-1 text-[10px] sm:text-xs md:text-sm font-medium text-gray-700 text-center">
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      ))}

      {/* ✅ Compact Items Row */}
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {compactItems.map((item, i) => (
            <Link
              key={i}
              to={item.link}
              className="w-28 h-36 sm:w-32 sm:h-40 lg:w-50 lg:h-48  
              bg-white rounded-xl shadow-md flex flex-col items-center justify-center hover:shadow-lg transition"
            >
              {item.icon}
              <span className="mt-2 text-sm font-medium text-gray-700 text-center">
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
          <div className="bg-white w-96 rounded-xl shadow-lg p-4 relative">
            {/* 🔹 Header with Title, View All, and Close Button */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Recharges and Bills
              </h3>

              <div className="flex items-center gap-3">
                <Link
                  to="/bill"
                  className="text-sm text-indigo-600 hover:underline"
                >
                  View All
                </Link>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-500 hover:text-gray-800 text-lg"
                >
                  ✕
                </button>
              </div>
            </div>


            <div className="grid grid-cols-3 gap-4">
              {rechargeItems.slice(0, 6).map((item, i) => (
                <Link
                  key={i}
                  to={item.link}
                  className="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-lg hover:bg-indigo-50 transition"
                >
                  {item.icon}
                  <span className="mt-2 text-xs font-medium text-gray-700 text-center">
                    {item.name}
                  </span>
                </Link>
              ))}

            
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
