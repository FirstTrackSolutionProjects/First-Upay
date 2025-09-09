import { FiArrowLeft, FiHelpCircle, FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function SelfAccount() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 text-gray-900 m-4">
      {/* Header */}
      <div className="flex justify-between items-center p-4 shadow-md bg-gradient-to-r from-blue-400 to-purple-400 text-white">
        <div className="flex items-center space-x-2">
          <FiArrowLeft className="w-5 h-5 cursor-pointer" />
          <h1 className="text-lg font-bold">To Self Bank Account</h1>
        </div>
        <FiHelpCircle className="w-5 h-5 cursor-pointer" />
      </div>


    

      {/* Floating Button */}
    <div className="fixed bottom-6 right-6">
        <Link to="/add-bank">
            <button className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full shadow-lg font-semibold hover:opacity-90">
            <FiPlus className="w-5 h-5" /> 
            <span>Self Account</span>
            </button>
        </Link>
        </div>

    
    </div>
  );
}
