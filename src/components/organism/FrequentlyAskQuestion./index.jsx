import ClickToOpen from "@/components/molecules/ClickToOpen";
import React from "react";

function Faq() {
  return (
    <div>
      <div className="flex flex-col mx-11">
        <div className="flex py-6">
          <div className="lg:py-[30px]">
            <h1 className="text-yellow-400 font-bold hidden lg:block">FAQ</h1>
          </div>
          <div>
            <h1 className="text-[30px] font-bold text-green-800 hidden lg:block">
              Frequently Asked Question
            </h1>
          </div>
        </div>

        <ClickToOpen />
      </div>
    </div>
  );
}

export default Faq;
