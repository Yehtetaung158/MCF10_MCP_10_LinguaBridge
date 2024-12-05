/* eslint-disable react/prop-types */
import {
  FirstAid,
  Handshake,
  House,
  MainHouse,
  SecondaryHouse,
  UserSound,
  Wind,
} from "../../../../assets/Courses/detailImages/courseDetailImages";

const IntermediateDetail = ({ title }) => {
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
        <div className="flex items-center gap-20 max-sm:gap-9 mt-32 ">
          <div className="bg-primary-color rounded-[50%] size-[100px] max-sm:size-[80px] flex justify-center items-center">
            <img src={FirstAid} alt="flag image" />
          </div>
          <div>
            <div className="font-header_weight text-xl">နာမကျန်းဖြစ်ခြင်း</div>
            <div className="italic text-gray mt-2">0/3</div>
          </div>
        </div>
        <div className="flex items-center gap-20 max-sm:gap-9 mt-32 self-end">
          <div className="bg-neutral-200 rounded-[50%] size-[100px] max-sm:size-[80px] flex justify-center items-center">
            <img src={UserSound} alt="flag image" className="size-10" />
          </div>
          <div>
            <div className="font-header_weight text-xl">ခွင့်တောင်းခြင်း</div>
            <div className="italic text-gray mt-2 text-center">0/2</div>
          </div>
        </div>
        <div className="flex items-center gap-20 max-sm:gap-9 mt-32">
          <div className="bg-neutral-200 rounded-[50%] size-[100px] max-sm:size-[80px] flex justify-center items-center">
            <img src={Handshake} alt="flag image" />
          </div>
          <div>
            <div className="font-header_weight text-xl">ဂုဏ်ပြုခြင်း ၁</div>
            <div className="italic text-gray mt-2 text-center">0/2</div>
          </div>
        </div>
        <div className="flex items-center gap-20 max-sm:gap-9 mt-32 self-end">
          <div className="bg-neutral-200 rounded-[50%] size-[100px] max-sm:size-[80px] flex justify-center items-center">
            <img src={Handshake} alt="flag image" />
          </div>
          <div>
            <div className="font-header_weight text-xl">ဂုဏ်ပြုခြင်း ၂</div>
            <div className="italic text-gray mt-2 text-center">0/2</div>
          </div>
        </div>
        <div className="flex items-center gap-20 max-sm:gap-9 mt-32">
          <div className="bg-neutral-200 rounded-[50%] size-[100px] max-sm:size-[80px] flex justify-center items-center">
            <img src={SecondaryHouse} alt="flag image" />
          </div>
          <div>
            <div className="font-header_weight text-xl">အိမ်နီးနားချင်း</div>
            <div className="italic text-gray mt-2 text-center">0/2</div>
          </div>
        </div>
        <div className="flex items-center gap-20 max-sm:gap-9 mt-32 self-end">
          <div className="bg-neutral-200 rounded-[50%] size-[100px] max-sm:size-[80px] flex justify-center items-center">
            <img src={MainHouse} alt="flag image" />
          </div>
          <div>
            <div className="font-header_weight text-xl">အိမ်တက်ပွဲ</div>
            <div className="italic text-gray mt-2 text-center ">0/3</div>
          </div>
        </div>
        <div className="flex items-center gap-20 max-sm:gap-9 mt-32 ">
          <div className="bg-neutral-200 rounded-[50%] size-[100px] max-sm:size-[80px] flex justify-center items-center">
            <img src={Wind} alt="flag image" />
          </div>
          <div>
            <div className="font-header_weight text-xl">ရာသီဥတု </div>
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

export default IntermediateDetail;
