import React from "react";

const Home = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Home</h1>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Home;

