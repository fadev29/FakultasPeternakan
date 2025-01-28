import React from "react";

function ClickToOpen() {
  return (
    <>
      <div className="py-5">
        <div className="collapse collapse-arrow bg-white shadow-lg  h-[100px]">
          <input type="radio" name="my-accordion" id="item1" defaultChecked />
          <label
            htmlFor="item1"
            className="collapse-title text-xl font-medium text-black"
          >
            Apakah Peneliti non UGM bisa melakukan penelitian di PPT?
          </label>
          <div className="collapse-content">
            <p>
              Ya bisa, silahkan menghubungi kepala Pusat Pengembangan Ternak
              untuk koordinasi lebih lanjut..
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-white shadow-lg  h-[100px]">
          <input type="radio" name="my-accordion" id="item2" />
          <label
            htmlFor="item2"
            className="collapse-title text-xl font-medium text-black"
          >
            Bagaimana prosedur peminjaman fasilitas PPT?
          </label>
          <div className="collapse-content">
            <p>
              Dapat dilihat pada website resmi Pusat Pengembangan Ternak
              Fakultas Peternakan UGM
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-white shadow-lg  h-[100px]">
          <input type="radio" name="my-accordion" id="item3" />
          <label
            htmlFor="item3"
            className="collapse-title text-xl font-medium text-black"
          >
            Bagaimana membeli produk susu dari PPT?
          </label>
          <div className="collapse-content">
            <p>
              Dapat dilihat pada menu “Produk”, kemudian silahkan pilih produk
              yang akan dibeli kemudian dilanjut dengan order melalui WhatsApp
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ClickToOpen;
