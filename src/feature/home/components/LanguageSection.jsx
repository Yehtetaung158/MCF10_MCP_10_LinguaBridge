import React, { useEffect, useState } from "react";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { coursesData } from "../data/course";
import { learnerData } from "../data/learner";
import AppDownloadSection from "./AppDownloadSection";
import CourseCardSection from "./CourseCardSection";
import LanguageBtn from "./LanguageBtn";
import TestimonialSection from "./TestimonialSection";

const LanguageSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const languages = ["Korean", "Japanese", "Thailand", "Spanish", "English"];
  const [selectedLanguage, setSelectedLanguage] = useState("Korean");

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [transitioning, setTransitioning] = useState(false); // For animation control

  // Auto-play functionality
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, currentIndex]);

  const handleNext = () => {
    setIsPaused(true);
    setTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % learnerData.length);
      setTransitioning(false);
      setIsPaused(false);
    }, 500);
  };

  const handlePrevious = () => {
    setIsPaused(true);
    setTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? learnerData.length - 1 : prevIndex - 1
      );
      setTransitioning(false);
      setIsPaused(false);
    }, 500);
  };

  return (
    <section className="mt-36 mb-10">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Learner's Favourites</h1>
        <p className="text-neutral-500 mt-10">
          Choose from hundreds of courses from specialist organizstions
        </p>
      </div>

      <div className="w-full bg-cyan-100 border h-[85px] mt-10 rounded-lg mx-auto flex justify-center items-center">
        <ul className="flex gap-4">
          {Object.keys(coursesData).map((language) => (
            <li key={language}>
              <LanguageBtn
                selectedLanguage={selectedLanguage}
                setSelectedLanguage={setSelectedLanguage}
                language={language}
              />
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 grid grid-cols-4 gap-3">
        {coursesData[selectedLanguage]?.map((course, index) => (
          <CourseCardSection course={course} key={index} />
        ))}
      </div>

      <div className="flex gap-5 mt-10 items-center">
        <button
          onClick={handlePrevious}
          className="bg-gray-200 border border-neutral-400 text-white size-14 rounded-full  "
        >
          <GrLinkPrevious size={20} className="mx-auto text-black" />
        </button>
        <TestimonialSection
          data={learnerData[currentIndex]}
          className={`transition-transform duration-500 ease-in-out transform ${
            transitioning ? "scale-95 opacity-50" : "scale-100 opacity-100"
          }`}
        />
        <button
          onClick={handleNext}
          className="bg-gray-200  
             text-white size-14 rounded-full border border-neutral-400"
        >
          <GrLinkNext size={20} className="mx-auto text-black" />
        </button>
      </div>
      <div className="flex flex-col mt-28 gap-8 relative">
        {/* <h2 className="hidden xl:block xl:text-4xl font-bold">
          Your Language Learning Journey in Your Pocket!
        </h2> */}
        <h2 className="hidden lg:block lg:text-3xl xl:text-4xl font-bold">
          Your Language Learning Journey in Your Pocket!
        </h2>
        <AppDownloadSection />
      </div>
    </section>
  );
};

export default LanguageSection;
