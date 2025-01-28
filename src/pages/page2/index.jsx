import InfoPPT from "@/components/organism/infoPPT";
import MaknaLogo from "@/components/organism/MaknaLogo";
import MapPpt from "@/components/organism/MapPpt";
import Navbar from "@/components/organism/navbar";
import SelayangPandang from "@/components/organism/SelayangPandang";
import Telusuri from "@/components/organism/TelusuriTetangKami";
import VisiMisi from "@/components/organism/Visimisi";
import Footer from "@/components/organism/Footer";
import React from "react";

function Page2() {
  return (
    <>
      <div className="bg-white">
        <Navbar />
        <InfoPPT />
        <SelayangPandang />
        <VisiMisi />
        <MapPpt />
        <MaknaLogo />
        <Telusuri />
        <Footer
          images={
            "https://ppt.fapet.ugm.ac.id/wp-content/uploads/sites/1909/2022/06/Logo-Website-e1682520930410.png"
          }
        />
      </div>
    </>
  );
}

export default Page2;
