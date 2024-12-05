import { searchIcon } from "../../../../assets/Courses/homeImages/coursesHomeImagesPaths";

const SearchInput = () => {
  return (
    <div className="mb-10 ">
      <div className="relative">
        <img
          src={searchIcon}
          alt="search icon"
          className="absolute top-4 left-5 "
        />
        <input
          type="text"
          placeholder="Find Your Course"
          className="border border-slate-400 lg:w-[320px] h-12 ps-14  rounded-md focus:outline-none text-neutral-600 w-full"
        />
      </div>
    </div>
  );
};

export default SearchInput;
