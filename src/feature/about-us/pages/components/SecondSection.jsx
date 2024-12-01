import React from "react";
import Vision from "../../../../assets/About-Us/Vision.png";
import Second from "../../../../assets/About-Us/SecondImg.png";

const SecondSection = () => {
  return (
    <section className=" flex">
      <div className="flex flex-col items-center mt-20">
        {" "}
        <img src={Vision} className="size-[12%] mt-10 mb-4 mt-20" alt="" />
        <p className="text-3xl font-miniHeader_weight font-header_font_style mb-8">
          {" "}
          Connected, Multilingual World
        </p>
        <img src={Second} className="mt-10 mb-4 mt-6 " alt="" />
      </div>
    </section>
  );
};

export default SecondSection;
