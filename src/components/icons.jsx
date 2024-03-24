import React from "react";
import { IconButton } from "@mui/material";
import Icon from "@mui/material/Icon";
import DefaultParagraph from "./paragraphs";

const DefaultIcon = ({ handler = null, icon, styles }) => {
  return (
    <Icon
      onClick={handler}
      style={{
        cursor: handler ? "pointer" : " ",
        ...styles,
      }}
    >
      {icon}
    </Icon>
  );
};
const CircleIcon = ({ handler, icon, styles }) => {
  return (
    <IconButton
      onClick={handler}
      style={{
        height: "30px",
        width: "30px",
        border: "1px solid gray",
        borderRadius: "50%",
        color: "gray",
        ...styles,
      }}
    >
      {icon}
    </IconButton>
  );
};
const RatingWithViewsCount = ({
  handler,
  icon,
  styles,
  paragraphstyle,
  viewscount,
  iconcolor = "lightgray",
}) => {
  return (
    <div style={{ display: "flex" }}>
      <Icon
        style={{
          color: iconcolor,
          ...styles,
        }}
        onClick={handler}
      >
        {icon}
      </Icon>
      <DefaultParagraph styles={{ marginTop: "5px", ...paragraphstyle }}>
        {viewscount}
      </DefaultParagraph>
    </div>
  );
};

export { DefaultIcon, CircleIcon, RatingWithViewsCount };
