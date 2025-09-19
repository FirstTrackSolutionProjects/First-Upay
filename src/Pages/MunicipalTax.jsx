import { useState } from "react";
import { Search, Building2 } from "lucide-react";

export default function MunicipalTaxProviders() {
  const [query, setQuery] = useState("");

  const providers = [
    { id: 1, name: "Bhubaneswar Municipal Corporation", logo: "/logos/bmc.png" },
    { id: 2, name: "Gorakhpur Nagar Nigam", logo: "/logos/gorakhpur.png" },
    { id: 3, name: "Navi Mumbai Municipal Corporation Property Tax", logo: "/logos/nmmc.png" },
    { id: 4, name: "Odisha Municipal Payments Property Tax", logo: "/logos/odisha.png" },
  ];

  const allBillers = [
    { id: 5, name: "Directorate of Municipal Administration Karnataka", logo: "/logos/karnataka.png" },
    { id: 6, name: "Greater Chennai Corporation", logo: "/logos/chennai.png" },
  ];

  // simple case-insensitive filter
  const filterByQuery = (arr) =>
    arr.filter((item) =>
      item.name.toLowerCase().includes(query.trim().toLowerCase())
    );

  const filteredProviders = filterByQuery(providers);
  const filteredAllBillers = filterByQuery(allBillers);

  return (
    <div className="min-h-screen bg-blue-100 text-gray-800 m-4 p-4">
      {/* Header */}
      <div className="flex items-center p-4 shadow-md">
        <h1 className="text-lg font-semibold">Select Provider</h1>
      </div>

      {/* Search Bar */}
      <div className="p-4">
        <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
          <Search className="w-5 h-5 text-gray-700" />
          <input
            type="text"
            placeholder="Search Provider"
            className="ml-2 bg-transparent w-full outline-none text-sm"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Billers in Odisha */}
      <div className="px-4 mb-4">
        <h2 className="font-bold text-gray-00 mb-2">Billers in Odisha</h2>
        {filteredProviders.length ? (
          <div className="space-y-3">
            {filteredProviders.map((p) => (
              <div
                key={p.id}
                className="flex items-center p-3 rounded-lg border bg-white cursor-pointer"
              >
                {p.logo ? (
                  <img src={p.logo} alt={p.name} className="w-10 h-10 rounded mr-3" />
                ) : (
                  <Building2 className="w-10 h-10 text-blue-400 mr-3" />
                )}
                <span className="text-sm font-medium">{p.name}</span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-500">No matches found</p>
        )}
      </div>

      {/* All Billers */}
      <div className="px-4">
        <h2 className="font-bold text-gray-900 mb-2">All Billers</h2>
        {filteredAllBillers.length ? (
          <div className="space-y-3">
            {filteredAllBillers.map((b) => (
              <div
                key={b.id}
                className="flex items-center p-3 rounded-lg border bg-white cursor-pointer"
              >
                {b.logo ? (
                  <img src={b.logo} alt={b.name} className="w-10 h-10 rounded mr-3" />
                ) : (
                  <Building2 className="w-10 h-10 text-yellow-500 mr-3" />
                )}
                <span className="text-sm font-medium">{b.name}</span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-500">No matches found</p>
        )}
      </div>
    </div>
  );
}
