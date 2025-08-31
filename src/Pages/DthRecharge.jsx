import { useState } from "react";

const providers = ["Tata Play", "DishTV", "Airtel Digital", "Sun Direct", "d2h"];

const DthRecharge = () => {
  const [subscriberId, setSubscriberId] = useState("");
  const [provider, setProvider] = useState("");
  const [amount, setAmount] = useState("");

  const handleRecharge = (e) => {
    e.preventDefault();
    if (!subscriberId || !provider || !amount) {
      alert("Please fill all details!");
      return;
    }
    alert(`DTH recharge of ₹${amount} for ID ${subscriberId} (${provider}) is being processed ✅`);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-2xl mt-8">
      <h2 className="text-2xl font-bold text-center mb-6 text-indigo-600">
        DTH Recharge
      </h2>
      <form onSubmit={handleRecharge} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Subscriber ID</label>
          <input
            type="text"
            value={subscriberId}
            onChange={(e) => setSubscriberId(e.target.value)}
            placeholder="Enter DTH Subscriber ID"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Select Provider</label>
          <select
            value={provider}
            onChange={(e) => setProvider(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          >
            <option value="">-- Choose Provider --</option>
            {providers.map((p, idx) => (
              <option key={idx} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-medium mb-1">Recharge Amount</label>
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
          Proceed to Recharge
        </button>
      </form>
    </div>
  );
};

export default DthRecharge;
