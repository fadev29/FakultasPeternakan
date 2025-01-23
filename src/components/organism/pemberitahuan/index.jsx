import Button from "@/components/atoms/Button";
import Card from "@/components/atoms/crad";
import React from "react";

function Pemberitahuan() {
  return (
    <section className="lg:mt-[-100px]">
      <div className="flex flex-row justify-center">
        <Card
          h1={"Research"}
          text={
            "Pusat Pengembangan Ternak berupaya menfasilitasi akademisi untuk melakukan penelitian"
          }
          image={"/images/genetik.png"}
          bg={" bg-green-800"}
          warna={"bg-white"}
        />
        <Card
          h1={"Production"}
          text={
            "Berbagai produk peternakan telah berhasil kami kembangkan dan kami pasarkan"
          }
          image={"/images/user.png"}
          bg={" bg-green-800"}
          warna={"bg-white"}
          div={""}
        />
        <Card
          h1={"Research"}
          text={
            "Pusat Pengembangan Ternak berupaya menfasilitasi akademisi untuk melakukan penelitian"
          }
          image={"/images/image.png"}
          bg={"bg-white"}
          warna={"bg-green-800"}
        />
      </div>

      <div className="flex flex-col justify-center items-center lg:py-[120px] py-16">
        <div className="flex">
          <img
            className="flex lg:w-[1250px] lg:h-[100]"
            src="/images/tangkapan.png"
            alt="garis"
          />
        </div>
        <div className="flex lg:py-[20px]">
          <h1 className="text-green-800 font-bold lg:text-4xl text-x">
            Fasilitasi Penelitian dan Pendidikan
          </h1>
        </div>
        <div className="flex lg:py-[15px] mx-16 py-3">
          <p className="font-medium lg:text-[13px] text-[10px] text-center">
            Pusat Pengembangan Ternak Fakultas Peternakan UGM menfasilitasi
            Dosen/Mahasiswa untuk bereksplorasi dan mengembangkan ilmu
            pengetahuan di dunia Peternakan.
          </p>
        </div>
        <div className="flex lg:py-[30px] py-4">
          <Button>Liat Fasilitas PPT</Button>
        </div>
      </div>
    </section>
  );
}

export default Pemberitahuan;
