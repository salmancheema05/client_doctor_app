import React from "react";
import Box from "@mui/material/Box";
import DefaultHeading from "./headings";
import DefaultParagraph from "./paragraphs";
import DefaultImage from "./images";
import { DefaultDiv } from "./divs";

const DefaultCard = ({
  tag = "h1",
  textAlign = "left",
  headingText,
  paragraphText,
  children,
  handlers = { div: null, heading: null, paragraph: null },
  styles = { div: {}, heading: {}, paragraph: {} },
}) => {
  return (
    <DefaultDiv
      style={{
        textAlign,
        ...styles.div,
      }}
    >
      <DefaultHeading
        tag={tag}
        handler={handlers.heading}
        styles={{
          marginBottom: "15px",
          ...styles.heading,
        }}
      >
        {headingText}
      </DefaultHeading>
      <DefaultParagraph
        handler={handlers.paragraph}
        styles={{
          marginBottom: "15px",
          ...styles.paragraph,
        }}
      >
        {paragraphText}
      </DefaultParagraph>
      {children}
    </DefaultDiv>
  );
};

const CardWithImage = ({
  children,
  headingText,
  paragraphText,
  tag,
  src,
  textAlign,
  imageWidth,
  imageHeight,
  position = "",
  styles = { image: {}, div: {}, heading: {}, paragraph: {}, cardStyle: {} },
  handlers = { image: null, div: null, heading: null, paragraph: null },
}) => {
  return (
    <DefaultDiv
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: position,
        ...styles.cardStyle,
      }}
    >
      <DefaultImage
        src={src}
        width={imageWidth}
        height={imageHeight}
        styles={{
          cursor: handlers.image ? "pointer" : "",
          ...styles.image,
        }}
      />
      <DefaultDiv style={{ display: "flex", flexDirection: "column" }}>
        <DefaultHeading
          tag={tag}
          textAlign={textAlign}
          handler={handlers.heading}
          styles={{
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
      </DefaultDiv>
      <div>{children}</div>
    </DefaultDiv>
  );
};

export { DefaultCard, CardWithImage };
