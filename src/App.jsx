import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GuestLayout from "./layouts/guestLayout.jsx";
import Home from "./containers/home/index.jsx";
import Services from "./containers/services/index";
import FindDoctor from "./containers/findDoctor/index";
import DoctorDetail from "./containers/doctorDetail/index.jsx";
import PatientAdmin from "./containers/patientAdmin/index.jsx";
import DoctorAdmin from "./containers/doctorAdmin/index.jsx";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <GuestLayout />,
      children: [
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
        {
          path: "/doctordetail",
          element: <DoctorDetail />,
        },
        {
          path: "/patientadmin",
          element: <PatientAdmin />,
        },
        {
          path: "/doctoradmin",
          element: <DoctorAdmin />,
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
