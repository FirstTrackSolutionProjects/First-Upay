import { FaMobileAlt, FaBolt, FaCar, FaSatelliteDish, FaUniversity } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const features = [
  {
    id: 1,
    title: "Mobile Recharge",
    description: "Prepaid & Postpaid recharges instantly",
    icon: <FaMobileAlt className="w-10 h-10 text-purple-600" />,
    // link: "/recharge",
  },
  {
    id: 2,
    title: "Electricity Bill",
    description: "Pay electricity bills securely",
    icon: <FaBolt className="w-10 h-10 text-yellow-500" />,
    // link: "/electricity-bill",
  },
  {
    id: 3,
    title: "FASTag Recharge",
    description: "Recharge your FASTag for toll payments",
    icon: <FaCar className="w-10 h-10 text-blue-500" />,
    // link: "/fastag",
  },
  {
    id: 4,
    title: "Loan",
    description: "Apply for personal & business loans",
    icon: <FaUniversity className="w-10 h-10 text-green-600" />,
    // link: "/loan",
  },
{
    id: 5,
    title: "DTH Recharge",
    description: "Recharge your TV/DTH connections",
    icon: <FaSatelliteDish className="w-10 h-10 text-red-500" />,
    // link: "/dth-recharge",
  },
];

const Features = () => {
    const [showAll, setShowAll] = useState(false);

     const displayedFeatures = showAll ? features : features.slice(0, 4);
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Our Features</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {displayedFeatures.map((item) => (
          <Link
            // key={item.id}
            // to={item.link}
            className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-500 mt-2">{item.description}</p>
          </Link>
        ))}
      </div>
      
          {/* Show More / Show Less Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-indigo-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-indigo-700 transition"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default Features;
