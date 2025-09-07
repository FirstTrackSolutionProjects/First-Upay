import React from "react";
import { Link } from "react-router-dom";
import { FaWallet, FaBolt, FaCreditCard, FaQrcode } from "react-icons/fa";

export default function ManagePayments() {
  const options = [
    {
      id: 1,
      name: "My Wallet",
      icon: <FaWallet size={20} />,
      link: "/wallet",
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      id: 2,
      name: "UPI QuickPay",
      icon: <FaBolt size={20} />,
      link: "/upi-lite",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      id: 3,
      name: "RuPay on UPI",
      icon: <FaQrcode size={20} />,
      link: "/rupay-upi",
      color: "bg-green-100 text-green-600",
    },
    {
      id: 4,
      name: "Apply Credit Card",
      icon: <FaCreditCard size={20} />,
      link: "/credit-card",
      color: "bg-pink-100 text-pink-600",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow p-4 m-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-sm font-semibold text-gray-800">Manage Payments</h2>
        {/* <Link to="/all-payments" className="text-xs text-indigo-600 font-medium">
          View All →
        </Link> */}
      </div>

      {/* Options */}
      <div className="grid grid-cols-4 gap-3">
        {options.map((item) => (
          <Link
            key={item.id}
            to={item.link}
            className="flex flex-col items-center text-center group"
          >
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-full shadow ${item.color} group-hover:scale-110 transition`}
            >
              {item.icon}
            </div>
            <p className="text-xs mt-1 text-gray-700">{item.name}</p>
          </Link>
        ))}
      </div>

      {/* UPI ID / QR */}
      <div className="flex items-center justify-between mt-4 border-t pt-3">
        <p className="text-xs text-gray-600">
          <span className="font-medium">UPI ID:</span> 1234567890@ybl
        </p>
        <Link
          to="/qr"
          className="text-xs text-indigo-600 font-semibold flex items-center gap-1"
        >
          <FaQrcode size={14} /> My QR
        </Link>
      </div>
    </div>
  );
}
