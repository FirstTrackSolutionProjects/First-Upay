import { useState } from "react";

export default function Cashback() {
  const [form, setForm] = useState({
    rewardPoints: "",
    cashbackAmount: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Redeeming ${form.rewardPoints} reward points and requesting cashback of ₹${form.cashbackAmount}`
    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-purple-600 mb-6 text-center">
          Rewards & Cashback 🎁
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="number"
            name="rewardPoints"
            placeholder="Enter reward points..."
            value={form.rewardPoints}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="number"
            name="cashbackAmount"
            placeholder="Enter cashback amount..."
            value={form.cashbackAmount}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700"
          >
            Redeem Now
          </button>
        </form>
      </div>
    </div>
  );
}
