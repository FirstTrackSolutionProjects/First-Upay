import { useState } from "react";
import { Search, Building2 } from "lucide-react";

export default function MunicipalTaxProviders() {
  const [query, setQuery] = useState("");

  const providers = [
    { id: 1, name: "Bhubaneswar Municipal Corporation", logo: "/logos/bmc.jpeg" },
    { id: 2, name: "Gorakhpur Nagar Nigam", logo: "/logos/gorakhpur.jpeg" },
    { id: 3, name: "Navi Mumbai Municipal Corporation Property Tax", logo: "/logos/nmmc.jpeg" },
    { id: 4, name: "Odisha Municipal Payments Property Tax", logo: "/logos/propertytax.jpeg" },
  ];

  const allBillers = [
    { id: 5, name: "Directorate of Municipal Administration Karnataka", logo: "/logos/karnataka.jpeg" },
    { id: 6, name: "Greater Chennai Corporation", logo: "/logos/chennai.jpeg" },
    { id: 7, name: "Agartala Municipal Corporation", logo: "/logos/agartala.png" },
    { id: 8, name: "Ahmedabad Municipal Corporation", logo: "/logos/ahmedabad.jpeg" },
    { id: 9, name: "Ajmer Nagar Nigam", logo: "/logos/ajmer.png" },
    { id: 10, name: "Bhubaneswar Municipal Corporation", logo: "/logos/bmc.jpeg" },
    { id: 11, name: "Bicholim Municipal Council", logo: "/logos/propertytax.jpeg" },
    { id: 12, name: "Bicholim Municipal Council Trade License", logo: "/logos/propertytax.jpeg" },
    { id: 13, name: "Canacona Municipal Council Trade License", logo: "/logos/propertytax.jpeg" },
    { id: 14, name: "Canacona Municipal Council", logo: "/logos/propertytax.jpeg" },
    { id: 15, name: "Chhatrapati Sambhajinagar Municipal Corporation", logo: "/logos/sambhajinagar.png" },
    { id: 16, name: "Corporation of City Panaji", logo: "/logos/propertytax.jpeg" },
    { id: 17, name: "Corporation of City Panaji Trade License", logo: "/logos/propertytax.jpeg" },
    { id: 18, name: "Cuncolim Municipal Council Trade License", logo: "/logos/propertytax.jpeg" },
    { id: 19, name: "Cuncolim Municipal Council", logo: "/logos/propertytax.jpeg" },
    { id: 20, name: "Curchorem Cacora Municipal Council Trade License", logo: "/logos/propertytax.jpeg" },
    { id: 21, name: "Curchorem Cacora Municipal Council", logo: "/logos/propertytax.jpeg" },
    { id: 22, name: "Davangere Citi Municipal Corporation", logo: "/logos/davangere.jpeg" },
    { id: 23, name: "GRAM PANCHAYAT WANGI", logo: "/logos/wangi.png" },
    { id: 24, name: "GRAMPANCHAYAT NEVARI", logo: "/logos/propertytax.jpeg" },
    { id: 25, name: "Gorakhpur Nagar Nigam", logo: "/logos/gorakhpur.jpeg" },
    { id: 26, name: "Gram Panchayat Dhamner", logo: "/logos/dhamner.png" },
    { id: 27, name: "Gramin Nalpani Yojana Grampanchayat Shiye", logo: "/logos/propertytax.jpeg" },
    { id: 28, name: "Grampanchayat Aitawade Khurd", logo: "/logos/aitawade.png" },
    { id: 29, name: "Grampanchayat Ambegaon", logo: "/logos/propertytax.jpeg" },
    { id: 30, name: "Grampanchayat Halondi Gram Nidhi", logo: "/logos/propertytax.jpeg" },

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
      <div className="flex items-center p-4 shadow-md bg-indigo-500 ">
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
