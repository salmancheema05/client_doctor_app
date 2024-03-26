import React, { useEffect, useState } from "react";
import { DefaultButton } from "./buttons";
import { DefaultDiv, FlipDivs } from "./divs";
import { CircleIcon, RatingWithViewsCount } from "./icons";
import { CountBadge, SquareBadge } from "./badges";
import DefaultParagraph from "./paragraphs";
import { ReadRating } from "./rating";
import { stringConvertInterger } from "../ulitity/functions";
const DefaultCardFooter = ({
  buttonKey = "default",
  handlers = { div: null, button: null },
  styles = { div: {}, button: {} },
}) => {
  return (
    <DefaultDiv
      handler={handlers.div}
      styles={{
        ...styles.div,
      }}
    >
      <DefaultButton
        buttonKey={buttonKey}
        handler={handlers.button}
        styles={{
          ...styles.button,
        }}
      />
    </DefaultDiv>
  );
};

const CircleIconCardFooter = ({ icon, styles }) => {
  return (
    <DefaultDiv style={{ ...styles }}>
      <CircleIcon icon={icon} />
    </DefaultDiv>
  );
};

const IconAndViewFooter = ({ styles, icon, count, handler }) => {
  return (
    <DefaultDiv
      style={{
        display: "flex",
        justifyContent: "space-between",
        ...styles,
      }}
    >
      <CircleIcon icon={icon} handler={handler} />
      <CountBadge count={count} />
    </DefaultDiv>
  );
};
const RatingWithViews = ({ textRatingAndViewsCount, starlength }) => {
  let selectedStar = stringConvertInterger(textRatingAndViewsCount, starlength);
  return (
    <div style={{ display: "flex", marginTop: "10px " }}>
      <ReadRating length={starlength} selectedStar={selectedStar} />
      <DefaultParagraph styles={{ paddingTop: "4px" }}>
        {textRatingAndViewsCount}
      </DefaultParagraph>
    </div>
  );
};

const RatingWithViewsCountAndSquareBadgeFooter = ({
  yourPost,
  shouldFlip,
  textRatingAndViewsCount,
  starlength,
}) => {
  let selectedStar = stringConvertInterger(textRatingAndViewsCount, starlength);

  return (
    <FlipDivs
      shouldFlip={shouldFlip}
      styles={{
        container: { display: "flex", justifyContent: "space-between" },
      }}
      content1={<SquareBadge title={yourPost} />}
      content2={
        <div style={{ display: "flex", marginTop: "10px " }}>
          <ReadRating length={starlength} selectedStar={selectedStar} />
          <DefaultParagraph styles={{ paddingTop: "4px" }}>
            {textRatingAndViewsCount}
          </DefaultParagraph>
        </div>
      }
    />
  );
};

const CircleIconAndTextFooter = ({
  styles,
  icon,
  string,
  handler = null,
  shouldFlip,
}) => {
  return (
    <FlipDivs
      shouldFlip={shouldFlip}
      styles={{
        container: {
          display: "flex",
          justifyContent: "space-between",

          ...styles,
        },
      }}
      content1={<CircleIcon icon={icon} handler={handler} />}
      content2={<DefaultParagraph>{string}</DefaultParagraph>}
    />
  );
};
export {
  DefaultCardFooter,
  IconAndViewFooter,
  CircleIconCardFooter,
  CircleIconAndTextFooter,
  RatingWithViewsCountAndSquareBadgeFooter,
  RatingWithViews,
};
