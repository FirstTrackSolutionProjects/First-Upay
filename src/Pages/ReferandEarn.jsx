import React, { useState } from "react";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaTelegram,
} from "react-icons/fa";

export default function ReferandEarn() {
  const [showMore, setShowMore] = useState(false);

  const mainSocials = [
    { name: "Whatsapp", icon: <FaWhatsapp size={30} className="text-green-500" /> },
    { name: "Facebook", icon: <FaFacebook size={30} className="text-blue-600" /> },
    { name: "Instagram", icon: <FaInstagram size={30} className="text-pink-500" /> },
  ];

  const moreSocials = [
    { name: "Twitter", icon: <FaTwitter size={30} className="text-sky-500" /> },
    { name: "Telegram", icon: <FaTelegram size={30} className="text-blue-400" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 p-6">
      <div className="max-w-xl mx-auto">

        {/* Banner Section */}
        <div className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white p-8 rounded-3xl shadow-xl text-center">
          <h1 className="text-3xl font-extrabold">Refer & Earn</h1>
          <p className="mt-2 text-base opacity-90">
            Invite friends & earn rewards on their first transaction!
          </p>

          <div className="mt-4 bg-white text-purple-700 font-bold w-max mx-auto px-5 py-2 rounded-full shadow-md">
            Earn ₹200 / Referral
          </div>
        </div>

        {/* Invite Section */}
        <div className="bg-white p-6 rounded-3xl mt-8 shadow-lg">
          <h2 className="text-lg font-bold mb-5 text-center text-gray-800">
            Invite via Social Media
          </h2>

          {/* Main Socials */}
          <div className="grid grid-cols-3 gap-4">
            {mainSocials.map((s, index) => (
              <div
                key={index}
                className="bg-gray-50 hover:bg-gray-100 rounded-xl p-4 flex flex-col items-center shadow-sm transition cursor-pointer"
              >
                {s.icon}
                <p className="text-sm mt-2 font-medium text-gray-700">{s.name}</p>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setShowMore(!showMore)}
              className="text-purple-600 font-semibold hover:underline hover:text-purple-800"
            >
              {showMore ? "View Less" : "View All"}
            </button>
          </div>

          {/* Extra Socials */}
          {showMore && (
            <div className="grid grid-cols-2 gap-4 mt-4">
              {moreSocials.map((s, index) => (
                <div
                  key={index}
                  className="bg-gray-50 hover:bg-gray-100 rounded-xl p-4 flex flex-col items-center shadow-sm transition cursor-pointer"
                >
                  {s.icon}
                  <p className="text-sm mt-2 font-medium text-gray-700">{s.name}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Section */}
        <p className="text-center text-gray-600 mt-6 text-sm">
          Share your referral link & earn rewards effortlessly! 🎉
        </p>
      </div>
    </div>
  );
}
