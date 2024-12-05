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
      image: person1,
      name: "Sophia Lim",
      role: "English Language Specialist",
    },
    {
      image: person2,
      name: "Aye Myat Khin",
      role: "Spanish Grammar Instructor",
    },
    {
      image: person3,
      name: "Aiko Tanaka",
      role: "Japanese Teacher",
    },
  ];
  return (
    <section className="mt-20">
      <div className="flex flex-col items-center">
        <img
          src={Instructor}
          className="w-24 sm:w-32 mb-5 transform transition-transform duration-300 hover:scale-105 hover:opacity-90"
          alt="Instructor"
        />
        <div className="text-2xl sm:text-4xl mb-4 font-miniHeader_weight font-header_font_style">
          Join With Us
        </div>
        <div className="opacity-75 text-sm sm:text-base text-center px-4">
          Learn from experienced instructors dedicated to guiding your language
          journey with expertise and care.
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-10 mt-10 mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="transform transition-transform duration-300 hover:scale-105"
            >
              <TeamInstructorCard
                image={member.image}
                name={member.name}
                role={member.role}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FourthSection;
