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
    <div className="block md:hidden fixed top-0 left-0 w-full z-50 bg-light/80 ">
      {/* Navbar Header */}
      <div className="flex justify-between backdrop-blur-xs items-center px-4 py-4">
        <Link className="" href="/">
          <div className="flex items-center">
            <img
              src="/images/ghostbyte_logo_white.svg"
              className="mr-2"
              height="32px"
              width="32px"
              alt="Ghostbyte logo white"
            />

            <span className="text-xl font-bold text-dark">
              Ghostbyte Library
            </span>
          </div>
        </Link>

        <button
          type="button"
          onClick={toggleMenu}
          aria-expanded={toggle}
          aria-controls="mobile-menu"
          className="text-dark focus:outline-none"
        >
          {toggle ? <X size={24} /> : <List size={24} />}
        </button>
      </div>

      {/* Overlay Menu (Entire overlay is scrollable) */}
      {toggle && (
        <div className="fixed inset-0 bg-dark p-4 overflow-y-auto">
          <div className="w-full max-w-md p-4 rounded-lg mx-auto">
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
