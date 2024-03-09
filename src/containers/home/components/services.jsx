import React from "react";
import { DefaultBox } from "../../../components/boxes";
import DefaultGrid from "../../../components/grids";
import DefaultGridItem from "../../../components/gridItems";
import { DefaultCard, CardWithImage } from "../../../components/cards";
import map from "../../../images/map.png";

const Services = () => {
  return (
    <DefaultBox style={{ padding: "8%" }}>
      <DefaultGrid>
        <DefaultGridItem sm={12} md={12} lg={12}>
          <DefaultCard
            headingText="Providing the best Medical Services "
            tag="h1"
            textAlign="center"
          />
          <DefaultCard
            paragraphText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere quia, vero, tempore, 
            sit quis eum obcaecati ipsam mollitia minima ea repudiandae accusamus."
            textAlign="center"
          />
        </DefaultGridItem>
        <DefaultGridItem sm={6} md={4} lg={4} styles={{ marginTop: "5%" }}>
          <CardWithImage
            src={map}
            imageWidth="50%"
            position="center"
            headingText="Find a location"
            paragraphText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere quia, vero, tempore, 
            sit quis eum obcaecati ipsam mollitia minima ea repudiandae accusamus."
            textAlign="center"
          />
        </DefaultGridItem>
        <DefaultGridItem sm={6} md={4} lg={4} styles={{ marginTop: "5%" }}>
          <CardWithImage
            src={map}
            imageWidth="50%"
            position="center"
            headingText="Find a location"
            paragraphText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere quia, vero, tempore, 
            sit quis eum obcaecati ipsam mollitia minima ea repudiandae accusamus."
            textAlign="center"
          />
        </DefaultGridItem>
        <DefaultGridItem sm={6} md={4} lg={4} styles={{ marginTop: "5%" }}>
          <CardWithImage
            src={map}
            imageWidth="50%"
            position="center"
            headingText="Find a location"
            paragraphText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere quia, vero, tempore, 
            sit quis eum obcaecati ipsam mollitia minima ea repudiandae accusamus."
            textAlign="center"
          />
        </DefaultGridItem>
      </DefaultGrid>
    </DefaultBox>
  );
};

export default Services;
