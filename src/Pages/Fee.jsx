import React, { useState } from "react";
import { FaPhoneAlt, FaUniversity } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

export default function Fee() {
  const [amount, setAmount] = useState("");
  const [tutorName, setTutorName] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Header */}
      <div className="flex items-center p-4 bg-indigo-600 text-white m-4">
     
        <h1 className="text-lg font-bold flex-1 text-center">Home Tuition Fee Details</h1>
      
      </div>

     

      {/* Fee Amount */}
      <div className="p-4">
        <label className="text-sm font-semibold">Fee Amount</label>
        <input
          type="number"
          placeholder="Min. amount 1,000"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full mt-1 p-3 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <p className="text-xs text-gray-500 mt-1">Specify the tuition fee you want to pay</p>
      </div>

      {/* Tutor Name */}
      <div className="p-4">
        <label className="text-sm font-semibold">Home Tutor's Name</label>
        <input
          type="text"
          placeholder="Enter tutor's name"
          value={tutorName}
          onChange={(e) => setTutorName(e.target.value)}
          className="w-full mt-1 p-3 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <p className="text-xs text-gray-500 mt-1">Enter the tutor’s registered full name</p>
      </div>

      {/* Send Options */}
      <div className="p-4">
        <h3 className="font-semibold text-sm mb-2">Send money to your Home Tutor</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center p-3 border rounded-lg bg-white cursor-pointer hover:bg-gray-50">
            <div className="flex items-center space-x-3">
              <FaPhoneAlt className="text-indigo-500" />
              <span className="text-sm">Add Phone Number</span>
            </div>
            <span>{">"}</span>
          </div>

          <div className="flex justify-between items-center p-3 border rounded-lg bg-white cursor-pointer hover:bg-gray-50">
            <div className="flex items-center space-x-3">
              <FaUniversity className="text-green-600" />
              <span className="text-sm">Add Bank Account</span>
            </div>
            <span>{">"}</span>
          </div>

          <div className="flex justify-between items-center p-3 border rounded-lg bg-white cursor-pointer hover:bg-gray-50">
            <div className="flex items-center space-x-3">
              <SiUpwork className="text-orange-500" />
              <span className="text-sm">Add UPI ID</span>
            </div>
            <span>{">"}</span>
          </div>
        </div>
      </div>

      {/* Terms & Button */}
      <div className="p-4 mt-2">
        <div className="flex items-start mb-3">
          <input type="checkbox" className="mt-1" />
          <p className="ml-2 text-xs text-gray-600">
            By continuing, you agree to <span className="text-indigo-600 font-medium">Terms & Conditions</span>
          </p>
        </div>
        <button className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-indigo-700">
          CONTINUE
        </button>
      </div>
    </div>
  );
}
