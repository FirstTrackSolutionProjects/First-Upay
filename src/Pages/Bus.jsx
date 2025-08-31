import { useState } from "react";

export default function Bus() {
  const [form, setForm] = useState({ from: "", to: "", date: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Searching buses from ${form.from} to ${form.to} on ${form.date}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-indigo-600 mb-6 text-center">
          Book Your Bus Ride 🚍
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="from"
            placeholder="Leaving from..."
            value={form.from}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="text"
            name="to"
            placeholder="Going to..."
            value={form.to}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700"
          >
            Search Buses
          </button>
        </form>
      </div>
    </div>
  );
}
