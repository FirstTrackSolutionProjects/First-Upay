import { useState } from "react";
import { Phone } from "lucide-react";

export default function BharatGasBooking({ provider }) {
  const [contact, setContact] = useState("");

  // Validation: must be exactly 10 digits
  const isValidContact = /^[0-9]{10}$/.test(contact);

  // Dynamic heading and gradient
  const headings = {
    bharat: "Bharat Gas Booking",
    hp: "HP Gas Booking",
    indane: "Indane Gas Booking",
  };

  const gradients = {
    bharat: "from-red-500 to-orange-500",
    hp: "from-blue-500 to-indigo-500",
    indane: "from-green-500 to-emerald-500",
  };

  const heading = headings[provider] || "Bharat Gas Booking";
  const gradient = gradients[provider] || "from-red-500 to-orange-500";

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 flex flex-col items-center justify-center px-4 py-10">
      {/* Container */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className={`bg-gradient-to-r ${gradient} text-white text-center py-6 px-4`}>
          <h1 className="text-2xl font-bold">{heading}</h1>
          <p className="text-sm opacity-90 mt-1">Book your LPG cylinder in seconds</p>
        </div>

        {/* Booking Form */}
        <div className="p-6 space-y-6">
          {/* Select Booking Method */}
          <div>
            <label className="block text-gray-700 font-medium mb-2 text-sm">
              Select Booking Method
            </label>
            <select className="w-full border rounded-lg p-3 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-red-400 transition">
              <option>Registered Contact Number</option>
              <option>LPG ID</option>
            </select>
          </div>

          {/* Contact Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-2 text-sm">
              Enter Registered Mobile Number
            </label>
            <div className="relative">
              <input
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="Enter 10-digit number"
                className="w-full border rounded-lg p-3 pr-10 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-red-400 transition"
              />
              <Phone className="absolute right-3 top-3 text-gray-400" size={20} />
            </div>
            {contact && !isValidContact && (
              <p className="text-xs text-red-500 mt-2">
                Please enter a valid 10-digit number
              </p>
            )}
          </div>

          {/* Confirm Button */}
          <button
            disabled={!isValidContact}
            className={`w-full py-3 rounded-xl font-semibold shadow-md transition-all duration-300 
              ${
                isValidContact
                  ? `bg-gradient-to-r ${gradient} text-white hover:scale-105`
                  : "bg-gray-200 text-gray-500 cursor-not-allowed"
              }`}
          >
            Confirm Booking
          </button>
        </div>

        {/* Notes Section */}
        <div className="bg-gray-50 border-t px-6 py-4 text-xs text-gray-600 leading-relaxed">
          <p className="mb-2">
            <strong>Note:</strong> FirstUpay only manages the payment process for gas
            bookings. Delivery and service issues will be handled by your distributor.
          </p>
          <p>
            By continuing, you authorize FirstUpay to fetch your current and upcoming bills
            and send reminders.
          </p>
        </div>
      </div>
    </div>
  );
}
