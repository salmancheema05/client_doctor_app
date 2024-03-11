import React, { useState, useEffect } from "react";
import { DefaultBox } from "../../../components/boxes";
import DefaultGrid from "../../../components/grids";
import DefaultGridItem from "../../../components/gridItems";
import { CardWithReversibleImage } from "../../../components/cards";
import doctorImage2 from "../../../images/doctorimage2.jpg";
import { DefaultCardFooter } from "../../../components/cardFooter";
import { DefaultDynamicTagText } from "../../../components/dynamicTagTexts";
import { DefaultLi } from "../../../components/links";
const Treatment = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1100); // Adjust breakpoint as needed
    };

    // Initial check on mount
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <DefaultBox style={{ padding: "5%" }}>
      <DefaultGrid>
        <DefaultGridItem sm={12} md={12} lg={12}>
          <CardWithReversibleImage
            shouldFlip={true}
            imageSrc={doctorImage2}
            imageWidth="80%"
            imageHeight="100%"
            headingText="Get virtual treatment any time."
            styles={{
              flipDivs: {
                container: {
                  marginLeft: "0%",
                  marginRight: "0%",
                },
                div1: { width: "60%" },
              },
              heading: {
                fontSize: isMobile ? "55px" : "70px",
                color: isMobile ? "blue" : "",
              },
            }}
          >
            <DefaultDynamicTagText tag="ol">
              <DefaultLi>Schedule the appointment directly</DefaultLi>
              <DefaultLi>Schedule the appointment directly</DefaultLi>
              <DefaultLi>Schedule the appointment directly</DefaultLi>
            </DefaultDynamicTagText>
            <DefaultCardFooter buttonKey="request_an_appointment">
              Learn More
            </DefaultCardFooter>
          </CardWithReversibleImage>
        </DefaultGridItem>
      </DefaultGrid>
    </DefaultBox>
  );
};

export default Treatment;
