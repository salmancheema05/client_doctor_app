import React from "react";
import Box from "@mui/material/Box";
import DefaultHeading from "./headings";
import DefaultParagraph from "./paragraphs";
import DefaultImage from "./images";
import { DefaultDiv, FlipDivs } from "./divs";

const DefaultCard = ({
  customHeading = null,
  headingTag = "h1",
  textAlign = "left",
  headingText,
  paragraphText,
  children,
  handlers = { div: null, heading: null, paragraph: null },
  styles = { div: {}, heading: {}, paragraph: {} },
}) => {
  return (
    <DefaultDiv
      handler={handlers.div}
      style={{
        textAlign,
        ...styles.div,
      }}
    >
      {customHeading ? (
        customHeading
      ) : (
        <DefaultHeading
          tag={headingTag}
          handler={handlers.heading}
          styles={{
            marginBottom: "15px",
            ...styles.heading,
          }}
        >
          {headingText}
        </DefaultHeading>
      )}
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
  customHeading = null,
  headingTag = "h1",
  imageSrc,
  imageWidth = "100px",
  imageHeight = "100px",
  textAlign = "left",
  imagePosition = "left",
  headingText,
  paragraphText,
  children,
  styles = {
    image: {},
    container: {},
    heading: {},
    paragraph: {},
    imageContainer: {},
  },
  handlers = {
    image: null,
    container: null,
    heading: null,
    paragraph: null,
    imageContainer: null,
  },
}) => {
  return (
    <DefaultDiv
      handler={handlers.container}
      style={{
        textAlign,
        ...styles.container,
      }}
    >
      <DefaultDiv
        handler={handlers.imageContainer}
        styles={{
          display: "flex",
          justifyContent: imagePosition,
          ...styles.imageContainer,
        }}
      >
        <DefaultImage
          src={imageSrc}
          handler={handlers.image}
          width={imageWidth}
          height={imageHeight}
          styles={{
            ...styles.image,
          }}
        />
      </DefaultDiv>
      {customHeading ? (
        customHeading
      ) : (
        <DefaultHeading
          tag={headingTag}
          handler={handlers.heading}
          styles={{
            marginBottom: "15px",
            ...styles.heading,
          }}
        >
          {headingText}
        </DefaultHeading>
      )}
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

const CardWithReversibleImage = ({
  shouldFlip = false,
  headingTag = "h1",
  imageSrc,
  imageWidth = "100px",
  imageHeight = "100px",
  textAlign = "left",
  headingText,
  paragraphText,
  children,
  styles = {
    image: {},
    container: {},
    heading: {},
    paragraph: {},
    flipDivs: { container: {}, div1: {}, div2: {} },
  },
  handlers = {
    image: null,
    container: null,
    heading: null,
    paragraph: null,
    flipDivs: { container: null, div1: null, div2: null },
  },
}) => {
  return (
    <FlipDivs
      shouldFlip={shouldFlip}
      content1={
        <DefaultImage
          src={imageSrc}
          handler={handlers.image}
          width={imageWidth}
          height={imageHeight}
          styles={{
            ...styles.image,
          }}
        />
      }
      content2={
        <DefaultDiv
          handler={handlers.container}
          style={{
            textAlign,
            ...styles.container,
          }}
        >
          <DefaultHeading
            tag={headingTag}
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
      }
      styles={{
        container: { ...styles.flipDivs.container },
        div1: { ...styles.flipDivs.div1 },
        div2: { width: "100%", ...styles.flipDivs.div2 },
      }}
      handlers={handlers.flipDivs}
    />
  );
};

export { DefaultCard, CardWithImage, CardWithReversibleImage };
