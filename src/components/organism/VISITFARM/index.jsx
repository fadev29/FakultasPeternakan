import React, { Component } from "react";
import Button from "@/components/atoms/Button";
import ImageSlider from "@/components/molecules/scrollGambar";

export class VisitFram extends Component {
  render() {
    return (
      <>
        <div className="flex flex-col justify-center items-center bg-green-800 py-10 lg:py-20">
          <div className="flex py-5">
            <h1 className="text-white font-bold text-2xl md:text-3xl lg:text-5xl">
              VISIT FARM
            </h1>
          </div>
          <div className="flex px-5 md:px-20 lg:px-40 py-3">
            <p className="font-medium text-[11px] md:text-[13px] lg:text-base text-center text-white leading-relaxed">
              Pusat Pengembangan Ternak Fakultas Peternakan UGM memberikan
              kesempatan kepada semua pihak untuk belajar serta bereksplorasi di
              dunia Peternakan. Kami menfasilitas bagi pihak luar yang
              berkeinginan untuk melihat dunia Peternakan di Fakultas Peternakan
              UGM.
            </p>
          </div>
          <div className="flex py-5">
            <Button warna={"bg-yellow-400"}>Lihat Selengkapnya</Button>
          </div>
          <div className="w-full lg:w-3/4 py-5">
            <ImageSlider />
          </div>
        </div>
      </>
    );
  }
}

export default VisitFram;
