import React from "react";

import { DefaultButton } from "../../../components/buttons";
import { DefaultDynamicTagText } from "../../../components/dynamicTagTexts";
import { DefaultLi } from "../../../components/links";

const DoctorProfile = ({
  overview = { state: null, setState: null },
  appointment = { state: null, setState: null },
  profile = { state: null, setState: null },
}) => {
  const overViewFunction = () => {
    overview.setState(true);
    appointment.setState(false);
    profile.setState(false);
  };
  const appointmentFunction = () => {
    overview.setState(false);
    appointment.setState(true);
    profile.setState(false);
  };
  const profileFunction = () => {
    overview.setState(false);
    appointment.setState(false);
    profile.setState(true);
  };
  return (
    <div
      style={{
        padding: "0px 0%",
        boxShadow: " 2px 2px 25px 5px lightgray",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        onClick={() => overViewFunction()}
        style={{
          display: "flex",
          justifyContent: "center",
          background: overview.state ? "rgb(133, 204, 210)" : "",
          margin: "10px 20px",
          padding: "15px 0px",
          borderRadius: "10px",
          color: overview.state ? "rgb(45, 145, 156)" : "",
          cursor: "pointer",
        }}
      >
        <p>OverView</p>
      </div>
      <div
        onClick={() => appointmentFunction()}
        style={{
          display: "flex",
          justifyContent: "center",
          background: appointment.state ? "rgb(133, 204, 210)" : "",
          margin: "10px 20px",
          padding: "15px 0px",
          borderRadius: "10px",
          color: appointment.state ? "rgb(45, 145, 156)" : "",
          cursor: "pointer",
        }}
      >
        <p>Appointments</p>
      </div>
      <div
        onClick={() => profileFunction()}
        style={{
          display: "flex",
          justifyContent: "center",
          background: profile.state ? "rgb(133, 204, 210)" : "",
          margin: "10px 20px",
          padding: "15px 0px",
          borderRadius: "10px",
          color: profile.state ? "rgb(45, 145, 156)" : "",
          cursor: "pointer",
        }}
      >
        <p>Profile</p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          margin: "20px 10px",
        }}
      >
        <DefaultButton
          styles={{ backgroundColor: "black", marginBottom: "10px" }}
        >
          Logout
        </DefaultButton>
        <DefaultButton
          styles={{ backgroundColor: "red", marginBottom: "10px" }}
        >
          Delete Account
        </DefaultButton>
      </div>
    </div>
  );
};

export default DoctorProfile;
