import { useState } from "react";

export default function Cashback() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    transactionId: "",
    cashbackAmount: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
     `Cashback request submitted!\nName: ${form.name}\nEmail: ${form.email}\nTransaction ID: ${form.transactionId}\nAmount: ₹${form.cashbackAmount}`
    );
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 px-4">
      {/* Image */}
       <div className="w-full md:w-1/2 flex justify-center m-4">
        <img
          src="/images/cashback.jpg" 
          alt="Cashback Illustration"
          className="w-full h-80 object-cover"
        />
      </div>
  
     <div className="w-full mx-auto p-6 bg-white shadow-lg rounded-2xl mt-8">
        <h2 className="text-2xl font-bold text-purple-600 mb-6 text-center">
          Cashback 🎁
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
           <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="text"
            name="transactionId"
            placeholder="Enter transaction ID"
            value={form.transactionId}
            onChange={handleChange}
            required
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
