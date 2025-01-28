import React from "react";

function CardAngka({ h1, p, h2 }) {
  return (
    <>
      <div className="flex flex-row px-[100px] py-20">
        <div className="flex flex-col border bg-white justify-center shadow-lg w-[400px] h-[200px] rounded-lg ">
          <div className="">
            <h1 className="text-center text-green-800 font-boldm py-3 text-xl font-bold">
              Biaya Kunjungan
            </h1>
            <p className="text-center text-green-800">TK/PAUD</p>
            <h1 className="text-center text-yellow-500 text-6xl py-3">{h1}</h1>
            <p className="text-center ">per Orang</p>
          </div>
        </div>
        <div className="flex flex-col justify-center pl-[400px]">
          <h1 className="text-center  font-bold text-green-800 text-3xl">
            Fasilitas yang diberikan
          </h1>
          <p className="text-center text-black">
            – 1 Botol Fapet Milk 250 ml
            <br />– 1 butir telur Fapet Egg matang
            <br />– Pemandu Wisata Edukasi Ternak
            <br />– Kertas bergambar untuk mewarnai
            <br />
            {p}
            <br />
            {h2}
          </p>
        </div>
      </div>
    </>
  );
}

export default CardAngka;
