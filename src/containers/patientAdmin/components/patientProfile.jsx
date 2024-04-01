import React from "react";
import { CircleImage } from "../../../components/images";
import DoctorImage2 from "../../../images/doctorimage2.jpg";
import DefaultHeading from "../../../components/headings";
import DefaultParagraph from "../../../components/paragraphs";
import { DefaultButton } from "../../../components/buttons";
import { useNavigate } from "react-router-dom";
import { userLogoutReducer } from "../../../store/features/login";
import { useDispatch } from "react-redux";
import { persistor } from '../../../store/index';
const PatientProfile = () => {
  const dispatch=  useDispatch()
  const navigate = useNavigate();
  const logout =()=>{
    dispatch(userLogoutReducer())
    navigate("/login");
    persistor.purge();

  }
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
    </>
  );
};

export default PatientProfile;
