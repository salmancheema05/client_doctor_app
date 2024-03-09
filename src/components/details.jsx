import React from "react";
import { DefaultBox } from "./boxes";
import DefaultHeading from "./headings";
import DefaultParagraph from "./paragraphs";
import DefaultImage from "./images";

const DefaultDetail = ({
  varient = { headingType: "h2", paragraphType: "body2" },
  image = { src: null, width: null, height: null },
  textAlign = "left",
  headingText = null,
  paragraphText = null,
  handlers = { div: null, heading: null, paragraph: null },
  styles = { div: {}, heading: {}, paragraph: {} },
}) => {
  return (
    <DefaultBox
      handler={handlers.div}
      styles={{
        cursor: handlers.div ? "pointer" : "",
        textAlign,
        ...styles.div,
      }}
    >
      {headingText ? (
        <DefaultHeading
          handler={handlers.heading}
          styles={{
            cursor: handlers.heading ? "pointer" : "",
            ...styles.heading,
          }}
          variant={varient.headingType}
        >
          {headingText}
        </DefaultHeading>
      ) : null}
      {paragraphText ? (
        <DefaultParagraph
          variant={varient.paragraph}
          handler={handlers.paragraph}
          styles={{
            cursor: handlers.paragraph ? "pointer" : " ",
            ...styles.paragraph,
          }}
        >
          {paragraphText}
        </DefaultParagraph>
      ) : null}
    </DefaultBox>
  );
};
export default DefaultDetail;
