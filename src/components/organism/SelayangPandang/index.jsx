import Product from "@/components/molecules/Product";
import React from "react";

function SelayangPandang() {
  return (
    <>
      <div className="py-3">
        <Product
          images={
            "https://upload.wikimedia.org/wikipedia/commons/0/0c/Cow_female_black_white.jpg"
          }
          h1={"Selayang Pandang"}
          p={
            "Pusat Pengembangan Ternak (PPT) merupakan bagian dari Fakultas Peternak UGM yang memiliki peran dalam pengelolaan dan pengembangan ternak untuk mendukung kegiatan Tri Dharma Perguruan Tinggi yang terdiri dari Pendidikan dan Pengajaran, Penelitian dan Pengembangan, serta Pengabdian Kepada Masyarakat. Bagian ini juga melakukan pengembangan usaha sehingga dapat dikelola secara mandiri, terlebih menghasilkan keuntungan (profit center)"
          }
          warna={"bg-white"}
          flex={"lg:flex-row-reverse"}
          textw={"text-black"}
          ukuran={"lg:w-full h-full"}
        />
      </div>
    </>
  );
}

export default SelayangPandang;
