import React from "react";
import { DefaultSpan } from "./spans";
import { DefaultIcon } from "./icons";

const CountBadge = ({ count }) => {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "5px 10px",
        backgroundColor: "blue",
        color: "#fff",
      }}
    >
      {count}
    </span>
  );
};

const SquareBadge = ({ title, styles }) => {
  return (
    <DefaultSpan
      style={{
        backgroundColor: "#badbdf",
        display: "inline-block",
        padding: "10px 30px",
        color: "#2d919c",
        ...styles,
      }}
    >
      {title}
    </DefaultSpan>
  );
};

const RatingAndReviewsCountBadge = ({ title, styles }) => {
  return (
    <DefaultSpan
      style={{
        display: "inline-block",
        padding: "5px 10px",
        color: "white",
        ...styles,
      }}
    >
      <DefaultIcon />
    </DefaultSpan>
  );
};

export { CountBadge, SquareBadge, RatingAndReviewsCountBadge };
