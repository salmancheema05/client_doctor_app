import React from "react";
import { CircleImage } from "../../../components/images";
import DoctorImage2 from "../../../images/doctorimage2.jpg";
import DefaultHeading from "../../../components/headings";
import DefaultParagraph from "../../../components/paragraphs";
import { DefaultButton } from "../../../components/buttons";
const PatientProfile = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <CircleImage src={DoctorImage2} />
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "4% 0%" }}
      >
        <DefaultHeading tag="h3">Salman Akbar</DefaultHeading>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "4% 0%" }}
      >
        <DefaultParagraph>salman@abce.com</DefaultParagraph>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "4% 0%" }}
      >
        <DefaultParagraph>Body Type</DefaultParagraph>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          margin: "20% 5%",
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
    </>
  );
};

export default PatientProfile;
