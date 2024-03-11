import React from "react";
import { DefaultBox } from "../../../components/boxes";
import DefaultGrid from "../../../components/grids";
import DefaultGridItem from "../../../components/gridItems";
import { CardWithReversibleImage } from "../../../components/cards";
import doctorImage2 from "../../../images/doctorimage2.jpg";
import { DefaultCardFooter } from "../../../components/cardFooter";

const BestNation = () => {
  return (
    <DefaultBox style={{ padding: "5%" }}>
      <DefaultGrid>
        <DefaultGridItem sm={12} md={12} lg={12}>
          <CardWithReversibleImage
            // shouldFlip={true}
            imageSrc={doctorImage2}
            imageWidth="80%"
            imageHeight="120%"
            headingText="Proud to be one of the nations best"
            paragraphText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere quia, vero, tempore, 
            sit quis eum obcaecati ipsam mollitia minima ea repudiandae accusamus.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere quia, vero, tempore, 
            sit quis eum obcaecati ipsam mollitia minima ea repudiandae accusamus.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere quia, vero, tempore, 
            sit quis eum obcaecati ipsam mollitia minima ea repudiandae accusamus.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere quia, vero, tempore, 
            sit quis eum obcaecati ipsam mollitia minima ea repudiandae accusamus.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere quia, vero, tempore, 
            sit quis eum obcaecati ipsam mollitia minima ea repudiandae accusamus.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere quia, vero, tempore, 
            sit quis eum obcaecati ipsam mollitia minima ea repudiandae accusamus.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere quia, vero, tempore, 
            sit quis eum obcaecati ipsam mollitia minima ea repudiandae accusamus.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere quia, vero, tempore, 
            sit quis eum obcaecati ipsam mollitia minima ea repudiandae accusamus."
            styles={{
              flipDivs: {
                container: {},
                div1: { width: "60%" },
              },
              heading: { fontSize: "50px" },
            }}
          >
            <DefaultCardFooter buttonKey="request_an_appointment">
              Learn More
            </DefaultCardFooter>
          </CardWithReversibleImage>
        </DefaultGridItem>
      </DefaultGrid>
    </DefaultBox>
  );
};

export default BestNation;
