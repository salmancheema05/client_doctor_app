import React from "react";
import { DefaultBox } from "../../../components/boxes";
import DefaultGrid from "../../../components/grids";
import DefaultGridItem from "../../../components/gridItems";
import map from "../../../images/map.png";
import { CardWithImage, DefaultCard } from "../../../components/cards";
import { CircleIconCardFooter } from "../../../components/cardFooter";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Services = () => {
  return (
    <DefaultBox style={{ padding: "6%" }}>
      <DefaultGrid>
        <DefaultGridItem sm={12} md={12} lg={12}>
          <DefaultCard
            headingText="Providing the best Medical Services "
            textAlign="center"
            CircleIconCardFooter=""
          />
          <DefaultCard
            paragraphText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere quia, vero, tempore, 
            sit quis eum obcaecati ipsam mollitia minima ea repudiandae accusamus."
            textAlign="center"
          />
        </DefaultGridItem>
        <DefaultGridItem sm={6} md={4} lg={4} styles={{ marginTop: "5%" }}>
          <CardWithImage
            imageSrc={map}
            imagePosition="center"
            headingText="Find a Location"
            paragraphText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere quia, vero, tempore, 
            sit quis eum obcaecati ipsam mollitia minima ea repudiandae accusamus."
            textAlign="center"
          >
            <CircleIconCardFooter icon={<ArrowForwardIcon />} />
          </CardWithImage>
        </DefaultGridItem>
        <DefaultGridItem sm={6} md={4} lg={4} styles={{ marginTop: "5%" }}>
          <CardWithImage
            imageSrc={map}
            imagePosition="center"
            headingText="Find a Location"
            paragraphText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere quia, vero, tempore, 
            sit quis eum obcaecati ipsam mollitia minima ea repudiandae accusamus."
            textAlign="center"
          >
            <CircleIconCardFooter icon={<ArrowForwardIcon />} />
          </CardWithImage>
        </DefaultGridItem>
        <DefaultGridItem sm={6} md={4} lg={4} styles={{ marginTop: "5%" }}>
          <CardWithImage
            imageSrc={map}
            imagePosition="center"
            headingText="Find a Location"
            paragraphText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere quia, vero, tempore, 
            sit quis eum obcaecati ipsam mollitia minima ea repudiandae accusamus."
            textAlign="center"
          >
            <CircleIconCardFooter icon={<ArrowForwardIcon />} />
          </CardWithImage>
        </DefaultGridItem>
      </DefaultGrid>
    </DefaultBox>
  );
};

export default Services;
