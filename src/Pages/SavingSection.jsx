import React from "react";
import { FaWallet, FaCoins, FaRupeeSign, FaChartLine } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SavingSection = () => {
  const navigate = useNavigate();

  const options = [
    {
      title: "Smart Savings",
      desc: "Start saving daily with flexible plans",
      icon: <FaWallet className="text-yellow-500 text-3xl" />,
      link: "/smart-savings",
    },
    {
      title: "Invest in Gold",
    desc: "Secure and flexible gold investment options",
      icon: <FaCoins className="text-amber-600 text-3xl" />,
      link: "/invest-gold",
    },
    {
      title: "Gold Loan",
      desc: "Get loans up to ₹25 Lakhs instantly",
      icon: <FaRupeeSign className="text-green-600 text-3xl" />,
      link: "/gold-loan",
    },
    {
      title: "Gold-SIP",
      desc: "Grow steadily with monthly investment",
      icon: <FaChartLine className="text-indigo-600 text-3xl" />,
      link: "/invest-gold",
    },
  ];

  return (
    <section className="bg-orange-200 text-black py-8 px-4 m-3 rounded-2xl shadow-lg">
      <h2 className="text-xl font-bold mb-2">Gold Investment</h2>
      <p className="text-black text-sm mb-6">
        Save, invest and grow with our smart financial products.
      </p>

      <div className="grid grid-cols-2 gap-4">
        {options.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(item.link)}
            className="bg-gray-100 rounded-xl p-4 flex flex-col justify-between shadow hover:shadow-lg transition cursor-pointer"
          >
            <div>{item.icon}</div>
            <div className="mt-3">
              <h3 className="text-md font-semibold">{item.title}</h3>
              <p className="text-xs text-gray-400">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SavingSection;
