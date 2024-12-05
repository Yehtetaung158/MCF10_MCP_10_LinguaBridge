/* eslint-disable react/prop-types */
import { PlayButton } from "../../../../assets/Courses/videoImages/coursesVideoImagesPaths";

const PlayLists = ({ text, number }) => {
  return (
    <div className="flex justify-between items-center py-8 border-b-2 border-b-neutral-200 border-dotted">
      <div className="flex gap-8 max-sm:gap-3">
        <div className="size-12 max-sm:size-10 rounded-[50%] border-2 border-primary-color text-primary-color flex justify-center items-center font-header_weight">
          <span>{number}</span>
        </div>
        <button className="bg-primary-color px-6 max-sm:px-4  rounded-full">
          <div className="flex gap-3 text-white items-center">
            <div className="text-xl font-light max-sm:text-sm">Start</div>
            <img
              src={PlayButton}
              alt="play button icon"
              className="h-4 max-sm:h-3"
            />
          </div>
        </button>
      </div>
      <div className="lg:text-lg w-48 max-sm:w-40 text-center max-sm:text-sm">
        {text}
      </div>
    </div>
  );
};

export default PlayLists;
