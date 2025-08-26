import { FaBus, FaTrain, FaPlane, FaHotel } from "react-icons/fa";

export default function Travel() {
  const options = [
    { title: "Bus", icon: <FaBus size={40} className="text-indigo-600" /> },
    { title: "Train", icon: <FaTrain size={40} className="text-pink-500" /> },
    { title: "Flight", icon: <FaPlane size={40} className="text-yellow-500" /> },
    { title: "Luxury Hotels", icon: <FaHotel size={40} className="text-green-600" /> },
  ];

  return (
    <div className="w-full flex flex-col items-center bg-white py-10 px-4">
      {/* Header */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
        Travel, Stays & Experiences
      </h2>
      <p className="text-gray-500 text-center max-w-lg mb-8">
        Discover cars, cruises, hotels, and eco-friendly rides. 
        Book your perfect trip quickly and easily.
      </p>

      {/* Grid Options */}
      <div className="grid grid-cols-2 gap-4 w-full max-w-3xl">
        {options.map((opt, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-5 rounded-2xl border hover:shadow-lg transition cursor-pointer"
          >
            <span className="text-lg font-semibold text-gray-800">{opt.title}</span>
            {opt.icon}
          </div>
        ))}
      </div>

      {/* Button */}
      <button className="mt-8 bg-indigo-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-indigo-700 transition flex items-center gap-2">
        Explore Now →
      </button>
    </div>
  );
}
