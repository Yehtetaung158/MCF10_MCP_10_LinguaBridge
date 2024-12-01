import React from "react";
import Instructor from "../../../../assets/About-Us/Instructor.png";
import TeamInstructorCard from "./TeamInstructorCard";
import person1 from "../../../../assets/About-Us/p1.png";
import person2 from "../../../../assets/About-Us/p2.png";
import person3 from "../../../../assets/About-Us/p3.png";
import FifthSection from "./FifthSection";

const FourthSection = () => {
  const teamMembers = [
    {
      image: person1, // Replace with actual image URL
      name: "Sophia Lim",
      role: "English Language Specialist",
    },
    {
      image: person2, // Replace with actual image URL
      name: "Aye Myat Khin",
      role: "Spanish Grammar Instructor",
    },
    {
      image: person3, // Replace with actual image URL
      name: "Aiko Tanaka",
      role: "Japanese Teacher",
    },
  ];
  return (
    <section>
      <div className=" flex flex-col items-center mt-20">
        <img src={Instructor} className="size-[12%] mb-5" alt="" />
        <div className=" text-4xl mb-4 font-miniHeader_weight font-header_font_style">
          Join With Us
        </div>
        <div className="opacity-25 text-ps_font_size mt-5">
          Learn from experienced instructors dedicated to guiding your language
        </div>
        <div className="opacity-25 text-ps_font_size">
          {" "}
          journey with expertise and care.
        </div>
      </div>
      <div className="max-w-6xl mx-auto py-10 mt-10 mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10 ">
          {teamMembers.map((member, index) => (
            <TeamInstructorCard
              key={index}
              image={member.image}
              name={member.name}
              role={member.role}
            />
          ))}
          <FifthSection />
        </div>
      </div>
    </section>
  );
};

export default FourthSection;
