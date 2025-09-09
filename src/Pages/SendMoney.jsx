import { useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function SendMoney() {
  const [search, setSearch] = useState("");

 
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-300 to-purple-300 text-gray-900 m-4">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b shadow-sm">
       
          <div>
            <h1 className="text-lg font-bold">Send Money</h1>
            <p className="text-xs text-gray-500">to any UPI app</p>
          </div>
       
       
      </div>

      {/* Search */}
      <div className="p-4">
        <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
          <FiSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Start a new payment from here"
            className="bg-transparent outline-none flex-1"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Split Expenses */}
      <div className="mx-4 mb-4 p-4 rounded-xl bg-gradient-to-r from-blue-100 to-purple-100 flex justify-between items-center shadow-sm">
        <div>
          <h2 className="font-semibold">Split Expenses</h2>
          <p className="text-sm text-gray-600">Track & settle with friends</p>
        </div>
        <span className="text-xs font-medium bg-green-200 text-green-800 px-2 py-1 rounded-full">
          NEW
        </span>
      </div>

    

      {/* New Payment Button */}
      <div className="fixed bottom-6 right-6">
        <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full shadow-lg font-semibold hover:opacity-90">
          + New Payment
        </button>
      </div>
    </div>
  );
}
