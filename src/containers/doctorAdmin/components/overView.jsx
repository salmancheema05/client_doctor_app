import React from "react";
import DefaultGrid from "../../../components/grids";
import DefaultGridItem from "../../../components/gridItems";
import Doctorimage2 from "../../../images/doctorimage2.jpg";
import DefaultParagraph from "../../../components/paragraphs";
import { ProfileCard } from "../../../components/Profile";
import DefaultHeading from "../../../components/headings";
import DefaultEduction from "../../../components/eductions";
import { DefaultExperienceTemplate } from "../../../components/experienceTemplates";
import { DynamicTagTextWithThreeParts } from "../../../components/dynamicTagTexts";
import {
  RatingWithViews,
  RatingWithViewsCountAndSquareBadgeFooter,
} from "../../../components/cardFooter";
import useResponsive from "../../../hooks/useResponsive";
import { CardWithImage } from "../../../components/cards";
const OverView = () => {
  const { isSmallScreen, isMediumScreen, isExtraSmallScreen } = useResponsive();
  return (
    <>
      <DefaultGridItem xs={12} sm={12} md={12} lg={12} xl={12}>
        {isExtraSmallScreen || isSmallScreen || isMediumScreen ? (
          <>
            <DefaultGridItem xs={12} sm={12} md={12} lg={8}>
              <CardWithImage
                imageSrc={Doctorimage2}
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
              ></DefaultGridItem>
            </DefaultGridItem>
          </>
        ) : (
          <ProfileCard
            imageSrc={Doctorimage2}
            headingTag="h4"
            imageWidth="200"
            imageHeight="200"
            headingText="Dr Salman Akbar"
            title="Surgeon"
            paragraphText="I am a Doctor"
            component={
              <RatingWithViews
                textRatingAndViewsCount="4.5 (10)"
                starlength={1}
              />
            }
            styles={{
              flipDivs: {
                container: {},
                div1: {},
                div2: {
                  marginTop: "2%",
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
        )}
      </DefaultGridItem>

      <DefaultGridItem xs={12} sm={12} md={12} lg={12} xl={12}>
        <DynamicTagTextWithThreeParts
          tag="h2"
          part1="About of"
          part2="Salman Akbar"
          styles={{
            tag: {},
            part1: {},
            part2: { color: "#60b7bd" },
            part3: {},
          }}
        />
        <DefaultParagraph styles={{ marginTop: "5%" }}>
          Text Text Text Text Text
        </DefaultParagraph>
      </DefaultGridItem>

      <DefaultGridItem
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        styles={{ margin: "10% 0%" }}
      >
        <DefaultEduction
          educationArray={[
            {
              startYear: "2015",
              endYear: "2020",
              degreeName: "MBBS",
              instituteName: "ABC",
            },
          ]}
        />
      </DefaultGridItem>

      <DefaultGridItem
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        styles={{ margin: "5% 0%" }}
      >
        <DefaultHeading tag="h1">Experience</DefaultHeading>
      </DefaultGridItem>

      <DefaultGrid styles={{}}>
        <DefaultGridItem xs={12} sm={12} md={6} lg={4} xl={4}>
          <DefaultExperienceTemplate
            startYear="1971"
            endYear="2004"
            departmentName="Department Name"
            instituteName="Institute Name"
          />
        </DefaultGridItem>
        <DefaultGridItem xs={12} sm={12} md={6} lg={4} xl={4}>
          <DefaultExperienceTemplate
            startYear="1971"
            endYear="2004"
            departmentName="Department Name"
            instituteName="Institute Name"
          />
        </DefaultGridItem>
      </DefaultGrid>
    </>
  );
};

export default OverView;
