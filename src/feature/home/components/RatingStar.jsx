import React from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const RatingStar = ({ totalStars = 5, defaultRating = 4.5 }) => {
  const renderStars = () => {
    let stars = [];
    for (let i = 1; i <= totalStars; i++) {
      if (i <= Math.floor(defaultRating)) {
        // Render full star
        stars.push(
          <FaStar
            size={20}
            key={i}
            className="star"
            style={{ cursor: "default", color: "#17A2B8" }}
          />
        );
      } else if (i === Math.ceil(defaultRating) && defaultRating % 1 !== 0) {
        // Render half star
        stars.push(
          <FaStarHalfAlt
            size={20}
            key={i}
            className="star"
            style={{ cursor: "default", color: "#17A2B8" }}
          />
        );
      } else {
        // Render empty star
        stars.push(
          <FaRegStar
            size={20}
            key={i}
            className="star"
            style={{ cursor: "default", color: "#17A2B8" }}
          />
        );
      }
    }
    return stars;
  };

  return <div className="flex gap-1 items-center">{renderStars()}</div>;
};

export default RatingStar;
