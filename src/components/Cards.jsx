import React from "react";
import Box from "@mui/material/Box";
import DefaultHeading from "./headings";
import DefaultParagraph from "./paragraphs";
import DefaultImage from "./images";

const DefaultCard = ({
  children,
  headingText,
  paragraphText,
  handlers = { div: null, heading: null, paragraph: null },
  tag,
  textAlign,
  styles = { div: {}, heading: {}, paragraph: {}, cardStyle: {} },
}) => {
  return (
    <div style={{ width: "100%", height: "100%", ...styles.cardStyle }}>
      <DefaultHeading
        Tag={tag}
        textAlign={textAlign}
        handler={handlers.heading}
        styles={{
          cursor: handlers.heading ? "pointer" : "",
          ...styles.heading,
        }}
      >
        {headingText}
      </DefaultHeading>
      <DefaultParagraph
        textAlign={textAlign}
        styles={{
          cursor: handlers.paragraph ? "pointer" : " ",
          ...styles.paragraph,
        }}
      >
        {paragraphText}
      </DefaultParagraph>
      <div>{children}</div>
    </div>
  );
};
const CardWithImage = ({
  children,
  headingText,
  paragraphText,
  handlers = { div: null, heading: null, paragraph: null },
  tag,
  src,
  textAlign,
  imageWidth,
  imageHight,
  imageDirection = "column",
  position = "",
  styles = { div: {}, heading: {}, paragraph: {}, cardStyle: {} },
}) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: imageDirection,
        justifyContent: "space-around",
        alignItems: position,
        ...styles.cardStyle,
      }}
    >
      <DefaultImage src={src} width={imageWidth} height={imageHight} />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <DefaultHeading
          Tag={tag}
          textAlign={textAlign}
          handler={handlers.heading}
          styles={{
            cursor: handlers.heading ? "pointer" : "",
            ...styles.heading,
          }}
        >
          {headingText}
        </DefaultHeading>
        <DefaultParagraph
          textAlign={textAlign}
          styles={{
            cursor: handlers.paragraph ? "pointer" : " ",
            ...styles.paragraph,
          }}
        >
          {paragraphText}
        </DefaultParagraph>
      </div>
      <div>{children}</div>
    </div>
  );
};

export { DefaultCard, CardWithImage };
