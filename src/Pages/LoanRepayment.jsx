import React, { useState } from "react";
import { FaSearch, FaChevronDown, FaTimes } from "react-icons/fa";

export default function LoanRepayment() {
  const [loanBillers] = useState([
    { name: "TVS Credit" },
    { name: "Annapurna Finance Private Limited-MFI" },
    { name: "Bajaj Finance LTD" },
    { name: "Bandhan Bank Loan", tag: "New" },
    { name: "Belstar MicroFinance LTD" },
    { name: "HDFC Bank Retails Assets" },
    { name: "UJJIVAN Small Finance Bank LTD" },
    { name: "Chaitanya Micro Finance" },
    { name: "DMI Finance" },
    { name: "Muthoot Finance" },
    { name: "Utkarsh Bank Loan Repayment" },
    { name: "HDB Financial Services Limited" },
    { name: "Home Credit" },
    { name: "IIFL Finance" },
    { name: "Mahindra and Mahindra Financial Services Limited" },
    { name: "Shriram Finance Ltd." },
    { name: "121 Finance Private Limited" },
    { name: "AAVAS FINANCIERS LIMITED" },
    { name: "AMU Leasing Pvt Ltd" },
    { name: "ART Housing Finance (India) Limited" },
    { name: "AU Small Finance Bank" },
    { name: "Aditya Birla Housing Finance Limited" },
    { name: "Axis Bank Limited - Retail Loan" },
    { name: "Cholamandalam Investment and Finance Company Limited" },
    { name: "ESAF Small Finance Bank(Micro Loans)" },
    { name: "ESAF Small Finance Bank(Retails Loans)" },
    { name: "Easy Home Finance Limited" },
    { name: "Eduvanz Financing Pvt. Ltd." },
    { name: "Ekagrata Finance" },
    { name: "Electronica Finance Limited" },
    { name: "Emerald Finance" },
    { name: "Emgee Muthoot Nidhi Ltd" },
    { name: "Equitas SFB - Microfinance Loan" },
    { name: "Equitas Small Finance Bank - Retail Loan" },
    { name: "Esco Elettil Nidhi Limited" },
    { name: "Ezfinanz" },
    { name: "Faircent-Borrower EMI Account" },
    { name: "Fedbank Financial Services Limited" },
    { name: "Federal Bank Loan Repayment" },
    { name: "Feemonk" },
    { name: "Fexprime Finance (P) Ltd (Formerly Bussan Auto Finance)" },
    { name: "Fin Coopers Capital Private Limited" },
    { name: "Finazone Micro Services Foundation" },
    { name: "Fincare Small Finance Bank" },
    { name: "Finnable" },
    { name: "Finova Capital Private Ltd" },
    { name: "Five Star Business Finance" },
    { name: "FlexiLoans" },
    { name: "Flexsalary" },
    { name: "Fusion Finance Ltd MFI" },
    { name: "Fusion Finance Ltd-MSME" },
    { name: "G U Financial Services Pvt Ltd" },
    { name: "Geo Bros Muthoot Nidhi Ltd" },
    { name: "Girnar Capital (Formerly Khemlani Finance)" },
    { name: "Goldline Finance Private Limited (Capital Now)" },
    { name: "Grameen Koota Microfinance (CreditAccess Grameen Ltd)" },
    { name: "Grihum Housing Finance Limited" },
    { name: "GrowXCD Finance Private Limited" },
    { name: "HGNL Nidhi Limited" },
    { name: "HMKA Nidhi Ltd" },
    { name: "HMT Finance Pvt Ltd" },
    { name: "HealthFin" },
    { name: "Hedge Finance Ltd" },
    { name: "Hero FinCorp Limited" },
    { name: "Hero Housing Finance Ltd" },
    { name: "Hindon Mercantile Limited - Mufin" },
    { name: "Hinduja Housing Finance Limited" },
    { name: "Hinduja Leyland Finance" },
    { name: "Hiranandani Financial Services Pvt Ltd" },
    { name: "Home First Finance Company India Limited" },
    { name: "Hytone" },
    { name: "ICICI BANK - Interest Repayment Loans" },
    { name: "ICICI Bank Ltd - Loans" },
    { name: "IDF Financial Services Private Limited" },
    { name: "IDFC FIRST Bank Ltd" },
    { name: "IFFCO Kisan Finance Limited" },
    { name: "IFL Finance Ltd Gold Loan" },
    { name: "IFL Finance Ltd Home Loan" },
    { name: "IIFL Home Finance" },
    { name: "IIFL Samasta Finance Ltd - Microfinance Loans" },
    { name: "IIFL Samasta Finance Ltd - Retail Loans" },
    { name: "IKF Finance Ltd" },
    { name: "INDIAP2P" },
    { name: "INDUSIND BANK - CFD" },
    { name: "IREP Credit Capital Private Limited" },
    { name: "ITI Credit Limited Erstwhile Fortune Credit Capital Limited" },
    { name: "ITI Finance Limited" },
    { name: "ITI Housing Finance Limited" },
    { name: "InCred" },
    { name: "Indel Money Limited" },
    { name: "India Home Loan Limited" },
    { name: "India Shelter Finance Corporation Limited" },
    { name: "Indiabulls Commercial Credit Ltd" },
    { name: "Indian Bank Loan EMI" },
    { name: "Indifi" },
    { name: "Indostar Capital Finance Limited - CV" },
    { name: "Indostar Capital Finance Limited - SME" },
    { name: "Indus Fortune" },
    { name: "Infinity Fincorp Solutions Pvt Ltd"},
    { name: "JM Financial Home Loans Ltd."},
    { name: "Jain Autofin"},
    { name: "jain Motor Finmart"},
    { name: "Jana Small Finance Bank"},
    { name: "Janakalyan Financial Services Pvt Ltd"},
    { name: "janasha Finance"},
    { name: "Jassi Hire Purchase Ltd"},
    { name: "Jeevan Dhara"},
    { name: "John Deere Financial India Pvt Ltd"},
    { name: "KIFS Housing Finance Ltd"},
    { name: "KLM Axiva Finvest Ltd"},
    { name: "Kaabil Finance Pvt Ltd"},
    { name: "Kallada General Finance Pvt Ltd"},
    { name: "Kamal Finserve Pvt Ltd"},
    { name: "Kanakadurga Finance Ltd - Gold Loans"},
    { name: "Kanakadurga Finance Ltd - Vehicle Loans"},
    { name: "Kannattu Finance Nidhi Ltd"},
    { name: "Kannattu Fingold Finance Pvt Ltd"},
    { name: "Karnataka Gramin Bank"},
    { name: "Karnataka Vikas Grameena Bank Loan Repayment"},
    { name: "Karpagam Hire Purchase And Finance Pvt Ltd"},
    { name: "Keertana Finserv Pvt Ltd"},
    { name: "Kerala Gramin Bank"},
    { name: "Keshaw Microfinance"},
    { name: "Khush Housing Finance Pvt Ltd"},
    { name: "Khushbu Auto Finance Ltd"},
    { name: "Kinara Capital"},
    { name: "Kissht"},
    { name: "Kogta Financial India Ltd"},
    { name: "Konark Commercial Ltd"},
    { name: "Kosamattam Finance Ltd"},
    { name: "Kotak Mahindra Bank Ltd -Loans"},
    { name: "Kotak Mahindra Prime Ltd"},
    { name: "Kps Micro Services Foundation"},
    { name: "KreditBee"},
    { name: "Kusalava Finance Ltd"},
    { name: "L and T Finance Ltd"},
    { name: "LOAN2WHEELS"},
    { name: "Laxmi India Finance Pvt Ltd"},
    {name: "Lendingkart Finance Ltd"},
    {name: "Light Microfinance Pvt Ltd"},
    { name: "LoanTap"},
    { name: "Loanbaba"},
    { name: "Loanzen Finance Pvt Ltd"},
    { name: "Loksuvidha"},
    { name: "Lord Krishna Financial services Ltd"},
    { name: "MAS Financial Pvt Ltd"},
    { name: "MDFC Financiers Pvt Ltd"},
    { name: "MGM Finaciers"},
    { name: "MS Fincap Pvt Ltd"},
    { name: "Maban Nidhi"},
    { name: "Maben Nidhi Gold loans"},
    { name: "Mahaveer Finance India Limited"},
    { name: "Mahindra Finance Consumer Loans"},
    { name: "Mahindra Home Finance"},
    { name : "Maitreya Capital and Business Services Pvt Ltd"},
    { name: "Manppuram Asset Finance Ltd Micro Finance"},
    { name: "Manppuram Asset Finance Ltd Two Wheeler Loan"},
    { name: "Manppuram Asset Finance Ltd Vehicle Loan"},
    { name: "Manppuram Finance Ltd"},
    { name: "Manppuram Finance Ltd-Vehicle Loan"},
    { name: "Manppuram Home Finance Ltd"},
    { name: "Manba Finance Ltd"},
    { name: "Mangal Credit and Fincorp Ltd"},
    { name: "Mnagal Vehicle Finance Pvt Ltd"},
    { name: "Mas Rural Housing and Mortage Finance Ltd"},
    { name: "Maudrikrashi Nidhi Ltd"},
    { name: "Maxvalue Credits And Investments Ltd"},
    { name: "Megha Holding Pvt Ltd"},
    { name: "Mentor Home Loans India Ltd"},
    { name: "Mere Apne Micro Finance"},
    { name: "Mere Apne Nidhi"},
    { name: "Metro Samrudhi Nidhi Ltd"},
    { name: "Metrocity Finance Pvt Ltd"},
    { name: "Midland Microfin Ltd"},
    { name: "Mitrata Inclusive Financial Services Ltd"},
    { name: "Mitron Capital"},
    { name: "Monedo Financial services Pvt Ltd"},
    { name: "MoneyOnClick"},
    { name: "MoneyTap"},
    { name: "Moneyboxx Finance Ltd"},
    { name: "MoneyPlus Financial Services Ltd"},
    { name: "Moneywise Financial Services Pvt Ltd"},
    { name: "Motial Oswal Home Finance"},
    { name: "Mufin Green Finance Ltd"},
    { name: "Muthoot BL SME"},
    { name: "Muthoot Capital Services Ltd"},
    { name: "Muthoot Finance InstaP"},
    { name: "Muthoot Finance-Personal Loan"},
    { name: "Muthoot Gold Bullion Corporation"},
    { name: "Muthoot Homefin Ltd"},
    { name: "Muthoot Housing Finance Company Ltd"},
    { name: "Muthoot M George Nidhi Ltd"},
    { name: "Muthoot Microfin Ltd"},
    { name: "Muthoot Money"},
    { name: "Muthoot Money - Gold Loan"},
    { name: "Muthoot Vehicle And Assets Finance Ltd"},
    { name: "Muthoot Vehicle And Assets Finance Ltd Gold Loan"},
    { name: "Muvision Nidhi Ltd"},
    { name: "NABFINS" },
    { name: "NM Finance" },
    { name: "Namdev Finvest Pvt Ltd" },
    { name: "Namra Finance Ltd" },
    { name: "Navachetana Microfin Services Pvt Ltd" },
    { name: "Navadhan Capital" },
    { name: "Navi Loans" },
    { name: "NeoGrowth Credit Pvt. Ltd." },
    { name: "Netafim Agricultural Financing Agency Pvt. Ltd." },
    { name: "Nidhilakshmi Finance" },
    { name: "Nissan Renault Financial services India Private Limited" },
    { name: "Niwas Housing Finance Pvt Ltd" },
    { name: "Novelty Finance Ltd" },
    { name: "OHMY Loan Private Limited" },
    { name: "OHMy Technologies Private Limited" },
    { name: "OTO Capital" },
    { name: "Orange Retail Finance India Pvt Ltd" },
    { name: "Oroboro" },
    { name: "Oxyzo Financial Services Pvt Ltd" },
    { name: "Padma Sai Finance Limited" },
    { name: "Pahal Finance IL/SL" },
    { name: "Pahal Financial Services Pvt Ltd" },
    { name: "Paisa Dukan-Borrower EMI" },
    { name: "Paisabuddy Finance Pvt Ltd" },
    { name: "Paisabuddy Finance Pvt Ltd" },
    { name: "Paisalo Digital Limited" },
    { name: "Parkosian Nidhi Limited" },
    { name: "Perfect Capital Services Ltd" },
    { name: "Perfect Finsec Pvt. Ltd." },
    { name: "Pink City Fincap Pvt Ltd" },
    { name: "Piramal Finance" },
    { name: "Poonawalla Fincorp Ltd" },
    { name: "Prayas Financial Services Private Limited" },
    { name: "Prefr" },
    { name: "Protium" },
    { name: "Punjab National Bank" },
    { name: "R K Bansal Finance Private Limited" },
    { name: "R.Sen and Company Investment and Finance Pvt. Ltd." },
    { name: "RBA Finance Pvt Ltd" },
    { name: "RBL Bank Microfinance" },
    { name: "RMK Fincorp Pvt Ltd" },
    { name: "RTMT Credit Services Nidhi Limited" },
    { name: "Rahimatpur Sahakari Bank Ltd" },
    { name: "Rajasthan Mahila Nidhi" },
    { name: "Ramaiah Capital Pvt Ltd" },
    { name: "Rander Peoples Co Operative Bank Ltd" },
    { name: "RedCarpet" },
    { name: "Reliance ARC" },
    { name: "Reliant Credits India Ltd"},
    { name: "Repco Home Finance Ltd"},
    { name: "Repco Micro Finance"},
    { name: "Revfin Capital"},
    { name: "Richline Finance Ltd"},
    { name: "Ring"},
    { name: "Ritwik Finance Enterprises Pvt Ltd"},
    { name: "Riyanjali Nidhi Ltd"},
    { name: "Royal Rao Balaji Micro Finance Foundation"},
    { name: "Rupee Circle"},
    { name: "RupeeRedee"},
    { name: "RupeeZain"},
    { name: "Rupitol Finance Pvt Ltd"},
    { name: "S V Creditline Ltd"},
    { name: "SBFC Finance Ltd"},
    { name: "SG Royal Capital Pvt Ltd"},
    { name: "SK Finance Ltd"},
    { name: "SM Square Credit Services Pvt Ltd"},
    { name: "SMEcorner"},
    { name: "SMFG India Credit Company"},
    { name: "SMFG India Home Finance Company Ltd"},
    { name: "SRG Fincap Pvt Ltd"},
    { name: "SRG Housing Finance Ltd"},
    { name: "SRNG Finance Pvt Ltd"},
    { name: "STREE NIDHI - TELANGANA"},
    { name: "Sadbhav Mutual Benefit Nidhi"},
    { name: "Sakthi Finace Ltd"},
    { name: "Samavesh Finserve Pvt Ltd"},
    { name: "Sammaan Capital Ltd"},
    { name: "Sampournasamuh M F"},
    { name: "Samraddh Bestwin Micro Finance Association"},
    { name: "Samrat Motor Finance Ltd"},
    { name: "Samunnati Finance Pvt Ltd"},
    { name: "Sanritik Nidhi Ltd"},
    { name: "Saraswat bank - Loan Repayment"},
    { name: "Sarvagram Fincare Pvt Ltd"},
    { name: "Sarvjan India Fintech Pvt Ltd"},
    { name: "Satin Creditcare Network Ltd"},
    { name: "Satya MicroCapital Ltd"},
    { name: "Save Microfinance Pvt Ltd"},
    { name: "Secureind Nidhi"},
    { name: "Seeds Fincap Pvt Ltd"},
    { name: "Setia auto Finance Pvt Ltd"},
    { name: "Sewa Grih Rin Ltd"},
    { name: "Shaipal Nidhi Ltd"},
    { name: "Shalibhadra Finance Ltd"},
    { name: "Share India Fincap Pvt Ltd"},
    { name: "Shine Blue Hire Purchase Ltd"},
    { name: "Shivalik small Finance Bank Ltd"},
    { name: "Shivaya Capital Pvt Ltd"},
    { name: "Shri Ram Finance Corporation Pvt Ltd"},
    { name: "Shubham Housing Development Finance Comapny Ltd"},
    { name: "Shyamdhani Micro Association"},
    { name: "Singhi Finance Pvt Ltd"},
    { name: "Smart Credit India Finance Ltd"},
    { name: "Snapmint Financial Services Pvt Ltd"},
    { name: "Sonata Finance"},
    { name: "Spandana Sphoorty Financial Ltd"},
    { name: "Speel Finance Company Private Limited (Pocketly)"},
    { name: "Spinny Capital Private Limited"},
    { name: "Srei Infrastructure Finance Ltd"},
    { name: "SrIf Micro Care Foundation"},
    { name: "StashFin"},
    { name: "Status Leasing and Finance Ltd"},
    { name: "Strr Nidhi Limited"},
    { name: "StuCred"},
    { name: "Sundaram Finance Limited"},
    { name: "Suneet Finman Private Limited"},
    { name: "Supra Pacific Financial Services Ltd"},
    { name: "Suryoday Small Finance Bank"},
    { name: "Svakarma Finance Private Limited"},
    { name: "Svatantra Micro Housing Finance Corporation Limited"},
    { name: "Svatantra Microfin Private Limited"},
    { name: "Swadha Finlease"},
    { name: "Swara Fincare Limited"},
    { name: "Tangent Profin Private Limited"},
    { name: "Tata Capital Financial Services Limited"},
    { name: "Tata Capital Housing Finance Limited"},
    { name: "Tata Motor Finance Limited"},
    { name: "Tatkal Loan India Private Limited"},
    { name: "Techfino Capital Pvt Ltd", tag: "New"},
    { name: "Thazhayil Nidhi Ltd"},
    { name: "The Kurla Nagarik Sahakari Bank Ltd"},
    { name: "Tiffany Finance Private Limited"},
    { name: "Toyota Financial Services"},
    { name: "Transwarranty Finance Limited"},
    { name: "Treedha Finance Private Limited"},
    { name: "Trishiv Technology Nidhi Limited"},
    { name: "Truhome Finance Ltd. formerly Shriram Housing Finance Ltd."},
    { name: "Tyger Capital Private Limited"},
    { name: "Tyger Home Finance Private Limited"},
    { name: "UCO Bank Loan"},
    { name: "UGRO Capital Limited"},
    { name: "Ujala Micro Finance"},
    { name: "Ujjwaldhan Nidhi Limited"},
    { name: "Ummeed Housing Finance Pvt Ltd"},
    { name: "Unigold Finance Limited"},
    { name: "Unimoni Financial Services Ltd"},
    { name: "Union Bank of India-Loans"},
    { name: "Unity Small Finance Bank Limited"},
    { name: "Unnayan Bharat Finance Corporation Private Limited"},
    { name: "Upkaar Micro Finance"},
    { name: "Urban Living Finance India Limited"},
    { name: "VFS Capital Ltd"},
    { name: "VFS capital Ltd - MSME Loans"},
    { name: "Varashakti Housing Finance Pvt Ltd"},
    { name: "Varthana"},
    { name: "Vastu Finserv India Pvt Ltd"},
    { name: "Vastu Housing Finance Corporation Ltd"},
    { name: "Velicham Finance"},
    { name: "Veritas Finance"},
    { name: "Vinayaka Capsec Pvt Ltd"},
    { name: "Visionfund India Pvt Ltd"},
    { name: "Vistaar Financial  Services Pvt Ltd"},
    { name: "We Pay Finance Pvt Ltd"},
    { name: "Wonder home Finance Ltd"},
    { name: "X10 Financial services Ltd"},
    { name: "Yes Bank Ltdv - Loan Payment"},
    { name: "Yogakshemam Loans Ltd"},
    { name: "Yuwan Financiers Pvt Ltd"},
    { name: "ZIPLOAN"},
    { name: "ZestMoney"},
    { name: "i2i Funding - Borrower EMI Repayment"}
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

  // search state
  const [searchTerm, setSearchTerm] = useState("");

  // filter billers based on search
  const filteredBillers = loanBillers.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
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
          {filteredBillers.length > 0 ? (
            filteredBillers.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm"
              >
                {/* Logo Circle */}
                <div className="w-10 h-10 bg-blue-100 flex items-center justify-center rounded-full flex-shrink-0">
                  <span className="text-blue-600 font-bold text-sm">
                    {item.name[0]}
                  </span>
                </div>

                {/* Biller Name + Tag */}
                <div className="min-w-0 flex-1">
                  <h3 className="font-medium text-gray-900 text-sm sm:text-base break-words">
                    {item.name}
                  </h3>
                  {item.tag && (
                    <span className="text-xs text-white font-semibold bg-red-500 px-2 py-0.5 rounded mt-1 inline-block">
                      {item.tag}
                    </span>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-sm">No lenders found</p>
          )}
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
