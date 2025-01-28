import React from "react";

function CardPanjang({ h1, p, icon, warna, iconw, h1t, pt }) {
  return (
    <div
      className={`flex flex-col lg:flex-row border p-6 lg:max-w-full max-w-full text-center py-5 lg:py-6 lg:px-6 pr-12 lg:gap-6 gap-4 lg:mb-5 mb-4 ${warna}`}
    >
      <div className="w-12 h-12 flex justify-center items-center mb-3 lg:mb-0">
        <div className="w-8 h-8">{icon}</div>
      </div>

      <div className="flex-1">
        <h1
          className={`text-green-800 text-left font-bold text-[12px] lg:text-[15px] ${h1t}`}
        >
          {h1}
        </h1>
        <p
          className={`font-medium lg:text-[12px] text-[10px] text-start ${pt}`}
        >
          {p}
        </p>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={`w-6 h-6 lg:w-8 lg:h-8 flex justify-end items-center ${iconw}`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
}

export default CardPanjang;
