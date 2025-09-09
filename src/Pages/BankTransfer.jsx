import React from "react";
import { FaUniversity, FaUser, FaAt } from "react-icons/fa";
import { Link } from "react-router-dom";

const BankTransfer = () => {
  return (
    <div className="bg-gradient-to-b from-blue-100 to-purple-100 min-h-screen text-black p-4 m-4">
      {/* Options */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {/* Self Bank Account */}
        <Link to="/self-account">
          <div className="bg-white rounded-xl p-4 flex flex-col items-center justify-center space-y-2 shadow hover:shadow-md transition cursor-pointer">
            <FaUser size={40} className="text-purple-500" />
            <p className="text-center text-sm font-medium">
              To Self Bank Account
            </p>
          </div>
        </Link>

        {/* Account Number & IFSC */}
        <Link to="/ifsc">
          <div className="bg-white rounded-xl p-4 flex flex-col items-center justify-center space-y-2 shadow hover:shadow-md transition cursor-pointer">
            <FaUniversity size={40} className="text-purple-500" />
            <p className="text-center text-sm font-medium">
              To Account Number & IFSC
            </p>
          </div>
        </Link>
      </div>

      {/* UPI ID Option */}
      <Link to="/upi">
        <div className="bg-white rounded-xl p-4 flex items-center justify-between mb-6 shadow hover:shadow-md transition cursor-pointer">
          <div className="flex items-center space-x-3">
            <FaAt size={24} className="text-purple-500" />
            <div>
              <p className="text-sm font-medium">To UPI ID or Number</p>
              <p className="text-xs text-gray-400">Transfer to any UPI app</p>
            </div>
          </div>
          <span className="text-gray-400">{">"}</span>
        </div>
      </Link>
    </div>
  );
};

export default BankTransfer;
