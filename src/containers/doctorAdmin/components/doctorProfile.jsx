import React from "react";

import { DefaultButton } from "../../../components/buttons";
import { DefaultDynamicTagText } from "../../../components/dynamicTagTexts";
import { DefaultLi } from "../../../components/links";

const DoctorProfile = () => {
  return (
    <div
      style={{
        padding: "10px 5%",
        boxShadow: " 2px 2px 25px 5px lightgray",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <DefaultDynamicTagText tag="ul" styles={{ listStyleType: "none" }}>
          <DefaultLi styles={{ margin: "25% 0%" }}>OverViews</DefaultLi>
          <DefaultLi styles={{ margin: "25% 0%" }}>Appointment</DefaultLi>
          <DefaultLi styles={{ margin: "25% 0%" }}>Profile</DefaultLi>
        </DefaultDynamicTagText>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginTop: "20%",
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
