import React, { useState } from "react";
import { FaCreditCard, FaUniversity, FaQrcode } from "react-icons/fa";

const Wallet = () => {
  const [selected, setSelected] = useState("2lakh");

  const options = [
    {
      id: "2lakh",
      title: "Max Balance: ₹2,00,000",
      sub: "Video KYC required",
      benefits: [
        { icon: <FaCreditCard />, text: "Recharge using UPI / Cards" },
        { icon: <FaUniversity />, text: "Withdraw to bank anytime" },
        { icon: <FaQrcode />, text: "Pay via UPI QR code" },
      ],
      color: "border-green-500 bg-green-50",
      checked: "bg-green-100 border-green-600",
    },
    {
      id: "1lakh",
      title: "Max Balance: ₹1,00,000",
      sub: "No KYC needed",
      benefits: [],
      color: "border-indigo-400 bg-indigo-50",
      checked: "bg-indigo-100 border-indigo-600",
    },
  ];

  return (
    <div className="min-h-screen bg-sky-100 flex flex-col items-center p-4 m-4">
      <h1 className="text-xl font-extrabold text-gray-800 mb-2">
        Choose Your Wallet
      </h1>
      <p className="text-sm text-gray-600 mb-6">
        Add money easily using UPI, debit, or credit card
      </p>

      <div className="w-full max-w-md space-y-4">
        {options.map((opt) => (
          <div
            key={opt.id}
            onClick={() => setSelected(opt.id)}
            className={`cursor-pointer rounded-xl border p-4 transition ${
              selected === opt.id ? opt.checked : opt.color
            }`}
          >
          
            <div className="flex justify-between items-center">
              <div>
                <h2 className="font-semibold text-gray-800 ">{opt.title}</h2>
                <p className="text-sm text-gray-600">{opt.sub}</p>
              </div>
              <input
                type="radio"
                name="wallet"
                checked={selected === opt.id}
                readOnly
                className="h-5 w-5 text-green-600"
              />
            </div>
           
            {opt.benefits.length > 0 && (
              <ul className="mt-3 space-y-2">
                {opt.benefits.map((b, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    {b.icon} {b.text}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <button className="mt-6 w-full max-w-md bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition">
        Get Started
      </button>
    </div>
  );
};

export default Wallet;
