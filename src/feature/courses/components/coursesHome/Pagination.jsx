import {
  leftArrowIcon,
  rightArrowIcon,
} from "../../../../assets/Courses/homeImages/coursesHomeImagesPaths";

const Pagination = () => {
  return (
    <div className="pt-20 max-sm:pt-10">
      <div className="flex items-center gap-5 py-3 justify-center text-sm">
        <div className="flex gap-1 items-center  font-header_font_style">
          <img src={leftArrowIcon} alt="" />
          <span>Previous</span>
        </div>
        <div className="flex gap-4 items-center">
          <span className="py-2.5 px-3 max-sm:py-1.5 max-sm:px-2.5">1</span>
          <span className="py-2.5 px-4 max-sm:py-1.5 max-sm:px-2.5 rounded-md border border-primary-color">
            2
          </span>
          <span className="py-2.5 px-3 max-sm:py-1.5 max-sm:px-2.5">3</span>
          <span className="py-2.5 px-3 max-sm:py-1.5 max-sm:px-2.5"> ...</span>
        </div>
        <div className="flex gap-1 items-center font-header_font_style">
          <span>Next</span>
          <img src={rightArrowIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
