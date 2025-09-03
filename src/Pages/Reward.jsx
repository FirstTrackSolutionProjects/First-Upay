import { Gift, Star, BadgeCheck } from "lucide-react";
import { Link } from "react-router-dom";

const rewards = [
  {
    id: 1,
    title: "Cashback",
    description: "Get ₹50 cashback on your next payment",
    link: "/cashback",
    icon: <Gift className="w-10 h-10 text-pink-500" />,
  },
  {
    id: 2,
    title: "Exclusive Offers",
    description: "Unlock discounts on shopping & travel",
      // link: "/cashback",
    icon: <Star className="w-10 h-10 text-yellow-500" />,
  },
  {
    id: 3,
    title: "Verified Rewards",
    description: "Guaranteed rewards from trusted brands",
      // link: "/cashback",
    icon: <BadgeCheck className="w-10 h-10 text-green-600" />,
  },
];

const Reward = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Rewards</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {rewards.map((item) => (
          <Link 
          key={item.id}
          to={item.link}
           className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-500 mt-2">{item.description}</p>
          </Link>
     
        ))}
      </div>
    </div>
  );
};

export default Reward;
