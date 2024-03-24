import React from "react";
import { DefaultButton } from "./buttons";
import { DefaultDiv, FlipDivs } from "./divs";
import { CircleIcon, RatingWithViewsCount } from "./icons";
import { CountBadge, SquareBadge } from "./badges";
import DefaultParagraph from "./paragraphs";

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

const RatingWithViewsCountAndSquareBadgeFooter = ({
  styles,
  icon,
  title,
  handler,
  shouldFlip,
  viewscount,
  iconcolor,
}) => {
  return (
    <FlipDivs
      shouldFlip={shouldFlip}
      styles={{
        container: { display: "flex", justifyContent: "space-between" },
      }}
      content1={<SquareBadge title={title} />}
      content2={
        <RatingWithViewsCount
          icon={icon}
          viewscount={viewscount}
          handler={handler}
          iconcolor={iconcolor}
        />
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
  RatingWithViewsCountAndSquareBadgeFooter,
  CircleIconAndTextFooter,
};
