import {
  bookIcon,
  clockIcon,
  oliviaBeginnerImg,
  oliviaElementaryImg,
  oliviaIntermediateImg,
  ratingStarIcon,
  tomBeginnerImg,
  tomElementaryImg,
  tomIntermediateImg,
} from "../../../../assets/Courses/homeImages/coursesHomeImagesPaths";
import CourseCard from "../coursesHome/CourseCard";

const CourseCardContainer = () => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10 lg:mt-1">
      <CourseCard
        courseImg={oliviaBeginnerImg}
        title={"Master the Basics: Korean for Beginners"}
        name={"Olivia Wilson"}
        level={"Beginner"}
        ratingCount={4.8}
        ratingStarImg={ratingStarIcon}
        price={"80,000"}
        hour={12}
        min={56}
        clockIcon={clockIcon}
        bookIcon={bookIcon}
        path={"master-the-basics-korean-for-beginner"}
      />
      <CourseCard
        courseImg={tomIntermediateImg}
        title={"Intermediate Japanese: Core Mastery"}
        name={"Tom Hardy"}
        level={"Intermediate"}
        ratingCount={4.9}
        ratingStarImg={ratingStarIcon}
        price={"120,000"}
        hour={20}
        min={20}
        clockIcon={clockIcon}
        bookIcon={bookIcon}
        path={"intermediate-japanese-core-mastery"}
      />
      <CourseCard
        courseImg={oliviaIntermediateImg}
        title={"Intermediate Thailand: Core ` Mastery"}
        name={"Olivia Wilson"}
        level={"Intermediate"}
        ratingCount={4.5}
        ratingStarImg={ratingStarIcon}
        price={"120,000"}
        hour={20}
        min={5}
        clockIcon={clockIcon}
        bookIcon={bookIcon}
        path={"intermediate-thailand-core-mastery"}
      />
      <CourseCard
        courseImg={tomBeginnerImg}
        title={"Master the Basics: Korean for Beginners"}
        name={"Tom Hardy"}
        level={"Beginner"}
        ratingCount={4.8}
        ratingStarImg={ratingStarIcon}
        price={"80,000"}
        hour={12}
        min={10}
        clockIcon={clockIcon}
        bookIcon={bookIcon}
        path={"master-the-basics-korean-for-beginner"}
      />
      <CourseCard
        courseImg={oliviaBeginnerImg}
        title={"Master the Basics: Spanish for Beginners"}
        name={"Olivia Wilson"}
        level={"Beginner"}
        ratingCount={4.8}
        ratingStarImg={ratingStarIcon}
        price={"80,000"}
        hour={12}
        min={56}
        clockIcon={clockIcon}
        bookIcon={bookIcon}
        path={"master-the-basics-spanish-for-beginner"}
      />
      <CourseCard
        courseImg={tomIntermediateImg}
        title={"Intermediate English: Core `` Mastery"}
        name={"Tom Hardy"}
        level={"Intermediate"}
        ratingCount={4.9}
        ratingStarImg={ratingStarIcon}
        price={"120,000"}
        hour={20}
        min={20}
        clockIcon={clockIcon}
        bookIcon={bookIcon}
        path={"intermediate-english-core-mastery"}
      />
      <CourseCard
        courseImg={oliviaBeginnerImg}
        title={"Master the Basics: Japanese for Beginners"}
        name={"Olivia Wilson"}
        level={"Beginner"}
        ratingCount={4.8}
        ratingStarImg={ratingStarIcon}
        price={"80,000"}
        hour={12}
        min={56}
        clockIcon={clockIcon}
        bookIcon={bookIcon}
        path={"master-the-basics-japanese-for-beginner"}
      />
      <CourseCard
        courseImg={oliviaElementaryImg}
        title={"Elementary Japanese: Master the Basics"}
        name={"Olivia Wilson"}
        level={"Elementary"}
        ratingCount={4.5}
        ratingStarImg={ratingStarIcon}
        price={"100,000"}
        hour={14}
        min={32}
        clockIcon={clockIcon}
        bookIcon={bookIcon}
        path={"elementary-japanese-master-the-basics"}
      />
      <CourseCard
        courseImg={tomBeginnerImg}
        title={"Master the Basics: Spanish for Beginners"}
        name={"Tom Hardy"}
        level={"Beginner"}
        ratingCount={4.8}
        ratingStarImg={ratingStarIcon}
        price={"80,000"}
        hour={12}
        min={10}
        clockIcon={clockIcon}
        bookIcon={bookIcon}
        path={"master-the-basics-spanish-for-beginner"}
      />
      <CourseCard
        courseImg={tomBeginnerImg}
        title={"Master the Basics: English for Beginners"}
        name={"Tom Hardy"}
        level={"Beginner"}
        ratingCount={4.8}
        ratingStarImg={ratingStarIcon}
        price={"80,000"}
        hour={12}
        min={10}
        clockIcon={clockIcon}
        bookIcon={bookIcon}
        path={"master-the-basics-english-for-beginner"}
      />
      <CourseCard
        courseImg={tomElementaryImg}
        title={"Elementary Thailand: Master the Basics"}
        name={"Tom Hardy"}
        level={"Elementary"}
        ratingCount={4.8}
        ratingStarImg={ratingStarIcon}
        price={"100,000"}
        hour={18}
        min={10}
        clockIcon={clockIcon}
        bookIcon={bookIcon}
        path={"elementary-thailand-master-the-basics"}
      />

      <CourseCard
        courseImg={oliviaElementaryImg}
        title={"Elementary Japanese: Master the Basics"}
        name={"Olivia Wilson"}
        level={"Elementary"}
        ratingCount={4.5}
        ratingStarImg={ratingStarIcon}
        price={"100,000"}
        hour={14}
        min={32}
        clockIcon={clockIcon}
        bookIcon={bookIcon}
        path={"elementary-japanese-master-the-basics"}
      />
    </div>
  );
};

export default CourseCardContainer;
