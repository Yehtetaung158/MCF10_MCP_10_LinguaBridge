import React from "react";
import Faq from "../../../../assets/Contact Us/Faq.png";
import { useState } from "react";

import { motion } from "framer-motion";

const FaqSection = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setActiveAccordion((prev) => (prev === id ? null : id));
  };

  const accordionData = [
    {
      title: "What languages can I learn on Linguabridge?",
      content:
        "We offer a variety of language courses, including Japanese, French, Spanish, German, Chinese, and more. Visit our Courses page for the complete list of available languages.",
    },
    {
      title: "Are the lessons suitable for beginners?",
      content:
        "Absolutely! Our courses cater to learners of all levels, from complete beginners to advanced speakers. You can choose the level that fits your needs.",
    },
    {
      title: "How are the lessons delivered?",
      content:
        "All lessons are conducted online through engaging video sessions. These are supported by downloadable materials, quizzes, and exercises to enhance your learning experience.",
    },
    {
      title: "Can I learn at my own pace?",
      content:
        "Yes, our courses are designed to allow you to progress at a pace that works best for you.",
    },
    {
      title: "Do I get a certificate after completing a course?",
      content:
        "Yes, you’ll receive a certificate upon successfully completing the course.",
    },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        <div className="flex flex-col justify-start md:justify-center">
          <h1 className="text-2xl md:text-4xl font-bold text-header mb-6 text-center md:text-left">
            FAQ
          </h1>
          <div className="flex flex-col gap-4 overflow-hidden">
            {accordionData.map((item, index) => (
              <div
                key={index}
                id={`accordion-flush-${index}`}
                className="bg-gray-50 rounded-lg px-4 py-2 shadow-md"
              >
                <h2 id={`accordion-flush-heading-${index}`}>
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    className="flex items-center justify-between w-full py-3 font-medium text-gray-600 dark:text-gray-400"
                    aria-expanded={activeAccordion === index}
                    aria-controls={`accordion-flush-body-${index}`}
                  >
                    <span className="text-gray-600">{item.title}</span>
                    <svg
                      data-accordion-icon
                      className={`w-5 h-5 transform ${
                        activeAccordion === index ? "rotate-180" : ""
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </h2>

                <div
                  id={`accordion-flush-body-${index}`}
                  className={`${
                    activeAccordion === index ? "block " : "hidden"
                  } py-3 px-2`}
                  aria-labelledby={`accordion-flush-heading-${index}`}
                >
                  <p className="text-gray-600">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center">
          <img
            src={Faq}
            alt="FAQ "
            className="max-w-full h-auto w-[80%] md:w-[90%]"
          />
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
