import React from "react";

const DownloadApp = () => {
  return (
    <div className="w-full py-10 mt-10">
      <div className="max-w-6xl mx-auto text-center px-6">

        <h2 className="text-2xl md:text-4xl font-bold">
          Download Our Mobile App
        </h2>

        <p className="mt-2 mb-6 text-md md:text-base">
          Enjoy fast, secure and seamless UPI payments anytime.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4">
          
          {/* Google Play */}
          <a
            href="/app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/playstore.png"
              alt="Google Play"
              className="w-44 cursor-pointer hover:scale-105 transition-transform"
            />
          </a>

          {/* App Store */}
          <a
            href="/app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/app.png"
              alt="App Store"
              className="w-44 cursor-pointer hover:scale-105 transition-transform"
            />
          </a>

        </div>

      </div>
    </div>
  );
};

export default DownloadApp;
