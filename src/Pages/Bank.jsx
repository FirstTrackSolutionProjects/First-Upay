import React, { useState } from "react";
import { FaSearch, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Bank = ({ mode = "receiver" }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const popularBanks = [
    { name: "State Bank of India", logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/SBI-logo.svg" },
    { name: "Punjab National Bank", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5b/PNB_Logo.svg" },
    { name: "Bank Of India", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Bank_of_India_logo.svg" },
    { name: "UCO Bank", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/UCO_Bank_logo.svg" },
    { name: "Union Bank Of India", logo: "https://upload.wikimedia.org/wikipedia/commons/0/01/Union_Bank_of_India_logo.svg" },
    { name: "Canara Bank", logo: "https://upload.wikimedia.org/wikipedia/commons/3/37/Canara_Bank_logo.svg" },
    { name: "Axis Bank", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Axis_Bank_logo.svg" },
    { name: "HDFC Bank", logo: "https://upload.wikimedia.org/wikipedia/commons/1/13/HDFC_Bank_Logo.svg" },
    { name: "Bank Of Baroda", logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Bank_of_Baroda_logo.svg" },
  ];

  const allBanks = [
    "The Rayat Sevak Co-Op Bank Limited Satara",
    "IDFC First Bank",
    "Kotak Mahindra Bank",
    "Indian Bank",
  ];

  // Header title based on mode
  const headerTitle =
    mode === "self" ? "Add New Bank Account" : "Select Receiver Bank";

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-100 text-gray-900 p-4">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <button onClick={() => navigate(-1)} className="text-gray-700">
          <FaArrowLeft size={20} />
        </button>
        <h1 className="text-lg font-bold">{headerTitle}</h1>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <FaSearch className="absolute left-3 top-3 text-gray-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by bank name"
          className="w-full pl-10 pr-4 py-2 rounded-full border shadow-sm focus:ring-2 focus:ring-purple-400 outline-none"
        />
      </div>

      {/* Popular Banks */}
      <h2 className="text-sm font-semibold text-gray-700 mb-3">POPULAR BANKS</h2>
      <div className="grid grid-cols-3 gap-4 mb-8">
        {popularBanks
          .filter((bank) =>
            bank.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((bank, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center space-y-2 bg-white rounded-xl p-4 shadow hover:shadow-md cursor-pointer transition"
            >
              <img
                src={bank.logo}
                alt={bank.name}
                className="w-12 h-12 rounded-full"
              />
              <p className="text-xs text-center">{bank.name}</p>
            </div>
          ))}
      </div>

      {/* All Banks */}
      <h2 className="text-sm font-semibold text-gray-700 mb-3">ALL BANKS</h2>
      <div className="space-y-3">
        {allBanks
          .filter((b) => b.toLowerCase().includes(search.toLowerCase()))
          .map((bank, i) => (
            <div
              key={i}
              className="bg-white rounded-lg p-3 shadow flex items-center cursor-pointer hover:bg-purple-50 transition"
            >
              <div className="w-8 h-8 rounded-full bg-purple-200 flex items-center justify-center text-purple-600 font-bold">
                {bank.charAt(0)}
              </div>
              <p className="ml-3 text-sm">{bank}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Bank;
