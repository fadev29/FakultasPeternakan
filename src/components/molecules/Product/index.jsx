import React from "react";
import Button from "@/components/atoms/Button";
function Product({ images, h1, p, flex, butto, warna, iframe, textw, ukuran }) {
  return (
    <>
      <div className={`flex  lg:py-[200px] py-11 lg:mx-11 ${flex}`}>
        <div className="flex lg:px-[30px] justify-center">
          <img className={` ${ukuran}`} src={images} alt="susu" />
          {iframe}
        </div>
        <div className="">
          <div className="py-3">
            <h1
              className={`font-bold  lg:text-[30px] text-[20px] text-center lg:text-left ${textw}`}
            >
              {h1}
            </h1>
            <hr className="text-red-700 font-bold" />
          </div>
          <div className="flex justify-center">
            <p
              className={`lg:text-left  font-medium text-[12px] text-center ${textw}`}
            >
              {p}
            </p>
          </div>
          <div className="flex lg:py-[20px] py-5 justify-center lg:justify-start">
            <Button warna={`${warna}`}>{butto}</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
