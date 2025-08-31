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
    const rate = parseFloat(interestRate) / 12 / 100; // monthly rate
    const time = parseFloat(tenure); // months

    const emiValue =
      (principal * rate * Math.pow(1 + rate, time)) /
      (Math.pow(1 + rate, time) - 1);

    setEmi(emiValue.toFixed(2));
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">EMI Calculator</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white shadow-md rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-2">Loan Amount</h3>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-purple-200"
            placeholder="Enter amount"
          />
        </div>

        <div className="bg-white shadow-md rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-2">Interest Rate (%)</h3>
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Annual %"
          />
        </div>

        <div className="bg-white shadow-md rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-2">Tenure (Months)</h3>
          <input
            type="number"
            value={tenure}
            onChange={(e) => setTenure(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-green-200"
            placeholder="Enter months"
          />
        </div>
      </div>

      <button
        onClick={calculateEMI}
        className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow hover:bg-purple-700 transition"
      >
        Calculate EMI
      </button>

      {emi && (
        <div className="mt-6 bg-white shadow-md rounded-xl p-6">
          <h3 className="text-xl font-semibold">Monthly EMI</h3>
          <p className="text-2xl font-bold text-purple-600 mt-2">₹ {emi}</p>
        </div>
      )}
    </div>
  );
};

export default EMICalculator;
