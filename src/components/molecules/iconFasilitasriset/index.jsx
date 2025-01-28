import React from "react";

function Incon({ h1, p, icon }) {
  return (
    <>
      <div className="flex">
        <div className="flex flex-row gap-3">
          {icon}
          <div className="flex flex-col">
            <h1 className="text-green-800 font-bold text-start text-2xl">
              {h1}
            </h1>
            <p className="text-black text-start">{p}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Incon;
