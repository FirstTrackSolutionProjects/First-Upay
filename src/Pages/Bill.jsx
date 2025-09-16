import { 
  Lightbulb, Smartphone, Tv, 
  CreditCard, Wallet, Banknote, Car, Film, GraduationCap, Flame, Phone, Fuel, Droplet, Home, Building
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const billOptions = [
  {
    id: 1,
    title: "Electricity Bill",
    description: "Pay your electricity bills securely",
    icon: <Lightbulb className="w-10 h-10 text-yellow-500" />,
    link: "/electricity-bill",
  },
   {
    id: 2,
    title: "FASTag Recharge",
    description: "Recharge your FASTag instantly",
    icon: <Car className="w-10 h-10 text-blue-600" />,
    link: "/fastag",
  },
  {
    id: 3,
    title: "Entertainment",
    description: "Pay for OTT & Subscription services",
    icon: <Film className="w-10 h-10 text-red-500" />,
    link: "/entertainment",
  },
  {
    id: 4,
    title: "Mobile Recharge",
    description: "Prepaid and Postpaid recharges",
    icon: <Smartphone className="w-10 h-10 text-purple-600" />,
    link: "/recharge",
  },
  {
    id: 5,
    title: "DTH Recharge",
    description: "Recharge your DTH instantly",
    icon: <Tv className="w-10 h-10 text-indigo-600" />,
    link: "/dth-recharge",
  },
  {
    id: 6,
    title: "Credit Card Bill",
    description: "Pay your credit card dues",
    icon: <CreditCard className="w-10 h-10 text-pink-600" />,
    link: "/credit-card",
  },
  {
    id: 7,
    title: "Wallet Topup",
    description: "Add money to your wallet easily",
    icon: <Wallet className="w-10 h-10 text-orange-600" />,
    link: "/wallet",
  },
  {
    id: 8,
    title: "Loan Repayment",
    description: "Pay EMIs for loans",
    icon: <Banknote className="w-10 h-10 text-green-500" />,
    link: "/repayment",
  },
  {
  id: 9,
  title: "Tution Fee",
  description: "Pay school or college fees",
  icon: <GraduationCap className="w-10 h-10 text-blue-500" />, 
  link: "/fees",
  },
  {
    id: 10,
    title: "Book Cylinder",
    description: "Book your LPG gas cylinder easily",
    icon: <Flame className="w-10 h-10 text-orange-500" />,
    link: "/book-cylinder",
  },
  {
    id: 11,
    title: "Broadband / Landline",
    description: "Pay broadband or landline bills",
    icon: <Phone className="w-10 h-10 text-green-500" />,
    link: "/broadband",
  },
  {
    id: 12,
    title: "Piped Gas",
    description: "Pay piped natural gas bills",
    icon: <Fuel className="w-10 h-10 text-yellow-500" />,
    link: "/piped-gas",
  },
  {
    id: 13,
    title: "Water Bill",
    description: "Pay your water utility bills",
    icon: <Droplet className="w-10 h-10 text-blue-400" />,
    link: "/water",
  },
  {
  id: 14,
  title: "Pay Rent",
  description: "Pay your house or shop rent securely",
  icon: <Home className="w-10 h-10 text-green-500" />,
  link: "/rent",
  },
  {
    id: 15,
    title: "Municipal Tax",
    description: "Pay your property or municipal taxes easily",
    icon: <Building className="w-10 h-10 text-yellow-500" />,
    link: "/municipal-tax",
  },


  
];

const Bill = () => {
  const navigate = useNavigate();

  return (
    <div className="p-8 max-w-7xl mx-auto bg-sky-200 m-4">
      <h2 className="text-3xl font-bold mb-8">Bill Payments</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {billOptions.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(item.link)}
            className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg cursor-pointer transition"
          >
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
