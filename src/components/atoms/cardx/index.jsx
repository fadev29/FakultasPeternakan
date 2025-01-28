import React from "react";

function Card({ h1, text, image, bg, warna, div }) {
  return (
    <div>
      <div
        className={`border p-6 lg:max-w-[360px] max-w-[100px]  text-center flex flex-col items-center py-[10px] lg:py-[25px] px-[30px] gap-1 ${warna}`}
      >
        <a href="#">
          <img
            className={`lg:w-[40px]  lg:h-[40px] w-[30px] h-[30px] rounded-full flex justify-center items-center ${bg}`}
            src={image}
            alt="icon"
          />
        </a>
        <h1 className="font-bold lg:py-2 py-2 text-[10px] lg:text-xl">{h1}</h1>
        <p className="font-semibold text-[5px] lg:text-[15px]">{text}</p>
      </div>
    </div>
  );
}

export default Card;
