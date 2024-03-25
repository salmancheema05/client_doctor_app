import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GuestLayout from "./layouts/guestLayout.jsx";
import Home from "./containers/home/index.jsx";
import Services from "./containers/services/index";
import FindDoctor from "./containers/findDoctor/index";
import DoctorDetail from "./containers/doctorDetail/index.jsx";
import PatientAdmin from "./containers/patientAdmin/index.jsx";
import DoctorAdmin from "./containers/doctorAdmin/index.jsx";
import Login from "./containers/login/index.jsx";
import SignUp from "./containers/signUp/index.jsx";
import { useSelector } from "react-redux";
import {
  IsPatient,
  IsDoctor,
  UnAuthorised,
} from "./ulitity/isAuthenticated.jsx";

const App = () => {
  const token = useSelector((state) => state.login.user?.token);
  const userStatus = useSelector((state) => state.login.user?.user_status);
  const darkMode = useSelector((state) => state.mode.darkMode);

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "#4D4C4C" : "white";
  }, [darkMode]);

  return (
    <Router>
      <Routes>
        <Route element={<GuestLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/finddoctor" element={<FindDoctor />} />
          <Route path="/doctordetail" element={<DoctorDetail />} />
          <Route
            path="/patientadmin"
            element={
              <IsPatient authorized={userStatus}>
                <PatientAdmin />
              </IsPatient>
            }
          />
          <Route
            path="/doctoradmin"
            element={
              <IsDoctor authorized={userStatus}>
                <DoctorAdmin />
              </IsDoctor>
            }
          />
          <Route
            path="/login"
            element={
              <UnAuthorised authorized={userStatus} token={token}>
                <Login />
              </UnAuthorised>
            }
          />
          <Route
            path="/signup"
            element={
              <UnAuthorised authorized={userStatus} token={token}>
                <SignUp />
              </UnAuthorised>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
