import CardAngka from "@/components/atoms/card";
import Cardimages from "@/components/atoms/cardImages";
import Navbar from "@/components/organism/navbar";
import Footer from "@/components/organism/Footer";
import React from "react";

const data = [
  {
    id: 1,
    images:
      "https://ppt.fapet.ugm.ac.id/wp-content/uploads/sites/1909/2022/09/Sapi-perah-1.jpg",
    title: "Sapi Perah",
    desc: "Melihat pemeliharaan sapi perah dan tata cara pemerahannya",
  },
  {
    id: 2,
    images:
      "https://ppt.fapet.ugm.ac.id/wp-content/uploads/sites/1909/2022/09/Sapi-potong-1.jpg",
    title: "Aneka Ternak Potong",
    desc: "Edukasi mengenai berbagai jenis ternak potong seperti sapi, kambing, domba.",
  },
  {
    id: 3,
    images:
      "https://ppt.fapet.ugm.ac.id/wp-content/uploads/sites/1909/2022/09/Kuda.jpg",
    title: "Aneka Ternak Kesayangan",
    desc: "Edukasi mengenai berbagai jenis ternak kesayangan seperti kuda, kelinci, kucing",
  },
];

function Page6() {
  return (
    <>
      <div className="bg-white">
        <Navbar />
        <div
          className="bg-center bg-cover"
          style={{
            backgroundImage:
              "url(https://asset.kompas.com/crops/iY5rAuntBjyvrecRQtvd2P0INi0=/0x0:0x0/750x500/data/photo/buku/620f61540a890.jpg)",
          }}
        >
          <div className="flex flex-col justify-center items-center py-40">
            <h1 className="text-center text-white font-bold text-4xl">
              Visiting The Farm
              <br /> Fakultas Peternakan Universitas Gadjah Mada
            </h1>
            <p className="text-center text-white font-semibold py-5">
              Wisata Edukasi Ternak bagi PAUD, TK, KB, SD, SMP, SMA/SMK
            </p>
          </div>
        </div>
        <div className="bg-white">
          <div className="flex justify-center py-11">
            <h1 className="text-center font-bold text-green-800 text-3xl">
              Kegiatan Wisata Edukasi Ternak
            </h1>
          </div>
          <div className="flex flex-row justify-center gap-11 py-11">
            {data.map((item) => (
              <Cardimages key={item.id}>
                <Cardimages.Header images={item.images} />
                <Cardimages.Body title={item.title} desc={item.desc} />
              </Cardimages>
            ))}
          </div>
          <div className="flex flex-col gap-5">
            <CardAngka h1={"Rp35.000"} />
            <CardAngka h1={"Rp40.000"} p={"– Gantungan kunci khusus"} />
            <CardAngka
              h1={"Rp55.000"}
              p={"– Berkuda (naik kuda)"}
              h2={"– Gantungan kunci khusus"}
            />
            <CardAngka h1={"Rp40.000"} />
          </div>
          <div className="flex justify-center py-20">
            <img
              className="rounded-2xl"
              src="https://ppt.fapet.ugm.ac.id/wp-content/uploads/sites/1909/2023/11/poster-2.jpg"
              alt="prosedur"
              width="726px"
              height="1023px"
            />
          </div>
        </div>
        <Footer
          images={
            "https://ppt.fapet.ugm.ac.id/wp-content/uploads/sites/1909/2022/06/Logo-Website-e1682520930410.png"
          }
        />
      </div>
    </>
  );
}

export default Page6;
