import React from "react";
import { DefaultBox } from "../../../components/boxes";
import DefaultGrid from "../../../components/grids";
import DefaultGridItem from "../../../components/gridItems";
import { DefaultCard } from "../../../components/cards";
import { IconAndViewFooter } from "../../../components/cardFooter";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Services = () => {
  return (
    <DefaultBox style={{ padding: "8%" }}>
      <DefaultGrid>
        <DefaultGridItem sm={6} md={4} lg={4}>
          <DefaultCard headingText="Cancer Care" headingTag="h2" />
          <DefaultCard
            paragraphText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere quia, vero, tempore, 
            sit quis eum obcaecati ipsam mollitia minima ea repudiandae accusamus."
          >
            <IconAndViewFooter icon={<ArrowForwardIcon />} count="3" />
          </DefaultCard>
        </DefaultGridItem>
        <DefaultGridItem sm={6} md={4} lg={4}>
          <DefaultCard headingText="Cancer Care" headingTag="h2" />
          <DefaultCard
            paragraphText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere quia, vero, tempore, 
            sit quis eum obcaecati ipsam mollitia minima ea repudiandae accusamus."
          >
            <IconAndViewFooter icon={<ArrowForwardIcon />} count="3" />
          </DefaultCard>
        </DefaultGridItem>
        <DefaultGridItem sm={6} md={4} lg={4}>
          <DefaultCard headingText="Cancer Care" headingTag="h2" />
          <DefaultCard
            paragraphText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere quia, vero, tempore, 
            sit quis eum obcaecati ipsam mollitia minima ea repudiandae accusamus."
          >
            <IconAndViewFooter icon={<ArrowForwardIcon />} count="3" />
          </DefaultCard>
        </DefaultGridItem>
      </DefaultGrid>
    </DefaultBox>
  );
};

export default Services;
