import { useState } from "react";
import { FaSearch, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { SiPhonepe, SiGooglepay, SiPaytm } from "react-icons/si";
import { MdPayment } from "react-icons/md";

export default function SendMoney() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-200 text-gray-900 m-4">
      {/* Header */}
      <div className=" p-4 border-b shadow-sm  rounded-xl">
          <h1 className="text-lg font-bold">Send Money</h1>

          <div className="flex items-center gap-2 mt-1 text-gray-500 text-sm">
          <span>to any UPI app</span>
          <SiPhonepe className="text-purple-600 text-2xl" title="PhonePe" />
          <MdPayment className="text-green-600 text-2xl" title="BHIM" />
          <SiGooglepay className="text-blue-600 text-2xl" title="GPay" />
          <SiPaytm className="text-sky-600 text-2xl" title="Paytm" />
        </div>
      </div>


      {/* Search */}
      <div className="p-4">
        <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search By Number or Name"
            className="bg-transparent outline-none flex-1"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
           <FaUser
            className="text-orange-500 ml-2 cursor-pointer hover:text-blue-600 text-xl"
            // onClick={() => navigate("/new-payment")} 
          />
        </div>
      </div>

      {/* Split Expenses */}
      <div className="mx-4 mb-4 p-4 rounded-xl bg-gradient-to-r from-blue-100 to-purple-100 flex justify-between items-center shadow-sm">
        <div>
          <h2 className="font-semibold">Split Expenses</h2>
          <p className="text-sm text-gray-600">Track & settle with friends</p>
        </div>
        {/* <span className="text-xs font-medium bg-green-200 text-green-800 px-2 py-1 rounded-full">
          NEW
        </span> */}
      </div>

      {/* New Payment Button */}
      <div className="fixed bottom-6 right-6">
        <button
          onClick={() => navigate("/new-payment")}
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full shadow-lg font-semibold hover:opacity-90"
        >
          + New Payment
        </button>
      </div>
    </div>
  );
}
