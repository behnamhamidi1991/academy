import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Error from "./pages/Error/Error";
import Home from "./pages/Home/Home";
import SingleCourse from "./pages/SingleCourse/SingleCourse";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        element: <Home />,
        path: "/",
      },
      {
        element: <SingleCourse />,
        path: "/courses/:id",
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
