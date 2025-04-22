"use client";

import { useState, useEffect } from "react";
import { List, X } from "phosphor-react";
import Links from "./Links";
import Link from "next/link";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle((prev) => !prev);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = toggle ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [toggle]);

  return (
    <div className="block md:hidden fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-[#030014]/60 ">
      {/* Navbar Header */}
      <div className="flex justify-between backdrop-blur-xl items-center px-4 py-4">
        <Link className="" href="/">
          <div className="flex items-center">
            <img
              src="/images/ghostbyte_logo_white.svg"
              className="mr-2"
              height="32px"
              width="32px"
              alt="Ghostbyte logo white"
            />

            <span className="text-xl font-bold text-white">Ghostbyte</span>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent ml-2">
              Library
            </span>
          </div>
        </Link>

        <button
          type="button"
          onClick={toggleMenu}
          aria-expanded={toggle}
          aria-controls="mobile-menu"
          className="text-white focus:outline-none"
        >
          {toggle ? <X size={24} /> : <List size={24} />}
        </button>
      </div>

      {/* Overlay Menu (Entire overlay is scrollable) */}
      {toggle && (
        <div className="fixed inset-0 bg-gray-800 p-4 overflow-y-auto">
          <div className="w-full max-w-md bg-gray-900 p-4 rounded-lg mx-auto">
            {/* Close Button */}
            <div className="flex justify-end">
              <button
                type="button"
                onClick={toggleMenu}
                className="text-white focus:outline-none"
              >
                <X size={24} />
              </button>
            </div>

            {/* Links Section */}
            <Links toggleMenu={toggleMenu} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
