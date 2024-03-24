import React from "react";
import { DefaultDiv } from "../../components/divs";
import DefaultGrid from "../../components/grids";
import DefaultGridItem from "../../components/gridItems";
import { ProfileCard } from "../../components/Profile";
import Doctorimage3 from "../../images/doctorimage2.jpg";
import StarRateIcon from "@mui/icons-material/StarRate";
import TimeSlots from "./component/timeslots";
import { DefaultSpan } from "../../components/spans";
import About from "./component/about";
import { RatingWithViewsCount } from "../../components/icons";
const Index = () => {
  return (
    <DefaultDiv styles={{ margin: "8%" }}>
      <DefaultGrid>
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
              <RatingWithViewsCount
                icon={<StarRateIcon />}
                viewscount="4.5 (2)"
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
            <DefaultGridItem
              xs={12}
              sm={12}
              md={12}
              lg={12}
              styles={{ borderBottom: "1px solid black " }}
            >
              <DefaultSpan styles={{ marginRight: "5%" }}>About</DefaultSpan>
              <DefaultSpan>Feedback</DefaultSpan>
            </DefaultGridItem>
            <DefaultGridItem xs={12} sm={12} md={12} lg={12}>
              <About />
            </DefaultGridItem>
          </DefaultGrid>
        </DefaultGridItem>
        <DefaultGridItem xs={12} sm={12} md={12} lg={4}>
          <TimeSlots />
        </DefaultGridItem>
      </DefaultGrid>
    </DefaultDiv>
  );
};

export default Index;
