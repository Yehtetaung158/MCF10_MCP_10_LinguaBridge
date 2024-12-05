/* eslint-disable react/prop-types */
import {
  Arm,
  ArrowCircleLeft,
  ArrowCircleRight,
  GraduationCap,
  House,
  ShoppingCart,
  TriangleFlag,
  XMark,
  XMark2,
} from "../../../../assets/Courses/detailImages/courseDetailImages";

const ElementaryDetail = ({ title }) => {
  return (
    <div>
      <h2 className="text-center bg-[#e5fbff] text-primary-color font-miniHeader_weight text-xl lg:text-4xl max-sm:py-8 py-4">
        {title}
      </h2>
      <div className="rounded-md sm:p-12 mt-28 lg:w-[800px] mx-auto sm:border sm:shadow-md flex flex-col">
        <div
          className="bg-black size-36 max-sm:size-40  self-center"
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
        <div className="flex items-center gap-20 max-sm:gap-9 mt-32 ">
          <div className="bg-primary-color rounded-[50%] size-[100px] max-sm:size-[80px] flex justify-center items-center">
            <img src={XMark} alt="flag image" />
          </div>
          <div>
            <div className="font-header_weight text-xl">မယဉ်ကျေးသောပုံစံ၁</div>
            <div className="italic text-gray mt-2">0/2</div>
          </div>
        </div>
        <div className="flex items-center gap-20 max-sm:gap-9 mt-32 self-end">
          <div className="bg-neutral-200 rounded-[50%] size-[100px] max-sm:size-[80px] flex justify-center items-center">
            <img src={XMark2} alt="flag image" className="size-10" />
          </div>
          <div>
            <div className="font-header_weight text-xl">မယဉ်ကျေးသောပုံစံ၂ </div>
            <div className="italic text-gray mt-2 text-center">0/2</div>
          </div>
        </div>
        <div className="flex items-center gap-20 max-sm:gap-9 mt-32">
          <div className="bg-neutral-200 rounded-[50%] size-[100px] max-sm:size-[80px] flex justify-center items-center">
            <img src={Arm} alt="flag image" />
          </div>
          <div>
            <div className="font-header_weight text-xl">လိမ့်မယ်</div>
            <div className="italic text-gray mt-2 text-center">0/2</div>
          </div>
        </div>
        <div className="flex items-center gap-20 max-sm:gap-9 mt-32 self-end">
          <div className="bg-neutral-200 rounded-[50%] size-[100px] max-sm:size-[80px] flex justify-center items-center">
            <img src={TriangleFlag} alt="flag image" />
          </div>
          <div>
            <div className="font-header_weight text-xl">အကြံပြုချက်</div>
            <div className="italic text-gray mt-2 text-center">0/2</div>
          </div>
        </div>
        <div className="flex items-center gap-20 max-sm:gap-9 mt-32">
          <div className="bg-neutral-200 rounded-[50%] size-[100px] max-sm:size-[80px] flex justify-center items-center">
            <img src={ArrowCircleLeft} alt="flag image" className="size-10" />
            <img src={ArrowCircleRight} alt="flag image" className="size-10" />
          </div>
          <div>
            <div className="font-header_weight text-xl">ယူဆောင်လာပါ </div>
            <div className="italic text-gray mt-2 text-center">0/2</div>
          </div>
        </div>
        <div className="flex items-center gap-20 max-sm:gap-9 mt-32 self-end">
          <div className="bg-neutral-200 rounded-[50%] size-[100px] max-sm:size-[80px] flex justify-center items-center">
            <img src={ShoppingCart} alt="flag image" />
          </div>
          <div>
            <div className="font-header_weight text-xl">နေထိုင်ခြင်း</div>
            <div className="italic text-gray mt-2 text-center ">0/3</div>
          </div>
        </div>
        <div className="flex items-center gap-20 max-sm:gap-9 mt-32 ">
          <div className="bg-neutral-200 rounded-[50%] size-[100px] max-sm:size-[80px] flex justify-center items-center">
            <img src={GraduationCap} alt="flag image" />
          </div>
          <div>
            <div className="font-header_weight text-xl">
              ကျောင်းနှင့်လူ့အဖွဲ့အစည်း{" "}
            </div>
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

export default ElementaryDetail;
