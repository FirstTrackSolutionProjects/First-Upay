import React from "react";

const banks = [
  { name: "HDFC Bank Credit Card", logo: "/Bank/HDFC.png" },
  { name: "SBI Credit Card", logo: "/Bank/SBI.png" },
  { name: "Axis Bank Credit Card", logo: "/Bank/Axis.png" },
  { name: "ICICI Bank Credit Card", logo: "/Bank/icici.png" },
  { name: "Bank of Baroda Credit Card", logo: "/Bank/BOB.png" },
  { name: "Kotak Mahindra Bank Credit Card", logo: "/Bank/Kotak.png" },
  { name: "Yes Bank Credit Card", logo: "/Bank/yes.png" },
  { name: "Union Bank Credit Card", logo: "/Bank/Union.png" },
  { name: "Punjab National Bank Credit Card", logo: "/Bank/punjab.png" },
  { name: "Bandhan Bank", logo: "/Bank/bandhan.png"},
  { name: "Induslnd Bank", logo: "/Bank/induslnd.png"},
  { name: "IDFC Bank", logo: "/Bank/idfc.png"},
];

const RupayUpi = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-4">
     

      {/* Banner */}
      <div className="bg-purple-100 rounded-xl p-5 mb-6 text-center border border-purple-200 shadow-sm">
        <h2 className="text-xl font-bold text-purple-700">RupayUPI Credit Cards</h2>
        <p className="text-sm text-gray-600 mt-1">
          Link, scan and pay to earn rewards on your daily spends
        </p>
        <button className="mt-3 text-sm font-medium text-purple-600 hover:text-purple-800 underline">
          Learn more →
        </button>
      </div>

      {/* Search */}
      <div className="mb-5">
        <h3 className="font-semibold mb-2">Add a RupayUPI Credit Card</h3>
        <input
          type="text"
          placeholder="Search by bank name"
          className="w-full p-3 rounded-lg border border-gray-300 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
      </div>

      {/* Popular Banks */}
      <h3 className="font-semibold mb-3">Popular Banks</h3>
      <div className="grid grid-cols-3 gap-4">
        {banks.map((bank, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg p-3 cursor-pointer shadow-sm hover:shadow-md transition"
          >
            <img
              src={bank.logo}
              alt={bank.name}
              className="w-10 h-10 object-contain mb-2"
            />
            <p className="text-xs text-center text-gray-700">{bank.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RupayUpi;
