import { useState } from "react";

export default function VehicleInsurance() {
  const [form, setForm] = useState({ vehicleType: "", regNo: "", coverage: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Applying for ${form.vehicleType} insurance (Reg No: ${form.regNo}) with ${form.coverage} coverage`
    );
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 px-4">
      {/* Image */}
       <div className="w-full md:w-1/2 flex justify-center m-4">
        <img
          src="/images/vehicle.jpg" 
          alt="Vehicle Insurance Illustration"
          className="w-full h-80 object-cover"
        />
      </div>
  
     <div className="w-full mx-auto p-6 bg-white shadow-lg rounded-2xl mt-8">
        <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">
          Vehicle Insurance 🚗
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="vehicleType"
            placeholder="Car / Bike / Others"
            value={form.vehicleType}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="text"
            name="regNo"
            placeholder="Registration Number"
            value={form.regNo}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />
          <select
            name="coverage"
            value={form.coverage}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          >
            <option value="">Select Coverage</option>
            <option value="Third Party">Third Party</option>
            <option value="Comprehensive">Comprehensive</option>
          </select>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700"
          >
            Get Quote
          </button>
        </form>
      </div>
    </div>
  );
}
