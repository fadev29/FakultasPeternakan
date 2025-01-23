import React from "react";

function CardPanjang({ h1, p, icon, warna, iconw }) {
  return (
    <div
      class={`flex lg:flex-row flex-col border p-6 lg:max-w-[400px] max-w-[100px]  text-center py-[20px] lg:py-[25px] lg:px-[50px] pr-[50px] lg:gap-6 gap-4 lg:mb-5 mb-4 ${warna}`}
    >
      <div>{icon}</div>
      <div class="flex flex-col">
        <h1 class="text-green-800 text-left lg:pl-1 font-bold text-[10px] lg:text-[15px]">
          {h1}
        </h1>
        <p class="font-medium lg:text-[15px] text-[6px]">{p}</p>
      </div>
      <div class="flex items-center lg:px-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class={`lg:size-8  size-4 ${iconw}`}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </div>
  );
}

export default CardPanjang;
