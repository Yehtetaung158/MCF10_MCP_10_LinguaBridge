import React from 'react'
import logInIcon from "../../../assets/signup_img.png";
import facebookIcon from "../../../assets/icons/LoginSignUp/Facebook.svg";
import googleIcon from "../../../assets/icons/LoginSignUp/Google.svg";
import xicon from "../../../assets/icons/LoginSignUp/X.svg";
import { Link } from "react-router-dom";
import InputField from "../../../components/Ui/InputField";
import { useForm } from 'react-hook-form';

const SingUpFrom = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        watch,
      } = useForm();
    
      const onSubmit = (data) => {
        console.log(data);
      };
  return (
    <section className="text-gray-400 bg-neutral-50 body-font w-full min-h-screen flex justify-center items-center text-ps_font_size">
        <div className=" px-5 max-sm:px-0 mx-auto flex flex-wrap items-center justify-between max-w-[1208px] w-full h-auto">
          <div className=" w-full md:w-1/2 flex justify-center items-center ">
          <img
            className=" object-cover object-center rounded max-sm:hidden w-full h-full lg:max-w-[500px] lg:max-h-[690px] sm:w-[400px] " 
            src={logInIcon}
            alt="Sign Up"
          />
          </div>
          <div className="lg:w-1/2 md:w-1/2 bg-opacity-50 rounded-lg p-8 flex flex-col justify-between md:ml-auto w-full max-h-[690px] mt-10 md:mt-0">
            <h2 className="text-neutral-900 font-header_font_style font-miniHeader_weight   text-3xl  title-font mb-5">
              Sign Up
            </h2>

            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Full Name Field */}
              <InputField
                type="text"
                id="full-name"
                name="fullName"
                placeholder="Name"
                register={register}
                validation={{ required: "Full name is required" }}
                errors={errors}
                className="w-full  rounded border border-neutral-300 focus:border-primary-color text-base outline-none text-neutral-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out text-ps_font_size "
              />

              {/* Email Field */}
              <InputField
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                register={register}
                validation={{
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                    message: "Invalid email address",
                  },
                }}
                errors={errors}
                className="w-full  rounded border border-neutral-300 focus:border-primary-color text-base outline-none text-neutral-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out text-ps_font_size "
              />

              {/* Password Field */}
              <InputField
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                register={register}
                validation={{
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password should be at least 6 characters long",
                  },
                }}
                errors={errors}
                className="w-full  rounded border border-neutral-300 focus:border-primary-color text-base outline-none text-neutral-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out text-ps_font_size "
              />

              {/* Confirm Password Field */}
              <InputField
                type="password"
                id="confirm-password"
                name="confirmPassword"
                placeholder="Confirm Password"
                register={register}
                validation={{
                  required: "Confirm password is required",
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                }}
                errors={errors}
                className="w-full  rounded border border-neutral-300 focus:border-primary-color text-base outline-none text-neutral-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out text-ps_font_size "
              />

              {/* Checkbox for Terms & Conditions */}
              <div className="relative mb-8 flex w-full items-center justify-start gap-2 ">
                <input
                  type="checkbox"
                  id="checkbox"
                  {...register("checkbox", {
                    required: "You must agree to the terms and conditions",
                  })}
                  className=""
                />
                <label
                  htmlFor="checkbox"
                  className="text-neutral-500 text-ps_font_size  "
                >
                  I agree to all Terms & conditions and the privacy policy.
                </label>
                {errors.checkbox && (
                  <p className="text-red-500 ">
                    {errors.checkbox.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="text-neutral-50 bg-primary-color border-0 py-2 px-8 focus:outline-none hover:bg-primary-hover-color rounded  w-full"
              >
                Sign Up
              </button>
            </form>

            <div className="relative my-4 flex w-full items-center justify-center gap-2 text-neutral-500">
              Already have an account?{" "}
              <Link to="/login" className="text-dark-blue underline">
                Sign In
              </Link>
            </div>

            <div className="relative mb-4 flex flex-col items-center justify-center gap-4">
              <h1 className="text-pl_font_size font-medium text-neutral-900">
                Sign in with
              </h1>
              <div className="flex gap-4 justify-center">
                {/* Facebook Icon */}
                <div className="bg-neutral-200 w-[50px] h-[50px] rounded-full flex items-center justify-center">
                  <img
                    className="w-[24px] h-[24px]"
                    src={facebookIcon}
                    alt="Sign in with Facebook"
                  />
                </div>

                {/* Google Icon */}
                <div className="bg-neutral-200 w-[50px] h-[50px] rounded-full flex items-center justify-center">
                  <img
                    className="w-[24px] h-[24px]"
                    src={googleIcon}
                    alt="Sign in with Google"
                  />
                </div>

                {/* Twitter Icon */}
                <div className="bg-neutral-200 w-[50px] h-[50px] rounded-full flex items-center justify-center">
                  <img
                    className="w-[24px] h-[24px]"
                    src={xicon}
                    alt="Sign in with Twitter"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default SingUpFrom

