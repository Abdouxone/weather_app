import React from "react";

export default function TempSwitch() {
  return (
    <div className="bg-white/10 backdrop-blur-md text-white/80 border border-white/20 rounded-2xl p-1 shadow-lg">
      <div className="flex items-center">
        <button
          className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300`}
        >
          °C
        </button>
        <button
          className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300`}
        >
          °F
        </button>
      </div>
    </div>
  );
}
