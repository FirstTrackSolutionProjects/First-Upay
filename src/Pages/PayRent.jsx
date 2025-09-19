import React from "react";
import { FaHome, FaBuilding, FaUniversity } from "react-icons/fa";
import { useState } from "react"

export default function PayRent() {

    const [rentAmount, setRentAmount] = useState("");
  const [error, setError] = useState("");

  const handleRentChange = (e) => {
    const value = e.target.value;
    setRentAmount(value);

    if (value && Number(value) < 500) {
      setError("Rent amount must be at least ₹500");
      } else if (value && Number(value) > 100000) {
      setError("Rent amount cannot exceed ₹1,00,000");
    } else {
      setError("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-200 to-white p-4 m-4">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
      </div>

      {/* Banner / Info Section */}
      <div className="shadow-lg rounded-2xl mb-6 bg-white/90 p-5 flex flex-col items-center text-center">
        <FaHome className="text-indigo-600 text-5xl mb-3" />
        <h2 className="text-xl font-bold text-gray-800">Pay Your House Rent</h2>
        <p className="text-md text-gray-600 mt-2">
          Pay rent online securely using UPI, debit, or credit card.  
          Earn rewards & cashback on every transaction.
        </p>
      </div>

      {/* Form */}
      <div className="shadow-md rounded-2xl bg-white/90 p-5 space-y-4 ">
       <div>
          <label className="block text-md  text-gray-700 font-bold mb-1">
            Property Name
          </label>
          <input
            type="text"
            placeholder="Enter property name"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-md font-bold text-gray-700 mb-1">
            Landlord Name
          </label>
          <input
            type="text"
            placeholder="Enter landlord's name"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-md font-bold text-gray-700 mb-1">
            Landlord UPI ID
          </label>
          <input
            type="text"
            placeholder="example@upi"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          />
        </div>
         <div>
          <label className="block text-md font-bold text-gray-700 mb-1">
            Aadhaar Card Number
          </label>
         <input
            type="text"
            placeholder="0000 0000 0000"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          />
          </div>

        <div>
          <label className="block text-md font-bold text-gray-700 mb-1">
            Rent Amount (₹)
          </label>
          <input
            type="number"
            placeholder="Enter amount"
            min={500}
            max={100000}
            value={rentAmount}
            onChange={handleRentChange}
             className={`w-full border rounded-lg px-3 py-2 focus:ring-2 focus:outline-none ${
              error ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-indigo-400"
            }`}
          />
          {error && <p className="text-red-500 text-md mt-1">{error}</p>}
        </div>

        <div>
          <label className="block text-md font-bold text-gray-700 mb-1">
            Rent For (Month)
          </label>
          <input
            type="text"
            placeholder="e.g. September 2025"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          />
        </div>

         <button
          disabled={!!error || !rentAmount}
          className={`w-full font-bold rounded-xl py-3 ${
            error || !rentAmount
              ? "bg-gray-400 cursor-not-allowed text-white"
              : "bg-indigo-600 hover:bg-indigo-700 text-white"
          }`}
        >
          Proceed to Pay
        </button>
      </div>

      {/* Benefits Section */}
      <div className="mt-6">
        <h2 className="text-gray-800 font-semibold mb-3">Why Pay Rent with Us?</h2>
        <ul className="space-y-3">
          <li className="flex items-center gap-3">
            <FaBuilding className="text-indigo-600 text-xl" />
            <span className="text-md text-gray-700">
              Instant receipt & transaction history
            </span>
          </li>
          <li className="flex items-center gap-3">
            <FaUniversity className="text-indigo-600 text-xl" />
            <span className="text-md text-gray-700">
              Pay directly from your bank account
            </span>
          </li>
          <li className="flex items-center gap-3">
            <FaHome className="text-indigo-600 text-xl" />
            <span className="text-md text-gray-700">
              Earn cashback & rewards on rent payments
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
