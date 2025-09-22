import React from "react";
import { useState } from "react";
import { FaWhatsapp, FaFacebook, FaInstagram, FaTwitter, FaTelegram, FaYoutube } from "react-icons/fa";


export default function ReferandEarn() {
   const [showMore, setShowMore] = useState(false);

   
  const mainSocials = [
    { name: "Whatsapp", icon: <FaWhatsapp size={28} className="text-green-500" /> },
    { name: "Facebook", icon: <FaFacebook size={28} className="text-blue-600" /> },
    { name: "Instagram", icon: <FaInstagram size={28} className="text-pink-500" /> },
  ];

  const moreSocials = [
    { name: "Twitter", icon: <FaTwitter size={28} className="text-sky-500" /> },
    { name: "Telegram", icon: <FaTelegram size={28} className="text-blue-400" /> },
    // { name: "YouTube", icon: <FaYoutube size={28}
    // className="text-red-600" />}
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 m-4">
      
      {/* <div className="bg-blue-400 px-6 py-10 text-center relative text-white">
        <h1 className="text-3xl font-extrabold mb-3">Earn ₹200!</h1>
        <p className="text-sm opacity-90 mb-6">
          Invite your Indian contacts and NRI friends & family to PhonePe. <br />
          Earn on their 1st UPI payment.
        </p>

        <button className="bg-yellow-400 hover:bg-yellow-300 text-purple-900 font-semibold px-6 py-2 rounded-full flex items-center mx-auto shadow-md">
          How to refer a friend <span className="ml-2">▶</span>
        </button>
      </div> */}

      {/* Invite Section */}
      <div className="bg-white p-6 rounded-2xl mt-6 shadow-lg">
        <h2 className="text-lg font-bold mb-5 text-center">Invite</h2>
          {/* Main Social Media */}
        <div className="grid grid-cols-2 gap-4">
          {mainSocials.map((s, i) => (
            <div
              key={i}
              className="bg-gray-50 border rounded-xl p-4 flex flex-col items-center cursor-pointer hover:bg-gray-100"
            >
              {s.icon}
              <p className="text-sm mt-2">{s.name}</p>
            </div>
          ))}

          {/* More Button */}
            <div className="flex justify-center mt-4">
          <button
            onClick={() => setShowMore(!showMore)}
            className="bg-gray-50 border rounded-xl p-4 flex flex-col items-center cursor-pointer hover:bg-gray-100 w-80"
          >
            {showMore ? "View Less" : "View All"}
          </button>
        </div>
        </div>

        {/* More Social Media (Expand on Click) */}
        {showMore && (
          <div className="grid grid-cols-2 gap-4 mt-4">
            {moreSocials.map((s, i) => (
              <div
                key={i}
                className="bg-gray-50 border rounded-xl p-4 flex flex-col items-center cursor-pointer hover:bg-gray-100"
              >
                {s.icon}
                <p className="text-sm mt-2">{s.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}