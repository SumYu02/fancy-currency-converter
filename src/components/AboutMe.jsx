import React from "react";
import { FaGithub } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div id="github" className="w-full max-w-5x rounded-3xl px-6 py-20 md:px-16 mx-auto flex justify-center items-center relative overflow-hidden">
      <div className="w-full max-w-2xl flex flex-col items-center justify-center border border-white/30 rounded-3xl p-10 gap-4 backdrop-blur-sm">
        <h2 className="text-3xl md:text-5xl font-semibold text-center text-white">
          About Fancy
        </h2>

        <p className="text-slate-300 mt-4 text-center max-w-xl leading-relaxed">
          Fancy is a modern currency conversion platform designed to make
          understanding exchange rates simple, fast, and intuitive for everyone.
        </p>

        <p className="text-slate-400 mt-3 text-center max-w-xl">
          You can explore the source code, track updates, and contribute to the
          project on GitHub.
        </p>

        <FaGithub className="w-28 h-28 text-white mt-8 cursor-pointer hover:scale-110 transition-transform" />
      </div>
    </div>
  );
};

export default AboutMe;
