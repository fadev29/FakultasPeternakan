import Button from "@/components/atoms/Button";
import Cardimages from "@/components/atoms/cardImages";
import Card from "@/components/atoms/cardx";
import Footer from "@/components/organism/Footer";
import React from "react";

const dataPetelur = [
  {
    id: 1,
    images:
      "https://ppt.fapet.ugm.ac.id/wp-content/uploads/sites/1909/2025/01/WhatsApp-Image-2025-01-15-at-08.23.27.jpeg",
    title: "FapetEgg Telur Sejahtera",
  },
  {
    id: 2,
    images:
      "https://ppt.fapet.ugm.ac.id/wp-content/uploads/sites/1909/2023/08/cage-free-ugm.jpeg",
    title: "International Training",
  },
];

function Page8() {
  return (
    <>
      <div className="bg-white">
        <div
          className="bg-center bg-cover"
          style={{
            backgroundImage:
              "url(https://asset.kompas.com/crops/iY5rAuntBjyvrecRQtvd2P0INi0=/0x0:0x0/750x500/data/photo/buku/620f61540a890.jpg)",
          }}
        >
          <div className="flex justify-center items-center min-h-[60vh]">
            <h1 className="text-white font-bold text-center text-4xl md:text-5xl py-10">
              Cage-free <br /> Innovation and Welfare Hub
            </h1>
          </div>
        </div>
        <div className="lg:mt-[-100px] px-4">
          <div className="flex flex-wrap justify-center gap-5">
            <Card
              h1="Research"
              text="Pusat Pengembangan Ternak berupaya menfasilitasi akademisi untuk melakukan penelitian"
              image="/images/genetik.png"
              bg="bg-green-800"
              warna="bg-white"
            />
            <Card
              h1="Production"
              text="Berbagai produk peternakan telah berhasil kami kembangkan dan kami pasarkan"
              image="/images/user.png"
              bg="bg-green-800"
              warna="bg-white"
            />
            <Card
              h1="Research"
              text="Pusat Pengembangan Ternak berupaya menfasilitasi akademisi untuk melakukan penelitian"
              image="/images/image.png"
              bg="bg-white"
              warna="bg-green-800"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-10 px-5 py-60 md:px-20">
          <div className="flex-1">
            <h1 className="text-green-800 font-bold text-xl md:text-2xl mb-4">
              We Care About Where Our Eggs Come From
            </h1>
            <p className="text-gray-700">
              International Training Center (ITC) Cage-free Innovation and
              Welfare Hub adalah pusat pelatihan pengelolaan ayam petelur bebas
              kandang yang dibangun oleh Fakultas Peternakan UGM bekerja sama
              dengan Global Food Partners dan AERES University of Applied
              Sciences di Belanda.
            </p>
            <img
              src="https://ppt.fapet.ugm.ac.id/wp-content/uploads/sites/1909/2023/08/Cage-free.png"
              alt="kandang petelur"
              className="mt-5 rounded-lg w-full h-auto object-cover"
            />
          </div>
          <div className="flex-1">
            <img
              src="https://ppt.fapet.ugm.ac.id/wp-content/uploads/sites/1909/2023/08/Training-cage-free-gfp.jpeg"
              alt="kandang petelur"
              className="rounded-lg w-full h-auto object-cover mb-5"
            />
            <h1 className="text-green-800 font-bold text-xl md:text-2xl mb-4">
              Empowering Sustainable Farming Practices
            </h1>
            <p className="text-gray-700">
              Fasilitas ini dibangun untuk memfasilitasi peternak ayam petelur,
              akademisi, dan mahasiswa ilmu peternakan untuk berlatih sistem
              pertanian cage-free.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-5 py-10 px-4">
          <h1 className="text-black font-bold text-xl md:text-2xl text-center">
            The cage-free eggs that we serve come from chickens that can
          </h1>
          <div className="flex flex-wrap justify-center gap-4">
            <img
              src="https://ppt.fapet.ugm.ac.id/wp-content/uploads/sites/1909/2023/08/Express1.svg"
              alt="ayam"
              className="w-32 md:w-48"
            />
            <img
              src="https://ppt.fapet.ugm.ac.id/wp-content/uploads/sites/1909/2023/08/Express2.svg"
              alt="ayam"
              className="w-32 md:w-48"
            />
            <img
              src="https://ppt.fapet.ugm.ac.id/wp-content/uploads/sites/1909/2023/08/Express3.svg"
              alt="ayam"
              className="w-32 md:w-48"
            />
          </div>
        </div>
        <div className="flex flex-col items-center py-10">
          <h1 className="text-green-800 font-bold text-xl md:text-3xl mb-5">
            Our Activity
          </h1>
          <iframe
            className="rounded-lg w-full max-w-4xl aspect-video"
            src="https://www.youtube.com/embed/BPo-STM68FI"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="py-10">
          <h1 className="text-green-800 font-bold text-2xl text-center mb-5">
            Our Product
          </h1>
          <div className="flex flex-wrap justify-center gap-6 px-5">
            {dataPetelur.map((item) => (
              <Cardimages key={item.id}>
                <Cardimages.Header images={item.images} />
                <Cardimages.Body title={item.title} />
              </Cardimages>
            ))}
          </div>
        </div>
        <Footer images="https://ppt.fapet.ugm.ac.id/wp-content/uploads/sites/1909/2022/06/Logo-Website-e1682520930410.png" />
      </div>
    </>
  );
}

export default Page8;
