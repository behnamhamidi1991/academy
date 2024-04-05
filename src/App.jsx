import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Error from "./pages/Error/Error";
import Home from "./pages/Home/Home";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        element: <Home />,
        path: "/",
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
