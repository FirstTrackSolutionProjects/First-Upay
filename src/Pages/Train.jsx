import { useState } from "react";

export default function Train() {
  const [form, setForm] = useState({ from: "", to: "", date: "", classType: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Searching trains from ${form.from} to ${form.to} on ${form.date} in ${form.classType}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-green-600 mb-6 text-center">
          Reserve Your Train Seat 🚆
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="from" placeholder="From station..." value={form.from} onChange={handleChange} className="w-full p-3 border rounded-lg" />
          <input type="text" name="to" placeholder="To station..." value={form.to} onChange={handleChange} className="w-full p-3 border rounded-lg" />
          <input type="date" name="date" value={form.date} onChange={handleChange} className="w-full p-3 border rounded-lg" />
          <select name="classType" value={form.classType} onChange={handleChange} className="w-full p-3 border rounded-lg">
            <option value="">Select Class</option>
            <option value="Sleeper">Sleeper</option>
            <option value="3AC">3AC</option>
            <option value="2AC">2AC</option>
            <option value="1AC">1AC</option>
          </select>
          <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700">Search Trains</button>
        </form>
      </div>
    </div>
  );
}
