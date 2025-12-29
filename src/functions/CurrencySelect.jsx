import React from 'react'
import { useState, useEffect, useRef } from "react";


const CurrencySelect = ({ value, onChange, currencies, placeholder, disabled }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
  
    const uniqueCurrencies = currencies.reduce((acc, curr) => {
      if (!acc.find(item => item.currency === curr.currency)) {
        acc.push(curr);
      }
      return acc;
    }, []);
  
    const selectedCurrency = uniqueCurrencies.find(c => c.currency === value);

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
  
    const handleSelect = (currency) => {
      onChange(currency);
      setIsOpen(false);
    };
  
    return (
      <div className="relative w-full" ref={dropdownRef}>
        <button
          type="button"
          onClick={() => !disabled && setIsOpen(!isOpen)}
          disabled={disabled}
          className="w-full p-2 rounded-lg border border-white/10 bg-zinc-800 text-white flex items-center justify-between gap-2 hover:bg-zinc-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <div className="flex items-center gap-2 flex-1 min-w-0">
            {selectedCurrency?.logo ? (
              <img
                src={selectedCurrency.logo}
                alt={selectedCurrency.currency}
                className="w-5 h-5 rounded-full flex-shrink-0"
              />
            ) : (
              <div className="w-5 h-5 rounded-full bg-zinc-600 flex-shrink-0"></div>
            )}
            <span className="truncate">
              {selectedCurrency ? selectedCurrency.currency : placeholder}
            </span>
          </div>
    
        </button>
  
        {isOpen && (
          <div className=" z-50 absolute w-full mt-1 bg-zinc-800 border border-white/10 rounded-lg shadow-lg max-h-60 overflow-auto">
            {uniqueCurrencies.map((currency) => (
              <button
                key={currency.currency}
                type="button"
                onClick={() => handleSelect(currency.currency)}
                className={`w-full p-2 flex items-center gap-2 hover:bg-zinc-700 transition-colors ${
                  value === currency.currency ? "bg-zinc-700" : ""
                }`}
              >
                {currency.logo ? (
                  <img
                    src={currency.logo}
                    alt={currency.currency}
                    className="w-5 h-5 rounded-full flex-shrink-0"
                  />
                ) : (
                  <div className="w-5 h-5 rounded-full bg-zinc-600 flex-shrink-0"></div>
                )}
                <span className="text-white">{currency.currency}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };

export default CurrencySelect