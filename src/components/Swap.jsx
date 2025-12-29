import React from "react";
import { useState } from "react";
import { currencies } from "../index";

const Swap = () => {
  const [currency, setCurrency] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ currency, amount });
  };

  return (
    <div className="relative z-10 text-white border border-white/10 rounded-lg p-4 bg-zinc-900 w-3/4 md:w-1/2 min-h-64 md:max-h-screen">
      <h1 className="text-2xl font-bold text-white mb-3">Swap</h1>
      {/* <div className="border border-white/10 rounded-lg p-4"></div> */}
      <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center gap-6 w-full max-w-sm"
    >
      {/* Select */}
      <select
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        className="w-full p-2 rounded-lg border border-white/10 bg-zinc-800 text-white"
        required
      >
        <option value="" disabled>
          Select Currency
        </option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="ETH">ETH</option>
        <option value="BTC">BTC</option>
      </select>

      {/* Amount */}
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        className="w-full p-2 rounded-lg border border-white/10 bg-zinc-800 text-white"
        required
      />

      {/* Submit */}
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
