import { LocateIcon, MapPin, Search, X } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="relative w-full min-w-xl">
      <div className="relative  group">
        <input
          type="text"
          placeholder="Search for any city worldwide...."
          className="w-full pl-12 pr-24 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 
            focus:ring-white/30 focus:border-white/40 transition-all duration-300 hover:bg-white/15"
        />
        <Search className="absolute left-4 group-focus:text-white/80 top-1/2 transform -translate-y-1/2 text-white/60  w-5 h-5  transition-all" />

        <button className="absolute top-1/2  right-14 p-1 duration-300 transition-all rounded-full hover:bg-white/10 text-white/50 hover:text-white -translate-y-1/2 cursor-pointer">
          <MapPin className="w-5 h-5" />
        </button>
        <button className="absolute hidden top-1/2  right-14 p-1 duration-300 transition-all rounded-full hover:bg-white/10 text-white/50 hover:text-white -translate-y-1/2 cursor-pointer">
          <X className="w-5 h-5" />
        </button>
      </div>
      <div className="absolute top-full left-0 right-0 mt-3 rounded-2xl border border-white/20 shadow-2xl overflow-hidden z-50 bg-white/10 backdrop-blur-xl  ">
        <div className="p-6  text-center text-white/70">
          <div className="animate-spin rounded-full  h-6 w-6 border-2 border-white/30 border-t-white mx-auto"></div>
          <p className="mt-2 font-semibold">Search Cities....</p>
        </div>
        <button className="w-full px-6 py-4 text-left hover:bg-white/10 transition-all duration-200 flex items-center justify-between group border-b border-white/10 last:border-b-0">
          <div className="font-medium text-white group-hover:text-white/90">
            City Name
            <span>,City State</span>
          </div>
          <div className="text-sm text-white/60">Country</div>
          <Search className="w-4 h-4 text-white/40 group-hover:text-white/60 transition-all" />
        </button>
      </div>
    </div>
  );
}
