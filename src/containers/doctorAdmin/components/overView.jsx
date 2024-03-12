import React from "react";
import DefaultGrid from "../../../components/grids";
import DefaultGridItem from "../../../components/gridItems";
import Doctorimage3 from "../../../images/doctorimage3.jpg";
import DefaultParagraph from "../../../components/paragraphs";
import { ProfileCard } from "../../../components/Profile";
import { RatingWithViewsCount } from "../../../components/icons";
import DefaultHeading, {
  HeadingWithThreeParts,
} from "../../../components/headings";
import DefaultEduction from "../../../components/eductions";
import { DefaultExperienceTemplate } from "../../../components/experienceTemplates";

const OverView = () => {
  return (
    <DefaultGrid>
      <DefaultGridItem
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        styles={{ backgroundColor: "#fff8e7", margin: "3% 10%" }}
      >
        <DefaultParagraph styles={{ marginBottom: "2%" }}>
          To get approval please complate you profile.
        </DefaultParagraph>
      </DefaultGridItem>

      <DefaultGridItem
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        styles={{ margin: "0% 10%" }}
      >
        <ProfileCard
          imageSrc={Doctorimage3}
          headingTag="h4"
          imageWidth="300"
          imageHeight="200"
          headingText="Dr Salman Akbar"
          title="Surgeon"
          paragraphText="I am a Doctor"
          profileicon={<RatingWithViewsCount viewscount="(3)" />}
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
      </DefaultGridItem>

      <DefaultGridItem
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        styles={{ margin: "3% 10%" }}
      >
        <HeadingWithThreeParts
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
        styles={{ margin: "3% 10%" }}
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
        styles={{ padding: "3% 11%" }}
      >
        <DefaultHeading tag="h1">Experience</DefaultHeading>
      </DefaultGridItem>

      <DefaultGrid styles={{ padding: "0% 10%" }}>
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
    </DefaultGrid>
  );
};

export default OverView;
