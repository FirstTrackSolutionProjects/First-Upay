import { useState } from "react";

const banks = ["ICICI Bank", "HDFC Bank", "SBI Bank", "Axis Bank", "Paytm FASTag"];

const Fastag = () => {
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [bank, setBank] = useState("");
  const [amount, setAmount] = useState("");

  const handleRecharge = (e) => {
    e.preventDefault();
    if (!vehicleNumber || !bank || !amount) {
      alert("Please fill all details!");
      return;
    }
    alert(`FASTag recharge of ₹${amount} for Vehicle ${vehicleNumber} (${bank}) is being processed ✅`);
  };

  return (
        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 px-4">
      {/* Image */}
       <div className="w-full md:w-1/2 flex justify-center m-4">
        <img
          src="/images/fastag.jpg" 
          alt="Fastag Illustration"
          className="w-full h-80 object-cover"
        />
      </div>

    <div className="w-full mx-auto p-6 bg-white shadow-lg rounded-2xl mt-8">
      <h2 className="text-2xl font-bold text-center mb-6 text-indigo-600">
        FASTag Recharge
      </h2>
      <form onSubmit={handleRecharge} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Vehicle Number</label>
          <input
            type="text"
            value={vehicleNumber}
            onChange={(e) => setVehicleNumber(e.target.value)}
            placeholder="e.g. MH12AB1234"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Select Bank</label>
          <select
            value={bank}
            onChange={(e) => setBank(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          >
            <option value="">-- Choose Bank --</option>
            {banks.map((b, idx) => (
              <option key={idx} value={b}>
                {b}
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
    </div>
  );
};

export default Fastag;
