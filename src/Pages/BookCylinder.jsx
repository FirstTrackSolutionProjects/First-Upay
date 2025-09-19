import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const agencies = [
  { id: 1, name: "Bharat Gas", img: "/logos/bharat-gas.png", link: "/book/bharat-gas" },
  { id: 2, name: "Bharat Gas - Commercial", img: "/logos/bharat-gas.png", link: "/book/bharat-gas-commercial" },
  { id: 3, name: "HP Gas", img: "/logos/hp-gas.png", link: "/book/hp-gas" },
  { id: 4, name: "Indane Gas (Indian Oil)", img: "/logos/indane.png", link: "/book/indane" },
];

export default function BookCylinder() {
  const [query, setQuery] = useState("");

  
  const filteredAgencies = agencies.filter((a) =>
    a.name.toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    <div className="min-h-screen bg-red-100 text-gray-800 m-4 rounded-2xl">
      {/* Header */}
      <header className="flex items-center justify-between p-4 shadow-sm">
        <h1 className="text-lg font-extrabold">Select your Gas Provider</h1>
      </header>

      {/* Banner */}
      <section className="max-w-4xl mx-auto px-4 mt-6">
        <div className="relative bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-5 text-white overflow-hidden shadow-md">
          <div className="flex items-center gap-6">
            <div className="flex-1">
              <h2 className="text-2xl font-bold leading-tight">Book your LPG Cylinder</h2>
              <p className="mt-2 text-sm opacity-90">
                Book your LPG cylinder & get instant confirmation from your agency.
              </p>
              {/* <a
                href="/book"
                className="inline-block mt-4 px-4 py-2 bg-white text-indigo-700 rounded-full font-medium shadow-sm hover:shadow-md"
              >
                Know More
              </a> */}
            </div>
          </div>
        </div>
      </section>

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
            <h3 className="text-xl font-semibold text-gray-800">All Billers</h3>
          </div>

          <ul className="divide-y">
            {filteredAgencies.length ? (
              filteredAgencies.map((a) => (
                <li
                  key={a.id}
                  className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition"
                >
                  <a href={a.link} className="flex items-center gap-4 w-full">
                    <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0">
                      {a.img ? (
                        <img
                          src={a.img}
                          alt={a.name}
                          className="w-12 h-12 object-contain"
                        />
                      ) : (
                        <span className="text-lg font-semibold text-indigo-700">
                          {a.name[0]}
                        </span>
                      )}
                    </div>

                    <div className="flex-1">
                      <span className="block text-base font-medium text-gray-800">
                        {a.name}
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
