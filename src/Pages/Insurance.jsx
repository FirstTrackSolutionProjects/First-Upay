import { FaCar, FaHeartbeat, FaUserShield, FaMedkit } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Insurance() {
  const insurances = [
    {
      id: 1,
      title: "Vehicle Insurance",
      desc: "Secure your car/bike with quick and affordable insurance plans.",
      icon: <FaCar className="w-10 h-10 text-blue-600" />,
      link: "/insurance/vehicle",
    },
    {
      id: 2,
      title: "Term Insurance",
      desc: "Protect your family’s future with flexible term plans.",
      icon: <FaUserShield className="w-10 h-10 text-indigo-600" />,
      link: "/insurance/term",
    },
    {
      id: 3,
      title: "Health Insurance",
      desc: "Get medical coverage and hospital benefits instantly.",
      icon: <FaHeartbeat className="w-10 h-10 text-green-600" />,
      link: "/insurance/health",
    },
    {
      id: 4,
      title: "Accidental Insurance",
      desc: "Stay covered for unforeseen accidents and emergencies.",
      icon: <FaMedkit className="w-10 h-10 text-red-600" />,
      link: "/insurance/accidental",
    },
  ];

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Insurance Services</h2>
      <p className="text-gray-500 mb-8">
        Choose from a variety of insurance plans designed to protect you and your family.
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {insurances.map((item) => (
          <Link
            key={item.id}
            to={item.link}
            className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition flex flex-col items-center text-center"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-gray-500 mt-2 text-sm">{item.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
