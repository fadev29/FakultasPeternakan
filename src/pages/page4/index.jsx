import Navbar from "@/components/organism/navbar";
import TenagaPpt from "@/components/organism/tenagaPpt";
import React from "react";
import Footer from "@/components/organism/Footer";
function Page4() {
  return (
    <>
      <div className="bg-white">
        <Navbar />
        <div
          className="lg:bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/fapet.webp')",
          }}
        >
          <h1 className="text-white text-center font-bold text-4xl py-32">
            Tenaga Pusat Pengembangan Ternak
          </h1>
        </div>
        <TenagaPpt />
        <Footer
          images={
            "https://ppt.fapet.ugm.ac.id/wp-content/uploads/sites/1909/2022/06/Logo-Website-e1682520930410.png"
          }
        />
      </div>
    </>
  );
}

export default Page4;
