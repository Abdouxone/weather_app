import Image from "next/image";
import SearchBar from "./components/SearchBar";
import TempSwitch from "./components/TempSwitch";

export default function Home() {
  return (
    <div className="flex flex-col relative  min-h-screen overflow-hidden ">
      <div className="absolute z-1 inset-0 bg-[url('/bg.jpg')] h-full w-full bg-cover bg-no-repeat"></div>
      <div className="z-2 mt-5 flex flex-col items-center justify-center">
        <h1 className="text-white font-bold text-6xl">
          Weather
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400">
            App
          </span>
        </h1>
        <p className="text-zinc-200 tracking-tight max-w-xl text-center mt-4">
          Experience weather like never before with real-time data, beautiful
          visuals, and precise forecasts for any location worldwide
        </p>
        <div className="flex flex-row mt-5 gap-3 items-center  justify-center">
          <SearchBar />
          {/* <TempSwitch /> */}
        </div>
      </div>
    </div>
  );
}
