import React from "react";

function JumlahFasilitas() {
  return (
    <section>
      <div className="lg:py-[100px] py-[50px]">
        <div className="bg-fixed bg-cover bg-center bg-[url('https://fapet.ugm.ac.id/wp-content/uploads/sites/32/2017/05/386871P2180057-1.jpg')] h-screen">
          <div className="flex justify-center items-center lg:flex-col lg:py-[120px] py-[30px]">
            <div className="">
              <h1 className="font-bold text-white lg:text-[50px] text-[30px]">
                PPT Dalam Rangka
              </h1>
            </div>
          </div>
          <div className="flex justify-center items-center lg:pb-[50px]">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:px-4 py-4">
                <h1 className="font-bold lg:text-[60px] text-yellow-400 text-center text-2xl">
                  2.5
                </h1>
                <div className="lg:px-4 lg:py-2">
                  <p className="font-semibold text-white text-center">
                    Hektar Lahan
                  </p>
                </div>
              </div>
              <div className="lg:px-4 py-4">
                <h1 className="font-bold lg:text-[60px] text-yellow-400 text-center text-2xl">
                  7,000
                </h1>
                <div className="lg:py-2">
                  <p class="font-semibold text-white text-center">
                    Ternak Unggas
                  </p>
                </div>
              </div>
              <div className="lg:px-4 py-4">
                <h1 class="font-bold lg:text-[60px] text-yellow-400 text-center text-2xl">
                  76
                </h1>
                <div className="lg:py-2">
                  <p className="font-semibold text-white text-center">
                    Ternak Perah
                  </p>
                </div>
              </div>
              <div className="lg:px-4 py-4">
                <h1 className="font-bold lg:text-[60px] text-yellow-400 text-center text-2xl">
                  150
                </h1>
                <div className="lg:py-2">
                  <p className="font-semibold text-white text-center">
                    Ternak Ruminansia
                  </p>
                </div>
              </div>
              <div className="lg:px-4 py-4">
                <h1 className="font-bold lg:text-[60px] text-yellow-400 text-center text-2xl">
                  40
                </h1>
                <div className="lg:py-2">
                  <p className="font-semibold text-white text-center">
                    Fasilitas Kandang
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JumlahFasilitas;
