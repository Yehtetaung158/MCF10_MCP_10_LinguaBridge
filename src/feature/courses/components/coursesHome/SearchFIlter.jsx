import CourseCardContainer from "../coursesHome/CourseCardContainer";
import DropDownInput from "../coursesHome/DropDownInput";
import Pagination from "../coursesHome/Pagination";
import SearchButton from "../coursesHome/SearchButton";
import SearchInput from "../coursesHome/SearchInput";

const SearchFilter = () => {
  return (
    <>
      <div className="lg:flex gap-3">
        <SearchInput />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 ">
          <DropDownInput
            name={"Skill"}
            dropDownMenus={[
              "Beginner",
              "Elementary",
              "Intermediate",
              "Advanced",
            ]}
          />
          <DropDownInput
            name={"Price"}
            dropDownMenus={[
              "30000 - 50000 (MMK)",
              "50000 - 200000 (MMK)",
              "200000 - 400000 (MMK)",
              "400000 - 600000 (MMK)",
            ]}
          />
          <DropDownInput
            name={"Language"}
            dropDownMenus={[
              "Korean",
              "Japanese",
              "Thailand",
              "Spanish",
              "English",
            ]}
          />

          <SearchButton />
        </div>
      </div>
      <CourseCardContainer />
      <Pagination />
    </>
  );
};

export default SearchFilter;
