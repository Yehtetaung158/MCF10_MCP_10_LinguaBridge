import React from "react";
import android from "../../../assets/Home/android.png";
import ios from "../../../assets/Home/ios.png";
import Iphone_Mockup from "../../../assets/Home/Iphone_Mockup.png";
import vector from "../../../assets/Home/vector.png";

const AppDownloadSection = () => {
  return (
    <div className="border w-full h-[300px] bg-cyan-500 rounded-xl grid grid-cols-2 mb-16">
      <div className="flex flex-col m-10">
        <h1 className="md:text-lg lg:text-xl font-bold text-neutral-50 mb-7">
          Download Our App - Learn Any Time, Anywhere
        </h1>
        <div className="flex gap-5 items-center justify-center">
          <img src={vector} alt="" className="border p-2" />
          <p className="md:text-md text-neutral-50">
            Download our app for easy access to all courses, progress tracking,
            and more. Learn languages at your convenience, wherever you are.
          </p>
        </div>

        <div className="flex gap-5 justify-start items-end">
          <img src={android} alt="Android" className="size-32 object-contain" />
          <img src={ios} alt="iOS" className="size-32 object-contain" />
        </div>
      </div>

      <img
        src={Iphone_Mockup}
        alt="Iphone Mockup"
        className="h-[450px] absolute -top-9 right-10 tracking-wide"
      />
    </div>
  );
};

export default AppDownloadSection;
