import React from "react";
import { DefaultBox } from "../../../components/boxes";
import DefaultGrid from "../../../components/grids";
import DefaultGridItem from "../../../components/gridItems";
import { CardWithImage } from "../../../components/cards";
import doctorImage2 from "../../../images/doctorimage2.jpg";
const BestNation = () => {
  return (
    <DefaultBox style={{ padding: "5%" }}>
      <DefaultGrid>
        <DefaultGridItem sm={12} md={12} lg={12}>
          <CardWithImage
            src={doctorImage2}
            imageWidth="50%"
            imageHight="100%"
            imageDirection="row"
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

export default BestNation;
