import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import Driopdwon from "./nav/Driopdwon";
const userIccon = "../src/assets/icons/navigation/User.svg";
const menuIcon = "../src/assets/icons/navigation/hamburger_menu.svg";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (

    <nav className="flex justify-between items-center text-neutral-900 px-2  h-[80px]">
      <Link to="/" className=" size-24 flex items-center justify-center ">
        <Logo theme={"dark"} />
      </Link>

      <div className=" gap-4 items-center mx-auto justify-center hidden md:flex">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/courses">Courses</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>

      <div className=" flex gap-4 items-center justify-center">
        <NavLink to="/become-an-instructor" className=" hidden md:flex">
          Become an Instructor
        </NavLink>
        <div className=" flex gap-2 items-center justify-center relative">
          <button>
            <img src={userIccon} alt="userIcon" />
          </button>
          <button className=" md:hidden" onClick={() => setOpen(!open)}>
            <img src={menuIcon} alt="menuIcon" />
          </button>
          {open && <Driopdwon setOpen={setOpen} />}

    <nav className=" w-full">
      <div className="flex justify-between items-center text-neutral-900 px-2  h-[80px] max-w-[1208px] mx-auto">
        <Link to="/" className=" size-24 flex items-center justify-center ">
          <Logo theme={"dark"} />
        </Link>
        <div className=" gap-4 items-center justify-center hidden md:flex">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/courses">Courses</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
        <div className=" flex gap-4 items-center justify-center ">
          <NavLink to="/become-an-instructor" className=" hidden md:flex">
            Become an Instructor
          </NavLink>
          <div className=" flex gap-2 items-center justify-center relative">
            <button>
              <img src={userIccon} alt="userIcon" />
            </button>
            <button className=" md:hidden" onClick={() => setOpen(!open)}>
              <img src={menuIcon} alt="menuIcon" />
            </button>
            {open && <Driopdwon setOpen={setOpen} />}
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Header;
