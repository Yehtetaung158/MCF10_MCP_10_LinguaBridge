/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import {
  ArrowCircleLeft,
  ArrowCircleRight,
  Flag,
  House,
  MapPin,
  Minus,
  PuzzlePiece,
  QuestionMark,
  SquaresFour,
} from "../../../../assets/Courses/detailImages/courseDetailImages";

const BeginnerDetail = ({ title, slug, country }) => {
  return (
    <div>
      <h2 className="text-center bg-[#e5fbff] text-primary-color font-miniHeader_weight text-xl lg:text-4xl max-sm:py-8 py-4">
        {title}
      </h2>
      <div className="rounded-md sm:p-12 mt-28 lg:w-[800px] mx-auto sm:border sm:shadow-md flex flex-col">
        <div
          className="bg-black size-36 max-sm:size-40 self-center"
          style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
        >
          <div className="text-white ">
            <img
              src={House}
              alt="house image"
              className="pt-10 ps-[50px] pb-1.5 max-sm:pt-12 max-sm:ps-[60px]"
            />
            <span className="font-light ps-10 max-sm:ps-12">Alphabet</span>
          </div>
        </div>
        <Link
          to={`/courses/${slug}/${country}`}
          className="flex items-center gap-20 max-sm:gap-9 mt-32 "
        >
          <div className="bg-primary-color rounded-[50%] size-[100px] max-sm:size-[80px] flex justify-center items-center">
            <img src={Flag} alt="flag image" />
          </div>
          <div>
            <div className="font-header_weight text-xl">နိုင်ငံ </div>
            <div className="italic text-gray mt-2">0/2</div>
          </div>
        </Link>
        <div className="flex items-center gap-20 max-sm:gap-9 mt-32 self-end">
          <div className="bg-neutral-200 rounded-[50%] size-[100px] max-sm:size-[80px] flex justify-center items-center">
            <img src={ArrowCircleLeft} alt="flag image" className="size-10" />
            <img src={ArrowCircleRight} alt="flag image" className="size-10" />
          </div>
          <div>
            <div className="font-header_weight text-xl">ဤအရာ၊ ထိုအရာ</div>
            <div className="italic text-gray mt-2 text-center">0/3</div>
          </div>
        </div>
        <div className="flex items-center gap-20 max-sm:gap-9 mt-32">
          <div className="bg-neutral-200 rounded-[50%] size-[100px] max-sm:size-[80px] flex justify-center items-center">
            <img src={SquaresFour} alt="flag image" />
          </div>
          <div>
            <div className="font-header_weight text-xl">
              နေ့စဉ်သုံးပစ္စည်းများ
            </div>
            <div className="italic text-gray mt-2 text-center">0/2</div>
          </div>
        </div>
        <div className="flex items-center gap-20 max-sm:gap-9 mt-32 self-end">
          <div className="bg-neutral-200 rounded-[50%] size-[100px] max-sm:size-[80px] flex justify-center items-center">
            <img src={PuzzlePiece} alt="flag image" />
          </div>
          <div>
            <div className="font-header_weight text-xl">စကားစုများ</div>
            <div className="italic text-gray mt-2 text-center">0/2</div>
          </div>
        </div>
        <div className="flex items-center gap-20 max-sm:gap-9 mt-32">
          <div className="bg-neutral-200 rounded-[50%] size-[100px] max-sm:size-[80px] flex justify-center items-center">
            <img src={Minus} alt="flag image" />
          </div>
          <div>
            <div className="font-header_weight text-xl">အငြင်း </div>
            <div className="italic text-gray mt-2 text-center">0/2</div>
          </div>
        </div>
        <div className="flex items-center gap-20 max-sm:gap-9 mt-32 self-end">
          <div className="bg-neutral-200 rounded-[50%] size-[100px] max-sm:size-[80px] flex justify-center items-center">
            <img src={QuestionMark} alt="flag image" />
          </div>
          <div>
            <div className="font-header_weight text-xl">အမေး</div>
            <div className="italic text-gray mt-2 text-center ">0/2</div>
          </div>
        </div>
        <div className="flex items-center gap-20 max-sm:gap-9 mt-32 ">
          <div className="bg-neutral-200 rounded-[50%] size-[100px] max-sm:size-[80px] flex justify-center items-center">
            <img src={MapPin} alt="flag image" />
          </div>
          <div>
            <div className="font-header_weight text-xl">အများသူငှာ </div>
            <div className="italic text-gray mt-2 text-center ">0/2</div>
          </div>
        </div>
        <button className="w-full text-center bg-primary-color text-white uppercase py-3 mt-32 rounded-sm max-sm:py-5">
          test out
        </button>
      </div>
    </div>
  );
};

export default BeginnerDetail;
