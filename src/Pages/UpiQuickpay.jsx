import React, { useState } from "react";

const UpiQuickpay = () => {
  const [amount, setAmount] = useState(10);
  const [selected, setSelected] = useState(null);

  const amounts = [
    { value: 200, label: "₹200" },
    { value: 1000, label: "₹1,000", tag: "Trending" },
    { value: 2000, label: "₹2,000" },
  ];

  const handleSelect = (value) => {
    setAmount(value);
    setSelected(value);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-4">
      {/* Banner */}
      <div className="bg-purple-100 rounded-xl p-5 mb-6 text-center border border-purple-200 shadow-sm">
        <h2 className="font-bold text-purple-600">
          Add balance from your bank
        </h2>
        <p className="text-sm text-gray-600">
          Safe and instant transfer anytime
        </p>
      </div>

      {/* Add Money Section */}
      <div className="bg-indigo-100 rounded-xl p-5 mb-6 shadow-md border border-gray-200">
        <h2 className="font-semibold mb-2 text-gray-800">Enter Amount</h2>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-3 rounded-lg border border-gray-300 text-gray-700 outline-none mb-4 focus:ring-2 focus:ring-purple-400"
        />

        {/* Quick Select */}
        <div className="flex gap-3 mb-4">
          {amounts.map((amt) => (
            <div
              key={amt.value}
              onClick={() => handleSelect(amt.value)}
              className={`relative flex-1 text-center py-3 rounded-lg cursor-pointer border transition ${
                selected === amt.value
                  ? "border-purple-500 bg-purple-50 text-purple-700 shadow-sm"
                  : "border-gray-300 bg-gray-50 text-gray-700 hover:bg-gray-100"
              }`}
            >
              {amt.label}
              {amt.tag && (
                <span className="absolute -top-2 right-2 bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full shadow">
                  {amt.tag}
                </span>
              )}
            </div>
          ))}
        </div>

        <button className="w-full bg-purple-600 py-3 rounded-lg font-medium text-white hover:bg-purple-700 transition">
          Add Balance
        </button>
        <p className="text-xs text-gray-500 text-center mt-2">
          By continuing, you agree to our Terms & Conditions
        </p>
      </div>

      {/* Payment History */}
      {/* <div className="bg-white rounded-xl p-5 flex items-center justify-between cursor-pointer border border-gray-200 shadow-sm hover:shadow-md transition">
        <p className="font-medium text-gray-800">Transaction History</p>
        <span className="text-xl text-gray-600">→</span>
      </div> */}
    </div>
  );
};

export default UpiQuickpay;
