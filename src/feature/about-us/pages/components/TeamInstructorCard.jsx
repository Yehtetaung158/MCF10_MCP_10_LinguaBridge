import React from "react";
import Facebook from "../../../../assets/About-Us/Facebook.png";
import Insta from "../../../../assets/About-Us/Insta.png";
import Twitter from "../../../../assets/About-Us/Twitter.png";
import Linkdin from "../../../../assets/About-Us/Linkdin.png";

const TeamInstructorCard = ({ image, name, role }) => {
  return (
    <div>
      {" "}
      <div className="flex flex-col items-center text-center">
        <img
          src={image}
          alt={name}
          className="w-24 h-24 rounded-full mb-4 object-cover shadow-md"
        />

        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-sm text-gray-500">{role}</p>

        <div className="flex gap-3 mt-4">
          <a
            href="#"
            className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-md hover:bg-gray-300"
          >
            <img src={Facebook} alt="facebook" />
          </a>

          <a
            href="#"
            className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-md hover:bg-gray-300"
          >
            <img src={Insta} alt="Insta" />
          </a>

          <a
            href="#"
            className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-md hover:bg-gray-300"
          >
            <img src={Twitter} alt="Twitter" />
          </a>

          <a
            href="#"
            className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-md hover:bg-gray-300"
          >
            <img src={Linkdin} alt="Linkdin" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamInstructorCard;
