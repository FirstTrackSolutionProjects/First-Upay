import React from "react";
import {
  FaMobileAlt,
  FaTv,
  FaCar,
  FaGasPump,
  FaLightbulb,
  FaHome,
  FaCoins,
  FaBox,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const services = [
  { name: "Mobile Recharge", icon: <FaMobileAlt />, color: "from-pink-400 to-pink-600" },
  { name: "DTH TV", icon: <FaTv />, color: "from-yellow-400 to-orange-500" },
  { name: "FASTag Recharge", icon: <FaCar />, color: "from-red-400 to-red-600" },
  { name: "Piped Gas", icon: <FaGasPump />, color: "from-green-400 to-green-600" },
  { name: "Electricity", icon: <FaLightbulb />, color: "from-indigo-400 to-indigo-600" },
  { name: "Broadband", icon: <FaHome />, color: "from-blue-400 to-blue-600" },
  { name: "Recurring Deposit", icon: <FaBox />, color: "from-purple-400 to-purple-600" },
  { name: "Loan Repayment", icon: <FaCoins />, color: "from-teal-400 to-teal-600" },
];

const UtilityServices = () => {
  return (
    <div className="py-12 px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        All Your Payments in One Place
      </h2>

      {/* ✅ Swiper Slider with AutoSlide */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        spaceBetween={15}
        slidesPerView={2}
        grabCursor={true}
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        loop={true}
      >
        {services.map((service, index) => (
         <SwiperSlide key={index}>
          <div
            className={`flex flex-col items-center justify-center gap-2 p-4 h-36 rounded-2xl shadow-md bg-gradient-to-br ${service.color} text-white cursor-pointer hover:scale-105 transition w-full`}
          >
            <div className="text-3xl sm:text-4xl">{service.icon}</div>
            <p className="font-medium text-sm sm:text-base text-center whitespace-normal break-words leading-snug px-2">
              {service.name}
            </p>
          </div>
        </SwiperSlide>

        ))}
      </Swiper>
    </div>
  );
};

export default UtilityServices;
