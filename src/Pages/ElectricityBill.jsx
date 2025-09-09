import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function Bill() {
  const [billers] = useState([
    { name: "India Power Prepaid Meter", tag: "New" },
    { name: "TP Central Odisha Distribution Ltd (TPCODL)" },
    { name: "TP Northern Odisha Distribution Ltd (TPNODL)" },
    { name: "TP Southern Odisha Distribution Ltd (TPSODL)" },
    { name: "TP Southern Odisha Distribution Ltd (TPSODL) - Prepaid Recharge" },
  ]);

  const [allBillers] = useState([
    { name: "Adani Electricity Mumbai Limited (AEML)" },
    { name: "Ajmer Vidyut Vitran Nigam Ltd (AVVNL)" },
    { name: "Assam Power Distribution Company Ltd (APDCL) - Bill Payment" },
    { name: "Assam Power Distribution Company Ltd (APDCL) - Prepaid Recharge" },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <h1 className="text-lg font-extrabold text-gray-800">Select Provider</h1>
      </div>

      {/* Search */}
      <div className="flex items-center bg-white shadow-md rounded-full px-4 py-2 mb-6">
        <FaSearch className="text-gray-400" />
        <input
          type="text"
          placeholder="Search by biller"
          className="ml-2 flex-1 outline-none text-sm"
        />
      </div>

      {/* Reminder Card */}
      <div className="bg-blue-100 p-4 rounded-2xl shadow-sm mb-6">
        <h2 className="text-gray-800 font-medium">
          Avoid missed bill payments and overdue charges
        </h2>
        <p className="text-xs text-gray-600 mt-1">
          Allow access to your text messages to fetch your bills and remind on
          time.
        </p>
        <button className="mt-3 bg-blue-600 text-white text-sm px-4 py-2 rounded-lg">
          Allow
        </button>
      </div>

      {/* Billers in Odisha */}
      <div className="mb-8">
        <h2 className="text-gray-800 font-semibold mb-3">Billers in Odisha</h2>
        <div className="space-y-3">
          {billers.map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 flex items-center justify-center rounded-full">
                  <span className="text-blue-600 font-bold">
                    {item.name[0]}
                  </span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">{item.name}</h3>
                  {item.tag && (
                    <span className="text-xs text-red-500 font-semibold bg-red-100 px-2 py-0.5 rounded ml-2">
                      {item.tag}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All Billers */}
      <div>
        <h2 className="text-gray-800 font-semibold mb-3">All Billers</h2>
        <div className="space-y-3">
          {allBillers.map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 flex items-center justify-center rounded-full">
                  <span className="text-green-600 font-bold">
                    {item.name[0]}
                  </span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">{item.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
