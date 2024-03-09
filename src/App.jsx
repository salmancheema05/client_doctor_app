import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GuestLayout from "./layouts/guestLayout.jsx";
import Home from "./containers/home/index.jsx";
import Services from "./containers/services/index";
import FindDoctor from "./containers/findDoctor/index";
import DoctorDetail from "./containers/doctorDetail/index.jsx";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <GuestLayout />,
      children: [
        {
          path: "/home",
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
        {
          path: "/doctordetail",
          element: <DoctorDetail />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
