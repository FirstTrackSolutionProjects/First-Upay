import React from "react";
import { FaUniversity, FaShareAlt, FaDownload, FaHome } from "react-icons/fa";

const ReceiveMoney = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-4 m-4">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
       
        <h1 className="text-lg font-extrabold text-gray-700">Paytm</h1>
      </div>

      {/* Profile & QR */}
      <div className="bg-white/80 rounded-xl shadow p-5">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-purple-200 flex items-center justify-center text-sm font-bold text-gray-800">
           Test
          </div>
          <div>
            <p className="font-medium text-gray-800">Test ✅</p>
            <p className="text-xs text-gray-500">Accepted Here</p>
          </div>
        </div>

        {/* QR Box */}
        <div className="bg-gradient-to-b from-blue-100 to-blue-200 rounded-xl p-3 flex justify-center">
          {/* <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=9348553817@ptyes"
            alt="QR Code"
            className="rounded-lg"
          /> */}
        </div>

        {/* UPI ID */}
        {/* <p className="text-center mt-2 text-gray-700 font-medium">
          9348553817@ptyes
        </p> */}
      </div>

      {/* Bank Section */}
      <div className="bg-white/80 mt-4 rounded-xl shadow p-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FaUniversity className="text-blue-600" />
          <p className="text-sm text-gray-700">Test</p>
        </div>
        <button className="text-blue-600 text-sm font-medium">Change Bank</button>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-around mt-4">
        <button className="flex flex-col items-center text-sm text-gray-700">
          <FaShareAlt className="text-blue-600 text-xl mb-1" />
          Share QR
        </button>
        <button className="flex flex-col items-center text-sm text-gray-700">
          <FaDownload className="text-blue-600 text-xl mb-1" />
          Save QR
        </button>
        <button className="flex flex-col items-center text-sm text-gray-700">
          <FaHome className="text-blue-600 text-xl mb-1" />
          Add to Home
        </button>
      </div>

      {/* Security Shield */}
      <div className="bg-white/80 mt-5 rounded-xl shadow p-3 flex justify-between items-center">
        <div>
          <p className="text-gray-800 font-medium">Security Shield</p>
          <p className="text-xs text-gray-500">Protect your account</p>
        </div>
        <button className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm">
          Activate
        </button>
      </div>

      {/* Settings */}
      <div className="mt-6">
        <h2 className="text-gray-800 font-semibold mb-2">⚙ Settings</h2>
        <ul className="bg-white/80 rounded-xl shadow divide-y divide-gray-200">
          <li className="p-3 text-sm text-gray-700">UPI & Payment Settings</li>
          <li className="p-3 text-sm text-gray-700">Notifications</li>
          <li className="p-3 text-sm text-gray-700">Help & Support</li>
        </ul>
      </div>
    </div>
  );
};

export default ReceiveMoney;
