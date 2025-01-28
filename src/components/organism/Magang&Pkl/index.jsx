import Card from "@/components/atoms/cardx";
import { MdOutlineRemoveFromQueue } from "react-icons/md";
import React from "react";
import CardPanjang from "@/components/atoms/cardy";
import Button from "@/components/atoms/Button";

function MagangPkl() {
  return (
    <>
      <div
        className="lg:bg-cover bg-center"
        style={{
          backgroundImage: "url(/images/senja.png)",
        }}
      >
        <div className="">
          <h1 className="text-white text-4xl text-center font-bold py-40">
            Magang/PKL dan Pelatihan
          </h1>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-white">
        <div className="py-11">
          <h1 className="text-green-800 font-bold text-center text-2xl py-5">
            Program "Skill Development Holiday Program"
          </h1>
          <p className="text-black text-center mx-5">
            Pusat Pengembangan Ternak Fakultas Peternakan UGM membuka kesempatan
            bagi para mahasiswa untuk belajar dan berkontribusi dalam dunia
            peternakan modern selama libur semester. Program magang ini
            dirancang dengan baik untuk memberikan pengalaman praktis dan
            mendalam dalam berbagai aspek peternakan, mulai dari pemeliharaan
            hewan, manajemen pakan, kesehatan ternak, hingga teknik pengolahan
            produk peternakan. Program ini dilaksanbakan kurang lebih 1 bulan.
          </p>
        </div>
        <div className="flex flex-row gap-10 pt-11">
          <CardPanjang
            h1="Form"
            p="Unduh Form Peminjaman Fasilitas"
            warna="bg-white"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="lg:w-8 lg:h-8 w-4 h-4 text-green-800"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                />
              </svg>
            }
            iconw="text-green-800"
          />
          <CardPanjang
            h1="Upload Form"
            p="Upload Form yang telah diisi"
            warna="bg-white"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="lg:w-8 lg:h-8 w-4 h-4 text-green-800"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m6.75 12-3-3m0 0-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                />
              </svg>
            }
            iconw="text-green-800"
          />
        </div>
        <div className="">
          <h1 className="font-semibold text-black text-center">
            Contact Person: 085173163539 (Admin)
          </h1>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-white">
        <div className="py-11">
          <h1 className="text-green-800 font-bold text-center text-2xl py-5">
            Magang SMA/SMK/Sederajat
          </h1>
          <p className="text-black text-center mx-5">
            Pusat Pengembangan Ternak Fakultas Peternakan UGM membuka kesempatan
            bagi para siswa SMK/SMA/Sederajat untuk belajar dan berkontribusi
            dalam dunia peternakan modern. Program magang ini dirancang dengan
            baik untuk memberikan pengalaman praktis dan mendalam dalam berbagai
            aspek peternakan, mulai dari pemeliharaan hewan, manajemen pakan,
            kesehatan ternak, hingga teknik pengolahan produk peternakan. Kami
            berkomitmen untuk menyediakan lingkungan yang mendukung dan
            pendampingan yang profesional selama masa magang.
          </p>
        </div>
        <div className="flex flex-row gap-10 pt-11">
          <CardPanjang
            h1="Form"
            p="Unduh Form Peminjaman Fasilitas"
            warna="bg-white"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="lg:w-8 lg:h-8 w-4 h-4 text-green-800"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                />
              </svg>
            }
            iconw="text-green-800"
          />
          <CardPanjang
            h1="Upload Form"
            p="Upload Form yang telah diisi"
            warna="bg-white"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="lg:w-8 lg:h-8 w-4 h-4 text-green-800"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m6.75 12-3-3m0 0-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                />
              </svg>
            }
            iconw="text-green-800"
          />
        </div>
        <div className="">
          <h1 className="font-semibold text-black text-center">
            Contact Person: 085173163539 (Admin)
          </h1>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-white">
        <div className="py-11">
          <h1 className="text-green-800 font-bold text-center text-2xl py-5">
            Program Magang/PKL Institusi
          </h1>
          <p className="text-black text-center mx-5">
            Pusat Pengembangan Ternak Fakultas Peternakan UGM membuka kesempatan
            bagi para mahasiswa untuk belajar dan berkontribusi dalam dunia
            peternakan modern. Program magang ini dirancang dengan baik untuk
            memberikan pengalaman praktis dan mendalam dalam berbagai aspek
            peternakan, mulai dari pemeliharaan hewan, manajemen pakan,
            kesehatan ternak, hingga teknik pengolahan produk peternakan. Kami
            berkomitmen untuk menyediakan lingkungan yang mendukung dan
            pendampingan yang profesional selama masa magang.
          </p>
        </div>
        <div className="flex flex-row gap-10 pt-11">
          <CardPanjang
            h1="Form"
            p="Unduh Form Peminjaman Fasilitas"
            warna="bg-white"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="lg:w-8 lg:h-8 w-4 h-4 text-green-800"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                />
              </svg>
            }
            iconw="text-green-800"
          />
          <CardPanjang
            h1="Upload Form"
            p="Upload Form yang telah diisi"
            warna="bg-white"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="lg:w-8 lg:h-8 w-4 h-4 text-green-800"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m6.75 12-3-3m0 0-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                />
              </svg>
            }
            iconw="text-green-800"
          />
        </div>
        <div className="">
          <h1 className="font-semibold text-black text-center">
            Contact Person: 085173163539 (Admin)
          </h1>
        </div>
      </div>
      <div className="flex flex-col bg-green-800 py-20">
        <div className="py-20">
          <h1 className="text-white font-bold text-2xl text-center">
            Program Pelatihan
          </h1>
          <p className="text-white font-semibold text-center">
            (Untuk Masyarakat)
          </p>
        </div>
        <div className="flex flex-row justify-center gap-11">
          <div
            className="shadow-lg rounded-lg"
            style={{
              backgroundImage:
                "url(https://akcdn.detik.net.id/community/media/visual/2021/07/19/sapi-limosin.jpeg?w=700&q=90)",
              width: "400px",
              height: "300px",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="py-36">
              <h1 className="text-green-700 text-center font-bold text-3xl">
                Budidaya Ternak
              </h1>
              <p className="text-white text-center mx-5 font-semibold">
                meliputi, Sapi Potong, Sapi Perah, Domba dan Kambing, Broiler
                Closed House
              </p>
              <div className="flex justify-center">
                <Button warna={"bg-green-800 w-[150px] "}>Kontak Kami</Button>
              </div>
            </div>
          </div>
          <div
            className="shadow-lg rounded-lg"
            style={{
              backgroundImage:
                "url(https://i0.wp.com/www.poultryindonesia.com/wp-content/uploads/2021/10/82-listagem-blogminiaturacuidadosfabricacaoracao.jpg?fit=586%2C366&ssl=1)",
              width: "400px",
              height: "300px",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="py-36">
              <h1 className="text-green-700 text-center font-bold text-3xl">
                Produksi Pakan
              </h1>
              <div className="flex justify-center">
                <Button warna={"bg-green-800 w-[150px] "}>Kontak Kami</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center gap-11 py-11">
          <div
            className="shadow-lg rounded-lg"
            style={{
              backgroundImage:
                "url(https://cdn.rri.co.id/berita/Takengon/o/1715444784607-www.orami.co.id/9d4gqzwjrwamyw8.jpeg)",
              width: "400px",
              height: "300px",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="py-36">
              <h1 className="text-green-700 text-center font-bold text-3xl">
                Pengolahan Pupuk Kompos
              </h1>
              <div className="flex justify-center">
                <Button warna={"bg-green-800 w-[150px] "}>Kontak Kami</Button>
              </div>
            </div>
          </div>
          <div
            className="shadow-lg rounded-lg"
            style={{
              backgroundImage:
                "url(https://cdn.hellosehat.com/wp-content/uploads/2021/04/892a2a8f-shutterstock_520248940.jpg?w=1200&q=100)",
              width: "400px",
              height: "300px",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="py-36">
              <h1 className="text-green-700 text-center font-bold text-3xl ">
                Pengolahan Produk Susu
              </h1>
              <div className="flex justify-center">
                <Button warna={"bg-green-800 w-[150px] "}>Kontak Kami</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-green-900 pt-20"></div>
      </div>
    </>
  );
}

export default MagangPkl;
