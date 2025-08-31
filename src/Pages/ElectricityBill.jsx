import { useState } from "react";

const states = ["Delhi", "Maharashtra", "Uttar Pradesh", "Karnataka", "Tamil Nadu"];

const ElectricityBill = () => {
  const [consumerNumber, setConsumerNumber] = useState("");
  const [state, setState] = useState("");
  const [amount, setAmount] = useState("");

  const handlePay = (e) => {
    e.preventDefault();
    if (!consumerNumber || !state || !amount) {
      alert("Please fill all details!");
      return;
    }
    alert(`Electricity bill of ₹${amount} for Consumer No. ${consumerNumber} (${state}) is being processed ✅`);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-2xl mt-8">
      <h2 className="text-2xl font-bold text-center mb-6 text-indigo-600">
        Electricity Bill Payment
      </h2>
      <form onSubmit={handlePay} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Consumer Number</label>
          <input
            type="text"
            value={consumerNumber}
            onChange={(e) => setConsumerNumber(e.target.value)}
            placeholder="Enter Consumer Number"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Select State</label>
          <select
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          >
            <option value="">-- Choose State --</option>
            {states.map((s, idx) => (
              <option key={idx} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-medium mb-1">Bill Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
        >
          Pay Bill
        </button>
      </form>
    </div>
  );
};

export default ElectricityBill;
