import Cardimages from "@/components/atoms/cardImages";
import React from "react";

const data = [
  {
    id: 1,
    image:
      "https://ppt.fapet.ugm.ac.id/wp-content/uploads/sites/1909/2023/06/drh.-Bambang-Ariyadi-MP.-Ph.D.jpeg",
    title: "drh. Bambang Ariyadi, MP., Ph.D",
    description: "Divisi Kesehatan Hewan & Biosecurity",
  },
  {
    id: 2,
    image:
      "https://ppt.fapet.ugm.ac.id/wp-content/uploads/sites/1909/2023/06/Dr.-Ir.-Aji-Praba-Baskara-S.Pt_.-IPP.jpeg",
    title: "Dr. Ir. Aji Praba Baskara, S.Pt., IPP.",
    description: "Divisi Non-Ruminansia",
  },
  {
    id: 3,
    image:
      "https://ppt.fapet.ugm.ac.id/wp-content/uploads/sites/1909/2023/06/Ir.-Dimas-Hand-Vidya-Paradhipa-S.Pt_.-M.Sc_.-Ph.D.-IPP.jpeg",
    title: "Ir. Dimas Hand Vidya Paradhipa, S.Pt., M.Sc., Ph.D., IPP",
    description: "Divisi Pakan",
  },
  {
    id: 4,
    image: "/images/trisno.png",
    title: "Tristianto Nugroho, S.Pt., M.Sc",
    description: "Divisi Ruminansia",
  },
  {
    id: 5,
    image:
      "https://ppt.fapet.ugm.ac.id/wp-content/uploads/sites/1909/2023/06/Ir.-Viagian-Pastawan-S.Pt_.-M.Sc_.-Ph.D.-IPP.jpeg",
    title: "Ir. Viagian Pastawan, S.Pt., M.Sc., Ph.D., IPP",
    description: "Divisi Limbah",
  },
];
const dataLapangan = [
  {
    id: 1,
    image:
      "https://ppt.fapet.ugm.ac.id/wp-content/uploads/sites/1909/2023/06/Yuniary-Aranda-S.Pt_.jpeg",
    title: "Yuniary Aranda, S.Pt",
    description:
      "Koordinator Office dan Produksi Pusat Pengembangan Ternak Fakultas Peternakan Universitas Gadjah Mada",
  },
  {
    id: 2,
    image:
      "https://ppt.fapet.ugm.ac.id/wp-content/uploads/sites/1909/2024/12/WhatsApp-Image-2024-12-16-at-15.00.47.jpeg",
    title: "Azwar Rizal Pratama, S.Pt",
    description:
      "Koordinator Farm Pusat Pengembangan Ternak Fakultas Peternakan Universitas Gadjah Mada",
  },
];
const dataAdministrasi = [
  {
    id: 1,
    image:
      "https://ppt.fapet.ugm.ac.id/wp-content/uploads/sites/1909/2023/09/4-1536x1536.jpg",
    title: "Mia Agusthia, S.Pt.",
    description:
      "Sekretaris Pusat Pengembangan Ternak Fakultas Peternakan Universitas Gadjah Mada",
  },
  {
    id: 2,
    image:
      "https://ppt.fapet.ugm.ac.id/wp-content/uploads/sites/1909/2023/06/Nanik-Dwi-Riyanti-SE.jpeg",
    title: "Nanik Dwi Riyanti, SE.",
    description:
      "Bendahara Pusat Pengembangan Ternak Fakultas Peternakan Universitas Gadjah Mada",
  },
];
function PimpinanPpt() {
  return (
    <>
      <div className="bg-white py-11">
        <div className="flex flex-col justify-center">
          <div className="py-5">
            <h1 className="text-green-800 font-bold text-center text-3xl">
              Kepala
            </h1>
          </div>
          <div className="flex justify-center">
            <Cardimages>
              <Cardimages.Header images="/images/pakmuksin.png" />
              <Cardimages.Body
                title="Dr. Ir. Muhsin Al Anas, S.Pt., IPP."
                desc="Kepala Pusat Pengembangan Ternak Fakultas Peternakan Universitas Gadjah Mada"
              />
            </Cardimages>
          </div>
          <div className="mt-2 px-32 py-5">
            <hr className="border-black" />
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="text-green-800 font-bold text-center text-3xl py-5">
            Divisi PPT
          </h1>
        </div>
        <div className="flex flex-row justify-center">
          {data.map((item) => (
            <Cardimages key={item.id}>
              <Cardimages.Header images={item.image} />
              <Cardimages.Body title={item.title} desc={item.description} />
            </Cardimages>
          ))}
        </div>
        <div className="mt-2 px-32 py-5">
          <hr className="border-black" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-green-800 font-bold text-center text-3xl py-5">
            Koordinator Lapangan
          </h1>
        </div>
        <div className="flex flex-row justify-center">
          {dataLapangan.map((item) => (
            <Cardimages key={item.id}>
              <Cardimages.Header images={item.image} />
              <Cardimages.Body title={item.title} desc={item.description} />
            </Cardimages>
          ))}
        </div>
        <div className="mt-2 px-32 py-5">
          <hr className="border-black" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-green-800 font-bold text-center text-3xl py-5">
            Administrasi
          </h1>
        </div>
        <div className="flex flex-row justify-center">
          {dataAdministrasi.map((item) => (
            <Cardimages key={item.id}>
              <Cardimages.Header images={item.image} />
              <Cardimages.Body title={item.title} desc={item.description} />
            </Cardimages>
          ))}
        </div>
        <div className="mt-2 px-32 py-20">
          <hr className="border-black" />
        </div>
      </div>
    </>
  );
}

export default PimpinanPpt;
