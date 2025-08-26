import React from "react";
import { Send, Smartphone, Wallet } from "lucide-react"; 


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
    title: "Mobile Recharge",
    description: "Quick and easy prepaid & postpaid recharges",
    icon: <Smartphone className="w-12 h-12 text-purple-600" />,
  },
];

const Services = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6 p-6">
      {services.map((service) => (
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
  );
};

export default Services;
