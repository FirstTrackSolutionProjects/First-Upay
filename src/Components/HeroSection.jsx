import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const slides = [
  {
    id: 1,
    title: "Fast, Secure & Easy UPI Payments 🚀",
    desc: "Send and receive money instantly with UPI Pay. 100% secure, anytime, anywhere.",
    btn1: { text: "💸 Send Money", link: "/payment" },
    btn2: { text: "📱 Scan & Pay", link: "/qr" },
    bg: "from-blue-600 to-blue-400",
  },
  {
    id: 2,
    title: "Pay Bills in Seconds ⚡",
    desc: "Electricity, water, mobile recharge & more — all in one place.",
    btn1: { text: "📂 Pay Bills", link: "/bills" },
    btn2: { text: "📱 Scan QR", link: "/qr" },
    bg: "from-purple-600 to-pink-500",
  },
  {
    id: 3,
    title: "Shop & Earn Rewards 🎁",
    desc: "Make payments at your favorite stores and earn cashback & rewards.",
    btn1: { text: "🛒 Start Shopping", link: "/shop" },
    btn2: { text: "🎁 View Rewards", link: "/rewards" },
    bg: "from-green-600 to-teal-500",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);



  return (
    <section className="relative w-full h-[60vh] overflow-hidden mt-6">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
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
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
