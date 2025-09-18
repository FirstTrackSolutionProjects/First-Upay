import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

export default function Shopping() {
  const [products] = useState([
    {
      id: 1,
      name: "Wireless Earbuds",
      price: 1499,
      img: "/images/earbuds.jpg",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 2999,
      img: "/images/smartwatch.jpg",
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: 1999,
      img: "/images/speaker.jpg",
    },
    {
      id: 4,
      name: "Backpack",
      price: 999,
      img: "/images/backpack.jpg",
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="text-center mb-10">
       
        <p className="text-gray-600 font-bold">Shop the best products with ease</p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col items-center">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-blue-600 font-bold text-xl">
                ₹{item.price}
              </p>
              <button className="mt-3 flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
                <FaShoppingCart /> Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
