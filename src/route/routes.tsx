import { RouteObject } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import NotFound from "../pages/not_found/NotFound";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/not_found",
        element: <NotFound />,
      },
    ],
  },
];

export default routes;
