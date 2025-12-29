import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Testimonial from "../components/Testimonial";

const Home = () => {

  return (
    <div className="bg-black min-h-screen w-full" >
    <Navbar />
    <Hero />
    <Testimonial />
  
    {/* <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl semi-bold">Home</h1>
      <form>
        <h1>Swap</h1>
          <input type="number" placeholder="Amount to send" />
          <input type="number" placeholder="Amount to receive" />
       
        <button type="submit">CONFIRM SWAP</button>
      </form>
  
    </div> */}
    </div>
  );
};

export default Home;

