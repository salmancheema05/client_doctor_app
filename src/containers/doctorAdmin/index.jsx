import React, { useState } from "react";
import DefaultGrid, { ThemeGrid } from "../../components/grids";
import DefaultGridItem from "../../components/gridItems";
import DoctorProfile from "./components/doctorProfile";
import { DefaultButton } from "../../components/buttons";
import OverView from "./components/overView";
import DefaultParagraph from "../../components/paragraphs";
import Form from "./components/form";
import { useTheme } from "@mui/material/styles";
import useResponsive from "../../hooks/useResponsive";

const DoctorAdmin = () => {
  const theme = useTheme();
  const [overView, setOverView] = useState(true);
  const [appointment, setAppointment] = useState(false);
  const [profile, setProfile] = useState(false);
  const { isSmallScreen, isExtraSmallScreen } = useResponsive();
  return (
    <ThemeGrid>
      <DefaultGridItem xs={12} sm={12} md={4} lg={3} xl={3}>
        <DoctorProfile
          overview={{
            state: overView,
            setState: setOverView,
          }}
          appointment={{
            state: appointment,
            setState: setAppointment,
          }}
          profile={{
            state: profile,
            setState: setProfile,
          }}
        />
      </DefaultGridItem>
      <DefaultGridItem
        xs={12}
        sm={12}
        md={8}
        lg={9}
        xl={9}
        styles={{ width: "100%", height: "100%", padding: "3% 5%" }}
      >
        <DefaultGrid>
          <DefaultGridItem
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            styles={{
              backgroundColor: theme.background.box,
              margin:
                isExtraSmallScreen || isSmallScreen ? "10% 0px" : "2% 0px",
            }}
          >
            <DefaultParagraph styles={{ margin: "2% 0px" }}>
              To get approval please complate you profile.
            </DefaultParagraph>
          </DefaultGridItem>
          {overView ? (
            <OverView />
          ) : appointment ? (
            "appointment"
          ) : profile ? (
            <Form />
          ) : null}
        </DefaultGrid>
      </DefaultGridItem>
    </ThemeGrid>
  );
};

export default DoctorAdmin;
