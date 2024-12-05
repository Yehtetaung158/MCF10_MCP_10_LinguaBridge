import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import NotFoundPage from "../feature/notfound/NotFoundPage";
import AuthRoutes from "./AuthRoute";
import PageRoutes from "./PageRoutes";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [...PageRoutes],
  },
  ...AuthRoutes,
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default routes;
