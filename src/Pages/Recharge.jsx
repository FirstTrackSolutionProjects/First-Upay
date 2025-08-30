import { Smartphone, Tv, Wifi } from "lucide-react";

const rechargeOptions = [
  {
    id: 1,
    title: "Mobile Recharge",
    description: "Prepaid & Postpaid recharges",
    icon: <Smartphone className="w-10 h-10 text-purple-600" />,
  },
  {
    id: 2,
    title: "DTH Recharge",
    description: "Recharge your DTH connections instantly",
    icon: <Tv className="w-10 h-10 text-blue-500" />,
  },
  {
    id: 3,
    title: "Data Card Recharge",
    description: "Recharge your WiFi/Data cards",
    icon: <Wifi className="w-10 h-10 text-green-600" />,
  },
];

const Recharge = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">RECHARGE</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {rechargeOptions.map((item) => (
          <div key={item.id} className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-500 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recharge;
