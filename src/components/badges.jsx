import React from "react";
import { DefaultSpan } from "./spans";
import { DefaultIcon } from "./icons";

const CountBadge = ({ count, styles, handler = null, ...rest }) => {
  return (
    <DefaultSpan
      styles={{
        display: "inline-block",
        padding: "5px 10px",
        backgroundColor: "blue",
        color: "#fff",
        ...styles,
      }}
      handler={handler}
      {...rest}
    >
      {count}
    </DefaultSpan>
  );
};

const SquareBadge = ({ title, styles, handler = null, ...rest }) => {
  return (
    <DefaultSpan
      styles={{
        backgroundColor: "#badbdf",
        display: "inline-block",
        padding: "10px 30px",
        color: "#2d919c",
        ...styles,
      }}
      handler={handler}
      {...rest}
    >
      {title}
    </DefaultSpan>
  );
};

const RatingAndReviewsCountBadge = ({ styles, handler = null, ...rest }) => {
  return (
    <DefaultSpan
      styles={{
        display: "inline-block",
        padding: "5px 10px",
        color: "white",
        ...styles,
      }}
      handler={handler}
      {...rest}
    >
      <DefaultIcon />
    </DefaultSpan>
  );
};

export { CountBadge, SquareBadge, RatingAndReviewsCountBadge };
