import { useState } from "react";

export default function HealthInsurance() {
  const [form, setForm] = useState({ members: "", sumInsured: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Applying for Health Insurance for ${form.members} member(s), Sum Insured ₹${form.sumInsured}`
    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50 p-6">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md border-2 border-green-400">
        <h2 className="text-2xl font-bold text-green-600 mb-6 text-center">
          Health Insurance ❤️
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="number"
            name="members"
            placeholder="Number of Family Members"
            value={form.members}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="number"
            name="sumInsured"
            placeholder="Sum Insured (₹)"
            value={form.sumInsured}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700"
          >
            Get Health Plan
          </button>
        </form>
      </div>
    </div>
  );
}
