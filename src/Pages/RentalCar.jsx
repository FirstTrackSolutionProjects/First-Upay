import { useState } from "react";

export default function RentalCar() {
  const [form, setForm] = useState({
    pickup: "",
    dropoff: "",
    date: "",
    days: 1,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Searching cars from ${form.pickup} to ${form.dropoff} on ${form.date} for ${form.days} day(s)`
    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-green-600 mb-6 text-center">
          Rent a Car 🚗
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="pickup"
            placeholder="Pickup location..."
            value={form.pickup}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="text"
            name="dropoff"
            placeholder="Drop-off location..."
            value={form.dropoff}
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
          <input
            type="number"
            name="days"
            min="1"
            value={form.days}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700"
          >
            Search Cars
          </button>
        </form>
      </div>
    </div>
  );
}
