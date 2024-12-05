import { useNavigate } from "react-router-dom";
import {
  BackArrow,
  Circle,
  VideoPlayer,
} from "../../../assets/Courses/videoImages/coursesVideoImagesPaths";
import DailyGoal from "../components/LessionDeatil/DailyGoal";
import PlayLists from "../components/LessionDeatil/PlayLists";

const LessonDetailPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex item-center gap-2 md:ps-8 py-7 md:py-5 lg:pt-10">
        <img
          src={BackArrow}
          alt="back arrow icon"
          onClick={() => navigate(-1)}
          className="cursor-pointer"
        />
        <span className="font-header_font_style font-header_weight text-lg">
          နိုင်ငံ
        </span>
      </div>
      <hr />
      <div className="max-w-[1208px] mx-auto pt-4 pb-12 flex-col flex md:gap-20 lg:gap-28 lg:flex-row ">
        <div>
          <img src={VideoPlayer} alt="" className="w-full" />
          <div className="py-3 text-2xl font-header_weight">
            Day - 1 (Nationality)
          </div>
          <div className="flex gap-4">
            <div className="text-xs  text-neutral-400">
              Last updated: <span className="text-black">Oct 26, 2020</span>{" "}
            </div>
            <div className="text-xs text-neutral-400">
              Comments: <span className="text-black">154</span>
            </div>
          </div>
          <div className="mt-10">
            <PlayLists
              text={"사람 · 한국 · 중국 · 미국 안녕하세요"}
              number={1}
            />
            <PlayLists text={"...은/는...입니다"} number={2} />
            <PlayLists text={"...에서 왔어요"} number={3} />
            <PlayLists text={"...을/를...해요"} number={4} />
          </div>
        </div>

        <div className="bg-neutral-50 my-10 py-10 px-6 md:flex-1 ">
          <div className="text-center font-header_weight text-xl pb-8">
            Progress
          </div>
          <img src={Circle} alt="" className="size-48 mx-auto" />
          <DailyGoal />
          <button className="bg-primary-color text-white py-2 text-sm rounded-md text-center w-full">
            Reviews
          </button>
        </div>
      </div>
    </div>
  );
};

export default LessonDetailPage;
