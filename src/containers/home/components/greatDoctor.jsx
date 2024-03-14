import React from "react";
import { ThemeGrid } from "../../../components/grids";
import DefaultGridItem from "../../../components/gridItems";
import { CardWithImage, DefaultCard } from "../../../components/cards";
import doctorimage2 from "../../../images/doctorimage2.jpg";
import {
  CircleIconAndTextFooter,
  RatingWithViewsCountAndSquareBadgeFooter,
} from "../../../components/cardFooter";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import StarRateIcon from "@mui/icons-material/StarRate";
const GreatDoctor = () => {
  return (
    <ThemeGrid styles={{ padding: "3% 10%" }}>
      <DefaultGridItem
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        styles={{ padding: "5% 3%" }}
      >
        <DefaultCard
          tag="h2"
          headingText="Our Great Doctor"
          textAlign="center"
        />
      </DefaultGridItem>

      <DefaultGridItem
        xs={12}
        sm={6}
        md={6}
        lg={4}
        xl={4}
        styles={{ padding: "0px 2%", marginBottom: "2%" }}
      >
        <CardWithImage
          imageSrc={doctorimage2}
          imageWidth="100%"
          imageHeight="30%"
          headingTag="h2"
          headingText="Dr Salman Akbar"
          styles={{ heading: { margin: "20px 0px" } }}
        >
          <RatingWithViewsCountAndSquareBadgeFooter
            icon={<StarRateIcon />}
            viewscount="4.5 (2)"
            title="Doctor"
            iconcolor="yellow"
          />
          <CircleIconAndTextFooter
            shouldFlip={true}
            icon={<ArrowForwardIcon />}
            string="At DHA hospital"
            styles={{ marginTop: "20px" }}
          />
        </CardWithImage>
      </DefaultGridItem>
      <DefaultGridItem
        xs={12}
        sm={6}
        md={6}
        lg={4}
        xl={4}
        styles={{ padding: "0px 2%", marginBottom: "2%" }}
      >
        <CardWithImage
          imageSrc={doctorimage2}
          imageWidth="100%"
          imageHeight="30%"
          headingTag="h2"
          headingText="Dr Salman Akbar"
          styles={{ heading: { margin: "20px 0px" } }}
        >
          <RatingWithViewsCountAndSquareBadgeFooter
            icon={<StarRateIcon />}
            viewscount="4.5 (2)"
            title="Doctor"
            iconcolor="yellow"
          />
          <CircleIconAndTextFooter
            shouldFlip={true}
            icon={<ArrowForwardIcon />}
            string="At DHA hospital"
            styles={{ marginTop: "20px" }}
          />
        </CardWithImage>
      </DefaultGridItem>

      <DefaultGridItem
        xs={12}
        sm={6}
        md={6}
        lg={4}
        xl={4}
        styles={{ padding: "0px 2%", marginBottom: "2%" }}
      >
        <CardWithImage
          imageSrc={doctorimage2}
          imageWidth="100%"
          imageHeight="30%"
          headingTag="h2"
          headingText="Dr Salman Akbar"
          styles={{ heading: { margin: "20px 0px" } }}
        >
          <RatingWithViewsCountAndSquareBadgeFooter
            icon={<StarRateIcon />}
            viewscount="4.5 (2)"
            title="Doctor"
            iconcolor="yellow"
          />
          <CircleIconAndTextFooter
            shouldFlip={true}
            icon={<ArrowForwardIcon />}
            string="At DHA hospital"
            styles={{ marginTop: "20px" }}
          />
        </CardWithImage>
      </DefaultGridItem>
    </ThemeGrid>
  );
};

export default GreatDoctor;
