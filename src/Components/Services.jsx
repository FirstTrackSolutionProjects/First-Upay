import React, { useState } from "react";
import { Send, BedDouble, Wallet, HandCoins, Gem, LineChart } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Send Money",
    description: "Instantly transfer money to any UPI ID or bank",
    icon: <Send className="w-12 h-12 text-blue-500" />,
  },
  {
    id: 2,
    title: "Bill Payments",
    description: "Pay electricity, water, gas & other utility bills",
    icon: <Wallet className="w-12 h-12 text-green-600" />,
  },
   {
    id: 3,
    title: "Hotel Booking",
    description: "Find and book hotels at the best prices instantly",
    icon: <BedDouble className="w-12 h-12 text-purple-600" />, // updated icon
  },
  {
    id: 4,
    title: "Instant Loan",
    description: "Apply for personal & business loans with flexible EMIs",
    icon: <HandCoins className="w-12 h-12 text-yellow-500" />,
  },
  {
    id: 5,
    title: "Gold Savings",
    description: "Buy, save & invest in digital gold securely",
    icon: <Gem className="w-12 h-12 text-yellow-600" />,
  },
  {
    id: 6,
    title: "Investments",
    description: "Grow your money with smart investment options",
    icon: <LineChart className="w-12 h-12 text-teal-500" />,
  }
];

const Services = () => {
  const [showAll, setShowAll] = useState(false);

  // Show first 4 or all
  const visibleServices = showAll ? services : services.slice(0, 4);

  return (
    <div className="p-6">
      <div className="grid md:grid-cols-3 gap-6">
        {visibleServices.map((service) => (
          <div
            key={service.id}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all flex flex-col items-center text-center"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">
              {service.title}
            </h3>
            <p className="text-gray-500 mt-2">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Show More / Show Less Button */}
      {services.length > 4 && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Services;
