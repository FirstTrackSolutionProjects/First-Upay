import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

export default function Shopping() {
  const [products] = useState([
    {
      id: 1,
      name: "Wireless Earbuds",
      price: 1499,
      img: "/images/earbuds.jpeg",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 2999,
      img: "/images/smartwatch.jpeg",
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: 1999,
      img: "/images/speaker.jpeg",
    },
    {
      id: 4,
      name: "Bagpack",
      price: 999,
      img: "/images/bagpack.jpeg",
    },
  ]);

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800">Shop Now</h1>
        <p className="text-gray-600 mt-1">Get the best deals on premium products</p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white/90 backdrop-blur-md shadow-lg rounded-2xl overflow-hidden 
                       transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-60 object-cover rounded-t-2xl"
            />

            <div className="p-5 text-center">
              <h2 className="text-xl font-semibold text-gray-800">
                {item.name}
              </h2>

              <p className="text-indigo-600 font-bold text-2xl mt-2">
                ₹{item.price}
              </p>

              <button
                className="mt-4 flex items-center justify-center gap-2 bg-indigo-600 text-white 
                           px-5 py-2 rounded-full hover:bg-indigo-700 active:scale-95 transition-all"
              >
                <FaShoppingCart /> Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
