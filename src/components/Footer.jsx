import React from "react";
import Logo from "./Logo";
import icon from "../assets/icons/footericon-svg/Symbol.svg";
import icon1 from "../assets/icons/footericon-svg/Symbol-1.svg";
import icon2 from "../assets/icons/footericon-svg/Symbol-2.svg";
import icon3 from "../assets/icons/footericon-svg/Symbol-3.svg";
import icon4 from "../assets/icons/footericon-svg/Symbol-4.svg";
import PhoneCallIcon from "../assets/icons/footericon-svg/PhoneCall.svg";
import MapPin from "../assets/icons/footericon-svg/MapPin.svg";
import EnvelopeSimple from "../assets/icons/footericon-svg/EnvelopeSimple.svg";
import { Link, NavLink, useLocation, useSearchParams } from "react-router-dom";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentParth = useLocation().pathname;
  const coursesDetail = currentParth.split("/")[2];
  const isIputFooter =
    currentParth === "/" ||
    currentParth === "/apply-form" ||
    currentParth === "/contact" ||
    currentParth === `/courses/${coursesDetail}`
      ? false
      : true;
  console.log(isIputFooter);
  return (
    <footer className=" mt-auto">
      {isIputFooter && (
        <div className=" w-full h-[200px] sm:h-[207px] lg:h-[150px]"></div>
      )}
      <div className=" bg-neutral-700  text-neutral-100 text-xs sm:text-ps_font_size lg:text-pm_font_size w-full relative ">
        {isIputFooter && (
          <div className="bg-primary-color max-w-[363px] lg:h-[264px] sm:h-[207px] sm:max-w-[768px] lg:max-w-[1212px] w-full absolute top-[-180px] md:top-[-165px] lg:top-[-150px] left-0 right-0 mx-auto rounded-xl flex flex-col lg:flex-row justify-between items-center px-4 py-6 max-lg:gap-4">
            <div className="lg:w-1/2 w-full text-center lg:text-left max-sm:text-left">
              <h1 className="text-lg lg:text-4xl font-header_font_style font-semibold">
                Ready to Explore New Languages and Cultures?
              </h1>
              <p className="my-4">
                Join us for tips, lessons, and exclusive updates straight to
                your inbox!
              </p>
            </div>
            <div className="lg:w-1/2 sm:w-1/2 w-full bg-neutral-50 px-2 rounded-lg flex items-center justify-center">
              <div className=" w-full  flex justify-between  items-between py-1 rounded-lg h-[44px] gap-2">
                <input
                  className="w-full  rounded-lg focus:border  focus:border-primary-color text-base outline-none bg-neutral-50 text-neutral-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out text-ps_font_size "
                  type="text"
                  placeholder="Your email address"
                />
                <button className=" bg-neutral-900  text-neutral-50 py-2 px-4 rounded-lg hover:bg-neutral-800 min-h-[28px] ">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        )}
        <div className="min-h-[503px] max-sm:min-h-[1005px] flex justify-center items-center text-neutral-50">
          <div className=" flex justify-center w-full max-w-[1208px] mx-auto ">
            <div className="grid grid-cols-1 gap-8 sm:gap-6 lg:grid-cols-3 w-full  max-[1208px]:px-4">
              <ul className=" flex flex-col gap-4 colspa">
                <li className=" w-[200px]">
                  <Logo />
                </li>
                <li className=" w-[100px]"></li>
                <li className="mb-4 text-[20px] ">
                  Explore the World Through Language
                </li>
                <li className="flex gap-2">
                  <span className=" p-2 bg-neutral-400 rounded-sm  ">
                    <img
                      className="text-neutral-100 size-[12px] rounded-sm fill-current "
                      src={icon}
                      alt="icon1"
                    />
                  </span>
                  <span className=" p-2 bg-neutral-400 rounded-sm">
                    <img
                      className="text-neutral-100 size-[12px] rounded-sm fill-current"
                      src={icon4}
                      alt="icon4"
                    />
                  </span>
                  <span className=" p-2 bg-neutral-400 rounded-sm">
                    <img
                      className="text-neutral-100 size-[12px] rounded-sm fill-current"
                      src={icon3}
                      alt="icon3"
                    />
                  </span>
                  <span className=" p-2 bg-neutral-400 rounded-sm ">
                    <img
                      className="text-neutral-100 size-[12px] rounded-sm fill-current"
                      src={icon2}
                      alt="icon1"
                    />
                  </span>
                  <span className=" p-2 bg-neutral-400 rounded-sm ">
                    <img
                      className="text-neutral-100 size-[12px] rounded-sm fill-current"
                      src={icon1}
                      alt="icon1"
                    />
                  </span>
                </li>
              </ul>
              <div className="grid grid-cols-5 max-sm:grid-cols-2 gap-8 sm:gap-6 col-span-2">
                <div className="col-span-2">
                  <h2 className="mb-6 text-lg font-semibold ">
                    Get in Touch
                  </h2>
                  <ul className=" flex flex-col gap-6 ">
                    <li className=" flex gap-2">
                      <img
                        className=" w-[16px] sm:w-[21px] "
                        src={MapPin}
                        alt=""
                      />
                      <span>1744(A), Shwe Myitter Street, Thaketa, Yangon</span>
                    </li>
                    <li className=" flex gap-2">
                      <img
                        className=" w-[16px] sm:w-[21px]"
                        src={PhoneCallIcon}
                        alt=""
                      />
                      <span className=" flex flex-col">
                        <span>+959 785568747</span>
                        <span>+959 785568748</span>
                      </span>
                    </li>
                    <li className=" flex gap-2">
                      <img
                        className=" w-[16px] sm:w-[21px]"
                        src={EnvelopeSimple}
                        alt="envelopeicon"
                      />
                      <span className=" flex flex-col">
                        <span>linguabridge@gmail.com</span>
                        <span>linguabridge645@gmail.com</span>
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="col-span-1 max-sm:col-span-2">
                  <h2 className="mb-6 font-semibold  text-lg">
                    Pages
                  </h2>
                  <ul className="flex flex-col ">
                    <NavLink
                      onClick={handleScrollToTop}
                      to="/"
                      className="mb-4"
                    >
                      Home
                    </NavLink>
                    <NavLink
                      onClick={handleScrollToTop}
                      to="/about"
                      className="mb-4"
                    >
                      About Us
                    </NavLink>
                    <NavLink
                      onClick={handleScrollToTop}
                      to="/contact"
                      className="mb-4"
                    >
                      Contact
                    </NavLink>
                    <NavLink
                      onClick={handleScrollToTop}
                      to={"/become-an-instructor"}
                      className={"mb-4"}
                    >
                      Become an Instructor
                    </NavLink>
                    <NavLink onClick={handleScrollToTop} to="/courses">
                      Courses
                    </NavLink>
                  </ul>
                </div>
                <div className=" col-span-1 max-sm:col-span-2">
                  <h2 className="mb-6 text-lg font-semibold ">
                    Legal
                  </h2>
                  <ul className="flex flex-col">
                    <NavLink
                      onClick={handleScrollToTop}
                      to="/privacy-policy"
                      className="mb-4"
                    >
                      Privacy Policy
                    </NavLink>
                    <NavLink
                      onClick={handleScrollToTop}
                      to="/terms-and-conditions"
                    >
                      Terms &amp; Conditions
                    </NavLink>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between bg-neutral-900 w-full h-[115px] text-ps_font_size sm:text-pm_font_size px-4">
          <span className=" text-neutral-100 sm:text-center text-[12px] ">
            © 2024{" "}
            <a href="#" className="hover:underline">
              | MCP7/MCF10
            </a>
            . All Rights Reserved.
          </span>
            <span className="flex space-x-6 sm:justify-start sm:mt-0 text-[12px] ">MMSITConnection</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// className=" w-full "
