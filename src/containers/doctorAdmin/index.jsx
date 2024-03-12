import React from "react";
import { ThemeGrid } from "../../components/grids";
import DefaultGridItem from "../../components/gridItems";
import DoctorProfile from "./components/doctorProfile";
import { DefaultButton } from "../../components/buttons";
import OverView from "./components/overView";

const DoctorAdmin = () => {
  return (
    <ThemeGrid>
      <DefaultGridItem xs={12} sm={12} md={4} lg={3} xl={3}>
        <DoctorProfile />
      </DefaultGridItem>
      <DefaultGridItem
        xs={12}
        sm={12}
        md={8}
        lg={9}
        xl={9}
        styles={{ width: "100%", height: "100%" }}
      >
        <OverView />
      </DefaultGridItem>
    </ThemeGrid>
  );
};

export default DoctorAdmin;
