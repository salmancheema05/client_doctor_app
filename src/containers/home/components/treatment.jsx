import React, { useState, useEffect } from "react";
import DefaultGrid, { ThemeGrid } from "../../../components/grids";
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
      setIsMobile(window.innerWidth < 900); // Adjust breakpoint as needed
    };

    // Initial check on mount
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ThemeGrid styles={{ padding: "5% 10%" }}>
      <DefaultGridItem sm={12} md={12} lg={12}>
        <CardWithReversibleImage
          shouldFlip={isMobile ? false : true}
          imageSrc={doctorImage2}
          imageWidth={isMobile ? "100%" : "300"}
          imageHeight={isMobile ? "350" : "400"}
          headingText="Get virtual treatment any time."
          styles={{
            flipDivs: {
              container: {
                display: isMobile ? "" : "flex",
                justifyContent: isMobile ? "center" : "",
              },
              div1: {},
            },
            heading: {
              fontSize: isMobile ? "35px" : "40px",
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
    </ThemeGrid>
  );
};

export default Treatment;
