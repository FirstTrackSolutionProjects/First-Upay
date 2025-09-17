import { useState } from "react";
import { FaChartLine, FaSearchDollar, FaArrowUp, FaArrowDown } from "react-icons/fa";

export default function Trading() {
  const [stocks] = useState([
    { name: "Reliance", price: 2560, change: "+1.2%" },
    { name: "TCS", price: 3720, change: "-0.5%" },
    { name: "Infosys", price: 1520, change: "+0.9%" },
    { name: "HDFC Bank", price: 1675, change: "-0.2%" },
    { name: "ICICI Bank", price: 980, change: "+0.6%" },
    { name: "Kotak Bank", price: 1825, change: "-1.1%" },
    { name: "Axis Bank", price: 1065, change: "+0.4%" },
    { name: "State Bank of India", price: 675, change: "+2.0%" },
    { name: "Bajaj Finance", price: 7200, change: "-0.8%" },
    { name: "Adani Enterprises", price: 2460, change: "+3.2%" },
    { name: "Adani Green", price: 1380, change: "-2.5%" },
    { name: "Mahindra & Mahindra", price: 1740, change: "+1.7%" },
    { name: "Tata Motors", price: 915, change: "+0.9%" },
    { name: "Maruti Suzuki", price: 11850, change: "-0.6%" },
    { name: "Hindustan Unilever", price: 2460, change: "+0.5%" },
    { name: "ITC", price: 480, change: "-0.3%" },
    { name: "Asian Paints", price: 3200, change: "+1.1%" },
    { name: "JSW Steel", price: 825, change: "-1.4%" },
    { name: "Tata Steel", price: 145, change: "+2.8%" },
    { name: "Power Grid", price: 280, change: "+0.7%" },
    { name: "NTPC", price: 325, change: "-0.4%" },
    { name: "Coal India", price: 270, change: "+1.9%" },
    { name: "Sun Pharma", price: 1450, change: "-0.9%" },
    { name: "Dr. Reddy's", price: 5900, change: "+1.3%" },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-6">
      {/* Header */}
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-emerald-700 mb-6">
          📈 Live Trading Dashboard
        </h1>

        {/* Overview Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded-xl shadow text-center">
            <FaChartLine className="text-green-600 text-2xl mx-auto mb-2" />
            <h2 className="text-sm text-gray-500">Portfolio Value</h2>
            <p className="text-lg font-bold">₹5,20,000</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow text-center">
            <FaSearchDollar className="text-blue-600 text-2xl mx-auto mb-2" />
            <h2 className="text-sm text-gray-500">Today’s Profit</h2>
            <p className="text-lg font-bold text-green-600">+₹2,450</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow text-center">
            <FaArrowUp className="text-emerald-600 text-2xl mx-auto mb-2" />
            <h2 className="text-sm text-gray-500">Top Gainer</h2>
            <p className="text-lg font-bold">Reliance</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow text-center">
            <FaArrowDown className="text-red-500 text-2xl mx-auto mb-2" />
            <h2 className="text-sm text-gray-500">Top Loser</h2>
            <p className="text-lg font-bold">TCS</p>
          </div>
        </div>

        {/* Stock List */}
        <div className="bg-white rounded-xl shadow p-4">
          <h2 className="text-xl font-semibold mb-4">🔥 Popular Stocks</h2>

          {/* Mobile View - Cards */}
          <div className="space-y-3 sm:hidden">
            {stocks.map((stock, idx) => (
              <div
                key={idx}
                className="border rounded-lg p-3 flex justify-between items-center"
              >
                <div>
                  <p className="font-semibold">{stock.name}</p>
                  <p className="text-sm text-gray-500">₹{stock.price}</p>
                  <p
                    className={`font-semibold ${
                      stock.change.startsWith("+")
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    {stock.change}
                  </p>
                </div>
                <button className="px-3 py-1 bg-emerald-600 text-white rounded-full text-xs hover:bg-emerald-700">
                  Trade
                </button>
              </div>
            ))}
          </div>

          {/* Desktop View - Table */}
          <div className="hidden sm:block">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-emerald-50">
                  <th className="p-3">Company</th>
                  <th className="p-3">Price</th>
                  <th className="p-3">Change</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {stocks.map((stock, idx) => (
                  <tr key={idx} className="border-t hover:bg-emerald-50">
                    <td className="p-3 font-medium">{stock.name}</td>
                    <td className="p-3">₹{stock.price}</td>
                    <td
                      className={`p-3 font-semibold ${
                        stock.change.startsWith("+")
                          ? "text-green-600"
                          : "text-red-500"
                      }`}
                    >
                      {stock.change}
                    </td>
                    <td className="p-3">
                      <button className="px-4 py-1 bg-emerald-600 text-white rounded-full text-sm hover:bg-emerald-700">
                        Trade
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
