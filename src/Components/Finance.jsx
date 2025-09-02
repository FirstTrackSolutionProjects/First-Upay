import { FaUniversity, FaCoins, FaShieldAlt, FaCrown } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Finance() {
  const options = [
    { title: "Instant Loan", icon: <FaUniversity size={40} className="text-indigo-600" />, link: "/loan" },
    { title: "Invest in Gold", icon: <FaCoins size={40} className="text-yellow-500" />, link: "/gold-loan" },
    { title: "Insurance", icon: <FaShieldAlt size={40} className="text-green-600" />, link: "/insurance" },
    { title: "Monthly Gold SIP", icon: <FaCrown size={42} className="text-amber-500" />, link: "/gold-sip", highlight: true },
  
  ];

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
        {options.map((opt, index) => (
          <Link
            key={index}
            to={opt.link}
            className="bg-white p-10 rounded-2xl shadow-md hover:shadow-lg transition-all flex flex-col items-center text-center"
          >
            {opt.icon}
            <span className="text-lg font-semibold text-gray-800">{opt.title}</span>
            
          </Link>
        ))}
      </div>

      {/* Button */}
      {/* <Link
        to="/finance-explore"
        className="mt-8 bg-indigo-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-indigo-700 transition flex items-center gap-2"
      >
        Explore Finance →
      </Link> */}
    </div>
  );
}
