import React from "react";

function Navbar() {
  return (
    <nav className="bg-green-900 flex py-[20px] lg:py-[20px] mx-auto justify-between items-center top-0">
      <div className="left px-5 lg:px-20">
        <div className="img">
          <img
            className="lg:w-[300px] w-[200px]"
            src="https://ppt.fapet.ugm.ac.id/wp-content/uploads/sites/1909/2020/06/Logo-PPT.svg"
            alt="logo-fapet"
          />
        </div>
      </div>
      <div className="flex lg:pr-32 gap-10">
        <a
          href="#"
          className="text-white hover:text-yellow-300 font-bold hidden lg:block"
        >
          TENTANG KAMI
        </a>
        <a
          href="#"
          className="text-white hover:text-yellow-300 font-bold hidden lg:block"
        >
          FASILITAS KAMI
        </a>
        <a
          href="#"
          className="text-white hover:text-yellow-300 font-bold hidden lg:block"
        >
          KUNJUNGAN
        </a>
        <a
          href="#"
          className="text-white hover:text-yellow-300 font-bold hidden lg:block"
        >
          PRODUK
        </a>
        <a
          href="#"
          className="text-white hover:text-yellow-300 font-bold hidden lg:block"
        >
          MAGANG DAN PELATIHAN
        </a>
        <a href="#" className="block lg:hidden pr-11">
          <span className="material-symbols-outlined text-white"> menu </span>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
