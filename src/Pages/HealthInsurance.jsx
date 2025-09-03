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
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 px-4">
      {/* Image */}
       <div className="w-full md:w-1/2 flex justify-center m-4">
        <img
          src="/images/health.jpg" 
          alt="Health Insurance Illustration"
          className="w-full h-80 object-cover"
        />
      </div>
  
     <div className="w-full mx-auto p-6 bg-white shadow-lg rounded-2xl mt-8">
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
