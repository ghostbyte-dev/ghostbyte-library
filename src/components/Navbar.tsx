"use client";

import { useState } from "react";
import Overlay from "./Overlay";
import { List, X } from "phosphor-react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => setToggle(!toggle);

  return (
    <div className="fixed top-0 left-0 w-full z-10">
      {/* Navbar Header */}
      <div className="h-[45px] flex justify-between bg-gray-800 items-center px-4">
        <h4 className="text-white text-center flex-1">Ghostbyte Library</h4>

        <button
          onClick={toggleMenu}
          aria-expanded={toggle}
          className="text-white focus:outline-none"
        >
          {toggle ? <X size="24" /> : <List size="24" />}
        </button>
      </div>

      {/* Overlay Menu */}
      {toggle && <Overlay toggleMenu={toggleMenu} />}
    </div>
  );
};

export default Navbar;
