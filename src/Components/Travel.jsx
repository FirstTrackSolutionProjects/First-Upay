import { FaBus, FaTrain, FaPlane, FaHotel, FaGift, FaCar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Travel() {
  const options = [
    { title: "Bus", icon: <FaBus size={40} className="text-indigo-600"/> },
    { title: "Train", icon: <FaTrain size={40} className="text-pink-500"/> },
    { title: "Flight", icon: <FaPlane size={40} className="text-yellow-500"/> },
    { title: "Luxury Hotels", icon: <FaHotel size={40} className="text-green-600"/> },
    { title: "Car Rentals", icon: <FaCar size={40} className="text-blue-500"/> },
    { title: "Rewards & Cashback", icon: <FaGift size={40} className="text-red-500" /> },
  ];

    const [showAll, setShowAll] = useState(false);

  
  const visibleOptions = showAll ? options : options.slice(0, 4);


  return (
    <div className="w-full flex flex-col items-center py-10 px-4">
      {/* Header */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
        Travel, Stays & Experiences
      </h2>
      <p className="text-gray-500 text-center max-w-lg mb-8">
        Discover cars, cruises, hotels, and eco-friendly rides. 
        Book your perfect trip quickly and easily.
      </p>

      {/* Grid Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full ">
        {visibleOptions.map((opt, index) => (
          <Link
            // key={index}
            // to={opt.link}
            className="bg-white p-10 rounded-2xl shadow-md hover:shadow-lg transition-all flex flex-col items-center text-center"
          >
            <span className="text-lg font-semibold text-gray-800">{opt.title}</span>
            {opt.icon}
          </Link>
        ))}
      </div>

        {/* Show More / Show Less Button */}
        {options.length > 4 && (
      <button
        onClick={() => setShowAll(!showAll)}
        className="bg-indigo-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-indigo-700 transition mt-4"
      >
        {showAll ? "Show Less" : "Show More"}
      </button>
      )}

      {/* Button */}
       {/* <Link
        to="/explore"
        className="mt-8 bg-indigo-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-indigo-700 transition flex items-center gap-2"
      >
        Explore Now →
      </Link> */}
    </div>
  );
}
