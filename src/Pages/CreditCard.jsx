import React from "react";

const creditCards = [
  { name: "HDFC Credit Card", logo: "/Bank/HDFC.png" },
  { name: "SBI Credit Card", logo: "/Bank/SBI.png" },
  { name: "Axis Bank Credit Card", logo: "/Bank/Axis.png" },
  { name: "ICICI Credit Card", logo: "/Bank/icici.png" },
  { name: "Bank of Baroda Credit Card", logo: "/Bank/BOB.png" },
  { name: "Kotak Mahindra Credit Card", logo: "/Bank/kotak.png" },
  { name: "Yes Bank Credit Card", logo: "/Bank/yes.png" },
  { name: "Union Bank Credit Card", logo: "/Bank/Union.png" },
  { name: "PNB Credit Card", logo: "/Bank/punjab.png" },
  { name: "Bandhan Bank", logo: "/Bank/bandhan.png"},
  { name: "Induslnd Bank", logo: "/Bank/induslnd.png"},
  { name: "IDFC Bank", logo: "/Bank/idfc.png"},
];

const CreditCard = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-4">
     

      {/* Banner */}
      <div className="bg-indigo-100 rounded-xl p-5 mb-6 text-center border border-indigo-200 shadow-sm">
        <img
            src="/images/credit-card .jpg"
            alt="CreditCard"
            className="w-full h-96 object-cover lg:h-auto"
          />
        <h2 className="text-xl font-bold text-indigo-700 m-3">Manage Your Credit Cards</h2>
        <p className="text-sm text-gray-600 mt-1">
          Link, scan, and pay with your credit cards to enjoy rewards & cashback
        </p>
      
      </div>

      {/* Search */}
      <div className="mb-5">
        <h3 className="font-semibold mb-2">Add a Credit Card</h3>
        <input
          type="text"
          placeholder="Search by bank name"
          className="w-full p-3 rounded-lg border border-gray-300 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>

      {/* Popular Credit Cards */}
      <h3 className="font-semibold mb-3">Popular Credit Cards</h3>
      <div className="grid grid-cols-3 gap-4">
        {creditCards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg p-3 cursor-pointer shadow-sm hover:shadow-md transition"
          >
            <img
              src={card.logo}
              alt={card.name}
              className="w-10 h-10 object-contain mb-2"
            />
            <p className="text-xs text-center text-gray-700">{card.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreditCard;
