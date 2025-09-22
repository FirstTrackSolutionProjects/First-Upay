import React, { useState } from "react";
import { FaPhoneAlt, FaUniversity } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

export default function Fee() {
  const [amount, setAmount] = useState("");
  const [tutorName, setTutorName] = useState("");
  const [aadhaar, setAadhaar] = useState("");

  return (
    <div className="min-h-screen bg-blue-100 text-gray-900 m-4 p-4">
      {/* Header */}
      <div className="flex items-center justify-center p-5 bg-indigo-500 text-white shadow-md">
        <h1 className="text-xl font-bold">Home Tuition Fee Details</h1>
      </div>

      <div className="max-w-lg mx-auto mt-6 space-y-6">

        {/* Fee Amount */}
        <div className="space-y-1">
          <label className="text-sm font-semibold">Fee Amount (₹)</label>
          <input
            type="number"
            min="500"
            max="100000"
            placeholder="Enter amount (₹500 - ₹1,00,000)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white shadow-sm"
          />
          <p className="text-xs text-gray-500">
            Specify the tuition fee you want to pay (Min ₹500, Max ₹1,00,000)
          </p>
        </div>

        {/* Tutor Name */}
        <div className="space-y-1">
          <label className="text-sm font-semibold">Home Tutor's Name</label>
          <input
            type="text"
            placeholder="Enter tutor's full name"
            value={tutorName}
            onChange={(e) => setTutorName(e.target.value)}
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white shadow-sm"
          />
          <p className="text-xs text-gray-500">
            Enter the tutor’s registered full name
          </p>
        </div>

        {/* Aadhaar Number */}
        <div className="space-y-1">
          <label className="text-sm font-semibold">Aadhaar Number</label>
          <input
            type="text"
            placeholder="0000 0000 0000"
            value={aadhaar}
            onChange={(e) => setAadhaar(e.target.value.replace(/\D/g, "").slice(0, 12))}
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white shadow-sm"
          />
          <p className="text-xs text-gray-500">
            Enter the tutor’s Aadhaar number (12 digits)
          </p>
        </div>

        {/* Send Options */}
        <div className="space-y-3">
          <h3 className="font-semibold text-sm mb-2">Send money to your Home Tutor</h3>

          <div className="flex justify-between items-center p-4 border rounded-xl bg-white shadow-sm cursor-pointer hover:bg-gray-50">
            <div className="flex items-center space-x-3">
              <FaPhoneAlt className="text-indigo-500 text-lg" />
              <span className="text-sm">Add Phone Number</span>
            </div>
            <span className="text-gray-400 text-lg">{">"}</span>
          </div>

          <div className="flex justify-between items-center p-4 border rounded-xl bg-white shadow-sm cursor-pointer hover:bg-gray-50">
            <div className="flex items-center space-x-3">
              <FaUniversity className="text-green-600 text-lg" />
              <span className="text-sm">Add Bank Account</span>
            </div>
            <span className="text-gray-400 text-lg">{">"}</span>
          </div>

          <div className="flex justify-between items-center p-4 border rounded-xl bg-white shadow-sm cursor-pointer hover:bg-gray-50">
            <div className="flex items-center space-x-3">
              <SiUpwork className="text-orange-500 text-lg" />
              <span className="text-sm">Add UPI ID</span>
            </div>
            <span className="text-gray-400 text-lg">{">"}</span>
          </div>
        </div>

        {/* Terms & Continue Button */}
        <div className="space-y-4 mt-2">
          <div className="flex items-start">
            <input type="checkbox" className="mt-1" />
            <p className="ml-2 text-xs text-gray-600">
              By continuing, you agree to <span className="text-indigo-600 font-medium">Terms & Conditions</span>
            </p>
          </div>
          <button className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-xl shadow-md hover:bg-indigo-700 transition">
            CONTINUE
          </button>
        </div>
      </div>
    </div>
  );
}
