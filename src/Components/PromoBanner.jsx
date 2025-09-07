import React from "react";

const PromoBanner = () => {
  return (
    <div className="flex items-center justify-center p-6">
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between rounded-2xl shadow-lg bg-gradient-to-r from-teal-600 to-blue-700 p-8 text-white">
        {/* Left Section */}
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            A financial app trusted by <span className="text-yellow-300">millions</span>
          </h2>
          <p className="text-sm md:text-base text-gray-100 mb-4">
            Track, invest, and grow your wealth with ease. Simple, secure, and fast.
          </p>
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">
            Get Started →
          </button>
        </div>

        {/* Right Section (Phone Mockup) */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
            alt="App Mockup"
            className="w-52 md:w-72 drop-shadow-lg rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
