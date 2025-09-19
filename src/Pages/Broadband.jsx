import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const providers = [
  { id: 1, name: "BSNL Broadband/Landline - Individual", img: "/logos/bsnl.png", link: "/broadband/bsnl" },
  { id: 2, name: "ACT Fibernet", img: "/logos/act.png", link: "/broadband/act" },
  { id: 3, name: "Airtel Broadband", img: "/logos/airtel.png", link: "/broadband/airtel" },
  { id: 4, name: "Airtel Landline", img: "/logos/airtel.png", link: "/broadband/airtel-landline" },
  { id: 5, name: "Airtel Wi-Fi Recharge", img: "/logos/airtel-black.png", link: "/broadband/airtel-wifi" },
];

export default function Broadband() {
  const [query, setQuery] = useState("");

  // Filter providers by the search query (case-insensitive)
  const filteredProviders = providers.filter((p) =>
    p.name.toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-200 text-gray-800 m-4 p-4">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-white shadow-sm rounded-2xl">
        <h1 className="text-lg font-semibold">Select Provider</h1>
      </header>

      {/* Search */}
      <div className="max-w-4xl mx-auto px-4 mt-4">
        <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-full p-3 shadow-sm">
          <FaSearch className="text-gray-400" />
          <input
            type="text"
            placeholder="Search Provider"
            className="flex-1 bg-transparent focus:outline-none text-gray-700 placeholder-gray-400"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Promo banner */}
      <section className="max-w-4xl mx-auto px-4 mt-6">
        <div className="relative bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl p-5 text-white overflow-hidden shadow-md flex items-center gap-4">
          <div className="flex-1">
            <h2 className="text-xl font-semibold leading-tight">
              Enjoy uninterrupted broadband internet
            </h2>
            <p className="mt-2 text-sm opacity-90">
              Allow access to your text messages to fetch your bills and remind you on time.
            </p>
            <button className="mt-4 px-5 py-2 bg-white text-indigo-600 rounded-full font-medium shadow-sm hover:shadow-md">
              Allow
            </button>
          </div>
        </div>
      </section>

      {/* Provider list */}
      <main className="max-w-4xl mx-auto px-4 mt-6 mb-12">
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b">
            <h3 className="text-lg font-semibold text-gray-800">Billers in Odisha</h3>
          </div>

          <ul className="divide-y">
            {filteredProviders.length ? (
              filteredProviders.map((p) => (
                <li
                  key={p.id}
                  className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition"
                >
                  <a href={p.link} className="flex items-center gap-4 w-full">
                    <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden">
                      {p.img ? (
                        <img
                          src={p.img}
                          alt={p.name}
                          className="w-12 h-12 object-contain"
                        />
                      ) : (
                        <span className="text-lg font-semibold text-indigo-700">
                          {p.name[0]}
                        </span>
                      )}
                    </div>

                    <div className="flex-1">
                      <span className="block text-base font-medium text-gray-800">
                        {p.name}
                      </span>
                    </div>

                    <svg
                      className="w-5 h-5 text-gray-400"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M9 6l6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
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
