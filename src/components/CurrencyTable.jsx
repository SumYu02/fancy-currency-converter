import React from 'react'
import { currencies } from '../index'
import { MdUpdate } from "react-icons/md";

const CurrencyTable = () => {
    const uniqueCurrencies = currencies.reduce((acc, curr) => {
        if (!acc.find(item => item.currency === curr.currency)) {
          acc.push(curr);
        }
        return acc;
      }, []);

  return (
    <div id="currency-table" className="w-full max-w-5x rounded-3xl px-6 py-20 md:px-16 mx-auto flex justify-center items-center relative overflow-hidden">
      <div className="w-full max-w-7xl flex flex-col items-center justify-center border border-white/30 rounded-3xl p-10 gap-4 backdrop-blur-sm">
        <h2 className="text-3xl md:text-5xl font-semibold text-center text-white">
          Currency Table
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {uniqueCurrencies.map((currency) => (
           <div className="p-4 rounded-xl mx-4 shadow hover:shadow-lg transition-all duration-200 w-72 shrink-0 bg-transparent border border-white/10">
           <div className="flex items-center gap-3 ">
             <img src={currency.logo} alt={currency.currency} className="w-5 h-5 rounded-full" />
             <p className="text-white">{currency.currency}</p>
             <p className="text-white ">${currency.price.toFixed(4)}</p>
           </div>
          
         </div>
          ))}
        </div>
        <p className="text-xs text-white/50 flex justify-center items-center gap-2 mt-3"><MdUpdate className="w-5 h-5 text-green-500 " /> Last updated: {new Date().toLocaleString()}</p>
       
      </div>
    </div>
  )
}

export default CurrencyTable