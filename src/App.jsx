import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./containers/home/index.jsx";
import Services from "./containers/services/index";
import FindDoctor from "./containers/findDoctor/index";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/services",
      element: <Services />,
    },
    {
      path: "/finddoctor",
      element: <FindDoctor />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
