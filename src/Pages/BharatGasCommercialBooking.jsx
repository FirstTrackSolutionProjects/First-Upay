import { useState } from "react";

export default function BharatGasCommercialBooking() {
  const [lpgId, setLpgId] = useState("");
  const [qty, setQty] = useState("");
  const [svNumber, setSvNumber] = useState("");

  const isFormValid = lpgId.trim() !== "" && qty.trim() !== "" && svNumber.trim() !== "";

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start py-10 px-4">
      {/* Header */}
      <div className="w-full max-w-md bg-gradient-to-r from-blue-600 to-indigo-500 text-white rounded-2xl shadow-lg p-6 mb-8 text-center">
        <h1 className="text-2xl sm:text-3xl font-bold">Bharat Gas - Commercial</h1>
        <p className="mt-2 text-sm sm:text-base opacity-90">
          Book your commercial LPG cylinders quickly and securely
        </p>
      </div>

      {/* Form Container */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 sm:p-8 space-y-6">
        {/* LPG ID */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">LPG ID / Registered Contact</label>
          <input
            type="text"
            value={lpgId}
            onChange={(e) => setLpgId(e.target.value)}
            placeholder="Enter your LPG ID or Registered Contact Number"
            className="w-full border border-gray-300 rounded-xl p-3 text-gray-700 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>

        {/* Product Quantity */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Product Quantity</label>
          <input
            type="number"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
            placeholder="Enter Product Quantity"
            className="w-full border border-gray-300 rounded-xl p-3 text-gray-700 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>

        {/* SV Number */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">SV Number</label>
          <input
            type="text"
            value={svNumber}
            onChange={(e) => setSvNumber(e.target.value)}
            placeholder="Enter your SV Number"
            className="w-full border border-gray-300 rounded-xl p-3 text-gray-700 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>

        {/* Confirm Button */}
        <button
          disabled={!isFormValid}
          className={`w-full py-3 mt-4 rounded-2xl font-semibold shadow-md transition-transform duration-200
            ${
              isFormValid
                ? "bg-gradient-to-r from-blue-600 to-indigo-500 text-white hover:scale-105"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
        >
          Confirm Booking
        </button>

        {/* Notes */}
        <div className="mt-4 text-xs sm:text-sm text-gray-600 space-y-2 leading-relaxed">
          <p>
            <strong>Note:</strong> FirstUpay only handles the payment processing for gas
            bookings. Delivery and service issues are managed by your distributor.
          </p>
          <p>
            By proceeding, you authorize FirstUpay to fetch your current and future bills and send reminders.
          </p>
        </div>
      </div>
    </div>
  );
}
