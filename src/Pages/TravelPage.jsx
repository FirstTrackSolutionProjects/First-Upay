import { FaBus, FaTrain, FaPlane, FaHotel, FaCar } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function TravelPage() {
  const options = [
    { title: "Bus", icon: <FaBus size={40} className="text-indigo-600"/>, link:"/bus",    subtitle: "Book affordable bus tickets easily"  },
    { title: "Train", icon: <FaTrain size={40} className="text-green-600"/>, link:"/train",
        subtitle: "Find and book train journeys seamlessly"
 },
    { title: "Flight", icon: <FaPlane size={40} className="text-red-500"/>, link:"/flight",
        subtitle: "Search and book flights worldwide"
 },
//     { title: "Hotel", icon: <FaHotel size={40} className="text-yellow-500"/>, link:"/hotel",
//         subtitle: "Discover and book hotels easily"
//  },
//     { title: "Car Rental", icon: <FaCar size={40} className="text-purple-600"/>, link:"/rental-car",
//         subtitle: "Rent cars at your destination"
// },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {options.map((item, index) => (
        <Link 
          key={index} 
          to={item.link} 
          className="bg-white shadow-md rounded-xl flex flex-col items-center justify-center p-6 hover:shadow-lg transition"
        >
          {item.icon}
          <p className="mt-2 font-medium">{item.title}</p>
            <p className="text-sm text-gray-500 text-center mt-1">{item.subtitle}</p>
        </Link>
      ))}
    </div>
  );
}
