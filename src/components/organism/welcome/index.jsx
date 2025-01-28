import Button from "@/components/atoms/Button";
import React from "react";

function Welcome() {
  return (
    <section
      className="bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/fapet.webp')",
      }}
    >
      <div className="flex flex-col justify-center items-center text-center min-h-[70vh] px-4 py-10 md:px-10 md:py-20 lg:py-[300px] lg:px-[350px]">
        <h1 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl leading-tight">
          Pusat Pengembangan Ternak
        </h1>
        <div className="mt-2 md:mt-4 lg:mt-6 max-w-md lg:max-w-xl">
          <h2 className="text-white font-medium text-sm md:text-base lg:text-lg">
            Fakultas Peternakan Universitas Gadjah Mada
          </h2>
        </div>
        <div className="mt-6 md:mt-8 lg:mt-10">
          <Button warna={"bg-green-800"}>Tentang Kami PPT</Button>
        </div>
      </div>
    </section>
  );
}

export default Welcome;
