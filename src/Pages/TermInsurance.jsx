import { useState } from "react";

export default function TermInsurance() {
  const [form, setForm] = useState({ name: "", age: "", coverage: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Applying for Term Insurance: ${form.name}, Age ${form.age}, Coverage ₹${form.coverage}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-indigo-50 p-6">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md border-2 border-indigo-400">
        <h2 className="text-2xl font-bold text-indigo-600 mb-6 text-center">
          Term Insurance 📄
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={form.age}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="number"
            name="coverage"
            placeholder="Coverage Amount (₹)"
            value={form.coverage}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700"
          >
            Apply Now
          </button>
        </form>
      </div>
    </div>
  );
}
