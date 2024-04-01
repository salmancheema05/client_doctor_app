import React from "react";

import { DefaultButton } from "../../../components/buttons";
import { DefaultDynamicTagText } from "../../../components/dynamicTagTexts";
import { DefaultLi } from "../../../components/links";
import { useTheme } from "@mui/material/styles";
import { persistor } from '../../../store/index';
import { useNavigate } from "react-router-dom";
import { userLogoutReducer } from "../../../store/features/login";
import { useDispatch } from "react-redux";

const DoctorProfile = ({
  overview = { state: null, setState: null },
  appointment = { state: null, setState: null },
  profile = { state: null, setState: null },
}) => {
  const dispatch=  useDispatch()
  const theme = useTheme();
  const navigate = useNavigate();
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
  const logout =()=>{
    dispatch(userLogoutReducer())
    navigate("/login");
    persistor.purge();

  }
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
          color: overview.state ? "rgb(45, 145, 156)" : theme.paragraph.main,
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
          color: appointment.state ? "rgb(45, 145, 156)" : theme.paragraph.main,
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
          color: profile.state ? "rgb(45, 145, 156)" : theme.paragraph.main,
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
          handler={()=>logout()}
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
