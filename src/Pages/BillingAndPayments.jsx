import React from "react";
import {
  CreditCard,
  Banknote,
  Globe,
  Repeat,
  BarChart3,
  Smartphone,
  HandCoins,
  Shield,
  Key,
} from "lucide-react";

export default function BillingAndPayments() {
  return (
    <div className="p-5 mx-auto bg-gradient-to-b from-gray-50 to-white m-4">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-6 text-gray-900 tracking-tight">
        Billing & Payments
      </h1>

      {/* Billing Info */}
      <div className="bg-white rounded-2xl shadow-md p-5 mb-6 border border-gray-100">
        <p className="text-gray-500 text-xs uppercase">Billing ID</p>
        <p className="font-semibold text-gray-800 text-lg">
          1234567890@firstupay
        </p>

        <div className="mt-4">
          <p className="text-gray-500 text-xs uppercase">
            Billing Number (Inactive)
          </p>
          <p className="font-semibold text-gray-700">1234567890</p>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="bg-white rounded-2xl shadow-md p-5 mb-6 border border-gray-100">
        <h2 className="font-semibold text-gray-900 mb-4 text-lg">
          Payment Methods
        </h2>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <button className="flex flex-col items-center justify-center p-4 border rounded-xl bg-gray-50 hover:bg-blue-50 hover:shadow-md transition">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 mb-2">
              <Banknote className="w-5 h-5 text-green-600" />
            </div>
            Add Bank Account
          </button>
          <button className="flex flex-col items-center justify-center p-4 border rounded-xl bg-gray-50 hover:bg-blue-50 hover:shadow-md transition">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 mb-2">
              <CreditCard className="w-5 h-5 text-blue-600" />
            </div>
            Add Rupay Credit Card
          </button>
          <button className="flex flex-col items-center justify-center p-4 border rounded-xl bg-gray-50 hover:bg-blue-50 hover:shadow-md transition">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-100 mb-2">
              <Smartphone className="w-5 h-5 text-purple-600" />
            </div>
            Activate UPI Lite
          </button>
          <button className="flex flex-col items-center justify-center p-4 border rounded-xl bg-gray-50 hover:bg-blue-50 hover:shadow-md transition">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-100 mb-2">
              <Smartphone className="w-5 h-5 text-indigo-600" />
            </div>
            Add Credit Line UPI
          </button>
        </div>

        <div className="mt-5 bg-gray-50 p-3 rounded-lg">
          <p className="text-sm text-gray-500">Default Payment Account</p>
          <p className="font-semibold text-green-600">Your Bank Account</p>
        </div>
      </div>

      {/* Billing Settings */}
      <div className="bg-white rounded-2xl shadow-md p-5 mb-6 border border-gray-100">
        <h2 className="font-semibold text-gray-900 mb-4 text-lg">
          Billing Settings
        </h2>
        <ul className="space-y-4 text-sm">
          <li className="flex items-center justify-between hover:bg-gray-50 p-2 rounded-lg transition">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-100">
                <HandCoins className="w-4 h-4 text-yellow-600" />
              </div>
              <span className="font-medium text-gray-800">Payment Requests</span>
            </div>
          </li>
          <li className="flex items-center justify-between hover:bg-gray-50 p-2 rounded-lg transition">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100">
                <Repeat className="w-4 h-4 text-blue-600" />
              </div>
              <span className="font-medium text-gray-800">Automatic Payments</span>
            </div>
          </li>
          <li className="flex items-center justify-between hover:bg-gray-50 p-2 rounded-lg transition">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-indigo-100">
                <BarChart3 className="w-4 h-4 text-indigo-600" />
              </div>
              <span className="font-medium text-gray-800">
                Trading & IPO Payments
              </span>
            </div>
          </li>
          <li className="flex items-center justify-between hover:bg-gray-50 p-2 rounded-lg transition">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-green-100">
                <Globe className="w-4 h-4 text-green-600" />
              </div>
              <span className="font-medium text-gray-800">
                International Payments
              </span>
            </div>
          </li>
        </ul>
      </div>

      {/* Other Options */}
      <div className="bg-white rounded-2xl shadow-md p-5 border border-gray-100">
        <h2 className="font-semibold text-gray-900 mb-4 text-lg">
          Other Options
        </h2>
        <ul className="space-y-4 text-sm">
          <li className="flex items-center justify-between hover:bg-gray-50 p-2 rounded-lg transition">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100">
                <Shield className="w-4 h-4 text-gray-600" />
              </div>
              <span className="font-medium text-gray-800">Saved Cards</span>
            </div>
          </li>
          <li className="flex items-center justify-between hover:bg-gray-50 p-2 rounded-lg transition">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100">
                <Key className="w-4 h-4 text-gray-600" />
              </div>
              <span className="font-medium text-gray-800">
                Paytm Assist (Auto OTP)
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
