import React from "react";
import DefaultHeading from "../../../components/headings";
import DefaultGrid from "../../../components/grids";
import DefaultGridItem from "../../../components/gridItems";
import {
  CircleIconAndTextFooter,
  RatingWithViewsCountAndSquareBadgeFooter,
} from "../../../components/cardFooter";
import { CardWithImage } from "../../../components/cards";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import StarRateIcon from "@mui/icons-material/StarRate";
import doctorimage2 from "../../../images/doctorimage2.jpg";
const MyBookings = () => {
  return (
    <DefaultGrid columnSpacing={{ xs: 1, sm: 3, md: 7, lg: 6 }}>
      <DefaultGridItem
        xs={12}
        sm={12}
        md={12}
        lg={12}
        styles={{ marginBottom: "5%" }}
      >
        <DefaultHeading tag="h2">My Bookings</DefaultHeading>
      </DefaultGridItem>
      <DefaultGridItem
        xs={12}
        sm={12}
        md={12}
        lg={6}
        styles={{ marginBottom: "10%" }}
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
        sm={12}
        md={12}
        lg={6}
        styles={{ marginBottom: "10%" }}
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
        sm={12}
        md={12}
        lg={6}
        styles={{ marginBottom: "10%" }}
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
    </DefaultGrid>
  );
};

export default MyBookings;
