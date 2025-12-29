import React from "react";
import { useState } from "react";

const Hero = () => {
  return (
    <section className="w-full max-h-screen relative flex flex-col items-center bg-black text-white text-sm pb-16 bg-[url(https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/bg-gradient-4.svg)] bg-center bg-cover">
      {/* HERO TEXT */}
      <h1 className="text-4xl md:text-6xl text-center font-semibold max-w-3xl mt-36 bg-gradient-to-r from-white to-[#748298] text-transparent bg-clip-text">
        Convert Currencies Instantly with Fancy
      </h1>

      <p className="text-slate-300 md:text-base text-center max-w-md mt-3 px-2 ">
        Real-time exchange rates, smart conversions, and a beautiful experience
        — all in one place.
      </p>

      {/* BUTTONS */}
      <div className="flex items-center gap-3 mt-8">
        <style>{`
                @keyframes rotate {
                    100% {
                        transform: rotate(1turn);
                    }
                }
            
                .rainbow::before {
                    content: '';
                    position: absolute;
                    z-index: -2;
                    left: -50%;
                    top: -50%;
                    width: 200%;
                    height: 200%;
                    background-position: 100% 50%;
                    background-repeat: no-repeat;
                    background-size: 50% 30%;
                    filter: blur(6px);
                    background-image: linear-gradient(#FF0A7F,#780EFF);
                    animation: rotate 4s linear infinite;
                }
            `}</style>
        <div className="rainbow relative z-0 overflow-hidden p-0.5 flex items-center justify-center rounded-full hover:scale-105 transition duration-300 active:scale-100">
          <button className="px-8 text-sm py-3 text-white rounded-full font-medium bg-gray-800">
            Get Started →
          </button>
        </div>

        {/* <button className="bg-white/10 border border-white/15 rounded-full px-6 py-3">
          Learn More
        </button> */}
      </div>

      <div className="mt-14 md:mt-20 flex flex-wrap items-center justify-center p-1 rounded-full bg-black border border-gray-300 text-sm">
        <div className="flex items-center">
          <img
            className="w-6 rounded-full  border-white"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50"
            alt="userImage1"
          />
          <img
            className="w-6 placeholder:rounded-full border-white -translate-x-2"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50"
            alt="userImage2"
          />
          <img
            className="w-6 rounded-full border-white -translate-x-4"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50&h=50&auto=format&fit=crop"
            alt="userImage3"
          />
        </div>
        <p className="-translate-x-2">Trusted by 10,000+ people</p>
      </div>
    </section>
  );
};

export default Hero;
