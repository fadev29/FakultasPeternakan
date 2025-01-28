import Footer from "@/components/organism/Footer";
import Navbar from "@/components/organism/navbar";
import PimpinanPpt from "@/components/organism/PimpinanPPT";
import React from "react";

function Page3() {
  return (
    <>
      <div className="bg-white">
        <Navbar />

        <div className="bg-fixed bg-cover bg-center bg-[url('https://fapet.ugm.ac.id/wp-content/uploads/sites/32/2017/05/386871P2180057-1.jpg')]">
          <h1 className="text-white text-3xl font-bold py-36 text-center">
            Pimpinan Pusat Pengembangan Ternak <br /> Fakultas Peternakan UGM
          </h1>
        </div>
        <PimpinanPpt />
        <Footer
          images={
            "https://ppt.fapet.ugm.ac.id/wp-content/uploads/sites/1909/2022/06/Logo-Website-e1682520930410.png"
          }
        />
      </div>
    </>
  );
}

export default Page3;
