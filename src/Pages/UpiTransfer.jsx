import React from "react";
import { useNavigate } from "react-router-dom";

export default function UpiTransfer() {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b from-blue-100 to-blue-300 min-h-screen flex items-center justify-center px-4 m-4">
      {/* Card */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        {/* Header */}
        <h1 className="text-lg sm:text-xl font-semibold text-blue-800 mb-2">
          To new UPI ID/Number
        </h1>
      

        {/* Input Section */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2 text-blue-700">
            UPI ID/Number
          </label>
       <div className="flex border border-blue-400 rounded-full overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 w-full max-w-md mx-auto">
        <input
            type="text"
            className="flex-1 bg-white text-gray-900 px-2 sm:px-3 py-2 text-sm sm:text-base placeholder:text-[10px] sm:placeholder:text-[12px] focus:outline-none rounded-full"
            placeholder="Enter UPI ID / Number"
        />
        <button className="bg-blue-600 text-white px-3 sm:px-5 py-2 text-xs sm:text-sm font-medium hover:bg-blue-700 transition rounded-r-full whitespace-nowrap">
            Verify
        </button>
        </div>


        </div>

        {/* Example Suggestions */}
        <div className="mt-4">
          <p className="text-xs text-gray-500 mb-2">Examples:</p>
          <ul className="text-sm text-gray-700 space-y-2">
            <li className="flex items-center gap-2">
              <span className="text-pink-600">📌</span> user@upi
            </li>
            <li className="flex items-center gap-2">
              <span className="text-pink-600">📌</span> 9876543210@ybl
            </li>
            <li className="flex items-center gap-2">
              <span className="text-pink-600">📌</span> mobile.number@paytm
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
