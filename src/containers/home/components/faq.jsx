import React, { useState, useEffect } from "react";
import { ThemeGrid } from "../../../components/grids";
import DefaultGridItem from "../../../components/gridItems";
import { CardWithReversibleImage } from "../../../components/cards";
import doctor1 from "../../../images/doctorimage1.jpg";
import DeafaultAccordion from "./accordion";
const Faq = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <ThemeGrid>
      <DefaultGridItem sm={12} md={12} lg={12} xl={12}>
        <CardWithReversibleImage
          imageSrc={doctor1}
          imageWidth="400"
          imageHeight="450"
          headingTag="h1"
          headingText="Most Question by our  beloved patients"
          styles={{
            flipDivs: {
              container: {
                display: isMobile ? "" : "flex",
                justifyContent: "center",
              },
              div1: { paddingTop: "5%" },
              div2: { padding: isMobile ? "0px 0px" : "0px 100px" },
            },
            heading: { fontSize: isMobile ? "30px" : "40px", margin: "3% 0%" },
            image: { display: isMobile ? "none" : "" },
          }}
        >
          <DeafaultAccordion />
        </CardWithReversibleImage>
      </DefaultGridItem>
    </ThemeGrid>
  );
};

export default Faq;
