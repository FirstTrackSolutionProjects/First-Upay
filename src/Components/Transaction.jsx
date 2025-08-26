import { useState } from "react";

const Transaction = () => {
  const [upi, setUpi] = useState("");
  const [amount, setAmount] = useState("");
  const [success, setSuccess] = useState(false);

  const handlePay = () => {
    if (upi && amount) {
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    }
  };

  return (
    <section className="py-16 px-6 max-w-xl mx-auto">
      <h3 className="text-2xl font-bold text-center mb-6">Try UPI Payment</h3>
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <input
          type="text"
          placeholder="Enter UPI ID"
          value={upi}
          onChange={(e) => setUpi(e.target.value)}
          className="w-full border p-3 rounded mb-4"
        />
        <input
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border p-3 rounded mb-4"
        />
        <button
          onClick={handlePay}
          className="w-full bg-purple-700 text-white py-3 rounded-lg hover:bg-purple-800"
        >
          Pay Now
        </button>
        {success && (
          <p className="mt-4 text-green-600 font-semibold text-center">
            ✅ Payment Successful!
          </p>
        )}
      </div>
    </section>
  );
};

export default Transaction;
