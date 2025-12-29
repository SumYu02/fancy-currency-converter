import React from "react";
import {
  logoBlur,
  logoBneo,
  logoBusd,
  logoUsdc,
  logoUsd,
  logoEth,
  logoGmx,
  logoStem,
  logoLuna,
} from "../tokens/index_token";


const CurrencyCard = ({ card }) => {
    return (
      <div className="p-4 rounded-xl mx-4 shadow hover:shadow-lg transition-all duration-200 w-72 shrink-0 bg-transparent border border-white/10">
        <div className="flex items-center gap-3 ">
          <img
            src={card.logo}
            alt={card.currency}
            className="size-67 rounded-full"
          />
  
          <div className="flex flex-col">
            <p className="font-semibold text-white">
              {card.currency}
            </p>
          </div>
        </div>
  
        <div className="mt-4 flex flex-row items-center justify-between">
          <p className="text-sm text-slate-500">Price (USD)</p>
          <p className="text-xl font-semibold text-white">
            ${card.price.toFixed(4)}
          </p>
        </div>
      </div>
    );
  };

const Testimonial = () => {
  const currencyCards = [
    {
      currency: "BLUR",
      logo: logoBlur,
      price: 0.208115254237288,
    },
    {
      currency: "bNEO",
      logo: logoBneo,
      price: 7.1282679,
    },
    {
      currency: "BUSD",
      logo: logoBusd,
      price: 0.999183113,
    },
    {
      currency: "BUSD",
      logo: logoUsdc,
      price: 0.999878261118644,
    },
    {
      currency: "USD",
      logo: logoUsd,
      price: 1,
    },
    {
      currency: "ETH",
      logo: logoEth,
      price: 1645.93373737374,
    },
    {
      currency: "GMX",
      logo: logoGmx,
      price: 36.3451143728814,
    },
    {
      currency: "STEVMOS",
      logo: logoStem,
      price: 0.0727670677966102,
    },
    {
      currency: "LUNA",
      logo: logoLuna,
      price: 0.409556389830508,
    },
  ];

  
  
  return (
    <div className=" mt-10 rounded-lg mx-4 shadow hover:shadow-lg transition-all duration-200 flex flex-col max-w-screen shrink-0">
       <>
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        .marquee-inner {
          animation: marqueeScroll 25s linear infinite;
        }

        .marquee-reverse {
          animation-direction: reverse;
        }
      `}</style>

      {/* Row 1 */}
      <div className="marquee-row overflow-hidden relative">
        <div className="marquee-inner flex transform-gpu min-w-[200%] pt-10 pb-5">
          {[...currencyCards, ...currencyCards].map((card, index) => (
            <CurrencyCard key={index} card={card} />
          ))}
        </div>
      </div>

      {/* Row 2 (reverse) */}
      <div className="marquee-row overflow-hidden relative">
        <div className="marquee-inner marquee-reverse flex transform-gpu min-w-[200%] pt-10 pb-5">
          {[...currencyCards, ...currencyCards].map((card, index) => (
            <CurrencyCard key={index} card={card} />
          ))}
        </div>
      </div>
    </>
    </div>
  );


};

export default Testimonial;
