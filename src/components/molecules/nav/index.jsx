import React from "react";
import { IoMenu } from "react-icons/io5";
import DropDown from "../Dropdown";

function Navbr({ img, text1 }) {
  const menuOptions = [
    { label: "Selayang Pandang", href: "/page2" },
    { label: "Pimpinan PPT", href: "/page3" },
    { label: "Tenaga PPT", href: "/page4" },
  ];
  const menuKunjungan = [{ label: "Edukasi Wisata", href: "/page6" }];
  const menuProduct = [{ label: "cage-free", href: "/page8" }];
  const menuMagang = [
    { label: "Magang dan pelatihan", href: "/page9" },
    { label: "Sekolah berkuda", href: "/page9" },
  ];

  return (
    <nav className="bg-green-900 flex py-[20px] lg:py-[20px] mx-auto justify-between items-center top-0">
      <div className="left px-5 lg:px-20">
        <div className="img">
          <img className="lg:w-[300px] w-[200px]" src={img} alt="logo-fapet" />
        </div>
      </div>
      <div className="flex lg:pr-32 gap-10">
        <DropDown text="Tentang Kami" options={menuOptions} />
        <a
          href="/page5"
          className="text-white hover:text-yellow-400 font-bold text-[15px] hidden lg:block"
        >
          {text1}
        </a>

        <DropDown text="Kunjungan" options={menuKunjungan} />
        <DropDown text="Produk" options={menuProduct} />
        <DropDown text="Magang dan Pelatihan" options={menuMagang} />
        <a href="#" className="block lg:hidden pr-11">
          <IoMenu className="text-white" />
        </a>
      </div>
    </nav>
  );
}

export default Navbr;
