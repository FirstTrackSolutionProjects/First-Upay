import React, { useState } from "react";

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [tenure, setTenure] = useState("");
  const [emi, setEmi] = useState(null);

  const calculateEMI = () => {
    if (!loanAmount || !interestRate || !tenure) {
      alert("Please fill all fields");
      return;
    }

    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 12 / 100;
    const time = parseFloat(tenure);

    const emiValue =
      (principal * rate * Math.pow(1 + rate, time)) /
      (Math.pow(1 + rate, time) - 1);

    setEmi(emiValue.toFixed(2));
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-purple-200 via-white to-blue-200 p-6">
      <div className="backdrop-blur-xl bg-white/30 shadow-xl border border-white/40 rounded-2xl p-10 max-w-4xl w-full">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
          EMI Calculator
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {/* Loan Amount */}
          <div className="bg-white/70 backdrop-blur-lg shadow-md rounded-xl p-6 border border-gray-200/60">
            <h3 className="text-lg font-semibold mb-2 text-gray-700">Loan Amount</h3>
            <input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300"
              placeholder="Enter amount"
            />
          </div>

          {/* Interest Rate */}
          <div className="bg-white/70 backdrop-blur-lg shadow-md rounded-xl p-6 border border-gray-200/60">
            <h3 className="text-lg font-semibold mb-2 text-gray-700">Interest Rate (%)</h3>
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Annual %"
            />
          </div>

          {/* Tenure */}
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
            onClick={calculateEMI}
            className="bg-purple-600 text-white px-10 py-3 rounded-xl shadow-lg text-lg hover:bg-purple-700 transition-all"
          >
            Calculate EMI
          </button>
        </div>

        {emi && (
          <div className="mt-8 bg-white/80 backdrop-blur-xl shadow-md rounded-xl p-8 border border-gray-200/60 text-center animate-fadeIn">
            <h3 className="text-xl font-semibold text-gray-700">Monthly EMI</h3>
            <p className="text-4xl font-bold text-purple-700 mt-3">₹ {emi}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EMICalculator;
