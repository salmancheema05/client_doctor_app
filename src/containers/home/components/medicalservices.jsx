import React from "react";
import { ThemeGrid } from "../../../components/grids";
import DefaultGridItem from "../../../components/gridItems";
import { DefaultCard } from "../../../components/cards";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { IconAndViewFooter } from "../../../components/cardFooter";
const MedicalServices = () => {
  return (
    <ThemeGrid columnSpacing={{ xs: 1, sm: 3, md: 7, lg: 7 }}>
      <DefaultGridItem sm={12} md={12} lg={12} styles={{ marginBottom: "8%" }}>
        <DefaultCard
          headingText=" Our Medical Services "
          paragraphText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere quia, vero, 
            tempore, "
          textAlign="center"
        />
      </DefaultGridItem>
      <DefaultGridItem sm={6} md={6} lg={4} styles={{ marginBottom: "5%" }}>
        <DefaultCard headingText="Cancer Care" headingTag="h2" />
        <DefaultCard
          paragraphText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere quia, vero, tempore, 
            sit quis eum obcaecati ipsam mollitia minima ea repudiandae accusamus."
        >
          <IconAndViewFooter icon={<ArrowForwardIcon />} count="3" />
        </DefaultCard>
      </DefaultGridItem>
      <DefaultGridItem sm={6} md={6} lg={4} styles={{ marginBottom: "5%" }}>
        <DefaultCard headingText="Cancer Care" headingTag="h2" />
        <DefaultCard
          paragraphText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere quia, vero, tempore, 
            sit quis eum obcaecati ipsam mollitia minima ea repudiandae accusamus."
        >
          <IconAndViewFooter icon={<ArrowForwardIcon />} count="3" />
        </DefaultCard>
      </DefaultGridItem>
      <DefaultGridItem sm={6} md={6} lg={4} styles={{ marginBottom: "5%" }}>
        <DefaultCard headingText="Cancer Care" headingTag="h2" />
        <DefaultCard
          paragraphText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere quia, vero, tempore, 
            sit quis eum obcaecati ipsam mollitia minima ea repudiandae accusamus."
        >
          <IconAndViewFooter icon={<ArrowForwardIcon />} count="3" />
        </DefaultCard>
      </DefaultGridItem>
      <DefaultGridItem sm={6} md={6} lg={4} styles={{ marginBottom: "5%" }}>
        <DefaultCard headingText="Cancer Care" headingTag="h2" />
        <DefaultCard
          paragraphText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere quia, vero, tempore, 
            sit quis eum obcaecati ipsam mollitia minima ea repudiandae accusamus."
        >
          <IconAndViewFooter icon={<ArrowForwardIcon />} count="3" />
        </DefaultCard>
      </DefaultGridItem>
      <DefaultGridItem sm={6} md={6} lg={4} styles={{ marginBottom: "5%" }}>
        <DefaultCard headingText="Cancer Care" headingTag="h2" />
        <DefaultCard
          paragraphText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere quia, vero, tempore, 
            sit quis eum obcaecati ipsam mollitia minima ea repudiandae accusamus."
        >
          <IconAndViewFooter icon={<ArrowForwardIcon />} count="3" />
        </DefaultCard>
      </DefaultGridItem>
      <DefaultGridItem sm={6} md={6} lg={4} styles={{ marginBottom: "5%" }}>
        <DefaultCard headingText="Cancer Care" headingTag="h2" />
        <DefaultCard
          paragraphText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere quia, vero, tempore, 
            sit quis eum obcaecati ipsam mollitia minima ea repudiandae accusamus."
        >
          <IconAndViewFooter icon={<ArrowForwardIcon />} count="3" />
        </DefaultCard>
      </DefaultGridItem>
    </ThemeGrid>
  );
};

export default MedicalServices;
