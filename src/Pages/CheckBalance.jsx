import React, { useState } from "react";
import { Wallet, PlusCircle, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function CheckBalance() {
  const [showSheet, setShowSheet] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [pin, setPin] = useState("");

   const correctPin = "1234";

   const handleSubmit = (e) => {
    e.preventDefault();
    if (pin === correctPin) {
      setAuthenticated(true);
    } else {
      alert("Incorrect PIN! Try again.");
      setPin("");
    }
  };

if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-50 to-blue-100 m-4">
        <div className="bg-red-100 p-8 rounded-2xl shadow-lg w-80 text-center">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Enter PIN</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="password"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              maxLength={4}
              className="w-full text-center text-2xl tracking-widest border rounded-lg py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="_ _ _ _"
            />
            <button
              type="submit"
              className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 transition"
            >
              Unlock
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-orange-100 text-gray-900 m-4 p-4 relative">
      {/* Header */}
      <div className="flex items-center justify-center px-4 py-3 border-b shadow-sm">
        <h1 className="text-center font-extrabold">Check Balance</h1>
      </div>

      {/* RuPay Card Banner */}
      <div className="m-4 rounded-xl bg-indigo-50 border border-indigo-200 p-4 flex items-center justify-between">
        <div>
          <h2 className="font-semibold text-indigo-700">RuPay Credit Card on UPI</h2>
          <p className="text-sm text-indigo-600">Enjoy rewards on all payments</p>
        </div>
        <img
          src="https://img.icons8.com/color/96/rupee.png"
          alt="rupay"
          className="w-12 h-12"
        />
      </div>

      {/* Accounts */}
      <div className="space-y-3 px-4">
        <div className="bg-white rounded-xl shadow p-4 flex justify-between items-center">
          <div>
            <p className="font-medium">UPI Lite</p>
            <p className="text-sm text-gray-500">Pin-less payments up to ₹1,000</p>
          </div>
          <Link to="/upi-lite">
            <button className="text-indigo-600 font-medium">Try Now</button>
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow p-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Wallet className="w-5 h-5 text-gray-500" />
            <div>
              <p className="font-medium">PhonePe Wallet</p>
              <p className="text-sm text-gray-500">Balance: ₹0</p>
            </div>
          </div>
          <Link to="/wallet">
            <button className="text-indigo-600 font-medium">Activate</button>
          </Link>
        </div>

        {/* Add UPI Account - Clickable */}
        <div
          onClick={() => setShowSheet(true)}
          className="bg-white rounded-xl shadow p-4 flex justify-between items-center cursor-pointer hover:bg-gray-100 transition"
        >
          <div className="flex items-center gap-2">
            <PlusCircle className="w-5 h-5 text-gray-500" />
            <p className="font-medium">Add UPI account</p>
          </div>
          <span className="text-gray-400">›</span>
        </div>
      </div>

      {/* Offer Banner */}
      <div className="m-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-5">
        <h2 className="text-lg font-semibold">
          Get your Lifetime Free <span className="font-bold">Axis Neo Card</span>
        </h2>
        <p className="text-sm mt-1">Save ₹10,000 annually</p>
        <button className="mt-3 px-4 py-2 bg-white text-indigo-600 rounded-lg font-medium">
          Apply Now
        </button>
      </div>

      {/* Bottom Sheet */}
      {showSheet && (
        <div className="fixed inset-0 bg-black/40 flex items-end z-50">
          <div className="bg-white w-full rounded-t-2xl p-6 shadow-lg animate-slide-up">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Add UPI account</h2>
              <button onClick={() => setShowSheet(false)}>
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* Options */}
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b pb-3 cursor-pointer">
                <Link
                to="/add-bank" className="font-medium">🏦 Bank Account</Link>
                <span className="text-gray-400">›</span>
              </div>

              <div className="flex justify-between items-center border-b pb-3 cursor-pointer">
                <Link to="/rupay-upi"
                className="font-medium">💳 RuPay on UPI</Link>
                <span className="text-gray-400">›</span>
              </div>

              <div className="flex justify-between items-center cursor-pointer">
                <Link to="/credit-card" className="font-medium">📱 Credit Line on UPI</Link>
                <span className="text-gray-400">›</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Slide-up animation */}
      <style jsx>{`
        .animate-slide-up {
          animation: slideUp 0.3s ease-out;
        }
        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
