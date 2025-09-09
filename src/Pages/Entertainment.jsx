export default function Entertainment() {
  const services = [
    { name: "Netflix", desc: "Pay for your Netflix subscription" },
    { name: "Amazon Prime Video", desc: "Renew your Prime Video membership" },
    { name: "Disney+ Hotstar", desc: "Recharge Disney+ Hotstar easily" },
    { name: "SonyLIV", desc: "Pay for SonyLIV subscription" },
    { name: "Zee5", desc: "Enjoy movies & shows on Zee5" },
  ];

  return (
    <div className="p-8 max-w-4xl mx-auto bg-blue-200 m-4">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-4">Entertainment Payments</h1>
      <p className="text-gray-600 mb-6">
        Manage and renew your OTT & subscription services instantly.
      </p>

      {/* Services List */}
      <div className="grid sm:grid-cols-2 gap-6">
        {services.map((service, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow hover:shadow-md transition cursor-pointer"
          >
            <h2 className="text-xl font-semibold text-gray-800">
              {service.name}
            </h2>
            <p className="text-gray-500 mt-2">{service.desc}</p>
            <button className="mt-4 bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700">
              Pay Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
