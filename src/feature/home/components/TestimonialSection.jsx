import React from "react";
import RatingStar from "./RatingStar";

const TestimonialSection = ({ data }) => {
  return (
    <div className="flex flex-col items-center gap-10 w-[80%] mx-auto">
      <img
        src={data.avatar}
        alt="learner"
        className="border border-cyan-700 rounded-full"
      />
      <p className="text-center text-3xl font-semibold text-neutral-700 leading-tight tracking-wide [word-spacing:0.25em]">
        {data.review}
      </p>
      <RatingStar />
      <div className="flex gap-3 items-center justify-center">
        <p className="text-3xl font-bold">{data.name}</p>|
        <p className="text-neutral-500 text-lg">{data.language}</p>
      </div>
    </div>
  );
};

export default TestimonialSection;
