import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import AllExperiences from "../Components/Experiences/AllExperiences";
import DescribeExperiences from "../Components/Experiences/DescribeExperiences";
import Districts from "../Components/Places/Districts";
import AllDiscover from "../Components/Discover/AllDiscover";
import DescribeDiscover from "../Components/Discover/DescribeDiscover";
import Places from "../Components/Places/Places";
import Footer from "../Components/Footer/Footer";
import Login from "../Components/Authentication/Login";
import Registration from "../Components/Authentication/Registretion";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-experiences",
        element: <AllExperiences />,
      },
      {
        path: "/describe-experiences/:id",
        element: <DescribeExperiences />,
      },
      {
        path: "/districts/:id",
        element: <Districts />,
      },
      {
        path: "/all-discovers",
        element: <AllDiscover />,
      },
      {
        path: "/describe-discovers/:id",
        element: <DescribeDiscover />,
      },
      {
        path: "/place",
        element: <Places />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Registration />
      },
    ],
  },
]);

export default router;