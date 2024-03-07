import React from "react";
import DefaultBox from "./boxs";
import DefaultHeading from "./headings";
import DefaultParagraph from "./paragraphs";
const DefaultDetail = ({
  headingType = "h2",
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
        cursor: handlers.div ?? "pointer",
        textAlign,
        ...styles.div,
      }}
    >
      {headingText ? (
        <DefaultHeading
          handler={handlers.heading}
          styles={{ cursor: handlers.div ?? "pointer", ...styles.heading }}
          variant={headingType}
        >
          {headingText}
        </DefaultHeading>
      ) : null}
      {paragraphText ? (
        <DefaultParagraph
          handler={handlers.paragraph}
          styles={{ cursor: handlers.div ?? "pointer", ...styles.paragraph }}
        >
          {paragraphText}
        </DefaultParagraph>
      ) : null}
    </DefaultBox>
  );
};
export default DefaultDetail;
