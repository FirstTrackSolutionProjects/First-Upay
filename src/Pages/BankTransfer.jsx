import React from "react";
import { FaUniversity, FaUser, FaAt } from "react-icons/fa";
import { SiHdfcbank } from "react-icons/si";
import { GiBank } from "react-icons/gi";
import { Link } from "react-router-dom";

const BankTransfer = () => {

  return (
    <div className="bg-white min-h-screen text-black p-4">
     
      

      {/* Options */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-blue-100 rounded-xl p-4 flex flex-col items-center justify-center space-y-2 w-70 h-40">
          <FaUser size={40} className="text-purple-500"/>
          <p className="text-center text-sm">To Self Bank Account</p>
        </div>
        <div className="bg-blue-100 rounded-xl p-4 flex flex-col items-center justify-center space-y-2 w-70 h-40">
          <FaUniversity size={40} className="text-purple-500"/>
          <p className="text-center text-sm">To Account Number & IFSC</p>
        </div>
      </div>

      {/* UPI ID Option */}
      <Link to="/upi" >
      <div className="bg-blue-100 rounded-xl p-4 flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <FaAt size={24} className="text-gray-300"/>
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
