import React from "react";
import { useNavigate } from "react-router-dom";

export default function UpiTransfer() {
  const navigate = useNavigate();

  return (
    <div className="bg-blue-50 min-h-screen text-gray-900 p-4 m-4">
      {/* Header */}
      <div className="flex items-center space-x-3 mb-6">
      
        <h1 className="text-lg font-semibold text-blue-800">
          To new UPI ID/Number
        </h1>
      </div>

      {/* Subtitle */}
      <p className="text-sm text-gray-600 mb-6">
        Enter any UPI ID or 8–9 digit UPI Number
      </p>

      {/* Input Section */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2 text-blue-700">
          UPI ID/Number
        </label>
        <div className="flex border border-blue-500 rounded-lg overflow-hidden">
          <input
            type="text"
            className="flex-1 bg-white text-gray-900 px-3 py-2 focus:outline-none"
            placeholder="Enter UPI ID/UPI Number"
          />
          <button className="bg-blue-600 text-white px-4 py-2 text-sm font-medium hover:bg-blue-700">
            Verify
          </button>
        </div>
      </div>

      {/* Example Suggestions */}
      <div className="mt-6">
        <p className="text-xs text-gray-500 mb-2">Examples:</p>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>📌 user@upi</li>
          <li>📌 9876543210@ybl</li>
          <li>📌 mobile.number@paytm</li>
        </ul>
      </div>
    </div>
  );
}
