import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Phone } from "lucide-react";

const agencies = [
  { id: 1, name: "Bharat Gas", provider: "bharat", img: "/logos/bharat-gas.jpeg" },
  { id: 2, name: "HP Gas", provider: "hp", img: "/logos/hp-gas.png" },
  { id: 3, name: "Indane Gas", provider: "indane", img: "/logos/indane.png" },
  { id: 4, name: "Bharat Gas Commercial Booking", provider: "bharatCommercial", img: "/logos/bharat-gas.jpeg", link: "/book/commercial" },
];

export default function BookCylinder() {
  const [query, setQuery] = useState("");
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [contact, setContact] = useState("");

  const isValidContact = /^[0-9]{10}$/.test(contact);

  const filteredAgencies = agencies.filter((a) =>
    a.name.toLowerCase().includes(query.trim().toLowerCase())
  );

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

  const handleSelect = (agency) => {
    // If it has a link, open it in a new page
    if (agency.link) {
      window.location.href = agency.link;
    } else {
      setSelectedProvider(agency.provider);
      setContact(""); // reset input when changing provider
    }
  };

  if (selectedProvider) {
    const gradient = gradients[selectedProvider] || "from-red-500 to-orange-500";
    const heading = headings[selectedProvider] || "Gas Booking";

    return (
      <div className="min-h-screen bg-red-100 flex flex-col items-center justify-center px-4 py-10">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className={`bg-gradient-to-r ${gradient} text-white text-center py-6 px-4`}>
            <h1 className="text-2xl font-bold">{heading}</h1>
            <p className="text-sm opacity-90 mt-1">Book your LPG cylinder in seconds</p>
          </div>

          {/* Booking Form */}
          <div className="p-6 space-y-6">
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

            <button
              onClick={() => setSelectedProvider(null)}
              className="w-full py-2 mt-2 rounded-xl border text-gray-700 hover:bg-gray-100 transition"
            >
              Back to Providers
            </button>
          </div>

          {/* Notes */}
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

  // Show provider list if none selected
  return (
    <div className="min-h-screen bg-red-100 text-gray-800 m-4 rounded-2xl">
      {/* Header */}
      <header className="flex items-center justify-between p-4 shadow-sm">
        <h1 className="text-lg font-extrabold">Select your Gas Provider</h1>
      </header>

      {/* Search Box */}
      <div className="max-w-4xl mx-auto px-4 mt-6">
        <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-full p-3 shadow-sm">
          <FaSearch className="text-gray-400" />
          <input
            type="text"
            placeholder="Search Provider"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent focus:outline-none text-gray-700 placeholder-gray-400"
          />
        </div>
      </div>

      {/* Agency List */}
      <main className="max-w-4xl mx-auto px-4 mt-6 mb-12">
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b">
            <h3 className="text-xl font-semibold text-gray-800">All Providers</h3>
          </div>

          <ul className="divide-y">
            {filteredAgencies.length ? (
              filteredAgencies.map((a) => (
                <li
                  key={a.id}
                  className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition cursor-pointer"
                  onClick={() => handleSelect(a)}
                >
                  <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0">
                    {a.img ? (
                      <img src={a.img} alt={a.name} className="w-12 h-12 object-contain" />
                    ) : (
                      <span className="text-lg font-semibold text-indigo-700">{a.name[0]}</span>
                    )}
                  </div>

                  <div className="flex-1">
                    <span className="block text-base font-medium text-gray-800">{a.name}</span>
                  </div>

                  <svg
                    className="w-5 h-5 text-gray-400"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </li>
              ))
            ) : (
              <li className="px-6 py-4 text-gray-500 text-sm">No providers found</li>
            )}
          </ul>
        </div>
      </main>
    </div>
  );
}
