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
import { useDispatch, useSelector } from "react-redux";
import {
  IsPatient,
  IsDoctor,
  Unauthorised,
} from "./ulitity/isAuthenticated.jsx";
import { useTheme } from "@mui/material/styles";

const App = () => {
  const theme = useTheme();
  const token = useSelector((state) => state.login.user?.token);
  const userStatus = useSelector((state) => state.login.user?.user_status);

  useEffect(() => {
    document.body.style.backgroundColor = theme.background.bodyBackgroundColor;
  }, []);
  return (
    <>
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
                <Unauthorised authorized={userStatus} token={token}>
                  <Login />
                </Unauthorised>
              }
            />
            <Route
              path="/signup"
              element={
                <Unauthorised authorized={userStatus} token={token}>
                  <SignUp />
                </Unauthorised>
              }
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
