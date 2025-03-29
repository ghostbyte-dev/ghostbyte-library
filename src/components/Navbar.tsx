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
    <div className="block md:hidden fixed top-0 left-0 w-full z-10">
      {/* Navbar Header */}
      <div className="h-[45px] flex justify-between bg-gray-800 items-center px-4">
        <Link href="/" onClick={toggleMenu}>
          <h4 className="text-white text-center flex-1">Ghostbyte Library</h4>
        </Link>
        <button
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
