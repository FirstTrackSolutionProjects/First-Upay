import { useState } from "react";

export default function Hotel() {
  const [form, setForm] = useState({ city: "", checkin: "", checkout: "", guests: 1 });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Searching hotels in ${form.city} from ${form.checkin} to ${form.checkout} for ${form.guests} guest(s)`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-pink-600 mb-6 text-center">
          Stay at Hotels 🏨
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="city" placeholder="Enter city..." value={form.city} onChange={handleChange} className="w-full p-3 border rounded-lg" />
          <input type="date" name="checkin" value={form.checkin} onChange={handleChange} className="w-full p-3 border rounded-lg" />
          <input type="date" name="checkout" value={form.checkout} onChange={handleChange} className="w-full p-3 border rounded-lg" />
          <input type="number" name="guests" min="1" value={form.guests} onChange={handleChange} className="w-full p-3 border rounded-lg" />
          <button type="submit" className="w-full bg-pink-600 text-white py-3 rounded-lg font-medium hover:bg-pink-700">Search Hotels</button>
        </form>
      </div>
    </div>
  );
}
