/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import { sortIcon } from "../../../../assets/Courses/homeImages/coursesHomeImagesPaths";

const DropDownInput = ({ name, dropDownMenus }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative ">
      <button
        onClick={toggleDropdown}
        className="focus:outline-none border border-gray rounded-md text-sm px-2 py-2.5 text-center flex items-center justify-between gap-3 w-full h-12"
        type="button"
      >
        <span className="text-neutral-400">
          {name} {name !== "Language" && "Level"}
        </span>
        <img src={sortIcon} alt="sort icon" />
      </button>
      <div
        className={`z-10 bg-neutral-50  rounded-lg shadow w-full absolute mt-4 transition-all duration-300 ease-in-out 
        ${
          isDropdownOpen
            ? " opacity-100 scale-100"
            : " opacity-0 scale-95 overflow-hidden"
        }`}
      >
        <ul
          className="py-2 text-sm text-gray-700"
          aria-labelledby="dropdownDefaultButton"
        >
          {dropDownMenus.map((menu, index) => (
            <li key={index}>
              <Link
                to={"/courses"}
                className="block px-4 my-1 py-1 transition-all duration-300 ease-in-out transform hover:bg-primary-color hover:text-white hover:scale-x-100 hover:shadow-lg"
              >
                {menu}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropDownInput;
