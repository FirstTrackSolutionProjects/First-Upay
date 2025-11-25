import { Gift, Star, BadgeCheck } from "lucide-react";
import { Link } from "react-router-dom";

const rewards = [
  {
    id: 1,
    title: "Cashback",
    description: "Get ₹50 cashback on your next payment",
    link: "/cashback",
    icon: <Gift className="w-14 h-14 text-pink-500" />,
    bg: "from-pink-100 to-red-50"
  },
  {
    id: 2,
    title: "Exclusive Offers",
    description: "Unlock discounts on shopping & travel",
    link: "/cashback",
    icon: <Star className="w-14 h-14 text-yellow-500" />,
    bg: "from-yellow-100 to-orange-50"
  },
  {
    id: 3,
    title: "Verified Rewards",
    description: "Guaranteed rewards from trusted brands",
    link: "/cashback",
    icon: <BadgeCheck className="w-14 h-14 text-green-600" />,
    bg: "from-green-100 to-emerald-50"
  },
];

const Reward = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
          🎁 Your Rewards
        </h2>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {rewards.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              className={`rounded-2xl shadow-lg p-6 bg-gradient-to-br ${item.bg}
              hover:scale-[1.05] hover:shadow-2xl transition transform duration-300`}
            >
              <div className="flex justify-center mb-4">{item.icon}</div>

              <h3 className="text-2xl font-semibold text-center text-gray-900">
                {item.title}
              </h3>

              <p className="text-gray-600 text-center mt-2 text-sm md:text-base">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reward;
