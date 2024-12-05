import React from "react";
import Vision from "../../../../assets/About-Us/Vision.png";
import Second from "../../../../assets/About-Us/SecondImg.png";

const SecondSection = () => {
  return (
    <section className="flex justify-center">
      <div className="flex flex-col items-center mt-20">
        <img
          src={Vision}
          className="w-24 sm:w-32 mt-10 mb-4 transform transition-transform duration-300 hover:scale-105"
          alt="Vision"
        />

        <p className="text-xl sm:text-2xl md:text-3xl font-miniHeader_weight font-header_font_style mb-8 text-center">
          Connected, Multilingual World
        </p>

        <img
          src={Second}
          className="w-full sm:w-9/12 md:w-full lg:w-full mt-6 mb-4 "
          alt="Second"
        />
      </div>
    </section>
  );
};

export default SecondSection;
