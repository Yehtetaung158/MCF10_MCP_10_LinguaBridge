import { chartData } from "../../../../utils/course";

const DailyGoal = () => {
  return (
    <div className="pb-14 pt-10 space-y-6">
      <div className="flex justify-between item-center">
        <div className="font-header_weight text-2xl ">Daily Goal</div>
        <div className="">
          8 /<span className="text-primary-color"> 20</span>
        </div>
      </div>
      {chartData.map((data) => (
        <div
          className="flex justify-between items-start gap-10"
          key={data.number}
        >
          <div className="flex-1 border-t-2 border-dotted border-neutral-400"></div>
          <span className="text-xs self-end">{data.number}</span>
        </div>
      ))}
      <div className="flex items-center gap-12">
        <div className="w-full">
          <div className="flex-1 border-t border-black"></div>
          <div className="flex justify-between w-[70%] mx-auto text-xs mt-2">
            <span>Mon</span>
            <span>Wed</span>
            <span>Fri</span>
            <span>Sun</span>
          </div>
        </div>
        <span className="text-xs self-start">0</span>
      </div>
      <div className="flex justify-between px-4 py-4">
        <div className="text-center">
          <div className="text-3xl font-header_weight">0</div>
          <div className="text-xs mt-3">Day Streak</div>
        </div>
        <div className="h-15 border-l-2  border-dotted border-neutral-300"></div>
        <div className="text-center">
          <div className="text-3xl font-header_weight">0/40</div>
          <div className="text-xs mt-3">Completed Lessons</div>
        </div>
      </div>
    </div>
  );
};

export default DailyGoal;
