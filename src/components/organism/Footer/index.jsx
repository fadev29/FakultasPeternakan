import React from "react";

function Footer({ images }) {
  return (
    <>
      <div className="bg-green-800 text-white py-10">
        <div className=" container mx-auto flex flex-col lg:flex-row justify-between items-start gap-10 px-10">
          <div className="flex flex-col items-center lg:items-start">
            <img src={images} alt="UGM" width="84px" height="94px" />
            <h1 className="text-white font-semibold mt-4">
              Pusat Pengembangan Ternak
            </h1>
            <p className="text-center lg:text-left mt-2 leading-6">
              Fakultas Peternakan, Universitas Gadjah Mada Jl. Fauna No. 3<br />
              Bulaksumur, Yogyakarta 55281 Telp: (0274) 513363 | WA (+62)
              <br />
              85173163539 | Email: ppt.fapet@ugm.ac.id
              <br />
            </p>
          </div>
          <div className="flex flex-col">
            <h2 className="text-white font-semibold text-lg mb-2">
              Helpful Link
            </h2>
            <ul className="space-y-2">
              <li className="">
                <a href="#" className="hover:underline">
                  Pimpinan PPT
                </a>
              </li>
              <li className="">
                <a href="#" className="hover:underline">
                  Tenaga PPT
                </a>
              </li>
              <li className="">
                <a href="#" className="hover:underline">
                  Fasilitas Riset
                </a>
              </li>
              <li className="">
                <a href="#" className="hover:underline">
                  Kunjungan PPT
                </a>
              </li>
              <li className="">
                <a href="#" className="hover:underline">
                  Product PPT
                </a>
              </li>
              <li className="">
                <a href="#" className="hover:underline">
                  Virtual EduWisata
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h2 className="font-semibold text-lg mb-4">Kontak Kami:</h2>
            <a
              href="https://wa.me/6285173163539"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:underline"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                className="w-6 h-6"
              />
              Whatsapp
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center bg-green-900">
        <footer className="text-white text-[15px] py-2">
          &copy;2025 Pusat Pengembangan Ternak Fakultas Peternakan Universitas
          Gadjah Mada
        </footer>
      </div>
    </>
  );
}

export default Footer;
