import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function Bill() {
  const [billers] = useState([
    { name: "India Power Prepaid Meter", tag: "New" },
    { name: "TP Central Odisha Distribution Ltd (TPCODL)" },
    { name: "TP Northern Odisha Distribution Ltd (TPNODL)" },
    { name: "TP Southern Odisha Distribution Ltd (TPSODL)" },
    { name: "TP Southern Odisha Distribution Ltd (TPSODL) - Prepaid Recharge" },
    { name: "TP Western Odisha Distribution Ltd(TPWODL)" },
    { name: "TP Western Odisha Distribution Ltd(TPWODL) - Prepaid Recharge" },
    { name: "The Co operative Electric Supply Society Ltd Sircilla" }

  ]);

  const [allBillers] = useState([
    { name: "Adani Electricity Mumbai Limited (AEML)" },
    { name: "Ajmer Vidyut Vitran Nigam Ltd (AVVNL)" },
    { name: "Assam Power Distribution Company Ltd (APDCL) - Bill Payment" },
    { name: "Assam Power Distribution Company Ltd (APDCL) - Prepaid Recharge" },
    { name: "Bharatpur Electricity Services Ltd (BESL)" },
    { name: "BEST Mumbai - Brihanmumbai Electricity" },
    { name: "BSES Rajdhani - Bill Payment" },
    { name: "BSES Rajdhani - Prepaid Recharge" },
    { name: "BSES Yamuna - Bill Payment" },
    { name: "BSES Yamuna - Prepaid Recharge" },
    { name: "Bangalore Electricity Supply Co. Ltd (BESCOM)" },
    { name: "Bikaner Electricity Supply Limited (BKSEL)" },
    { name: "CESC Kolkata - West Bengal" },
    { name: "Chhattisgarh State Power Distribution Company Limited (CSPDCL)" },
    { name: "Central Power Distribution Company Ltd. of Andhra Pradesh" },
    { name: "Chamundeshwari Electricity Supply Corp Ltd (CESCOM)" },
    { name: "Dakshin Gujarat Vij (DGVCL)" },
    { name: "Dadra and Nagar Haveli and Daman and Diu Power Distribution" },
    { name: "Dakshin Haryana Bijli Vitran Nigam (DHBVN)" },
    { name: "Department of Power Nagaland" },
    { name: "Department of Power, Government of Arunachal Pradesh (DOPAP)" },
    { name: "Eastern Power Distribution Company of Andhra Pradesh Limited (APEPDCL)" },
    { name: "Electricity Department Chandigarh" },
    { name: "Gift Power Company Limited" },
    { name: "Goa Electricity Department (GED)" },
    { name: "Government of Puducherry Electricity Department" },
    { name: "Gulbarga Electricity Supply Corp Ltd (GESCOM)" },
    { name: "Himachal Pradesh State Electricity Board (HPSEB)" },
    { name: "Hubli Electricity Supply Company Ltd (HESCOM)" },
    { name: "Hukkeri Rural Electric CoOperative Society Ltd" },
    { name: "India Power Corporation Limited (IPCL)" },
    { name: "India Power Prepaid Meter", tag: "New" },
    { name: "Jaipur Vidyut Vitran Nigam Ltd (JVVNL)" },
    { name: "Jammu Power Distribution Corporation (JPDCL)" },
    { name: "Jharkhand Bijli Vitran Nigam Limited (JBVNL)", tag: "New" },
    { name: "Jharkhand Bijli Vitran Nigam Limited (JBVNL) - Prepaid Recharge" },
    { name: "Jodhpur Vidyut Vitran Nigam Limited (JDVVNL)" },
    { name: "Kota Electricity Distribution Ltd (KEDL)" },
    { name: "kannan Devan Hills Plantations Company PVT LTD (KDHP) "},
    { name: "Kashmir Power Distribution Corporation Ltd (KPDCL)" },
    { name: "Kerala State Electricity Board Ltd (KSEBL)" },
    { name: "Kinesco Power and Utilities Pvt Ltd" },
    { name: "Ladakh Power Development Department (LPDD)" },
    { name: "Lakshadweep Electricity Department (LED)" },
    { name: "Madhya Gujarat Vij (MGVCL)" },
    { name: "MP Madhya Kshetra Vidyut Vitaran Company Limited, Bhopal (MPMKVVCL)" },
    { name: "MP Madhya Kshetra Vidyut Vitran, Bhopal (MPMKVVCL) - Rural" },
    { name: "MP Paschim Kshetra Vidyut - Indore (MPPKVVCL)" },
    { name: "MP Poorv Kshetra - Jabalpur NGB (New Generation Billing)" },
    { name: "MP Poorv Kshetra - Jabalpur (Rural)" },
    { name: "MSEDCL Mahavitaran - Maharashtra" },
    { name: "Mangalore Electricity Supply Company Ltd - Non RAPDR (MESCOM)" },
    { name: "Mangalore Electricity Supply Company Ltd - RAPDRP (MESCOM)" },
    { name: "Manipur State Power Distribution Company Limited" },
    { name: "MeghaPower (MePDCL) - Prepaid Recharge" },
    { name: "MeghaPower (MePDCL) - Bill Payment" },
    { name: "Noida Power Company Ltd. (NPCL)" },
    { name: "New Delhi Municipal Council (NDMC)" },
    { name: "North Bihar Power Distribution Company Ltd (NBPDCL) - Bill Payment" },
    { name: "Northern Power Distribution Company of Telangana Ltd (NPDCL / TGNPDCL)" },
    { name: "Paschim Gujarat Vij (PGVCL)" },
    { name: "Power and Electricity Department - Mizoram" },
    { name: "Punjab State Power Corporation Ltd (PSPCL)" },
    { name: "Sikkim Power - Urban" },
    { name: "Sikkim Power - Rural" },
    { name: "South Bihar Power Distribution Company Ltd (SBPDCL) - Bill Payment" },
    { name: "Southern Power Distribution Co Ltd of Andhra Pradesh (SPDCL)" },
    { name: "Southern Power Distribution Company of Telangana Ltd (TGSPDCL)" },
    { name: "TP Ajmer Distribution Ltd - Rajasthan (TPADL)" },
    { name: "TP Central Odisha Distribution Ltd (TPCODL)" },
    { name: "TP Northern Odisha Distribution Ltd (TPNODL)" },
    { name: "TP Renewables Microgrid Ltd (TPRMG)" },
    { name: "TP Southern Odisha Distribution Ltd (TPSODL)" },
    { name: "TP Southern Odisha Distribution Ltd (TPSODL) - Prepaid Recharge" },
    { name: "TP Western Odisha Distribution Ltd (TPWODL)" },
    { name: "TP Western Odisha Distribution Ltd (TPWODL) - Prepaid Recharge" },
    { name: "Tripura Electricity (TSECL)" },
    { name: "TTD Electricity" },
    { name: "Tamil Nadu Power Distribution Corporation Limited (TNPDCL)" },
    { name: "Tata Power - DDL (Delhi)" },
    { name: "Tata Power - Mumbai" },
    { name: "Tata Steel UISL" },
    { name: "The Co operative Electric Supply Society Ltd Sircilla" },
    { name: "Thrissur Corporation Electricity Department (TCED)" },
    { name: "Torrent Power" },
    { name: "Uttar Gujarat Vij (UGVCL)" },
    { name: "Uttar Pradesh power Corporation Ltd(UPPCL)"},
    {name: "Uttar Haryana Bijii Vitran Nigam(UHBVN)"},
    {name: "Uttarakhand Power Corporation Limited(UPCL)"},
    {name: "Vaghani Energy Ltd"},
    { name: "West Bengal Electricity - Bill Payment"},
    { name: "West Bengal Electricity - Prepaid Recharge"},
    { name: "West Bengal Electricity - Monthly"},
  ]);

 return (
    <div className="p-6 space-y-8">
      {/* Billers Section */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Billers</h2>
        <div className="space-y-4">
          {billers.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 border rounded-lg p-3 hover:shadow-md transition"
            >
              {/* Circle with Initial */}
              <div className="w-10 h-10 bg-blue-100 flex items-center justify-center rounded-full flex-shrink-0">
                <span className="text-blue-600 font-bold text-lg">
                  {item.name[0]}
                </span>
              </div>

              {/* Text + Tag */}
              <div className="min-w-0 flex-1">
                <h3 className="font-medium text-gray-800 text-sm sm:text-base line-clamp-2">
                  {item.name}
                </h3>
                {item.tag && (
                  <span className="text-xs text-red-500 font-semibold bg-red-100 px-2 py-0.5 rounded mt-1 inline-block">
                    {item.tag}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All Billers Section */}
      <div>
        <h2 className="text-lg font-semibold mb-4">All Billers</h2>
        <div className="space-y-4">
          {allBillers.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 border rounded-lg p-3 hover:shadow-md transition"
            >
              {/* Circle with Initial */}
              <div className="w-10 h-10 bg-green-100 flex items-center justify-center rounded-full flex-shrink-0">
                <span className="text-green-600 font-bold text-lg">
                  {item.name[0]}
                </span>
              </div>

              {/* Text */}
              <div className="min-w-0 flex-1">
                <h3 className="font-medium text-gray-800 text-sm sm:text-base line-clamp-2">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}