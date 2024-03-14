import React, { useState, useEffect } from "react";
import DefaultGrid from "../../../components/grids";
import DefaultGridItem from "../../../components/gridItems";
import { HEADING, PARAGRAPH } from "../constants";
import doctorimage1 from "../../../images/doctorimage1.jpg";
import doctorimage2 from "../../../images/doctorimage2.jpg";
import doctorimage3 from "../../../images/doctorimage3.jpg";
import { DefaultCardFooter } from "../../../components/cardFooter";
import { DefaultDiv } from "../../../components/divs";
import DefaultImage from "../../../components/images";
import { DefaultCard } from "../../../components/cards";

const Header = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 900) {
        // handle small screen
        setIsSmallScreen(true);
        setIsMediumScreen(false);
      } else if (width < 1200) {
        // handle medium screen
        setIsSmallScreen(false);
        setIsMediumScreen(true);
      } else {
        // handle large screen
        setIsSmallScreen(false);
        setIsMediumScreen(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <DefaultDiv
      styles={{
        background: "linear-gradient(to right, #bee8ef 10%, #fcfbfa 50%)",
        padding: "5% 5%",
      }}
    >
      <DefaultGrid spacing={10}>
        <DefaultGridItem sm={12} md={7} lg={6} xl={6}>
          <DefaultGrid rowSpacing={5}>
            <DefaultGridItem sm={12} md={12} lg={12} xl={12}>
              <DefaultCard
                headingText={HEADING}
                paragraphText={PARAGRAPH}
                styles={{ heading: { fontSize: "65px" } }}
              >
                <DefaultCardFooter buttonKey="request_an_appointment" />
              </DefaultCard>
            </DefaultGridItem>
            <DefaultGridItem sm={12} md={12} lg={12} xl={12}>
              <DefaultGrid>
                <DefaultGridItem sm={4} md={4} lg={4} xl={4}>
                  <DefaultCard
                    headingText={"30 +"}
                    paragraphText={"Years of Experience"}
                    tag="h1"
                  />
                </DefaultGridItem>
                <DefaultGridItem sm={4} md={4} lg={4}>
                  <DefaultCard
                    headingText={"15 +"}
                    paragraphText={"Clinic Location"}
                    tag="h1"
                  />
                </DefaultGridItem>
                <DefaultGridItem sm={4} md={4} lg={4}>
                  <DefaultCard
                    headingText={"100 %"}
                    paragraphText={"Patient Satisfaction"}
                    tag="h1"
                  />
                </DefaultGridItem>
              </DefaultGrid>
            </DefaultGridItem>
          </DefaultGrid>
        </DefaultGridItem>
        <DefaultGridItem
          sm={0}
          md={5}
          lg={6}
          styles={{
            display: isSmallScreen ? "none" : "",
          }}
        >
          <DefaultGrid>
            <DefaultGridItem xs={6} sm={6} md={12} lg={7}>
              <DefaultImage src={doctorimage1} width="100%" height="450" />
            </DefaultGridItem>
            <DefaultGridItem
              xs={6}
              sm={6}
              md={0}
              lg={5}
              styles={{ display: isMediumScreen ? "none" : "" }}
            >
              <DefaultGrid>
                <DefaultGridItem xs={6} sm={6} md={12} lg={12}>
                  <DefaultImage
                    src={doctorimage2}
                    width="100%"
                    height="230"
                    styles={{ marginTop: "40px" }}
                  />
                </DefaultGridItem>
                <DefaultGridItem xs={6} sm={6} md={12} lg={12}>
                  <DefaultImage src={doctorimage3} width="100%" height="230" />
                </DefaultGridItem>
              </DefaultGrid>
            </DefaultGridItem>
          </DefaultGrid>
        </DefaultGridItem>
      </DefaultGrid>
    </DefaultDiv>
  );
};

export default Header;
