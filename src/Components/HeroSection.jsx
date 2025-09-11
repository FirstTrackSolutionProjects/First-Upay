import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";


const slides = [
  {
    id: 1,
    title: "Fast, Secure & Easy UPI Payments 🚀",
    desc: "Send and receive money instantly with UPI Pay. 100% secure, anytime, anywhere.",
    btn1: { text: "💸 Send Money", link: "/payment" },
    btn2: { text: "📱 Scan & Pay", link: "/qr" },
    bg: "from-indigo-600 to-cyan-500",
  },
  {
    id: 2,
    title: "Pay Bills in Seconds ⚡",
    desc: "Electricity, water, mobile recharge & more — all in one place.",
    btn1: { text: "📂 Pay Bills", link: "/bills" },
    btn2: { text: "📞 Recharge Now", link: "/recharge" },
    bg: "from-pink-600 to-orange-400",
  },
  {
    id: 3,
    title: "Shop & Earn Rewards 🎁",
    desc: "Make payments at your favorite stores and earn cashback & rewards.",
    btn1: { text: "🛒 Start Shopping", link: "/shop" },
    btn2: { text: "🎁 View Rewards", link: "/rewards" },
    bg: "from-emerald-500 to-lime-400",
  },
    {
    id: 4,
    title: "Instant Loan & EMI Calculator 📅",
    desc: "Get small loans and credit instantly with flexible repayment options.",
    btn1: { text: "💳 Apply Loan", link: "/instant-loan" },
    btn2: { text: "📊 EMI Calculator", link: "/emi-calculator" },
    bg: "from-purple-600 to-fuchsia-400",
  },
  {
  id: 5,
  title: "Invest in Gold 🪙",
  desc: "Secure your future by investing in digital gold with flexible plans.",
  btn1: { text: "✨ Smart saving", link: "/smart-saving" },
  btn2: { text: "📈 Gold-SIP", link: "/invest-gold" },
  bg: "from-yellow-600 to-amber-300",
},

];

const HeroSection = () => {
  


  return (
      <section
      className="relative w-full h-[60vh] overflow-hidden mt-6">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        grabCursor={true}
        className="h-full"
      >
     
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
          <div
            className={`flex-shrink-0 w-full h-full bg-gradient-to-r ${slide.bg} text-white flex flex-col justify-center items-center text-center px-6`}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
            <p className="text-lg md:text-xl mb-6 max-w-2xl">{slide.desc}</p>
            <div className="flex flex-col md:flex-row gap-4">
              <Link
                to={slide.btn1.link}
                className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
              >
                {slide.btn1.text}
              </Link>
              <Link
                to={slide.btn2.link}
                className="px-6 py-3 bg-black/30 backdrop-blur text-white font-semibold rounded-lg shadow hover:bg-black/50 transition"
              >
                {slide.btn2.text}
              </Link>
            </div>
          </div>
        </SwiperSlide>
        ))}
     </Swiper>
    </section>
  );
};

export default HeroSection;
