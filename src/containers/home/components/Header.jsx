import React from "react";
import DefaultBox from "../../../components/boxs";
import DefaultGrid from "../../../components/grids";
import DefaultGridItem from "../../../components/gridItems";
import DefaultDetail from "../../../components/details";
import { Heading, paragraph } from "../constants";
import DefaultButton from "../../../components/buttons";
import DefaultImage from "../../../components/images";
import doctorimage1 from "../../../images/doctorimage1.jpg";
import doctorimage2 from "../../../images/doctorimage2.jpg";
import doctorimage3 from "../../../images/doctorimage3.jpg";
const Header = () => {
  return (
    <>
      <DefaultBox styles={{ background: "lightblue" }} pt="5%" pb="10%">
        <DefaultGrid>
          <DefaultGridItem sm={6} md={6} lg={6}>
            <DefaultBox pl={"30%"} styles={{ lineHeight: 3 }}>
              <DefaultDetail headingText={Heading} headingType="h3" />
              <DefaultDetail paragraphText={paragraph} />
              <DefaultButton>Request an Appointment</DefaultButton>
            </DefaultBox>
          </DefaultGridItem>
          <DefaultGridItem sm={6} md={6} lg={6}>
            <DefaultBox styles={{}}>
              <DefaultGrid>
                <DefaultGridItem xs={6} sm={6} md={6} lg={6}>
                  <DefaultImage src={doctorimage2} styles={{ width: "100%" }} />
                </DefaultGridItem>
                <DefaultGridItem xs={6} sm={6} md={6} lg={6}>
                  <DefaultBox
                    styles={{
                      width: "100%",
                      height: "100%",
                    }}
                    mr={120}
                  >
                    <DefaultImage
                      src={doctorimage1}
                      styles={{ width: "100%", height: "50%" }}
                    />
                    {/* <DefaultImage
                      src={doctorimage3}
                      styles={{ width: "100%", height: "50%" }}
                    /> */}
                  </DefaultBox>
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
