import { useState } from "react";
import { FaMobileAlt, FaGift, FaPlane, FaFilm, FaShoppingBag } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";
import { FiSearch } from "react-icons/fi";
import { MdHealthAndSafety } from "react-icons/md";
import { GiGoldBar } from "react-icons/gi";

export default function MyRecords() {
  const [showAll, setShowAll] = useState(false);

  // Categories
  const categories = [
    { name: "Recharges & Payments", icon: <FaMobileAlt className="text-blue-600 text-lg" />, bg: "bg-blue-100" },
    { name: "Gift Cards & Offers", icon: <FaGift className="text-pink-600 text-lg" />, bg: "bg-pink-100" },
    { name: "Travel Bookings", icon: <FaPlane className="text-green-600 text-lg" />, bg: "bg-green-100" },
    { name: "Movies & Events", icon: <FaFilm className="text-yellow-600 text-lg" />, bg: "bg-yellow-100" },
    { name: "Shopping", icon: <FaShoppingBag className="text-purple-600 text-lg" />, bg: "bg-purple-100" },
    { name: "Insurance", icon: <MdHealthAndSafety className="text-red-600 text-lg" />, bg: "bg-red-100" },
    { name: "Firstupay Gold", icon: <GiGoldBar className="text-amber-600 text-lg" />, bg: "bg-amber-100" },
  ];

  // Only first 4 by default
  const visibleCategories = showAll ? categories : categories.slice(0, 4);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900 p-5">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
       
        <h1 className="text-2xl font-bold tracking-tight">My Records</h1>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {visibleCategories.map((cat, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center p-5 bg-white rounded-2xl shadow-sm hover:shadow-md transition cursor-pointer"
          >
            <div className={`w-12 h-12 flex items-center justify-center rounded-full ${cat.bg} mb-2`}>
              {cat.icon}
            </div>
            <span className="text-sm font-medium text-gray-700 text-center">{cat.name}</span>
          </div>
        ))}
      </div>

      {/* Toggle Button */}
      <div className="text-center mb-10">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-5 py-2 rounded-full text-sm font-medium border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
        >
          {showAll ? "View Less" : "View All"}
        </button>
      </div>

      {/* Recent Records Header */}
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-semibold">Recent Records</h2>
        <div className="flex gap-4 text-xl">
          <FiSearch className="cursor-pointer text-gray-500 hover:text-gray-700" />
          <SlOptionsVertical className="cursor-pointer text-gray-500 hover:text-gray-700" />
        </div>
      </div>
      <p className="text-sm text-gray-500 mb-6">Last 6 months records</p>

      {/* Empty State */}
      <div className="flex flex-col items-center text-center mt-16">
        <div className="w-28 h-28 rounded-2xl border-2 border-dashed border-gray-300 flex items-center justify-center text-5xl text-blue-400 bg-blue-50">
          📦
        </div>
        <p className="mt-5 font-semibold text-gray-800 text-lg">No Records Found</p>
        <p className="text-sm text-gray-500 mt-1">
          Looks like you haven’t made any transactions yet.
        </p>
      </div>
    </div>
  );
}
