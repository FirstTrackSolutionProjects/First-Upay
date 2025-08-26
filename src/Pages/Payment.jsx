import { Send, QrCode, Banknote } from "lucide-react";

const paymentOptions = [
  {
    id: 1,
    title: "Send Money",
    description: "Transfer instantly via UPI ID or bank account",
    icon: <Send className="w-10 h-10 text-blue-500" />,
  },
  {
    id: 2,
    title: "Scan & Pay",
    description: "Pay instantly by scanning QR codes",
    icon: <QrCode className="w-10 h-10 text-green-600" />,
  },
  {
    id: 3,
    title: "Bank Transfer",
    description: "Send money directly to any bank account",
    icon: <Banknote className="w-10 h-10 text-purple-600" />,
  },
];

const Payment = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Payments</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {paymentOptions.map((item) => (
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

export default Payment;
