import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Testimonial from "../components/Testimonial";
import Swap from "../components/Swap";

const Home = () => {
  return (
    <div className="bg-black min-h-screen w-full">
      <Navbar />
      <Hero />
      <Testimonial />
      <div className="relative flex justify-center items-center mt-8 mb-8  min-h-screen">
        <div className="absolute inset-0 bg-black/60"></div>
        {/* Soft purple glow (NOT full opacity) */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-600/20 to-transparent"></div>
        {/* Optional subtle blur */}
        <div className="absolute inset-0 backdrop-blur-[2px]"></div>
      
        <Swap />
      </div>
    </div>
  );
};

export default Home;
