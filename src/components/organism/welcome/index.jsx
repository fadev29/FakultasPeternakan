import Button from "@/components/atoms/Button";
import React from "react";

function Welcome() {
  return (
    <section
      className="lg:bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/fapet.webp')",
      }}
    >
      <div className="flex flex-col justify-center text-center items-center lg:py-[300px] lg:px-[350px] py-[240px] px-5">
        <h1 className="text-white font-bold text-2xl lg:text-5xl leading-tight">
          Pusat Pengembangan Ternak
        </h1>
        <div className="lg:px-[180px] lg:py-2 px-[30px]">
          <h2 className="text-white font-medium text-[11px] lg:text-[17px] mt-2">
            Fakultas Peternakan Universitas Gadjah Mada
          </h2>
        </div>
        <Button>Tentang Kami</Button>
      </div>
    </section>
  );
}

export default Welcome;
