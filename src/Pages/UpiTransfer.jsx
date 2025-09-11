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

          {/* Input Box */}
          <input
            type="text"
            className="w-full border border-blue-400 bg-white text-gray-900 px-3 py-2 text-sm sm:text-base placeholder:text-[12px] rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter UPI ID / Number"
          />

          {/* Verify Button niche center */}
          <div className="flex justify-center mt-3">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition">
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
