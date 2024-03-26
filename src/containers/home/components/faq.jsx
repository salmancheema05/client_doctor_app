import React from "react";
import { ThemeGrid } from "../../../components/grids";
import DefaultGridItem from "../../../components/gridItems";
import { CardWithReversibleImage } from "../../../components/cards";
import doctor1 from "../../../images/doctorimage1.jpg";
import DeafaultAccordion from "./accordion";
const Faq = () => {
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
                display: "flex",
                justifyContent: "center",
              },
              div1: { paddingTop: "5%" },
              div2: { padding: "0px 100px" },
            },
            heading: { fontSize: "40px", margin: "3% 0%" },
          }}
        >
          <DeafaultAccordion />
        </CardWithReversibleImage>
      </DefaultGridItem>
    </ThemeGrid>
  );
};

export default Faq;
