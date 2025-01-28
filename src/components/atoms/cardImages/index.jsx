import React from "react";
import Link from "next/link";
import Image from "next/image";

function Cardimages({ children }) {
  return (
    <>
      <div className="rounded-lg bg-aigen shadow-xl p-3 sm:p-4">
        <div className="w-full max-w-xs bg-white rounded-lg mx-auto">
          {children}
        </div>
      </div>
    </>
  );
}

function Header({ images }) {
  return (
    <Link href="#">
      <Image
        src={images || "/default-image.jpg"}
        alt="cardimage"
        className="p-4 rounded-t-lg w-full h-auto"
        width={377}
        height={377}
      />
    </Link>
  );
}

function Body({ title, desc }) {
  return (
    <div className="px-4 sm:px-5 pb-5">
      <h3 className="text-[16px] sm:text-[18px] font-bold text-slate-900 text-center">
        {title}
      </h3>
      <p className="text-center text-sm sm:text-base">{desc}</p>
    </div>
  );
}

Cardimages.Header = Header;
Cardimages.Body = Body;

export default Cardimages;
