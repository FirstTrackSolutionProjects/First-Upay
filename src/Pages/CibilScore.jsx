import { FaCreditCard, FaInfoCircle } from "react-icons/fa";

export default function CibilScore() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-6">
        {/* Title */}
        <img
            src="/images/cibil-score.jpg"
            alt="CibilScore"
            className="w-full h-96 object-cover lg:h-auto"
          />
        <div className="flex items-center gap-3 m-4">
          <FaCreditCard className="text-indigo-600 text-3xl" />
          <h1 className="text-2xl font-bold text-gray-800">Check Your Cibil Score</h1>
        </div>

        {/* Info */}
        <p className="text-gray-600 mb-4">
          Your Cibil Score helps lenders evaluate your creditworthiness. A higher score increases your chances of getting loans and better interest rates.
        </p>

        {/* Score Card */}
        <div className="bg-gradient-to-r from-indigo-400 to-purple-500 rounded-xl p-6 text-center text-white mb-6 shadow">
          <h2 className="text-lg font-medium">Your Current Score</h2>
          <p className="text-5xl font-bold mt-2">750</p>
          <p className="mt-2 text-sm">Excellent Credit Score</p>
        </div>

        {/* Check Score Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">PAN Number</label>
            <input
              type="text"
              placeholder="Enter your PAN number"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Mobile Number</label>
            <input
              type="tel"
              placeholder="Enter your mobile number"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg transition"
          >
            Check Score
          </button>
        </form>

        {/* Note */}
        <div className="flex items-start gap-2 mt-6 text-gray-500 text-sm">
          <FaInfoCircle className="mt-0.5" />
          <p>
            We do not store your personal information. The score shown is fetched securely from credit bureau partners.
          </p>
        </div>
      </div>
    </div>
  );
}
