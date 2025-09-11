import React from "react";
import { FaHome, FaBuilding, FaUniversity } from "react-icons/fa";

export default function PayRent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-200 to-white p-4 m-4">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
       
        <h1 className="text-lg font-semibold text-gray-700">Pay Rent</h1>
      </div>

      {/* Banner / Info Section */}
      <div className="shadow-lg rounded-2xl mb-6 bg-white/90 p-5 flex flex-col items-center text-center">
        <FaHome className="text-indigo-600 text-5xl mb-3" />
        <h2 className="text-xl font-bold text-gray-800">Pay Your House Rent</h2>
        <p className="text-sm text-gray-600 mt-2">
          Pay rent online securely using UPI, debit, or credit card.  
          Earn rewards & cashback on every transaction.
        </p>
      </div>

      {/* Form */}
      <div className="shadow-md rounded-2xl bg-white/90 p-5 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Landlord Name
          </label>
          <input
            type="text"
            placeholder="Enter landlord's name"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Landlord UPI ID
          </label>
          <input
            type="text"
            placeholder="example@upi"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          />
        </div>
         <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Aadhar Card
          </label>
         <input
            type="text"
            placeholder="Aadhar Card"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          />
          </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Rent Amount (₹)
          </label>
          <input
            type="number"
            placeholder="Enter amount"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Rent For (Month/Year)
          </label>
          <input
            type="text"
            placeholder="e.g. September 2025"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          />
        </div>

        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl py-3">
          Proceed to Pay
        </button>
      </div>

      {/* Benefits Section */}
      <div className="mt-6">
        <h2 className="text-gray-800 font-semibold mb-3">Why Pay Rent with Us?</h2>
        <ul className="space-y-3">
          <li className="flex items-center gap-3">
            <FaBuilding className="text-indigo-600 text-xl" />
            <span className="text-sm text-gray-700">
              Instant receipt & transaction history
            </span>
          </li>
          <li className="flex items-center gap-3">
            <FaUniversity className="text-indigo-600 text-xl" />
            <span className="text-sm text-gray-700">
              Pay directly from your bank account
            </span>
          </li>
          <li className="flex items-center gap-3">
            <FaHome className="text-indigo-600 text-xl" />
            <span className="text-sm text-gray-700">
              Earn cashback & rewards on rent payments
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
