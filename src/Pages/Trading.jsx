import { useState } from "react";
import { FaChartLine, FaSearchDollar, FaArrowUp, FaArrowDown } from "react-icons/fa";

export default function Trading() {
  const [stocks] = useState([
    { name: "Reliance", price: 2560, change: "+1.2%" },
    { name: "TCS", price: 3720, change: "-0.5%" },
    { name: "Infosys", price: 1520, change: "+0.9%" },
    { name: "HDFC Bank", price: 1675, change: "-0.2%" },
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
  );
}
