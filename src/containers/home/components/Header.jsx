import React from "react";
import { DefaultBox } from "../../../components/boxs";
import DefaultGrid from "../../../components/grids";
import DefaultGridItem from "../../../components/gridItems";
import { Heading, paragraph } from "../constants";
import doctorimage1 from "../../../images/doctorimage1.jpg";
import doctorimage2 from "../../../images/doctorimage2.jpg";
import doctorimage3 from "../../../images/doctorimage3.jpg";
import { DefaultCard, CardWithImage } from "../../../components/cards";

const Header = () => {
  return (
    <>
      <DefaultBox styles={{ padding: "5%", background: "lightblue" }}>
        <DefaultGrid>
          <DefaultGridItem sm={6} md={6} lg={6}>
            <DefaultCard
              headingText={Heading}
              paragraphText={paragraph}
              tag="h2"
            ></DefaultCard>
          </DefaultGridItem>
          <DefaultGridItem sm={6} md={6} lg={6}>
            <DefaultBox styles={{}}>
              <DefaultGrid>
                <DefaultGridItem xs={6} sm={6} md={8} lg={8}>
                  <CardWithImage
                    src={doctorimage1}
                    imageWidth="100%"
                    imageHight="100%"
                  />
                </DefaultGridItem>
                <DefaultGridItem xs={6} sm={6} md={4} lg={4}>
                  <div>
                    <CardWithImage
                      src={doctorimage2}
                      imageWidth="100%"
                      imageHight="100%"
                    />

                    <CardWithImage
                      src={doctorimage3}
                      imageWidth="100%"
                      imageHight="100%"
                    />
                  </div>
                </DefaultGridItem>
              </DefaultGrid>
            </DefaultBox>
          </DefaultGridItem>
        </DefaultGrid>
      </DefaultBox>
    </>
  );
};
export default Header;
