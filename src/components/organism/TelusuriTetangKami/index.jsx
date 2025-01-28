import Button from "@/components/atoms/Button";
import React from "react";

function Telusuri() {
  return (
    <>
      <div className="py-5">
        <div
          className="lg:bg-cover bg-center w-full h-[300px] py-8"
          style={{
            backgroundImage:
              "url('https://ayamkita.com/wp-content/uploads/2017/10/Sifat-Ayam-Broiler.jpg')",
          }}
        >
          <div className="py-11">
            <h1 className="text-green-800  font-bold text-center text-4xl">
              Telusuri Lebih Lanjut
            </h1>
          </div>
          <div className="flex flex-row gap-52 justify-center">
            <Button warna={"bg-green-800"}>Pimpinan PPT</Button>
            <Button warna={"bg-green-800"}>Tenaga PPT</Button>
            <Button warna={"bg-green-800"}>Aset PPT</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Telusuri;
