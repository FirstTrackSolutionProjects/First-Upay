// import React from "react";
// import { FaMobileAlt, FaTv, FaCar, FaGasPump, FaLightbulb, FaHome, FaCoins, FaBox } from "react-icons/fa";

// const services = [
//   { name: "Mobile Recharge", icon: <FaMobileAlt />, color: "from-pink-400 to-pink-600" },
//   { name: "Cable TV", icon: <FaTv />, color: "from-yellow-400 to-orange-500" },
//   { name: "FASTag Recharge", icon: <FaCar />, color: "from-red-400 to-red-600" },
//   { name: "Piped Gas", icon: <FaGasPump />, color: "from-green-400 to-green-600" },
//   { name: "Electricity", icon: <FaLightbulb />, color: "from-indigo-400 to-indigo-600" },
//   { name: "Broadband/Landline", icon: <FaHome />, color: "from-blue-400 to-blue-600" },
//   { name: "Recurring Deposit", icon: <FaBox />, color: "from-purple-400 to-purple-600" },
//   { name: "Loan Repayment", icon: <FaCoins />, color: "from-teal-400 to-teal-600" },
// ];

// const UtilityServices = () => {
//   return (
//     <div className="bg-gray-50 py-12 px-6">
//       <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
//        All Your Payments in One Place
//       </h2>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className={`flex flex-col items-center justify-center p-6 rounded-2xl shadow-md bg-gradient-to-br ${service.color} text-white cursor-pointer transform transition hover:scale-105 hover:shadow-xl`}
//           >
//             <div className="text-3xl mb-3">{service.icon}</div>
//             <p className="font-medium text-lg">{service.name}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default UtilityServices;
import React from "react";
import {
  FaMobileAlt,
  FaTv,
  FaCar,
  FaGasPump,
  FaLightbulb,
  FaHome,
  FaCoins,
  FaBox,
} from "react-icons/fa";

const services = [
  { name: "Mobile Recharge", icon: <FaMobileAlt />, color: "from-pink-400 to-pink-600" },
  { name: "Cable TV", icon: <FaTv />, color: "from-yellow-400 to-orange-500" },
  { name: "FASTag Recharge", icon: <FaCar />, color: "from-red-400 to-red-600" },
  { name: "Piped Gas", icon: <FaGasPump />, color: "from-green-400 to-green-600" },
  { name: "Electricity", icon: <FaLightbulb />, color: "from-indigo-400 to-indigo-600" },
  { name: "Broadband/Landline", icon: <FaHome />, color: "from-blue-400 to-blue-600" },
  { name: "Recurring Deposit", icon: <FaBox />, color: "from-purple-400 to-purple-600" },
  { name: "Loan Repayment", icon: <FaCoins />, color: "from-teal-400 to-teal-600" },
];

const UtilityServices = () => {
  return (
    <div className="bg-gray-50 py-12 px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        All Your Payments in One Place
      </h2>

      {/* Horizontal Scroll Container */}
      <div className="flex gap-6 overflow-x-auto pb-4"  style={{
          scrollbarWidth: "none",       
          msOverflowStyle: "none",     
        }}>
          <style>
          {`
            div::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-48 flex flex-col items-center justify-center p-6 rounded-2xl shadow-md bg-gradient-to-br ${service.color} text-white cursor-pointer transform transition hover:scale-105 hover:shadow-xl`}
          >
            <div className="text-3xl mb-3">{service.icon}</div>
            <p className="font-medium text-lg text-center">{service.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UtilityServices;

