import React, { useState, useEffect } from "react";
import { ThemeGrid } from "../../../components/grids";
import DefaultGridItem from "../../../components/gridItems";
import { CardWithReversibleImage } from "../../../components/cards";
import doctorImage2 from "../../../images/doctorimage2.jpg";
import { DefaultCardFooter } from "../../../components/cardFooter";
const BestNation = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 960);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <ThemeGrid>
      <DefaultGridItem sm={12} md={12} lg={12}>
        <CardWithReversibleImage
          //shouldFlip={true}
          imageSrc={doctorImage2}
          imageWidth={isMobile ? "100%" : "300"}
          imageHeight={isMobile ? "350" : "400"}
          headingTag="h1"
          headingText="Proud to be one of the nations best"
          paragraphText={
            <>
              <div style={{ marginBottom: "10px" }}>
                {
                  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere quia, vero, tempore,sit quis eum obcaecati ipsam mollitia minima ea repudiandae accusamus.Lorem ipsum dolor sit amet consectetur, adipisicing elit."
                }
              </div>
              <div style={{ marginBottom: "50px" }}>
                {
                  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere quia, vero, tempore,sit quis eum obcaecati ipsam mollitia minima ea repudiandae accusamus.Lorem ipsum dolor sit amet consectetur, adipisicing elit."
                }
              </div>
            </>
          }
          styles={{
            flipDivs: {
              container: {
                display: isMobile ? "" : "flex",
                justifyContent: isMobile ? "" : "center",
              },
              div2: { padding: isMobile ? "0px 0px" : "0px 100px" },
            },
            heading: {
              fontSize: isMobile ? "25px" : "50px",
              margin: "3% 0%",
            },
            paragraph: { lineHeight: "25px" },
          }}
        >
          <DefaultCardFooter
            buttonKey="learn_more"
            styles={{
              div: {
                display: "flex",
                flexDirction: "column",
                alignItems: "flex-end",
              },
            }}
          />
        </CardWithReversibleImage>
      </DefaultGridItem>
    </ThemeGrid>
  );
};

export default BestNation;
