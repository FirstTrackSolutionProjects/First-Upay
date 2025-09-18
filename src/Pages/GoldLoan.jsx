import React, { useState } from "react";

export default function GoldLoan() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    loanAmount: "",
    tenure: "",
    city: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your Gold Loan request has been submitted!");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-xl">
      {/* Header */}
        <img
            src="/images/gold-loan.jpg"
            alt="GoldLoan"
            className="w-full h-96 object-cover lg:h-auto"
          />

      <h2 className="text-2xl font-bold text-gray-800 mb-2">Gold Loan</h2>
      <p className="text-gray-600 mb-6">
        Unlock the value of your gold instantly. Apply for quick and secure gold loans 
        with flexible repayment options.
      </p>

      {/* Loan Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold text-gray-700">💰 High Loan Value</h3>
          <p className="text-sm text-gray-500">Get maximum loan against your gold ornaments.</p>
        </div>
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold text-gray-700">⚡ Instant Processing</h3>
          <p className="text-sm text-gray-500">Quick approval and same-day disbursal.</p>
        </div>
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold text-gray-700">📅 Flexible Tenure</h3>
          <p className="text-sm text-gray-500">Choose tenure from 3 months to 2 years.</p>
        </div>
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold text-gray-700">🔒 100% Safe</h3>
          <p className="text-sm text-gray-500">Your gold is stored securely with full insurance.</p>
        </div>
      </div>

      {/* Loan Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
          required
        />
        <input
          type="tel"
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
          required
        />
        <input
          type="number"
          name="loanAmount"
          placeholder="Loan Amount Needed (₹)"
          value={formData.loanAmount}
            min={500} 
            max={100000}
           onChange={(e) => {
          let val = Number(e.target.value);
          if (val > 100000) val = 100000;
          setFormData({ ...formData, loanAmount: val });
        }}
          className="w-full p-3 border rounded-lg"
          required
        />
        <select
          name="tenure"
          value={formData.tenure}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
          required
        >
          <option value="">Select Tenure</option>
          <option value="3">3 Months</option>
          <option value="6">6 Months</option>
          <option value="12">12 Months</option>
          <option value="24">24 Months</option>
        </select>
        <input
          type="text"
          name="city"
          placeholder="Your City"
          value={formData.city}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
          required
        />

        <button
          type="submit"
          className="w-full bg-yellow-500 text-white py-3 rounded-lg font-semibold hover:bg-yellow-600 transition"
        >
          Apply for Gold Loan
        </button>
      </form>
    </div>
  );
}
