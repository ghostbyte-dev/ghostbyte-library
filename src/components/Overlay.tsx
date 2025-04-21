"use client";

import Links from "./Links";

interface ChildProps {
  toggleMenu: () => void;
}

const Overlay = ({ toggleMenu }: ChildProps) => {
  return (
    <div className="bg-gray-800 p-4 overflow-auto fixed inset-0">
      <div className="flex h-screen justify-center items-center">
        <div className="w-full max-w-md">
          <Links />
        </div>
      </div>
    </div>
  );
};

export default Overlay;
