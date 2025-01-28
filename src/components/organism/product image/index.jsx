import Button from "@/components/atoms/Button";
import Product from "@/components/molecules/Product";
import React from "react";

function ProductPage() {
  return (
    <>
      <div className="">
        <Product
          images={
            "https://ppt.fapet.ugm.ac.id/wp-content/uploads/sites/1909/2023/08/FapetMilk.jpeg"
          }
          h1={"Produk Kami"}
          p={
            "Susu merupakan salah satu minuman yang umum dikonsumsi oleh setiap orang di segala usia. Susu mengandung beragam nutrisi penting yang mampu menjaga organ tubuh tetap berfungsi dengan baik dan melindungi tubuh dari serangan penyakit."
          }
          butto={"Lihat Product Kami"}
          warna={"bg-yellow-400"}
          flex={"lg:flex-row"}
          textw={"text-black"}
        />
      </div>
      <div className="bg-yellow-400">
        <Product
          images={
            "https://ppt.fapet.ugm.ac.id/wp-content/uploads/sites/1909/2023/04/Ayam-Broiler2.jpeg"
          }
          h1={"Magang dan Pelatihan"}
          p={
            "Pusat Pengembangan Ternak Fakultas Peternakan UGM membuka kesempatan bagi para siswa atau mahasiswa untuk belajar dan berkontribusi dalam dunia peternakan modern. Kami berkomitmen untuk menyediakan lingkungan yang mendukung dan pendampingan yang profesional selama masa magang."
          }
          butto={"Lihat Product Kami"}
          warna={"bg-green-800"}
          flex={"lg:flex-row-reverse"}
          textw={"text-black"}
          ukuran={"lg:w-full w-[50px]"}
        />
      </div>
    </>
  );
}

export default ProductPage;
