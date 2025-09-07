import React, { useState } from "react";


export default function SmartSavings() {
  const [amount, setAmount] = useState(30);

  const quickAmounts = [10, 30, 50];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
      {/* Header */}
      <div className="flex items-center p-4 border-b border-gray-200 bg-white shadow-sm">
       
        <h1 className="flex-1 text-center text-lg font-semibold text-gray-800">
          Smart Savings
        </h1>

      </div>

      {/* Info */}
      <div className="px-6 text-center">
        <h2 className="text-xl font-bold mb-2 text-teal-700 m-4">
             Grow Your Wealth Effortlessly
        </h2>
        <div className="flex justify-center gap-6 text-sm text-gray-600 mb-4">
         <p>Begin with as little as ₹10</p>
          <p>Save smarter, every single day</p>
          <p>Flexibility to pause or adjust anytime</p>
        </div>
      </div>

      {/* Input Section */}
      <div className="px-6">
        <p className="text-sm font-semibold mb-2 text-gray-700">
           Choose your daily savings amount
        </p>
        <input
          type="number"
          value={amount}     
           min={10} 
            onChange={(e) => {
                const val = Number(e.target.value);
                setAmount(val < 10 ? 10 : val); 
            }}
          className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
        />

        {/* Quick Amounts */}
        <div className="flex gap-3 mt-4 ">
          {quickAmounts.map((amt, idx) => (
            <button
              key={idx}
              onClick={() => setAmount(amt)}
              className={`px-6 py-2 rounded-lg font-semibold border transition  ${
                amount == amt
                  ? "bg-teal-600 border-teal-600 text-white"
                  : "border-teal-400 text-teal-600 hover:bg-teal-50"
              }`}
            >
              ₹{amt}
            </button>
          ))}
        </div>
      </div>

    

      <div className="flex items-start px-6 mt-3 text-xs text-gray-500">
        <input
            type="checkbox"
            id="agree"
            className="mt-0.5 mr-2 w-4 h-4 border-gray-300 rounded focus:ring-teal-500"
        />
        <label htmlFor="agree" className="leading-snug">
            By continuing, you agree to the{" "}
            <span className="text-teal-600 font-medium cursor-pointer">
            Terms and Conditions
            </span>{" "}
            and creation of a gold account.
        </label>
        </div>

      {/* Bottom Bar */}
      <div className="mt-auto border-t border-gray-200 flex items-center justify-between p-4 bg-white shadow-inner">
        <div>
          <p className="text-lg font-bold text-gray-800">₹{amount}</p>
          <p className="text-xs text-teal-600 underline">View Details</p>
        </div>
        <button className="bg-teal-600 hover:bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold shadow">
          Continue & Pay
        </button>
      </div>
    </div>
  );
}
