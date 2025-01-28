import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

function MaknaLogo() {
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-green-800">
        <div className="py-11">
          <h1 className="text-white font-bold text-4xl text-center">
            Logo Pusat Pengembangan Ternak
          </h1>
        </div>
        <div className="shadow-lg">
          <img
            src="https://ppt.fapet.ugm.ac.id/wp-content/uploads/sites/1909/2024/06/Logo-Putih@4x.png"
            alt="logo ppt"
            width="300"
            height="300"
          />
        </div>
        <div className="space-y-4 px-16 ">
          <div className="mt-2">
            <hr className="border-white" />
          </div>
          <div className="flex items-start gap-3">
            <AiOutlineCheckCircle className="text-white text-2xl" />
            <p className="text-white font-semibold">
              Gambar garis tiga dengan anak panah ke atas melambangkan
              peningkatan upaya meningkatkan manfaat Pusat Pengembangan Ternak
              dalam mendukung Tri Dharma.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <AiOutlineCheckCircle className="text-white text-2xl" />
            <p className="text-white font-semibold">
              Gambar ternak sapi melambangkan bahwa ternak yang dipelihara
              merupakan rojo koyo (raja kekayaan) yang dapat meningkatkan
              kesejahteraan dan kesuksesan.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <AiOutlineCheckCircle className="text-white text-2xl" />
            <p className="text-white font-semibold">
              Gambar 3 lembar daun melambangkan peternakan yang dijalankan
              secara keberlanjutan dengan memperhatikan nilai sosial, ekonomi,
              dan lingkungan.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <AiOutlineCheckCircle className="text-white text-2xl" />
            <p className="text-white font-semibold">
              Gambar beberapa bentuk bangun melambangkan kolaborasi antara
              individu di Pusat Pengembangan Ternak menjadi kunci untuk
              pencapaian produktivitas yang optimal.
            </p>
          </div>
          <div className="mt-2">
            <hr className="border-white" />
          </div>
        </div>
      </div>
    </>
  );
}

export default MaknaLogo;
