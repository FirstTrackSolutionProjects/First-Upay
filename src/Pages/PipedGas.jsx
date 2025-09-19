import React from "react";
import {  FiSearch } from "react-icons/fi";
import { useState } from "react"

export default function PipedGas() {
   const [query, setQuery] = useState("");

  const odishaBillers = [
    { name: "AG&P Pratham - AGP CGD India Pvt Ltd" },
    { name: "Assam Gas Company Limited (Prepaid)" },
    { name: "GAIL India" },
  ];

  const allBillers = [
    { name: "Gujarat Gas Limited" },
    { name: "Indraprastha Gas (IGL)" },
    { name: "Mahanagar Gas (MGL)" },
    { name: "Adani Total Gas" },
  ];

   const filterItems = (arr) =>
    arr.filter((item) =>
      item.name.toLowerCase().includes(query.trim().toLowerCase())
    );

  const filteredOdisha = filterItems(odishaBillers);
  const filteredAll = filterItems(allBillers);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 m-4">
      {/* Header */}
      <div className="flex items-center p-4 bg-white shadow">
       
        <h1 className="text-lg font-semibold flex-1">Select Provider</h1>
       
      </div>

      {/* Search Box */}
      <div className="p-4 bg-white shadow-sm">
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
          <FiSearch className="text-gray-500 mr-2 w-5 h-5" />
          <input
            type="text"
            placeholder="Select Provider"
            className="flex-1 bg-transparent outline-none text-gray-700"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Biller Lists */}
      <div className="p-4 font-semibold">
        {/* Billers in Odisha */}
        <Section title="Billers in Odisha" items={filteredOdisha} />

        {/* All Billers */}
        <Section title="All Billers" items={filteredAll} />
      </div>
    </div>
  );
}

function Section({ title, items }) {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold text-gray-600 mb-3">{title}</h2>
      <div className="bg-white rounded-lg shadow divide-y divide-gray-200">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center p-4 hover:bg-gray-50 cursor-pointer"
          >
            {/* Replace with real logos as needed */}
            <div className="w-10 h-10 bg-gray-200 rounded-full mr-4 flex items-center justify-center text-gray-500 font-bold">
              {item.name[0]}
            </div>
            <span className="text-gray-800">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
