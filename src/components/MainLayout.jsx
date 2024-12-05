import { Outlet, useLocation } from "react-router-dom";

import CoursesHero from "../feature/courses/components/coursesHome/CoureseHero";
import Footer from "./Footer";
import Header from "./Header";

const MainLayout = () => {
  const location = useLocation();
  const pathName = location.pathname.startsWith("/courses/");
  const isCoursesPage = location.pathname.includes("/courses");

  return (
    <div className="min-h-screen flex flex-col">
      <div className="max-w-[1208px] w-full mx-auto">
        <Header />
      </div>

      {/* Hero Image */}
      {!pathName && isCoursesPage && (
        <div className="max-w-[1440px] w-full mx-auto">
          <CoursesHero />
        </div>
      )}

      <div className="max-w-[1208px] w-full mx-auto flex-grow px-3">
        <Outlet />
      </div>

      <div className="max-w-[1440px] w-full mx-auto">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
