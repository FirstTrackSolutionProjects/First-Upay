import { Lightbulb, Droplets, Flame, Wifi } from "lucide-react";

const billOptions = [
  {
    id: 1,
    title: "Electricity Bill",
    description: "Pay your electricity bills securely",
    icon: <Lightbulb className="w-10 h-10 text-yellow-500" />,
  },
  {
    id: 2,
    title: "Water Bill",
    description: "Clear your water utility bills",
    icon: <Droplets className="w-10 h-10 text-blue-500" />,
  },
  {
    id: 3,
    title: "Gas Bill",
    description: "Pay LPG and piped gas bills",
    icon: <Flame className="w-10 h-10 text-red-500" />,
  },
  {
    id: 4,
    title: "Broadband Bill",
    description: "Pay for your broadband & WiFi",
    icon: <Wifi className="w-10 h-10 text-green-600" />,
  },
];

const Bill = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Bill Payments</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {billOptions.map((item) => (
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

export default Bill;
