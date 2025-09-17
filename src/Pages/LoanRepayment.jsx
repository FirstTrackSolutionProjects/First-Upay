import React, { useState } from "react";
import { FaSearch, FaChevronDown, FaTimes } from "react-icons/fa";

export default function LoanRepayment() {
  const [loanBillers] = useState([
    { name: "TVS Credit" },
    { name: "Annapurna Finance Private Limited-MFI" },
    { name: "Bajaj Finance LTD" },
    { name: "Bandhan Bank Loan", tag: "New" },
    { name: "Belstar MicroFinance LTD"},
    { name: "HDFC Bank Retails Assets" },
    { name: "UJJIVAN Small Finance Bank LTD"},
    { name: "Chaitanya Micro Finance"},
    { name: "DMI Finance" },
    { name: "Muthoot Finance" },
    { name: "Utkarsh Bank Loan Repayment" },
    { name: "HDB Financial Services Limited" },
    { name: "Home Credit" },
    { name: "HDB Financial Services Limited" },
    { name: "IIFL Finance" },
    { name: "Mahindra and Mahindra Financial Services Limited" },
    { name: "Muthoot Fincorp Ltd" },
    { name: "Shriram Finance Ltd." },
    { name: "121 Finance Private Limited" },
    { name: "AAVAS FINANCIERS LIMITED" },
    { name: "AMU Leasing Pvt Ltd" },
    { name: "APAC Financial Services Pvt Ltd" },
    { name: "ART Housing Finance (India) Limited" },
    { name: "ARTH" },
    { name: "AU Small Finance Bank" },
    { name: "Aadhar Housing Finance Limited" },
    { name: "Achiievers Finance Personal Loan" },
    { name: "Adarsh Laxmi Nidhi" },
    { name: "Aditya Birla Financial Services" },
    { name: "Aditya Birla Housing Finance Limited" },
    { name: "Agora Microfinance India Ltd - AMIL" },
    { name: "Agriwise Finserv Limited" },
    { name: "Aham Housing Finance Private Limited" },
    { name: "Ajeevak Nidhi Limited" },
    { name: "Akasa Finance Limited" },
    { name: "Alfastar India Nidhi Limited" },
    { name: "Alleywell Finserve Nidhi Limited" },
    { name: "Altum Credo Home Finance" },
    { name: "Amarpadma Credits Pvt Ltd" },
    { name: "Ambit Finvest Pvt Ltd" },
    { name: "Amrit Malwa Capital Limited" },
    { name: "Amritversha Nidhi Limited" },
    { name: "Ananya Vikash Nidhi Limited" },
    { name: "Andhra Pradesh Grameena Bank" },
    { name: "Andhra Pragathi Grameena Bank Loan Repayment" },
    { name: "Ankur Trade Links Pvt Ltd" },
    { name: "Annapurna Finance Private Limited - MSME" },
    { name: "Anscor Capital And Investment Pvt Ltd" },
    { name: "Aptus Finance India Private Limited" },
    { name: "Aptus Value Housing Finance India Limited" },
    { name: "Aris Capital Pvt Limited" },
    { name: "Arman Financial Services Limited" },
    { name: "Arohan Financial Services Ltd" },
    { name: "Arthan Finance Pvt Ltd" },
    { name: "Arthmate Financing India Private Limited" },
    { name: "Aryabharat Digital Nidhi Ltd" },
    { name: "Ascend Capital" },
    { name: "Ashv Finance" },
    { name: "Asirvad Micro Finance Ltd" },
    { name: "Auxilo Finserve Private Limited" },
    { name: "Avanse Financial Services Ltd" },
    { name: "Avanti Finance Private Limited" },
    { name: "Axis Bank Limited - Retail Loan" },
    { name: "Axis Bank Limited-Digital Loan" },
    { name: "Axis Bank Limited-Microfinance" },
    { name: "Axis Bank Ltd - MCA" },
    { name: "Axis Finance Limited" },
    { name: "Ayaan Finserve India Private LTD" },
    { name: "Aye Finance Pvt. Ltd." },
    { name: "BERAR Finance Limited" },
    { name: "BSS Microfinance Limited" },
    { name: "BWDA Finance Ltd" },
    { name: "Babasaheb Deshmukh Sahakari Bank Limited Atpadi" },
    { name: "Baid Finserv Limited" },
    { name: "Bajaj Auto Credit Limited" },
    { name: "Bajaj Auto Finance" },
    { name: "Bajaj Finance Limited Agent Collection" },
    { name: "Bajaj Housing Finance Limited" },
    { name: "Bazaari Finance" },
    { name: "Behariji Dealers Pvt Ltd" },
    { name: "Beryl Securities" },
    { name: "Best Capital Services Ltd" },
    { name: "Bhala Finance Private Limited" },
    { name: "Bharat Financial Inclusion Ltd" },
    { name: "Bhgala Livelihood Finserv Limited" },
    { name: "Bike Bazaar" },
    { name: "Blackbuck Finserve" },
    { name: "Boundparivar Loan" },
    { name: "CASHe" },
    { name: "CDL Financial Services Private Limited" },
    { name: "CKM MFS Foundation" },
    { name: "CNH Industrial Capital Pvt. Ltd." },
    { name: "CSL Finance" },
    { name: "Can Fin Homes Ltd" },
    { name: "Capital India Finance Limited" },
    { name: "Capital India Home Loans Limited" },
    { name: "Capital Trust Limited" },
    { name: "Capri Global Capital Limited (MSME Loan)" },
    { name: "Capri Global Capital Limited (Solar Loan)" },
    { name: "Capri Global Housing Finance" },
    { name: "Capri global Capital Limited (Gold Loan)" },
    { name: "Cars24" },
    { name: "Cashtree Finance" },
    { name: "Chachyot Nidhi" },
    { name: "Choice Finserv Pvt Ltd" },
    { name: "Cholamandalam Investment and Finance Company Limited" },
    { name: "Clix Capital"},
    { name: "Credin"},
    { name: "Credit One Payments Solutions Pvt Ltd"},
    { name: "Credit Saison"},
    { name: "Credit Wise Capital" },
    { name: "CreditAccessGrameen - Retail Finance"},
    { name: "Criss Financial Limited"},
    { name: "DCB Bank Loan Repayment"},






   

  ]);

  // categories
  const categories = [
    "Microfinance Institutions (MFI)",
    "Vehicle Loan",
    "Gold Loan",
    "Small Finance Bank",
    "Consumer Loan",
    "Bank",
    "Home Loan",
    "Others",
  ];

  // state for sheet
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-50 to-white p-4 text-gray-800">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <h1 className="text-lg font-extrabold">Select your Lender</h1>
      </div>

      {/* Search */}
      <div className="flex items-center bg-white shadow-md rounded-full px-4 py-2 mb-6">
        <FaSearch className="text-gray-400" />
        <input
          type="text"
          placeholder="Search by lender"
          className="ml-2 flex-1 outline-none text-sm bg-transparent text-gray-700 placeholder-gray-400"
        />
      </div>

      {/* Reminder Card */}
      <div className="bg-purple-100 p-4 rounded-2xl shadow-sm mb-6">
        <h2 className="text-gray-900 font-medium">
          Don’t miss your loan EMI payments
        </h2>
        <p className="text-xs text-gray-600 mt-2">
          Allow access to your text messages to fetch your bills and remind on
          time
        </p>
        <button className="mt-3 bg-purple-600 text-white text-sm px-5 py-2 rounded-lg">
          Allow
        </button>
      </div>

      {/* Filter trigger */}
      <button
        onClick={() => setShowFilter(true)}
        className="w-full flex items-center justify-between bg-gray-100 px-4 py-3 rounded-lg mb-6 shadow-sm"
      >
        <span className="text-sm text-gray-700">Filter by category</span>
        <FaChevronDown className="text-gray-500" />
      </button>

      {/* All Loan Billers */}
      <div>
        <h2 className="text-gray-800 font-semibold mb-3">All Loan Billers</h2>
        <div className="space-y-3">
          {loanBillers.map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm"
            >
              <div className="flex items-center gap-3">
                {/* Logo Circle */}
                <div className="w-10 h-10 bg-blue-100 flex items-center justify-center rounded-full">
                  <span className="text-blue-600 font-bold">{item.name[0]}</span>
                </div>

                {/* Biller Name */}
                <h3 className="font-medium text-gray-900">{item.name}</h3>

                {/* New Tag */}
                {item.tag && (
                  <span className="ml-2 text-xs text-white font-semibold bg-red-500 px-2 py-0.5 rounded">
                    {item.tag}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== Slide-up Filter Panel ===== */}
      {showFilter && (
        <>
          {/* Backdrop */}
          <div
            onClick={() => setShowFilter(false)}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          />

          {/* Bottom Sheet */}
          <div className="fixed left-0 right-0 bottom-0 z-50 bg-white rounded-t-2xl shadow-lg animate-slideUp max-h-[70vh] overflow-y-auto">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-semibold text-gray-800">
                Filter by category
              </h3>
              <button onClick={() => setShowFilter(false)}>
                <FaTimes className="text-gray-600" />
              </button>
            </div>

            <div className="divide-y">
              {categories.map((cat, idx) => (
                <label
                  key={idx}
                  className="flex items-center justify-between px-4 py-4 cursor-pointer hover:bg-gray-50"
                >
                  <span className="text-gray-700">{cat}</span>
                  <input
                    type="radio"
                    name="category"
                    value={cat}
                    className="form-radio text-blue-600"
                  />
                </label>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
