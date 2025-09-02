import { useState } from "react";

export default function GoldSip() {
  const [form, setForm] = useState({ amount: "", tenure: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Investing ₹${form.amount} per month for ${form.tenure} months in Gold SIP`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-yellow-50 p-6">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md border-2 border-amber-400">
        <h2 className="text-2xl font-bold text-amber-600 mb-6 text-center">
          Monthly Gold SIP 🪙
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="number"
            name="amount"
            placeholder="Monthly Investment (₹)..."
            value={form.amount}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
            required
          />
          <input
            type="number"
            name="tenure"
            placeholder="Tenure in months..."
            value={form.tenure}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
            required
          />
          <button
            type="submit"
            className="w-full bg-amber-500 text-white py-3 rounded-lg font-medium hover:bg-amber-600"
          >
            Start SIP
          </button>
        </form>
      </div>
    </div>
  );
}
