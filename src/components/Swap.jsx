import React from "react";
import { useState, useEffect } from "react";
import { currencies } from "../index";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import CurrencySelect from "../functions/CurrencySelect";
import Modal from "./Modal";

const Swap = () => {
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [fromAmount, setFromAmount] = useState("");
  const [toAmount, setToAmount] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [swapResult, setSwapResult] = useState(null);

  // Calculate swap amount when fromAmount, fromCurrency, or toCurrency changes
  useEffect(() => {
    if (fromAmount && fromCurrency && toCurrency) {
      const fromCurrencyData = currencies.find(
        (c) => c.currency === fromCurrency
      );
      const toCurrencyData = currencies.find((c) => c.currency === toCurrency);

      if (
        fromCurrencyData &&
        toCurrencyData &&
        fromCurrencyData.price &&
        toCurrencyData.price
      ) {
        // Convert from amount to USD first, then to target currency
        const amountInUSD = parseFloat(fromAmount) * fromCurrencyData.price;
        const convertedAmount = amountInUSD / toCurrencyData.price;
        setToAmount(convertedAmount.toFixed(6));
      } else {
        setToAmount("");
      }
    } else {
      setToAmount("");
    }
  }, [fromAmount, fromCurrency, toCurrency]);

  const handleSwapCurrencies = () => {
    const tempCurrency = fromCurrency;
    const tempAmount = fromAmount;
    setFromCurrency(toCurrency);
    setToCurrency(tempCurrency);
    setFromAmount(toAmount);
    setToAmount(tempAmount);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fromCurrency || !toCurrency || !fromAmount) {
      alert("Please fill in all fields");
      return;
    }

    const fromCurrencyData = currencies.find(
      (c) => c.currency === fromCurrency
    );
    const toCurrencyData = currencies.find((c) => c.currency === toCurrency);

    if (!fromCurrencyData || !toCurrencyData) {
      alert("Invalid currency selection");
      return;
    }

    // Perform swap
    const result = {
      from: {
        currency: fromCurrency,
        amount: parseFloat(fromAmount),
        price: fromCurrencyData.price,
      },
      to: {
        currency: toCurrency,
        amount: parseFloat(toAmount),
        price: toCurrencyData.price,
      },
      exchangeRate: toCurrencyData.price / fromCurrencyData.price,
    };

    setSwapResult(result);
    setIsOpen(true);
  };

  const fromCurrencyData = currencies.find((c) => c.currency === fromCurrency);
  const toCurrencyData = currencies.find((c) => c.currency === toCurrency);

  return (
    <div id="swap" className=" relative z-10 text-white border border-white/10 rounded-lg p-6 sm:p-12 bg-zinc-900 w-3/4 md:w-1/2">
      <h1 className="text-2xl sm:text-3xl font-bold text-white mb-5 flex justify-center items-center">Swap</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center gap-6 w-full max-w-sm mx-auto"
      >
        {/* From Currency */}
        <div className="w-full">
          <CurrencySelect
            value={fromCurrency}
            onChange={setFromCurrency}
            currencies={currencies}
            placeholder="Select Currency"
            disabled={false}
          />
        </div>

        {/* From Amount */}
        <div className="w-full">
          <input
            type="number"
            value={fromAmount}
            onChange={(e) => setFromAmount(e.target.value)}
            placeholder="Amount"
            className="w-full p-2 rounded-lg border border-white/10 bg-zinc-800 text-white"
            required
            min="0"
            step="0.000001"
          />
          {fromCurrencyData && (
            <p className="text-xs text-white/50 mt-1">
              Last updated: {new Date(fromCurrencyData.date).toLocaleString()}
            </p>
          )}
        </div>

        {/* Swap Button */}
        <button
          type="button"
          onClick={handleSwapCurrencies}
          className="p-2 rounded-full bg-zinc-800 border border-white/10 hover:bg-zinc-700 transition-colors"
          aria-label="Swap currencies"
        >
          <FaArrowRightArrowLeft className="text-white w-5 h-5" />
        </button>

        {/* To Currency */}
        <div className="w-full">
          <CurrencySelect
            value={toCurrency}
            onChange={setToCurrency}
            currencies={currencies}
            placeholder="Select Currency"
            disabled={false}
          />
        </div>

        {/* To Amount */}
        <div className="w-full">
          <input
            type="number"
            value={toAmount}
            onChange={(e) => {
              setToAmount(e.target.value);
              // Reverse calculation when user types in toAmount
              if (e.target.value && fromCurrency && toCurrency) {
                const toCurrencyData = currencies.find(
                  (c) => c.currency === toCurrency
                );
                const fromCurrencyData = currencies.find(
                  (c) => c.currency === fromCurrency
                );
                if (
                  toCurrencyData &&
                  fromCurrencyData &&
                  toCurrencyData.price &&
                  fromCurrencyData.price
                ) {
                  const amountInUSD =
                    parseFloat(e.target.value) * toCurrencyData.price;
                  const convertedAmount = amountInUSD / fromCurrencyData.price;
                  setFromAmount(convertedAmount.toFixed(6));
                }
              }
            }}
            placeholder="Amount"
            className="w-full p-2 rounded-lg border border-white/10 bg-zinc-800 text-white"
            required
            min="0"
            step="0.000001"
          />
          {toCurrencyData && (
            <p className="text-xs text-white/50 mt-1">
              Last updated: {new Date(toCurrencyData.date).toLocaleString()}
            </p>
          )}
        </div>

        {/* Exchange Rate Info */}
        {fromCurrency && toCurrency && fromCurrencyData && toCurrencyData && (
          <div className="w-full text-center text-sm text-white/70">
            <p>
              1 {fromCurrency} ={" "}
              {(toCurrencyData.price / fromCurrencyData.price).toFixed(6)}{" "}
              {toCurrency}
            </p>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="text-md w-full p-2 rounded-md bg-gradient-to-r from-violet-500 via-[#9938CA] to-[#E0724A] hover:opacity-90 transition-opacity"
        >
          Swap
        </button>
      </form>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} swapResult={swapResult} />
    </div>
  );
};

export default Swap;
