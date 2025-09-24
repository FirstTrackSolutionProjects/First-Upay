import { FaUser, FaLayerGroup, FaHome, FaShieldAlt, FaBell, FaLanguage, FaSignOutAlt } from "react-icons/fa";

export default function AccountCenter() {
  const options = [
    {
      icon: <FaUser />,
      title: "Profile",
      desc: "Update your personal details and preferences",
      bg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: <FaLayerGroup />,
      title: "Active Services",
      desc: "Check all your subscribed services",
      bg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      icon: <FaHome />,
      title: "Saved Addresses",
      desc: "Manage delivery addresses easily",
      bg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: <FaShieldAlt />,
      title: "Security & Privacy",
      desc: "Manage login safety and privacy settings",
      bg: "bg-yellow-100",
      iconColor: "text-yellow-600",
    },
    {
      icon: <FaBell />,
      title: "Notifications",
      desc: "Set how you want to receive alerts",
      bg: "bg-pink-100",
      iconColor: "text-pink-600",
    },
    {
      icon: <FaLanguage />,
      title: "Language",
      desc: "Choose your preferred language",
      bg: "bg-indigo-100",
      iconColor: "text-indigo-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-5 m-4">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
       
        <h1 className="text-2xl font-bold">Account Center</h1>
      </div>

      {/* Options */}
      <div className="space-y-4">
        {options.map((opt, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-md hover:shadow-lg hover:scale-[1.02] transition cursor-pointer"
          >
            <div className={`p-3 rounded-full ${opt.bg} ${opt.iconColor} text-2xl`}>
              {opt.icon}
            </div>
            <div>
              <p className="font-semibold text-gray-900">{opt.title}</p>
              <p className="text-sm text-gray-500">{opt.desc}</p>
            </div>
          </div>
        ))}

        {/* Logout */}
        <div className="flex items-center gap-4 p-4 bg-red-50 rounded-2xl hover:bg-red-100 cursor-pointer transition">
          <div className="p-3 rounded-full bg-red-100 text-red-600 text-2xl">
            <FaSignOutAlt />
          </div>
          <div>
            <p className="font-semibold text-red-600">Logout</p>
            <p className="text-sm text-red-400">Sign out from this device</p>
          </div>
        </div>
      </div>
    </div>
  );
}
