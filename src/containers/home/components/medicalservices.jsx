import React from "react";
import { DefaultBox } from "../../../components/boxes";
import DefaultGrid from "../../../components/grids";
import DefaultGridItem from "../../../components/gridItems";
import map from "../../../images/map.png";
import { CardWithImage, DefaultCard } from "../../../components/cards";
import { CircleIconCardFooter } from "../../../components/cardFooter";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { IconAndViewFooter } from "../../../components/cardFooter";
const MedicalServices = () => {
  return (
    <DefaultBox style={{ padding: "6%" }}>
      <DefaultGrid>
        <DefaultGridItem sm={12} md={12} lg={12}>
          <DefaultCard
            headingText=" Our Medical Services "
            paragraphText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere quia, vero, 
            tempore, "
            textAlign="center"
          />
        </DefaultGridItem>
        <DefaultGridItem sm={6} md={6} lg={4}>
          <DefaultCard headingText="Cancer Care" headingTag="h2" />
          <DefaultCard
            paragraphText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere quia, vero, tempore, 
            sit quis eum obcaecati ipsam mollitia minima ea repudiandae accusamus."
          >
            <IconAndViewFooter icon={<ArrowForwardIcon />} count="3" />
          </DefaultCard>
        </DefaultGridItem>
        <DefaultGridItem sm={6} md={6} lg={4}>
          <DefaultCard headingText="Cancer Care" headingTag="h2" />
          <DefaultCard
            paragraphText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere quia, vero, tempore, 
            sit quis eum obcaecati ipsam mollitia minima ea repudiandae accusamus."
          >
            <IconAndViewFooter icon={<ArrowForwardIcon />} count="3" />
          </DefaultCard>
        </DefaultGridItem>
        <DefaultGridItem sm={6} md={6} lg={4}>
          <DefaultCard headingText="Cancer Care" headingTag="h2" />
          <DefaultCard
            paragraphText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere quia, vero, tempore, 
            sit quis eum obcaecati ipsam mollitia minima ea repudiandae accusamus."
          >
            <IconAndViewFooter icon={<ArrowForwardIcon />} count="3" />
          </DefaultCard>
        </DefaultGridItem>
        <DefaultGridItem sm={6} md={6} lg={4}>
          <DefaultCard headingText="Cancer Care" headingTag="h2" />
          <DefaultCard
            paragraphText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere quia, vero, tempore, 
            sit quis eum obcaecati ipsam mollitia minima ea repudiandae accusamus."
          >
            <IconAndViewFooter icon={<ArrowForwardIcon />} count="3" />
          </DefaultCard>
        </DefaultGridItem>
        <DefaultGridItem sm={6} md={6} lg={4}>
          <DefaultCard headingText="Cancer Care" headingTag="h2" />
          <DefaultCard
            paragraphText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere quia, vero, tempore, 
            sit quis eum obcaecati ipsam mollitia minima ea repudiandae accusamus."
          >
            <IconAndViewFooter icon={<ArrowForwardIcon />} count="3" />
          </DefaultCard>
        </DefaultGridItem>
        <DefaultGridItem sm={6} md={6} lg={4}>
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

export default MedicalServices;
