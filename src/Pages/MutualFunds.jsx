import React from "react";
import { Link } from "react-router-dom";
import {
  FaChartLine,
  FaChartPie,
  FaWallet,
  FaHandHoldingUsd,
  FaBuilding,
  FaArrowUp,
  FaRegFileAlt,
  FaLeaf,
} from "react-icons/fa";

export default function MutualFunds() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
      
      {/* Header */}
      <div className="flex items-center p-4 border-b border-gray-200 bg-white shadow-sm ">
         <img
            src="/images/mutual-fund.jpg"
            alt="MutualFund"
            className="w-full h-96 object-cover lg:h-auto"
          />

       
      </div>

      {/* Investment Ideas */}
      <div className="px-6 mt-4">
        <h2 className="text-lg font-bold text-gray-800">Investment Options</h2>
        <p className="text-sm text-gray-600 mb-4">
          Explore funds curated to match your goals
        </p>

        <div className="grid grid-cols-2 gap-4">
          <Link
            to="/sip-funds?type=best"
            className="p-4 rounded-xl bg-indigo-50 border border-indigo-200 shadow hover:bg-indigo-100 transition"
          >
            <FaWallet className="text-indigo-600 text-3xl mb-2" />
            <h3 className="font-semibold">Best SIP Plans</h3>
            <p className="text-xs text-gray-600">Invest for long-term goals</p>
          </Link>

          <Link
            to="/sip-funds?type=start100"
            className="p-4 rounded-xl bg-teal-50 border border-teal-200 shadow hover:bg-teal-100 transition"
          >
            <FaHandHoldingUsd className="text-teal-600 text-3xl mb-2" />
            <h3 className="font-semibold">Start with ₹100</h3>
            <p className="text-xs text-gray-600">Easy pocket-friendly SIPs</p>
          </Link>

          <Link
            to="/sip-funds?type=growth"
            className="p-4 rounded-xl bg-pink-50 border border-pink-200 shadow hover:bg-pink-100 transition"
          >
            <FaChartLine className="text-pink-600 text-3xl mb-2" />
            <h3 className="font-semibold">High Growth</h3>
            <p className="text-xs text-gray-600">Boost your portfolio faster</p>
          </Link>

          <Link
            to="/sip-funds?type=diversify"
            className="p-4 rounded-xl bg-yellow-50 border border-yellow-200 shadow hover:bg-yellow-100 transition"
          >
            <FaChartPie className="text-yellow-600 text-3xl mb-2" />
            <h3 className="font-semibold">Diversify</h3>
            <p className="text-xs text-gray-600">Balanced and secure funds</p>
          </Link>
        </div>
      </div>

      {/* More For You */}
      <div className="px-6 mt-6">
        <h2 className="text-lg font-bold text-gray-800">More for You</h2>
        <div className="flex justify-around mt-3">
          <Link to="/top-companies" className="flex flex-col items-center">
            <FaBuilding className="text-indigo-600 text-2xl mb-1" />
            <p className="text-xs text-gray-700">Top Companies</p>
          </Link>

          <Link to="/trending" className="flex flex-col items-center">
            <FaArrowUp className="text-teal-600 text-2xl mb-1" />
            <p className="text-xs text-gray-700">Trending</p>
          </Link>

          <Link to="/tax-saver" className="flex flex-col items-center">
            <FaRegFileAlt className="text-pink-600 text-2xl mb-1" />
            <p className="text-xs text-gray-700">Tax Saver</p>
          </Link>

          <Link to="/new-offering" className="flex flex-col items-center">
            <FaLeaf className="text-yellow-600 text-2xl mb-1" />
            <p className="text-xs text-gray-700">New Funds</p>
          </Link>
        </div>
      </div>

      {/* Loan Against MF */}
      <div className="px-6 mt-6 mb-6">
        <Link
          to="/loan-against-mf"
          className="w-full block p-4 bg-indigo-600 text-white rounded-xl shadow-md hover:bg-indigo-500 transition"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">Loan Against Mutual Funds</h3>
              <p className="text-xs text-indigo-100">
                Get instant cash without selling your funds
              </p>
            </div>
            <FaHandHoldingUsd className="text-white text-3xl" />
          </div>
        </Link>
      </div>
    </div>
  );
}
