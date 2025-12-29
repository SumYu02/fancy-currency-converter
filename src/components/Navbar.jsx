import React from "react";
import { useState } from "react";
import { imgLogo } from "../index";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="text-sm text-white w-full ">
      <div className="text-center font-medium py-2 bg-gradient-to-r from-violet-500 via-[#9938CA] to-[#E0724A]">
        <p>Here is the solution for the problem 2</p>
      </div>

      <nav className="relative h-[70px] bg-black text-white flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 shadow">
        <div className="flex items-center gap-2">
          <img src={imgLogo} alt="logo" className="w-8 h-8" />
          <h1 className="text-2xl semi-bold ">Fancy</h1>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center space-x-8 ">
          <li>
            <a href="/" className="hover:text-violet-600">
              Home
            </a>
          </li>
          <li>
            <a href="#swap" className="hover:text-violet-600">
              Swap
            </a>
          </li>
          <li>
            <a href="#github" className="hover:text-violet-600">
              GitHub
            </a>
          </li>
          <li>
            <a href="#currency-table" className="hover:text-violet-600">
              Pricing
            </a>
          </li>
        </ul>
        <div></div>

        {/* Mobile menu*/}
        <button
          aria-label="menu-btn"
          type="button"
          onClick={() => setOpen(!open)}
          className="inline-block bg-black text-white md:hidden active:scale-90 transition"
        >
          <IoMdMenu className="w-8 h-8" />
        </button>

        {/* Mobile menu */}
        {open && (
          <div className="absolute top-[70px] left-0 w-full bg-black  shadow-sm p-6 md:hidden">
            <ul className="flex flex-col space-y-4 text-lg text-white">
              <li>
                <a href="#" className="text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#swap" className="text-sm">
                  Swap
                </a>
              </li>
              <li>
                <a href="#github" className="text-sm">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#currency-table" className="text-sm">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
