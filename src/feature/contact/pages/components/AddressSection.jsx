import React from "react";
import LeftImg from "../../../../assets/Contact Us/LeftImg.png";
import RightImg from "../../../../assets/Contact Us/RightImg.png";

import { SlLocationPin } from "react-icons/sl";
import { BsTelephone } from "react-icons/bs";
import { IoMailOpenOutline } from "react-icons/io5";

const AddressSection = () => {
  const addresses = [
    {
      title: "Office Address",
      address: "123 Elm Street, Suite 400, Chicago, IL 60601",
      phone: "(312) 555-7890",
      email: "linguabridge.com",
      bgColor: "bg-primary-color",
      textColor: "text-white",
      iconColor: "text-white",
    },
    {
      title: "Contact Address",
      address: "456 Maple Avenue, Floor 2, Atlanta, GA 30303",
      phone: "(404) 555-1234",
      email: "linguabridge@gmail.com",
      bgColor: "bg-white",
      textColor: "text-black",
      iconColor: "text-black",
    },
    {
      title: "Contact Address",
      address: "789 Oak Drive, Building 5, San Francisco, CA 94103",
      phone: "(415) 555-9876",
      email: "linguabridge@gmail.com",
      bgColor: "bg-white",
      textColor: "text-black",
      iconColor: "text-black",
    },
  ];
  return (
    <section className="relative bg-white mb-20">
      <img
        src={LeftImg}
        alt=""
        className="absolute top-0 left-0 w-32 sm:w-48 md:w-64 opacity-50"
      />
      <img
        src={RightImg}
        alt=""
        className="absolute top-0 right-0 w-32 sm:w-48 md:w-64 opacity-50"
      />

      <div className="flex flex-col justify-center items-center mt-10 text-center px-4">
        <div className="text-primary-color mb-4 text-sm sm:text-base">
          Contact Us
        </div>
        <div className="text-2xl mb-8 sm:text-3xl lg:text-4xl font-header_weight font-header_font_style">
          We're Here to Help
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10 mt-10">
        {addresses.map((item, index) => (
          <div
            key={index}
            className={`p-6 sm:p-8 rounded-lg shadow-md ${item.bgColor} transform transition duration-300 hover:scale-105 hover:shadow-lg`}
          >
            <h3
              className={`text-lg sm:text-xl font-bold mb-2 ${item.textColor}`}
            >
              {item.title}
            </h3>
            <p className={`mb-2 flex items-center ${item.textColor}`}>
              <span className={`inline-block mr-2 ${item.iconColor}`}>
                <SlLocationPin />
              </span>
              {item.address}
            </p>
            <p className={`mb-2 flex items-center ${item.textColor}`}>
              <span className={`inline-block mr-2 ${item.iconColor}`}>
                <BsTelephone />
              </span>
              {item.phone}
            </p>
            <p className={`flex items-center ${item.textColor}`}>
              <span className={`inline-block mr-2 ${item.iconColor}`}>
                <IoMailOpenOutline />
              </span>
              {item.email}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AddressSection;
