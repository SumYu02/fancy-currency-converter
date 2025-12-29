import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Testimonial from "../components/Testimonial";
import Swap from "../components/Swap";
import Footer from "../components/Footer";
import AboutMe from "../components/AboutMe";
import CurrencyTable from "../components/CurrencyTable";

const Home = () => {
  return (
    <div className="bg-black min-h-screen w-full">
      <Navbar />
      <Hero />
      <Testimonial />

      <div className=" relative flex flex-col justify-center items-center mt-8 mb-8 min-h-64 md:min-h-screen">
        <div className="z-10 gap-3 flex flex-col items-center justify-center mb-10 w-3/4 md:w-1/2">
          <h2 className="text-3xl md:text-5xl font-semibold text-center text-white">
            Convert currencies instantly
          </h2>
          <p className="mt-3 text-center text-slate-400 max-w-xl">
            Select your currency, enter an amount, and get accurate exchange
            rates in real time.
          </p>
        </div>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-600/20 to-transparent"></div>
        <div className="absolute inset-0 backdrop-blur-[2px]"></div>

        <Swap /> 
      </div>
      <CurrencyTable />
      <AboutMe />
      <Footer />
    </div>
  );
};

export default Home;
