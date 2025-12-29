import React from "react";

const Swap = () => {
  return (
    <div className="relative z-10 text-white border border-white/10 rounded-lg p-4 bg-zinc-900 w-3/4 md:w-1/2 min-h-64 md:max-h-screen">
      <h1 className="text-2xl font-bold text-white mb-3">Swap</h1>
      {/* <div className="border border-white/10 rounded-lg p-4"></div> */}
      <form className="flex flex-col items-center justify-center gap-10">
       
          <input
            type="select"
            placeholder="Select Currency"
            className="w-full p-2 rounded-lg border border-white/10 bg-zinc-800 text-white"
          />
          <input
            type="number"
            placeholder="Amount"
            className="w-full p-2 rounded-lg border border-white/10 bg-zinc-800 text-white"
          />
          <button
            type="submit"
            className="text-md w-full p-2 rounded-md bg-gradient-to-r from-violet-500 via-[#9938CA] to-[#E0724A]"
          >
            Swap
          </button>
        
      </form>
    </div>
  );
};

export default Swap;
