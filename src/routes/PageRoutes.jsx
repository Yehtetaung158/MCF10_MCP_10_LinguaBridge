import AboutPage from "../feature/about-us/pages/AboutPage";
import ApplyFormPage from "../feature/become-an-instructor/pages/ApplyFormPage";
import BecomeAnInstructorPage from "../feature/become-an-instructor/pages/BecomeAnInstructorPage";
import ContactPage from "../feature/contact/pages/ContactPage";
import CourseDetailPage from "../feature/courses/pages/CourseDetailPage";
import CoursesHomePage from "../feature/courses/pages/CoursesHomePage";
import LessonDetailPage from "../feature/courses/pages/LessonDetailPage";
import HomePage from "../feature/home/pages/HomePage";
import PrivacyPolicyPage from "../feature/privacy-policy/pages/PrivacyPolicyPage";
import TermsAndConditionsPages from "../feature/terms-and-conditions/pages/TermsAndConditionsPages";

const PageRoutes = [
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: "about",
    element: <AboutPage />,
  },
  {
    path: "contact",
    element: <ContactPage />,
  },
  {
    path: "courses",
    // element: <CoursesPage />,
    children: [
      {
        index: true,
        element: <CoursesHomePage />,
      },
      {
        path: ":slug",
        element: <CourseDetailPage />,
      },
      {
        path: ":slug/:lessonSlug",
        element: <LessonDetailPage />,
      },
    ],
  },
  {
    path: "become-an-instructor",
    children: [
      {
        index: true,
        element: <BecomeAnInstructorPage />, // This will render as the default when the parent route is accessed
      },
      {
        path: "apply-form",
        element: <ApplyFormPage />, // This will render when navigating to /become-an-instructor/apply-form
      },
    ],
  },
  {
    path: "terms-and-conditions",
    element: <TermsAndConditionsPages />,
  },
  {
    path: "privacy-policy",
    element: <PrivacyPolicyPage />,
  },
];

export default PageRoutes;
