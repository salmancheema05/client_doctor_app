import React from "react";
import { Route, Navigate } from "react-router-dom";
import PatientAdmin from "../containers/patientAdmin";
import DoctorAdmin from "../containers/doctorAdmin";

const IsPatient = ({ children, token, authorized }) => {
  if (authorized === "patient") {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

const IsDoctor = ({ children, token, authorized }) => {
  if (authorized === "doctor") {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

const UnAuthorised = ({ children, token, authorized }) => {
  if (token && authorized === "doctor") {
    return <Navigate to="/doctoradmin" />;
  } else if (token && authorized === "patient") {
    return <Navigate to="/patientadmin" />;
  } else {
    return children;
  }
};
export { IsPatient, IsDoctor, UnAuthorised };
