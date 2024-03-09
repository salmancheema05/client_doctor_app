import React from "react";
import { DefaultBox } from "../../../components/boxes";
import DefaultGrid from "../../../components/grids";
import DefaultGridItem from "../../../components/gridItems";
import { DefaultCard, CardWithImage } from "../../../components/cards";

const Services = () => {
  return (
    <DefaultBox style={{ padding: "8%" }}>
      <DefaultGrid>
        <DefaultGridItem sm={6} md={4} lg={4}>
          <DefaultCard headingText="Cancer Care" tag="h1" />
          <DefaultCard
            paragraphText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere quia, vero, tempore, 
            sit quis eum obcaecati ipsam mollitia minima ea repudiandae accusamus."
          />
        </DefaultGridItem>
        <DefaultGridItem sm={6} md={4} lg={4}>
          <DefaultCard headingText="Cancer Care" tag="h1" />
          <DefaultCard
            paragraphText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere quia, vero, tempore, 
            sit quis eum obcaecati ipsam mollitia minima ea repudiandae accusamus."
          />
        </DefaultGridItem>
        <DefaultGridItem sm={6} md={4} lg={4}>
          <DefaultCard headingText="Cancer Care" tag="h1" />
          <DefaultCard
            paragraphText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere quia, vero, tempore, 
            sit quis eum obcaecati ipsam mollitia minima ea repudiandae accusamus."
          />
        </DefaultGridItem>
      </DefaultGrid>
    </DefaultBox>
  );
};

export default Services;
