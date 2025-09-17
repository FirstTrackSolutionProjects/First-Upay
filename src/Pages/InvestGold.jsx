import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

export default function InvestGold() {
  const [mode, setMode] = useState("rupees"); // rupees or grams
  const [amount, setAmount] = useState(500);
  const [checked, setChecked] = useState(false);

  const goldRate = 11112.62; // ₹ per gram
  const gst = 0.03;

  // Convert rupees <-> grams
  const grams = (amount / goldRate).toFixed(4);

  const quickAmounts = [100, 500, 1000, 2000, 3000, 5000];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
      <img
            src="/images/gold-sip.jpg"
            alt="GoldSip"
            className="w-full h-96 object-cover lg:h-auto"
          />
      {/* Title */}
      <div className="px-5 py-4">
          
      <h1 className="text-lg font-semibold text-emerald-700 text-center">
          Invest in 24K Gold at your convenience
        </h1>
        <p className="text-sm text-gray-500 text-center">
          Secure storage in trusted bank-grade lockers
        </p>
      </div>

      <hr className="border-gray-200" />

      {/* Mode Selection */}
      <div className="flex items-center gap-6 px-5 py-4">
        <label
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setMode("rupees")}
        >
          <input
            type="radio"
            checked={mode === "rupees"}
            onChange={() => setMode("rupees")}
            className="accent-emerald-600"
          />
          <span className="text-gray-700">Invest in Rupees</span>
        </label>
        <label
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setMode("grams")}
        >
          <input
            type="radio"
            checked={mode === "grams"}
            onChange={() => setMode("grams")}
            className="accent-emerald-600"
          />
          <span className="text-gray-700">Invest in Grams</span>
        </label>
      </div>

      {/* Input box */}
      <div className="px-5">
        <div className="flex items-center justify-between border-2 border-emerald-500 rounded-lg px-4 py-3 text-lg font-semibold bg-white shadow-sm">
          {mode === "rupees" ? (
            <>
              <input
                type="number"
                value={amount}
                min={10}
                onChange={(e) => {
                const val = Number(e.target.value);
                setAmount(val < 10 ? 10 : val); 
            }}
                    className="bg-transparent outline-none w-24 text-gray-900"
              />
              <span className="text-gray-600">= {grams}g</span>
            </>
          ) : (
            <>
              <input
                type="number"
                value={grams}
                min={(100 / goldRate).toFixed(4)}
                onChange={(e) => {
                   const val = Number(e.target.value);
                    setAmount(val * goldRate < 100 ? 100 : val * goldRate); // 👈 validation
                }}
                className="bg-transparent outline-none w-24 text-gray-900"
              />
              <span className="text-gray-600">₹{amount.toFixed(0)}</span>
            </>
          )}
        </div>
      </div>

      {/* Live Price */}
      {/* <div className="px-5 mt-3 text-sm text-gray-600">
        <span className="text-red-500 font-medium">● LIVE</span>{" "}
        Price: <span className="font-semibold text-gray-900">₹{goldRate.toLocaleString()}/g</span>{" "}
        + {gst * 100}% GST
      </div> */}

      {/* Recommended */}
      <div className="px-5 m-4">
        <p className="text-sm text-gray-700 mb-2">Recommended</p>
        <div className="flex gap-3 flex-wrap">
          {quickAmounts.map((amt) => (
            <button
              key={amt}
              onClick={() => {
                setMode("rupees");
                setAmount(amt);
              }}
              className={`w-24 px-6 py-2 rounded-md border font-semibold transition ${
                amount === amt
                  ? "bg-emerald-600 border-emerald-600 text-white"
                  : "border-emerald-500 text-emerald-600 hover:bg-emerald-50"
              }`}
            >
              ₹{amt}
            </button>
          ))}
        </div>
      </div>

      {/* Terms */}
      <div className="flex items-start px-5 mt-auto m-4 text-xs text-gray-600">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
          className="mt-0.5 mr-2 w-4 h-4 accent-emerald-600"
        />
        <label>
          By continuing, you agree to the{" "}
          <span className="text-emerald-700 font-medium cursor-pointer">
            Terms and Conditions
          </span>{" "}
          and creation of a gold account.
        </label>
      </div>

      {/* Bottom button */}
      <button
        disabled={!checked}
        className={`w-full py-4 font-semibold ${
          checked
            ? "bg-emerald-600 text-white"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      >
        PROCEED
      </button>
    </div>
  );
}
