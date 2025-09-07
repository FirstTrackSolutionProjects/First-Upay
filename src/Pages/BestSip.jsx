// BestSip.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaRocket, FaLockOpen, FaCalendarAlt } from "react-icons/fa";

export default function BestSip() {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const type = query.get("type");

  // heading & description dynamic banaye
  let heading = "Best SIP Funds";
  let subHeading = "Top Performing SIP Plans";
  let description = "Grow your money with hand-picked funds. Perfect for long-term goals.";

  if (type === "growth") {
    heading = "High Growth SIP Funds";
    subHeading = "Boost Your Portfolio";
    description = "Funds focused on faster wealth creation with higher risk.";
  } else if (type === "diversify") {
    heading = "Diversify SIP Funds";
    subHeading = "Balanced & Secure";
    description = "Mix of large, mid and small caps for stability & growth.";
  } else if (type === "start100") {
    heading = "Start SIP with ₹100";
    subHeading = "Pocket Friendly Plans";
    description = "Perfect for beginners starting small investments.";
  }

  const funds = [
    {
      id: 1,
      name: "SBI Contra Fund",
      category: "Equity: Contra",
      return5Y: "28.88%",
      minInvest: "₹500",
      fundSize: "₹47,389.62 Cr",
      logo: "/logos/sbi.png",
      link: "/funds/sbi-contra",
    },
    {
      id: 2,
      name: "HDFC Flexi Cap Fund",
      category: "Equity: Flexi Cap",
      return5Y: "27.37%",
      minInvest: "₹100",
      fundSize: "₹80,642.30 Cr",
      logo: "/logos/hdfc.png",
      link: "/funds/hdfc-flexi",
    },
    {
      id: 3,
      name: "ICICI Prudential Bluechip Fund",
      category: "Equity: Large Cap",
      return5Y: "25.12%",
      minInvest: "₹100",
      fundSize: "₹38,452.10 Cr",
      logo: "/logos/icici.png",
      link: "/funds/icici-bluechip",
    },
    {
      id: 4,
      name: "Axis Small Cap Fund",
      category: "Equity: Small Cap",
      return5Y: "32.45%",
      minInvest: "₹500",
      fundSize: "₹14,762.89 Cr",
      logo: "/logos/axis.png",
      link: "/funds/axis-smallcap",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
      {/* Header */}
      <div className="flex items-center p-4 border-b border-gray-200 bg-white shadow-sm">
        <h1 className="flex-1 text-center text-lg font-semibold text-indigo-700">
          {heading}
        </h1>
      </div>

      {/* Top Section */}
      <div className="p-6 bg-gradient-to-r from-indigo-500 to-teal-500 text-white rounded-b-3xl shadow-md">
        <h2 className="text-lg font-bold">{subHeading}</h2>
        <p className="text-sm opacity-90 mt-1">{description}</p>
        <div className="flex gap-3 mt-3">
          <span className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full text-sm">
            <FaRocket /> High Growth
          </span>
          <span className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full text-sm">
            <FaLockOpen /> No Lock-in
          </span>
          <span className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full text-sm">
            <FaCalendarAlt /> Ideal 3+ Yrs
          </span>
        </div>
      </div>

      {/* Shortlisted Funds */}
      <div className="px-6 mt-6">
        <h3 className="text-base font-bold text-gray-800">Recommended Funds</h3>
        <p className="text-sm text-gray-600 mb-4">
          Based on expert analysis & performance.
        </p>

        <div className="space-y-4">
          {funds.map((fund) => (
            <Link
              key={fund.id}
              to={fund.link}
              className="block bg-white border border-gray-200 rounded-xl shadow hover:shadow-md transition p-4"
            >
              <div className="flex items-center gap-3">
                <img
                  src={fund.logo}
                  alt={fund.name}
                  className="w-12 h-12 rounded-md object-contain border"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{fund.name}</h4>
                  <p className="text-xs text-gray-500">{fund.category}</p>
                </div>
              </div>
              <div className="flex justify-between text-sm mt-3 border-t pt-3">
                <p>
                  <span className="block font-bold">{fund.return5Y}</span>
                  <span className="text-xs text-gray-500">5Y Return</span>
                </p>
                <p>
                  <span className="block font-bold">{fund.minInvest}</span>
                  <span className="text-xs text-gray-500">Min Invest</span>
                </p>
                <p>
                  <span className="block font-bold">{fund.fundSize}</span>
                  <span className="text-xs text-gray-500">Fund Size</span>
                </p>
              </div>
              <p className="text-indigo-600 text-sm font-medium mt-2">
                View Details →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
