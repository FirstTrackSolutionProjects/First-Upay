import { useState } from "react";
import { FaInfoCircle, FaTimes } from "react-icons/fa";

export default function PnrStatusPage() {
  const [pnr, setPnr] = useState("");
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="min-h-screen bg-blue-50 m-4 p-4">
      {/* Header */}
      <div className="flex items-center p-4 bg-white shadow">
        <h1 className="text-lg font-bold text-gray-800">PNR Status</h1>
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-gray-800 mb-4">
          Check booking status of your upcoming journey
        </p>

        {/* Input */}
        <input
          type="text"
          value={pnr}
          onChange={(e) => setPnr(e.target.value)}
          maxLength={10}
          placeholder="10-digit PNR"
          className="w-full border border-gray-500 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:outline-none mb-3"
        />

        {/* Info box */}
        <div className="flex items-center gap-2 bg-yellow-50 border border-yellow-200 text-yellow-800 px-3 py-2 rounded-lg text-sm mb-5">
          <FaInfoCircle className="text-yellow-600" />
          <span>
            Where can I find my PNR?{" "}
            <button
              className="text-blue-600 font-medium underline"
              onClick={() => setShowInfo(true)}
            >
              Click here
            </button>
          </span>
        </div>

        {/* Banner */}
        {/* <div className="rounded-xl overflow-hidden shadow-md">
          <img
            src="/images/pnr-banner.jpg"
            alt="PNR Banner"
            className="w-full object-cover"
          />
        </div> */}
      </div>

      {/* ✅ Bottom Sheet Modal */}
      {showInfo && (
        <div className="fixed inset-0 bg-black/40 flex items-end justify-center z-50">
          <div className="bg-white w-full rounded-t-2xl shadow-lg p-5 animate-slideUp">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg font-bold text-gray-800">
                Where can I find my PNR?
              </h2>
              <button
                onClick={() => setShowInfo(false)}
                className="text-gray-600 hover:text-gray-900"
              >
                <FaTimes size={20} />
              </button>
            </div>

            <p className="text-gray-600 mb-3">
              The PNR is sent via email and SMS for bookings made through
              Paytm. PNR is also available on the booking summary page (My
              Bookings).
            </p>

            <img
              src="/images/pnr-example1.png"
              alt="PNR Example"
              className="rounded-lg mb-4"
            />

            <p className="text-gray-600">
              The PNR can be found on the top left corner of the printed
              ticket for bookings made at an offline ticket counter.
            </p>

            <img
              src="/images/pnr-example2.png"
              alt="PNR Ticket Example"
              className="rounded-lg mt-3"
            />
          </div>
        </div>
      )}

      {/* ✅ Animation */}
      <style>{`
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
