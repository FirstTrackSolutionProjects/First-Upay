// import { useState } from "react";

// const operators = ["Jio", "Airtel", "Vi", "BSNL"];

// const Recharge = () => {
//   const [mobile, setMobile] = useState("");
//   const [operator, setOperator] = useState("");
//   const [amount, setAmount] = useState("");

//   const handleRecharge = (e) => {
//     e.preventDefault();

//     if (!mobile || !operator || !amount) {
//       alert("Please fill all details before proceeding!");
//       return;
//     }

//     alert(`Recharge of ₹${amount} for ${mobile} (${operator}) is being processed ✅`);
//   };

//   return (
//      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 px-4">
//       {/* Image */}
//        <div className="w-full md:w-1/2 flex justify-center m-4">
//         <img
//           src="/images/mobile recharge.jpg" 
//           alt="Mobile Recharge Illustration"
//           className="w-full h-80 object-cover"
//         />
//       </div>
//     <div className="w-full p-6 bg-white shadow-lg rounded-2xl mt-8">
//       <h2 className="text-2xl font-bold text-center mb-6 text-indigo-600">
//         Mobile Top-Up
//       </h2>

//       <form onSubmit={handleRecharge} className="space-y-4">
//         {/* Mobile Number */}
//         <div>
//           <label className="block font-medium mb-1">Enter Mobile Number</label>
//           <input
//             type="text"
//             value={mobile}
//             onChange={(e) => setMobile(e.target.value)}
//             placeholder="e.g. 9876543210"
//             className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
//           />
//         </div>

//         {/* Operator */}
//         <div>
//           <label className="block font-medium mb-1">Select Network</label>
//           <select
//             value={operator}
//             onChange={(e) => setOperator(e.target.value)}
//             className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
//           >
//             <option value="">-- Choose Operator --</option>
//             {operators.map((op, idx) => (
//               <option key={idx} value={op}>
//                 {op}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Amount */}
//         <div>
//           <label className="block font-medium mb-1">Recharge Value</label>
//           <input
//             type="number"
//             value={amount}
//             onChange={(e) => setAmount(e.target.value)}
//             placeholder="Enter amount"
//             className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
//           />
//         </div>

//         {/* Button */}
//         <button
//           type="submit"
//           className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
//         >
//           Proceed to Recharge
//         </button>
//       </form>
//     </div>
// </div>
//   );
// };

// export default Recharge;

import { Link } from "react-router-dom";
import { FaMobileAlt, FaBolt, FaUniversity, FaBroadcastTower, FaGasPump, FaTv, FaGooglePlay, FaRegCreditCard, FaShieldAlt } from "react-icons/fa";

export default function Recharge() {
  const rechargeItems = [
    { name: "Credit Card Bill", icon: <FaRegCreditCard size={28} className="text-indigo-600" />, link: "/recharge/credit-card" },
    { name: "Insurance / LIC", icon: <FaShieldAlt size={28} className="text-blue-600" />, link: "/recharge/insurance" },
    { name: "Mobile Postpaid", icon: <FaMobileAlt size={28} className="text-orange-600" />, link: "/recharge/postpaid" },
    { name: "Broadband Landline", icon: <FaBroadcastTower size={28} className="text-green-600" />, link: "/recharge/broadband" },
    { name: "Piped Gas Bill", icon: <FaGasPump size={28} className="text-teal-600" />, link: "/recharge/gas" },
    { name: "Book Gas Cylinder", icon: <FaGasPump size={28} className="text-red-600" />, link: "/recharge/cylinder" },
    { name: "DTH Recharge", icon: <FaTv size={28} className="text-purple-600" />, link: "/recharge/dth" },
    { name: "Google Play Recharge", icon: <FaGooglePlay size={28} className="text-pink-600" />, link: "/recharge/google-play" },
  ];

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">Recharges and Bills</h2>
      <div className="grid grid-cols-3 gap-4">
        {rechargeItems.map((item, idx) => (
          <Link
            key={idx}
            to={item.link}
            className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg shadow hover:bg-indigo-50 transition"
          >
            {item.icon}
            <span className="mt-2 text-sm font-medium text-gray-700 text-center">{item.name}</span>
          </Link>
        ))}
      
      </div>
    </div>
  );
}
