import Navbar from "@/components/organism/navbar";
import Incon from "@/components/molecules/iconFasilitasriset";
import Footer from "@/components/organism/Footer";
import { FaUserCog } from "react-icons/fa";
import { FaBoxArchive } from "react-icons/fa6";
import { LiaUsersSolid } from "react-icons/lia";
import React from "react";

function Page5() {
  return (
    <>
      <div className="bg-white">
        <Navbar />
        <div className="bg-green-900 pt-20 flex flex-row justify-between px-40 ">
          <div className="flex flex-col justify-center">
            <h1 className="text-white text-4xl">Fasilitas Riset</h1>
          </div>

          <img
            src="https://ppt.fapet.ugm.ac.id/wp-content/uploads/sites/1909/2023/03/Foto.png"
            alt="perempuanugm"
            width="372px"
            height="388px"
          />
        </div>
        <div className="flex flex-row px-40 py-11 gap-5">
          <Incon
            h1={"Praktikum"}
            p={
              "Fasilitas PPT dapat digunakan untuk kegiatan Praktikum bagi Mahasiswa"
            }
            icon={<LiaUsersSolid className="text-green-800 text-7xl" />}
          />
          <Incon
            h1={"Penelitian"}
            p={"Fasilitasi penelitian menjadi aspek prioritas dalam PPT"}
            icon={<FaBoxArchive className="text-green-800 text-7xl" />}
          />
          <Incon
            h1={"Magang"}
            p={
              "Kami terbuka kepada seluruh akademisi untuk melakukan kegiatan magang"
            }
            icon={<FaUserCog className="text-green-800 text-7xl" />}
          />
        </div>
        <div className="mt-2 px-56">
          <hr className="border-t-4 border-b-2 border-black" />
        </div>
        <div className=" py-20">
          <div className="flex justify-center py-5 bg-green-800">
            <h1 className="text-center text-white text-4xl">Ternak Unggas</h1>
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

export default Page5;
