import { useState } from "react";
import { FiSearch, FiPlusSquare } from "react-icons/fi";

// const contacts = [
//   { id: 1, number: "+91 63700 20720" },
//   { id: 2, number: "+91 81447 97441" },
//   { id: 3, number: "+91 82260 41109" },
//   { id: 4, number: "+91 92662 46656" },
//   { id: 5, number: "+91 75369 91566" },
// ];

export default function NewPayment() {
  const [search, setSearch] = useState("");

//   const filteredContacts = contacts.filter((c) =>
//     c.number.includes(search)
//   );

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b shadow-sm">
        <h1 className="text-lg font-bold">Select a contact</h1>
      </div>

      {/* Search */}
      <div className="p-4">
        <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
          <FiSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search any mobile number"
            className="bg-transparent outline-none flex-1"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* New Mobile Number Option */}
      <div className="px-4">
        <div className="flex items-center gap-3 bg-gradient-to-r from-purple-100 to-blue-100 border rounded-lg p-3 cursor-pointer hover:from-purple-200 hover:to-blue-200 transition">
          <FiPlusSquare className="text-purple-600 text-xl" />
          <span className="font-medium">New Mobile Number</span>
        </div>
      </div>

      {/* Contact List */}
      {/* <div className="p-4 space-y-3">
        {filteredContacts.map((c) => (
          <div
            key={c.id}
            className="flex items-center justify-between bg-gray-50 border p-3 rounded-lg shadow-sm cursor-pointer hover:bg-gray-100"
          >
            <span>{c.number}</span>
          </div>
        ))}
      </div> */}
    </div>
  );
}
