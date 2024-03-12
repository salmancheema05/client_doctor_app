import React from "react";
import { ThemeGrid } from "../../components/grids";
import DefaultGridItem from "../../components/gridItems";
import PatientProfile from "./components/patientProfile";
import { DefaultButton } from "../../components/buttons";
import MyBookings from "./components/myBookings";

const PatientAdmin = () => {
  return (
    <ThemeGrid>
      <DefaultGridItem xs={12} sm={4} md={4} lg={2}>
        <PatientProfile />
      </DefaultGridItem>
      <DefaultGridItem
        xs={12}
        sm={8}
        md={8}
        lg={9}
        styles={{ width: "100%", height: "100%" }}
      >
        <div style={{ display: "flex", padding: "0px 10%" }}>
          <DefaultButton styles={{ width: "15%", margin: "0px 10px" }}>
            Booking
          </DefaultButton>
          <DefaultButton
            buttonKey="out_line"
            styles={{ width: "15%", margin: "0px 10px" }}
          >
            Setting
          </DefaultButton>
        </div>
        <div style={{ margin: "5% 0%", padding: "0px 10%" }}>
          <MyBookings />
        </div>
      </DefaultGridItem>
    </ThemeGrid>
  );
};

export default PatientAdmin;
