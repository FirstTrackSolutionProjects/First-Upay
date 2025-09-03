import { useState } from "react";

export default function Flight() {
  const [form, setForm] = useState({ from: "", to: "", date: "", passengers: 1 });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Searching flights from ${form.from} to ${form.to} on ${form.date} for ${form.passengers} passenger(s)`);
  };

  return (
     <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 px-4">
      {/* Image */}
       <div className="w-full md:w-1/2 flex justify-center m-4">
        <img
          src="/images/flight.jpg" 
          alt="Flight Travel Illustration"
          className="w-full h-80 object-cover"
        />
      </div>
  
     <div className="w-full mx-auto p-6 bg-white shadow-lg rounded-2xl mt-8">
        <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">
          Fly with Ease ✈️
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="from" placeholder="From city..." value={form.from} onChange={handleChange} className="w-full p-3 border rounded-lg" />
          <input type="text" name="to" placeholder="To city..." value={form.to} onChange={handleChange} className="w-full p-3 border rounded-lg" />
          <input type="date" name="date" value={form.date} onChange={handleChange} className="w-full p-3 border rounded-lg" />
          <input type="number" name="passengers" min="1" value={form.passengers} onChange={handleChange} className="w-full p-3 border rounded-lg" />
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700">Search Flights</button>
        </form>
      </div>
    </div>
  );
}
