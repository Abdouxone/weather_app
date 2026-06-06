import React from "react";

export default function TempSwitch() {
  return (
    <div className="backdrop-blur-sm gap-5 p-2 border-2 border-zinc-400 text-white rounded-xl flex flex-row">
      <p className="cursor-pointer">C</p>
      <p className="cursor-pointer">F</p>
    </div>
  );
}
