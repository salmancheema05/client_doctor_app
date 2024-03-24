import React from "react";
import { DefaultDiv, FlipDivs } from "./divs";
import DefaultHeading from "./headings";
import DefaultParagraph from "./paragraphs";
import DefaultImage from "./images";
import { SquareBadge } from "./badges";
import { DefaultIcon } from "./icons";

const ProfileCard = ({
  component,
  shouldFlip = false,
  headingTag = "h1",
  imageSrc,
  imageWidth = "100px",
  imageHeight = "100px",
  textAlign = "left",
  headingText,
  paragraphText,
  children,
  title,
  iconHandler,
  profileicon = null,
  styles = {
    image: {},
    container: {},
    heading: {},
    paragraph: {},
    SquareBadge: {},
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
          <SquareBadge title={title} styles={styles.SquareBadge} />
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
          {profileicon ? (
            <DefaultIcon handler={iconHandler} icon={profileicon} />
          ) : (
            component
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
export { ProfileCard };
