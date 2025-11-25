import React, { useState } from "react";

const SIPCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [tenure, setTenure] = useState("");
  const [result, setResult] = useState(null);

  const calculateSIP = () => {
    if (!monthlyInvestment || !interestRate || !tenure) {
      alert("Please fill all fields");
      return;
    }

    const P = parseFloat(monthlyInvestment);
    const r = parseFloat(interestRate) / 12 / 100;
    const n = parseFloat(tenure);

    // SIP Formula -> M = P * [ ( (1+r)^n - 1 ) / r ] * (1+r)
    const finalAmount =
      P * (((Math.pow(1 + r, n) - 1) / r) * (1 + r));

    const totalInvested = P * n;
    const totalReturn = finalAmount - totalInvested;

    setResult({
      finalAmount: finalAmount.toFixed(2),
      totalInvested: totalInvested.toFixed(2),
      totalReturn: totalReturn.toFixed(2),
    });
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-200 via-white to-purple-200 p-6">
      <div className="backdrop-blur-xl bg-white/30 shadow-xl border border-white/40 rounded-2xl p-10 max-w-4xl w-full">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
          SIP Calculator
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {/* Monthly Investment */}
          <div className="bg-white/70 backdrop-blur-lg shadow-md rounded-xl p-6 border border-gray-200/60">
            <h3 className="text-lg font-semibold mb-2 text-gray-700">Monthly Investment</h3>
            <input
              type="number"
              value={monthlyInvestment}
              onChange={(e) => setMonthlyInvestment(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300"
              placeholder="₹ per month"
            />
          </div>

          {/* Expected Return */}
          <div className="bg-white/70 backdrop-blur-lg shadow-md rounded-xl p-6 border border-gray-200/60">
            <h3 className="text-lg font-semibold mb-2 text-gray-700">Expected Return (%)</h3>
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Annual %"
            />
          </div>

          {/* Tenure in Months */}
          <div className="bg-white/70 backdrop-blur-lg shadow-md rounded-xl p-6 border border-gray-200/60">
            <h3 className="text-lg font-semibold mb-2 text-gray-700">Tenure (Months)</h3>
            <input
              type="number"
              value={tenure}
              onChange={(e) => setTenure(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-300"
              placeholder="Enter months"
            />
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={calculateSIP}
            className="bg-purple-600 text-white px-10 py-3 rounded-xl shadow-lg text-lg hover:bg-purple-700 transition-all"
          >
            Calculate SIP
          </button>
        </div>

        {result && (
          <div className="mt-8 bg-white/80 backdrop-blur-xl shadow-md rounded-xl p-8 border border-gray-200/60 text-center animate-fadeIn">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Results</h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-gray-600 text-sm">Total Invested</p>
                <p className="text-3xl font-bold text-blue-700 mt-2">₹ {result.totalInvested}</p>
              </div>

              <div>
                <p className="text-gray-600 text-sm">Total Returns</p>
                <p className="text-3xl font-bold text-green-700 mt-2">₹ {result.totalReturn}</p>
              </div>

              <div>
                <p className="text-gray-600 text-sm">Final Value</p>
                <p className="text-3xl font-bold text-purple-700 mt-2">₹ {result.finalAmount}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SIPCalculator;
