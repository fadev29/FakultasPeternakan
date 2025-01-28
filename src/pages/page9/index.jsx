import MagangPkl from "@/components/organism/Magang&Pkl";
import Navbar from "@/components/organism/navbar";
import Footer from "@/components/organism/Footer";
import React from "react";

function Page9() {
  return (
    <>
      <div className="bg-white">
        <Navbar />
        <MagangPkl />
        <Footer
          images={
            "https://ppt.fapet.ugm.ac.id/wp-content/uploads/sites/1909/2022/06/Logo-Website-e1682520930410.png"
          }
        />
      </div>
    </>
  );
}

export default Page9;
