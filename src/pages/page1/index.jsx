import React from "react";
import Alur from "@/components/organism/alurPPT";
import JumlahFasilitas from "@/components/organism/jumlahFasilitas";
import Navbar from "@/components/organism/navbar";
import Pemberitahuan from "@/components/organism/pemberitahuan";
import Welcome from "@/components/organism/welcome";
import VisitFram from "@/components/organism/VISITFARM";
import ProductPage from "@/components/organism/product image";
import Faq from "@/components/organism/FrequentlyAskQuestion.";
import Footer from "@/components/organism/Footer";
function Page1() {
  return (
    <>
      <div className="bg-white">
        <Navbar />
        <Welcome />
        <Pemberitahuan />
        <Alur />
        <JumlahFasilitas />
        <VisitFram />
        <ProductPage />
        <Faq />
        <Footer
          images={
            "https://ppt.fapet.ugm.ac.id/wp-content/uploads/sites/1909/2022/06/Logo-Website-e1682520930410.png"
          }
        />
      </div>
    </>
  );
}

export default Page1;
