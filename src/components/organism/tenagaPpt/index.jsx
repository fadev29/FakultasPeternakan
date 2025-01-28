import Cardimages from "@/components/atoms/cardImages";
import React from "react";
const dataUnitSapi = [
  {
    id: 1,
    images:
      "https://ppt.fapet.ugm.ac.id/wp-content/uploads/sites/1909/2023/06/Sapi-Perah-R.-Bambang-Priyono-1536x1536.jpg",
    title: "R. Bambang Priyono",
  },
  {
    id: 2,
    images:
      "https://ppt.fapet.ugm.ac.id/wp-content/uploads/sites/1909/2023/06/Sapi-Perah-Siswanta-1536x1536.jpg",
    title: "Siswanto",
  },
  {
    id: 3,
    images:
      "https://ppt.fapet.ugm.ac.id/wp-content/uploads/sites/1909/2023/06/Sapi-Perah-Watono-1536x1536.jpg",
    title: "Watono",
  },
];
const dataUnitKambing = [
  {
    id: 1,
    images: "/images/pendiam.png",
    title: "Harsana",
  },
  {
    id: 2,
    images: "/images/naufal.png",
    title: "Naufal Nur Cahyo",
  },
];
const dataUnitSKDPotong = [
  {
    id: 1,
    images:
      "https://ppt.fapet.ugm.ac.id/wp-content/uploads/sites/1909/2023/06/POTONG-Mulyadi-1536x1536.jpg",
    title: "Mulyadi",
  },
  {
    id: 2,
    images:
      "https://ppt.fapet.ugm.ac.id/wp-content/uploads/sites/1909/2023/06/POTONG-Suryanto-1536x1536.jpg",
    title: "Suryanto",
  },
  {
    id: 3,
    images:
      "https://ppt.fapet.ugm.ac.id/wp-content/uploads/sites/1909/2023/06/POTONG-Dedi-Nuryanto-1536x1536.jpg",
    title: "Dedi Nuryanto",
  },
  {
    id: 4,
    images:
      "https://ppt.fapet.ugm.ac.id/wp-content/uploads/sites/1909/2023/06/POTONG-RM-Priyo-Santoso-1536x1536.jpg",
    title: "RM Priyo Santoso",
  },
];
const dataUnitKuda = [
  {
    id: 1,
    images:
      "https://ppt.fapet.ugm.ac.id/wp-content/uploads/sites/1909/2023/06/POTONG-Supriyanto-1536x1536.jpg",
    title: "Supriyanto",
  },
  {
    id: 2,
    images:
      "https://ppt.fapet.ugm.ac.id/wp-content/uploads/sites/1909/2023/06/POTONG-Daffa-Alif-Dhiyaulhaq-1536x1536.jpg",
    title: "Daffa Alif Dhiyaulhaq",
  },
];
const dataUnitAyam = [
  {
    id: 1,
    images:
      "https://ppt.fapet.ugm.ac.id/wp-content/uploads/sites/1909/2023/06/Melvin.jpeg",
    title: "Melfin Zaenal Asyiqi, S.Pt",
  },
  {
    id: 2,
    images:
      "https://ppt.fapet.ugm.ac.id/wp-content/uploads/sites/1909/2023/06/CH-Rizal-Febri-Prasetya-1536x1536.jpg",
    title: "Rizal Febri Prasetya, S.Pt",
  },
];
const dataUnitNutrisi = [
  {
    id: 1,
    images:
      "https://ppt.fapet.ugm.ac.id/wp-content/uploads/sites/1909/2023/06/Muyanto-NMT.jpeg",
    title: "Muryanto",
  },
  {
    id: 2,
    images:
      "https://ppt.fapet.ugm.ac.id/wp-content/uploads/sites/1909/2023/06/Dito-Dwi.jpeg",
    title: "Dito Dwi Atmaja PH",
  },
  {
    id: 3,
    images:
      "https://ppt.fapet.ugm.ac.id/wp-content/uploads/sites/1909/2023/06/NMT-Hermanto-1536x1536.jpg",
    title: "Hermanto",
  },
];
const dataUnitLahanHijau = [
  {
    id: 1,
    images: "/images/agus.png",
    title: "Agus Budi Pranowo",
  },
  {
    id: 2,
    images: "/images/anang.png",
    title: "Anang Kurniawan",
  },
];
const dataUnitPengolahanSS = [
  {
    id: 1,
    images:
      "https://ppt.fapet.ugm.ac.id/wp-content/uploads/sites/1909/2023/09/4-1536x1536.jpg",
    title: "Mia Agusthia, S.Pt",
  },
  {
    id: 2,
    images:
      "https://ppt.fapet.ugm.ac.id/wp-content/uploads/sites/1909/2023/06/Yuniary-Aranda-S.Pt_.jpeg",
    title: "Yuniary Aranda, S.Pt",
  },
];
function TenagaPpt() {
  return (
    <>
      <div className="bg-white py-20">
        <div className="flex flex-col">
          <h1 className="text-green-800 font-bold text-center text-3xl py-11">
            Divisi PPT
          </h1>
        </div>
        <div className="mt-2 px-32">
          <hr className="border-t-4 border-b-2 border-black" />
        </div>
        <h1 className="text-green-800 font-bold text-center text-2xl py-11">
          Sapi Perah
        </h1>
        <div className="flex flex-row justify-center">
          {dataUnitSapi.map((item) => (
            <Cardimages key={item.id}>
              <Cardimages.Header images={item.images} />
              <Cardimages.Body title={item.title} />
            </Cardimages>
          ))}
        </div>
        <h1 className="text-green-800 font-bold text-center text-2xl py-11">
          Kambing Perah
        </h1>
        <div className="flex flex-row justify-center py-5">
          {dataUnitKambing.map((item) => (
            <Cardimages key={item.id}>
              <Cardimages.Header images={item.images} />
              <Cardimages.Body title={item.title} />
            </Cardimages>
          ))}
        </div>
        <div className="mt-2 px-56">
          <hr className="border-t-4 border-b-2 border-black" />
        </div>
        <h1 className="text-green-800 font-bold text-center text-2xl py-11">
          Unit Closed House
        </h1>
        <div className="mt-2 px-56">
          <hr className="border-t-4 border-b-2 border-black" />
        </div>
        <div className="flex flex-row justify-center py-5">
          {dataUnitAyam.map((item) => (
            <Cardimages key={item.id}>
              <Cardimages.Header images={item.images} />
              <Cardimages.Body title={item.title} />
            </Cardimages>
          ))}
        </div>
        <div className="mt-2 px-56">
          <hr className="border-t-4 border-b-2 border-black" />
        </div>
        <h1 className="text-green-800 font-bold text-center text-2xl py-11">
          Unit Nutrisi Makanan Ternak
        </h1>
        <div className="mt-2 px-56">
          <hr className="border-t-4 border-b-2 border-black" />
        </div>
        <div className="flex flex-row justify-center py-5">
          {dataUnitNutrisi.map((item) => (
            <Cardimages key={item.id}>
              <Cardimages.Header images={item.images} />
              <Cardimages.Body title={item.title} />
            </Cardimages>
          ))}
        </div>
        <div className="mt-2 px-56">
          <hr className="border-t-4 border-b-2 border-black" />
        </div>
        <h1 className="text-green-800 font-bold text-center text-2xl py-11">
          Unit Lahan Hijauan
        </h1>
        <div className="mt-2 px-56">
          <hr className="border-t-4 border-b-2 border-black" />
        </div>
        <div className="flex flex-row justify-center py-5">
          {dataUnitLahanHijau.map((item) => (
            <Cardimages key={item.id}>
              <Cardimages.Header images={item.images} />
              <Cardimages.Body title={item.title} />
            </Cardimages>
          ))}
        </div>
        <div className="mt-2 px-56">
          <hr className="border-t-4 border-b-2 border-black" />
        </div>
        <h1 className="text-green-800 font-bold text-center text-2xl py-11">
          Unit Pengolahan Susu
        </h1>
        <div className="mt-2 px-56">
          <hr className="border-t-4 border-b-2 border-black" />
        </div>
        <div className="py-4">
          <h1 className="text-green-800 font-bold text-center text-2xl">
            Koordinator
          </h1>
          <h1 className="text-green-800 font-bold text-center text-xl">
            Anggota
          </h1>
        </div>

        <div className="flex flex-row justify-center py-5">
          {dataUnitPengolahanSS.map((item) => (
            <Cardimages key={item.id}>
              <Cardimages.Header images={item.images} />
              <Cardimages.Body title={item.title} />
            </Cardimages>
          ))}
        </div>
      </div>
    </>
  );
}

export default TenagaPpt;
