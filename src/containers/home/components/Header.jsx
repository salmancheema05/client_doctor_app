import React, { useState, useEffect } from "react";
import DefaultGrid, { ThemeGrid } from "../../../components/grids";
import DefaultGridItem from "../../../components/gridItems";
import { HEADING, PARAGRAPH } from "../constants";
import image1 from "../../../images/doctorimage1.jpg";
import image2 from "../../../images/doctorimage2.jpg";
import image3 from "../../../images/doctorimage3.jpg";
import { DefaultCardFooter } from "../../../components/cardFooter";
import { DefaultDiv } from "../../../components/divs";
import DefaultImage from "../../../components/images";
import { DefaultCard } from "../../../components/cards";
import { useTheme } from "@mui/material/styles";
import useResponsive from "../../../hooks/useResponsive";
const Header = () => {
  const theme = useTheme();
  const { isSmallScreen, isMediumScreen, isExtraSmallScreen } = useResponsive();
  return (
    <DefaultDiv
      styles={{
        background: theme.background.color,
        zIndex: "-1",
        // width: isSmallScreen ? "112.8%" : "",
      }}
    >
      <ThemeGrid>
        <DefaultGridItem sm={12} md={8} lg={5} xl={5}>
          <DefaultCard
            headingText={HEADING}
            paragraphText={PARAGRAPH}
            styles={{ heading: { fontSize: "65px" } }}
          >
            <DefaultCardFooter
              buttonKey="request_an_appointment"
              styles={{ button: { marginTop: "30px" } }}
            />
          </DefaultCard>

          <DefaultGrid
            style={{
              marginTop: "20px",
              display: isExtraSmallScreen ? "none" : "",
            }}
          >
            <DefaultGridItem sm={4} md={4} lg={4} xl={4}>
              <DefaultCard
                headingText={"30 +"}
                paragraphText={"Years of Experience"}
                tag="h1"
                styles={{
                  heading: { borderBottom: "5px solid orange", width: "50%" },
                }}
              />
            </DefaultGridItem>
            <DefaultGridItem sm={4} md={4} lg={4}>
              <DefaultCard
                headingText={"15 +"}
                paragraphText={"Clinic Location"}
                tag="h1"
                styles={{
                  heading: { borderBottom: "5px solid orange", width: "50%" },
                }}
              />
            </DefaultGridItem>
            <DefaultGridItem sm={4} md={4} lg={4}>
              <DefaultCard
                headingText={"100 %"}
                paragraphText={"Patient Satisfaction"}
                tag="h1"
                styles={{
                  heading: { borderBottom: "5px solid orange", width: "70%" },
                }}
              />
            </DefaultGridItem>
          </DefaultGrid>
        </DefaultGridItem>

        <DefaultGridItem
          sm={12}
          md={4}
          lg={7}
          xl={7}
          styles={{
            display:
              isMediumScreen || isSmallScreen || isExtraSmallScreen
                ? "none"
                : "",
          }}
        >
          <DefaultGrid>
            <DefaultGridItem sm={12} md={12} lg={7} xl={6}>
              <DefaultImage src={image1} width="100%" height="430" />
            </DefaultGridItem>
            <DefaultGridItem
              sm={12}
              md={6}
              lg={5}
              xl={6}
              styles={{
                marginTop: "5%",
                display: isMediumScreen ? "none" : "",
              }}
            >
              <DefaultImage
                src={image2}
                width="250"
                height="230"
                styles={{ marginBottom: "30px" }}
              />
              <DefaultImage src={image3} width="250" height="230" />
            </DefaultGridItem>
          </DefaultGrid>
        </DefaultGridItem>
      </ThemeGrid>
    </DefaultDiv>
  );
};

export default Header;
