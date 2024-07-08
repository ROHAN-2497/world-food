import Home from "@/Pages/Home/Home/Home";
import Recipe from "@/Pages/Recipe/Recipe/Recipe";
import Main from "@/layout/Main";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "recipe",
        element: <Recipe />,
      },
    ],
  },
]);
