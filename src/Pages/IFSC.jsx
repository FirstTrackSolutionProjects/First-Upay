import React from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const IfscTransfer = () => {


  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 to-purple-300 text-gray-900 p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-bold">To Account Number & IFSC</h1>
   
      </div>



      {/* Add Bank Button */}
      <div className="fixed bottom-6 left-0 w-full flex justify-center">
        <Link to="/receiver-bank">
          <button className="flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-full shadow-lg transition">
            <FaPlus /> Bank Account
          </button>
        </Link>
      </div>
    </div>
  );
};

export default IfscTransfer;
