import { FaUniversity, FaCoins, FaShieldAlt, FaCrown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Finance() {
  const [showAll, setShowAll] = useState(false);
  const options = [
    { title: "Instant Loan", icon: <FaUniversity size={40} className="text-indigo-600" />, link: "/loan" },
    { title: "Gold Loan", icon: <FaCoins size={40} className="text-yellow-500" />, link: "/gold-loan" },
    { title: "Insurance", icon: <FaShieldAlt size={40} className="text-green-600" />, link: "/insurance" },
    { title: "Monthly Gold SIP", icon: <FaCrown size={42} className="text-amber-500" />, link: "/gold-sip", highlight: true },
    { title: "Mutual Funds", icon: <FaCoins size={40} className="text-blue-600" />, link: "/mutual-funds" },
  
  ];

    const visibleOptions = showAll ? options : options.slice(0, 4);

  return (
    <div className="w-full flex flex-col items-center  py-10 px-4">
      {/* Header */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 text-center">
        Loans, Insurance & Finance
      </h2>
      <p className="text-gray-500 text-center max-w-lg mb-8">
        Secure your future with easy loans, trusted insurance plans, 
        and smart financial options tailored for you.
      </p>

      {/* Grid Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {visibleOptions.map((opt, index) => (
          <Link
            // key={index}
            // to={opt.link}
            className="bg-white p-10 rounded-2xl shadow-md hover:shadow-lg transition-all flex flex-col items-center text-center"
          >
            {opt.icon}
            <span className="text-lg font-semibold text-gray-800">{opt.title}</span>
            
          </Link>
        ))}
      </div>

        {/* Show More / Show Less Button */}
      {options.length > 4 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-6 bg-indigo-600 text-white px-6 py-2 rounded-full shadow hover:bg-indigo-700 transition"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
}
