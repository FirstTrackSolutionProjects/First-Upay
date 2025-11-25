// FundDetails.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";

export default function FundsDetail() {
  const { id } = useParams();

  const funds = {
    "sbi-contra": {
      name: "SBI Contra Fund",
      category: "Equity: Contra",
      minInvest: "₹500",
      sipDay: "9th of every month",
      estReturn: "₹61,083 in 5Y (+28.88% p.a.)",
      note: "Your SIP will be active until cancelled. You can modify or delete anytime.",
      logo: "/logos/SBI.png"
    },
    "hdfc-flexi": {
        name: "HDFC Flexi Cap Fund",
        category: "Equity: Flexi Cap",
        minInvest: "₹100",
        sipDay: "12th of every month",
        estReturn: "₹55,000 in 5Y (+27.37% p.a.)",
        note: "Your SIP will be active until cancelled.",
        logo: "/logos/hdfc-fund.jpeg"
    },
    "icici-bluechip": {
        name: "ICICI Prudential Bluechip Fund",
        category: "Equity: Large Cap",
        minInvest: "₹100",
        sipDay: "15th of every month",
        estReturn: "₹55,000 in 5Y (+25.12% p.a.)",
        note: "Your SIP will be active until cancelled.",
        logo: "/logos/icici-fund.png"
    },
    "parag-flexi": {
        name: "Parag Parikh Flexi Cap Fund",
        category: "Equity: Flexi Cap",
        minInvest: "₹1000",
        sipDay: "20th of every month",
        estReturn: "₹70,000 in 5Y (+32.45% p.a.)",
        note: "Your SIP will be active until cancelled.",
        logo: "/logos/parag-flexi.png"
    },
    "franklin-flexi": {
        name: "Franklin India Flexi Cap Fund",
        category: "Equity: Flexi Cap",
        minInvest: "₹500",
        sipDay: "25th of every month",
        estReturn: "₹62,000 in 5Y (+29.67% p.a.)",
        note: "Your SIP will be active until cancelled.",
        logo: "/logos/franklin-flexi.png"
    },
  };

  const fund = funds[id];

  if (!fund) return <p className="p-6 text-red-500">Fund not found!</p>;

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <div className="flex items-center p-4 border-b border-gray-200 bg-white shadow-sm">
        <Link to="/" className="text-indigo-600 font-medium">← Back</Link>
        <h1 className="flex-1 text-center text-lg font-semibold text-indigo-700">
          SIP details
        </h1>
      </div>

      {/* Fund Details */}
      <div className="p-6">
        <div className="bg-white rounded-2xl shadow p-6 border">
          <div className="flex items-center gap-3">
            <img src={fund.logo} alt={fund.name} className="w-12 h-12 border rounded-md" />
            <div>
              <h2 className="font-bold text-lg">{fund.name}</h2>
              <p className="text-sm text-gray-500">{fund.category}</p>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <p><strong>Day of SIP:</strong> {fund.sipDay}</p>
            <p><strong>Minimum Investment:</strong> {fund.minInvest}</p>
            <p className="text-green-600 font-medium">{fund.estReturn}</p>
            <p className="text-gray-600 text-sm">{fund.note}</p>
          </div>

          <button className="mt-6 w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold shadow hover:bg-indigo-700 transition">
            INVEST NOW
          </button>
        </div>
      </div>
    </div>
  );
}
