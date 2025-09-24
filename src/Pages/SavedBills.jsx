import React from "react";
import {
  FileText,
  PlusCircle,
  ShieldCheck,
  Smile,
  Wallet,
} from "lucide-react";

export default function SavedBills() {
  return (
    <div className="p-5 mx-auto bg-gradient-to-b from-gray-50 to-white min-h-screen m-4">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-6 text-gray-900 tracking-tight">
        Saved Bills
      </h1>

      {/* Info Banner */}
      <div className="bg-white border border-blue-100 rounded-2xl shadow-sm p-5 text-center mb-6">
        <p className="font-semibold text-blue-700 text-base">
          Save your bills & never miss a due date
        </p>
        <div className="flex justify-around mt-4 text-sm">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 mb-2">
              <ShieldCheck className="w-5 h-5 text-blue-600" />
            </div>
            <span className="text-gray-700 font-medium">100% Secure</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-100 mb-2">
              <Smile className="w-5 h-5 text-yellow-500" />
            </div>
            <span className="text-gray-700 font-medium">Convenient</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 mb-2">
              <Wallet className="w-5 h-5 text-green-600" />
            </div>
            <span className="text-gray-700 font-medium">No Extra Charge</span>
          </div>
        </div>
      </div>

      {/* No Bills Section */}
      <div className="bg-white rounded-2xl shadow-md p-8 text-center mb-6">
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 mx-auto mb-4">
          <FileText className="w-8 h-8 text-gray-400" />
        </div>
        <p className="font-semibold text-gray-800 text-lg">
          No Saved Bills Found
        </p>
        <p className="text-gray-500 text-sm mt-1 leading-relaxed">
          You don’t have any saved bills or active bill reminders yet.
        </p>
        <button className="mt-5 px-6 py-2.5 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 active:scale-95 transition flex items-center justify-center gap-2 mx-auto">
          <PlusCircle className="w-5 h-5" />
          Add New Bill
        </button>
      </div>

      {/* Other Saved Bills */}
      <div className="bg-white rounded-2xl shadow-sm p-5 border border-gray-100">
        <h2 className="font-semibold text-gray-900 mb-2 text-lg">
          Other Saved Bills
        </h2>
        <p className="text-sm text-gray-600 leading-relaxed">
          Manage your subscriptions, recurring bills, and payments easily in the
          app.
        </p>
      </div>
    </div>
  );
}
