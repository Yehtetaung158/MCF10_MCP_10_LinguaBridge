import React from "react";
import Third from "../../../../assets/About-Us/ThirdImg.png";
import Mission from "../../../../assets/About-Us/MissionImg.png";
import Green from "../../../../assets/About-Us/Green.png";

const ThirdSection = () => {
  return (
    <section className="flex">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-20 mb-10">
        <div className="md:col-span-6">
          <img src={Third} className="w-full" alt="" />
        </div>

        <div className="md:col-span-6 md:ml-8">
          <img
            src={Mission}
            className="w-1/2 md:w-1/4 mt-5 mb-5 transform transition-transform duration-300 hover:scale-105 hover:opacity-90"
            alt=""
          />
          <div className="text-2xl md:text-4xl mb-4 font-miniHeader_weight font-header_font_style">
            Why should choose our
          </div>
          <div className="text-2xl md:text-4xl mb-5 font-miniHeader_weight font-header_font_style">
            platform?
          </div>

          <div className="opacity-75 text-sm md:text-base mb-5">
            We understand the unique needs of Myanmar learners. That’s why our
            lessons are designed to bridge the gap between your native language
            and the one you want to learn.
          </div>

          <div className="space-y-4">
            <div className="flex">
              <img src={Green} className="w-6 h-6 mr-2" alt="" />
              <div className="text-sm md:text-base">
                Designed specifically to help Myanmar speakers easily transition
                to learning new languages.
              </div>
            </div>
            <div className="flex">
              <img src={Green} className="w-6 h-6 mr-2" alt="" />
              <div className="text-sm md:text-base">
                Accessible on mobile, tablet, and desktop—perfect for your busy
                schedule.
              </div>
            </div>
            <div className="flex">
              <img src={Green} className="w-6 h-6 mr-2" alt="" />
              <div className="text-sm md:text-base">
                Explore a wide variety of languages, including English, Chinese,
                Korean, and more.
              </div>
            </div>
            <div className="flex">
              <img src={Green} className="w-6 h-6 mr-2" alt="" />
              <div className="text-sm md:text-base">
                Join a growing community of learners to share experiences and
                stay motivated.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
