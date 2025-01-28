import Link from "next/link";
import React, { useState } from "react";

function DropDown({ text, options }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative text-left hidden lg:block">
      <button
        onClick={toggleDropdown}
        className="flex items-center text-white font-bold hover:text-yellow-500 focus:outline-none text-[15px]"
        aria-expanded={isOpen}
      >
        {text}
        <svg
          className={`w-5 h-5 ml-1 transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-56 rounded-md shadow-lg bg-green-700 ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {options.map((option, index) => (
              <Link
                key={index}
                href={option.href}
                className="block px-4 py-2 text-sm text-yellow-400 hover:bg-green-800 "
              >
                {option.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default DropDown;
