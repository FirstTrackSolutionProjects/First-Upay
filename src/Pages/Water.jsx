import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function Water() {
  const [search, setSearch] = useState("");

  const odishaBillers = [
    { name: "Navi Mumbai Municipal Corporation Water Tax", logo: "/logos/navi.png" },
    { name: "Odisha Municipal Payments Water Tax", logo: "/logos/odisha.png" },
  ];

  const allBillers = [
    { name: "Bangalore Water Supply and Sewerage Board", logo: "/logos/bangalore.png" },
    { name: "PHED - Rajasthan", logo: "/logos/phed.png" },
    { name: "Hyderabad Metropolitan Water Supply and Sewerage Board", logo: "/logos/hyderabad.png" },
    { name: "Kerala Water Authority (KWA)", logo: "/logos/kerala.png" },
    { name: "AP PHED Itanagar and Naharlagun", logo: "/logos/ap.png" },
  ];

  const filterList = (list) =>
    list.filter((biller) =>
      biller.name.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="min-h-screen bg-sky-100 text-black p-4 m-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-lg font-bold">Select Provider</h1>
       
      </div>

      {/* Search */}
      <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 mb-6">
        <FaSearch className="text-gray-400" />
        <input
          type="text"
          placeholder="Search by biller"
          className="ml-2 flex-1 bg-transparent outline-none text-sm placeholder-gray-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Odisha Billers */}
      <div className="mb-6">
        <h2 className="text-lg font-bold text-gray-900 mb-2">
          Billers in Odisha
        </h2>
        <div className="space-y-3">
          {filterList(odishaBillers).map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-white text-black p-3 rounded-xl  transition"
            >
              <img
                src={item.logo}
                alt={item.name}
                className="w-10 h-10 rounded-full bg-white p-1"
              />
              <span className="text-sm font-medium">{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* All Billers */}
      <div>
        <h2 className="text-lg font-bold text-gray-900 mb-2">
          All Billers
        </h2>
        <div className="space-y-3">
          {filterList(allBillers).map((item, i) => (
            <div
              key={i}
              className="flex text-black items-center gap-3 bg-white p-3 rounded-xl  transition"
            >
              <img
                src={item.logo}
                alt={item.name}
                className="w-10 h-10 rounded-full bg-white p-1"
              />
              <span className="text-sm font-medium">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
