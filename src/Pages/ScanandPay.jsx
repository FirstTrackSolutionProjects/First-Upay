import React from "react";
import { Camera, Upload, Sun } from "lucide-react";

export default function ScanandPay() {
  return (
    <div className="relative flex flex-col items-center justify-between h-screen bg-blue-100 text-gray-800 m-4">
      {/* Header */}
      <header className="w-full flex items-center justify-between px-4 py-4">
       
        <h1 className="text-lg font-extrabold">Scan any QR</h1>
        <button className="text-gray-600">
          <Camera className="w-6 h-6" />
        </button>
      </header>

      {/* Scanner area */}
      {/* <div className="flex flex-col items-center justify-center flex-1">
        <div className="relative w-72 h-72 border-4 border-purple-400 rounded-xl"> */}
          {/* Corner accents */}
          {/* <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-purple-500 rounded-tl-xl"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-purple-500 rounded-tr-xl"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-purple-500 rounded-bl-xl"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-purple-500 rounded-br-xl"></div>
        </div>
      </div> */}

      {/* Action buttons */}
      <div className="flex gap-12 mb-8">
        <button className="flex flex-col items-center">
          <div className="bg-gray-200 p-3 rounded-full">
            <Upload className="w-6 h-6 text-purple-600" />
          </div>
          <span className="mt-2 text-sm font-medium">Upload QR</span>
        </button>
        <button className="flex flex-col items-center">
          <div className="bg-gray-200 p-3 rounded-full">
            <Sun className="w-6 h-6 text-purple-600" />
          </div>
          <span className="mt-2 text-sm font-medium">Torch</span>
        </button>
      </div>
    </div>
  );
}
