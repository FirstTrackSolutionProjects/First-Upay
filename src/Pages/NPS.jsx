import { useState } from "react";
import { FaRegAddressBook } from "react-icons/fa";

export default function NPSForm() {
  const [form, setForm] = useState({
    mobileOrPran: "",
    month: "",
    date: "",
    year: "",
    nickname: "",
  });

  const [selectedTag, setSelectedTag] = useState("");
  const [showNicknameInput, setShowNicknameInput] = useState(false);
  const [newNickname, setNewNickname] = useState("");
  const [nicknames, setNicknames] = useState(["Home", "Mom", "Office"]);

  const handleSaveNickname = () => {
    if (newNickname.trim() !== "") {
      setNicknames([...nicknames, newNickname]);
      setNewNickname("");
      setShowNicknameInput(false);
    }
  };

  // ✅ Check form validity
  const isFormValid =
    form.mobileOrPran.trim() !== "" &&
    form.month !== "" &&
    form.date !== "" &&
    form.year !== "";

  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center p-4 m-4">
      <div className="w-full max-w-md">
         <img
              src="/images/nps.jpg"
              alt="NPS"
              className="w-10 h-10"
            />
        <h2 className="text-xl font-bold mb-4 text-center">Enter Details</h2>

        {/* Card */}
        <div className="bg-gradient-to-r from-orange-50 to-yellow-50 shadow-md rounded-xl p-4 space-y-4">
         
          {/* Logo + Title */}
          <div className="flex items-center gap-3">
           
            <h3 className="font-semibold text-lg text-gray-800">
              National Pension System
            </h3>
          </div>

          {/* Input: Mobile / PRAN */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Mobile Number or PRAN
            </label>
            <div className="flex items-center border rounded-lg bg-white mt-1 px-3 py-2 shadow-sm">
              <input
                type="text"
                placeholder="Enter Mobile or PRAN"
                className="flex-1 outline-none bg-transparent text-gray-700"
                value={form.mobileOrPran}
                onChange={(e) =>
                  setForm({ ...form, mobileOrPran: e.target.value })
                }
              />
              <FaRegAddressBook className="text-gray-500" />
            </div>
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Date of Birth
            </label>
            <div className="grid grid-cols-3 gap-2 mt-1">
              <select
                className="border rounded-lg p-2 bg-white shadow-sm"
                value={form.month}
                onChange={(e) => setForm({ ...form, month: e.target.value })}
              >
                <option value="">Month</option>
                <option>Jan</option>
                <option>Feb</option>
                <option>Mar</option>
              </select>
              <select
                className="border rounded-lg p-2 bg-white shadow-sm"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
              >
                <option value="">Date</option>
                {[...Array(31)].map((_, i) => (
                  <option key={i}>{i + 1}</option>
                ))}
              </select>
              <select
                className="border rounded-lg p-2 bg-white shadow-sm"
                value={form.year}
                onChange={(e) => setForm({ ...form, year: e.target.value })}
              >
                <option value="">Year</option>
                {Array.from({ length: 50 }, (_, i) => 1975 + i).map((y) => (
                  <option key={y}>{y}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Nicknames */}
          <div className="flex flex-wrap gap-2">
           {nicknames.map((tag, idx) => (
            <button
                key={idx}
                onClick={() =>
                setSelectedTag(selectedTag === tag ? null : tag) // toggle logic
                }
                className={`px-3 py-1 rounded-full text-sm shadow-sm border ${
                selectedTag === tag
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700"
                }`}
            >
                {tag}
            </button>
            ))}

            <button
              onClick={() => setShowNicknameInput(true)}
              className="px-3 py-1 border-2 border-dashed rounded-full text-sm text-gray-600"
            >
              + Add Nickname
            </button>
          </div>

          {/* Add Nickname Input */}
          {showNicknameInput && (
            <div className="mt-4 border rounded-lg p-3 bg-white shadow-sm">
              <label className="block text-sm font-medium text-gray-700">
                Enter Nickname
              </label>
              <input
                type="text"
                value={newNickname}
                onChange={(e) => setNewNickname(e.target.value)}
                className="w-full border rounded-lg px-3 py-2 mt-1"
                placeholder="Type nickname..."
              />
              <div className="flex justify-end mt-3 gap-2">
                <button
                  onClick={() => setShowNicknameInput(false)}
                  className="px-4 py-2 text-sm text-gray-600"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveNickname}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm"
                >
                  Save Changes
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Continue Button */}
        <button
          disabled={!isFormValid}
          className={`mt-6 w-full py-3 rounded-full font-medium ${
            isFormValid
              ? "bg-blue-600 text-white"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
