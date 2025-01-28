import React from "react";

function Button({ children, warna }) {
  return (
    <div className="mt-6">
      <button
        className={`bg-green-800 text-white hover:bg-white hover:text-green-800 shadow-lg px-6 py-2 rounded text-sm lg:text-base w-full ${warna} `}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
