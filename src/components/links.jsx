import React from "react";
import { Link } from "react-router-dom";
import { DefaultButton } from "./buttons";

const DefaultLinkImage = ({ src, to, styles }) => {
  return (
    <Link to={to}>
      <img src={src} style={{ ...styles }} />
    </Link>
  );
};
const LinkCircleImage = ({ src, to, styles }) => {
  return (
    <Link to={to}>
      <img
        src={src}
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "100%",
          overflow: "hidden",
          border: "2px solid gray",
          ...styles,
        }}
      />
    </Link>
  );
};
const DefaultLi = ({ children, to, styles }) => {
  return (
    <Link to={to} style={{ color: "gray", textDecoration: "none" }}>
      <li style={{ marginTop: "5%", marginBottom: "10%", ...styles }}>
        {children}
      </li>
    </Link>
  );
};
const LinkButtton = ({ btnName, to, styles, buttonKey }) => {
  return (
    <Link to={to}>
      <DefaultButton buttonKey={buttonKey}>{btnName}</DefaultButton>
    </Link>
  );
};

export { DefaultLinkImage, DefaultLi, LinkButtton, LinkCircleImage };
