import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

function VisiMisi() {
  return (
    <div className="flex flex-col bg-green-800">
      <div className="py-10 px-5 md:py-16 md:px-10 lg:py-20 lg:px-40">
        <h1 className="text-white font-bold text-start text-2xl md:text-3xl lg:text-4xl">
          Visi & Misi
        </h1>
        <div className="mt-2">
          <hr className="border-white" />
        </div>
        <h2 className="text-white font-bold text-center text-xl md:text-2xl py-5">
          Visi
        </h2>
        <div className="flex justify-center">
          <p className="text-white font-semibold text-center max-w-xl lg:max-w-2xl text-sm md:text-base leading-relaxed">
            Mendukung visi Fakultas Peternakan UGM untuk menyelenggarakan
            pendidikan ilmu dan industri peternakan yang unggul, mandiri, dan
            bermartabat, berstandar internasional dan berjiwa Pancasila dengan
            mengutamakan kepentingan dan kemakmuran bangsa Indonesia.
          </p>
        </div>
        <h2 className="text-white font-bold text-center text-xl md:text-2xl py-5">
          Misi
        </h2>
        <div className="space-y-6">
          <div className="flex items-start gap-3">
            <AiOutlineCheckCircle className="text-white text-xl md:text-2xl" />
            <p className="text-white font-semibold text-sm md:text-base leading-relaxed">
              Pengelolaan secara mandiri yang transparan, akuntabel dan
              berkualitas secara berkelanjutan
            </p>
          </div>
          <div className="flex items-start gap-3">
            <AiOutlineCheckCircle className="text-white text-xl md:text-2xl" />
            <p className="text-white font-semibold text-sm md:text-base leading-relaxed">
              Meningkatkan peran sumber daya manusia berdasarkan tugas pokok dan
              fungsi
            </p>
          </div>
          <div className="flex items-start gap-3">
            <AiOutlineCheckCircle className="text-white text-xl md:text-2xl" />
            <p className="text-white font-semibold text-sm md:text-base leading-relaxed">
              Menyediakan pelayanan dan fasilitas untuk mendukung kegiatan Tri
              Dharma Perguruan Tinggi
            </p>
          </div>
          <div className="flex items-start gap-3">
            <AiOutlineCheckCircle className="text-white text-xl md:text-2xl" />
            <p className="text-white font-semibold text-sm md:text-base leading-relaxed">
              Mengembangkan usaha bidang peternakan yang menghasilkan keuntungan
              secara berkelanjutan
            </p>
          </div>
        </div>
        <div className="mt-5">
          <hr className="border-white" />
        </div>
      </div>
    </div>
  );
}

export default VisiMisi;
