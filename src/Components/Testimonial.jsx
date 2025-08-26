import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";


export default function Testimonial() {
  const testimonials = [
    {
      name: "Amit Sharma",
      text: "PhonePe makes my bill payments effortless. It's quick and I never miss a due date.",
      img: "/images/Bavatar.jpg",
    },
    {
      name: "Priya Verma",
      text: "I trust PhonePe for all my recharges and transfers. Super reliable and safe!",
      img: "/images/Gavatar.jpg",
    },
    {
      name: "Ravi Kumar",
      text: "Investing with PhonePe is so easy. Everything I need is in one app.",
      img: "/images/Bavatar.jpg",
    },
    {
      name: "Sneha Patel",
      text: "Sending money to family takes seconds. PhonePe is a lifesaver.",
      img: "/images/Gavatar.jpg",
    },
    {
      name: "Arjun Singh",
      text: "Simple, secure, and fast. PhonePe is my go-to payment app every day.",
      img: "/images/Bavatar.jpg",
    },
  ];

  return (
    <div className="w-full bg-white py-12 px-6 flex flex-col items-center text-center">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
        What Our Users Say
      </h2>

      <p className="text-gray-600 max-w-2xl mb-10">
        Millions of Indians trust PhonePe for fast, secure, and reliable
        payments every day. Here’s what some of our users have to say:
      </p>

        {/* Swiper Slider */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-5xl w-full"
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center text-center p-8 rounded-2xl border shadow-sm hover:shadow-lg transition bg-white">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-700 italic mb-2">"{t.text}"</p>
              <span className="font-semibold text-gray-800">{t.name}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}