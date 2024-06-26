import React, { useState, useEffect } from "react";
import { DefaultDiv } from "../../components/divs";
import DefaultGrid from "../../components/grids";
import DefaultGridItem from "../../components/gridItems";
import { ProfileCard } from "../../components/Profile";
import Doctorimage3 from "../../images/doctorimage2.jpg";
import StarRateIcon from "@mui/icons-material/StarRate";
import TimeSlots from "./component/timeslots";
import { DefaultSpan } from "../../components/spans";
import About from "./component/about";
import {
  RatingWithViews,
  RatingWithViewsCountAndSquareBadgeFooter,
} from "../../components/cardFooter";
import DefautTabs from "./component/tabs";
import { CardWithImage, DefaultCard } from "../../components/cards";
import useResponsive from "../../hooks/useResponsive";
const Index = () => {
  const { isSmallScreen, isMediumScreen, isExtraSmallScreen } = useResponsive();
  return (
    <DefaultDiv styles={{ margin: "8%" }}>
      <DefaultGrid>
        {isExtraSmallScreen || isSmallScreen || isMediumScreen ? (
          <>
            <DefaultGridItem xs={12} sm={12} md={12} lg={8}>
              <CardWithImage
                imageSrc={Doctorimage3}
                imageWidth="100%"
                imageHeight="30%"
                headingTag="h2"
                headingText="Dr Salman Akbar"
                styles={{ heading: { margin: "20px 0px" } }}
              >
                <RatingWithViewsCountAndSquareBadgeFooter
                  yourPost="doctor"
                  textRatingAndViewsCount="4.5 (3)"
                  starlength={1}
                />
              </CardWithImage>
              <DefaultGridItem
                xs={12}
                sm={12}
                md={12}
                lg={4}
                styles={{
                  marginTop:
                    isExtraSmallScreen || isSmallScreen || isMediumScreen
                      ? "50px"
                      : "",
                }}
              >
                <TimeSlots />
              </DefaultGridItem>
              <DefaultGrid styles={{ marginTop: "8%" }}>
                <DefautTabs />
              </DefaultGrid>
            </DefaultGridItem>
          </>
        ) : (
          <>
            <DefaultGridItem xs={12} sm={12} md={12} lg={8}>
              <ProfileCard
                imageSrc={Doctorimage3}
                headingTag="h4"
                imageWidth="250"
                imageHeight="250"
                headingText="Dr Salman Akbar"
                title="Surgeon"
                paragraphText="I am a Doctor"
                component={
                  <RatingWithViews
                    textRatingAndViewsCount="4.5 (3)"
                    starlength={1}
                  />
                }
                styles={{
                  flipDivs: {
                    container: {},
                    div1: {},
                    div2: {
                      marginTop: "5%",
                      marginLeft: "10px",
                    },
                  },
                  SquareBadge: {
                    backgroundColor: "#85ccd2",
                    marginBottom: "3%",
                    paddingLeft: "5%",
                    paddingRight: "5%",
                  },
                  heading: {
                    fontSize: "20px",
                    fontWeight: "bold",
                  },
                  paragraph: { marginTop: "20px", fontSize: "20px" },
                }}
              />

              <DefaultGrid styles={{ marginTop: "8%" }}>
                <DefautTabs />
              </DefaultGrid>
            </DefaultGridItem>
            <DefaultGridItem xs={12} sm={12} md={12} lg={4}>
              <TimeSlots />
            </DefaultGridItem>
          </>
        )}
      </DefaultGrid>
    </DefaultDiv>
  );
};

export default Index;
