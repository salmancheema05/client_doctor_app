import React from "react";
import { Link } from "react-router-dom";
import { DefaultButton } from "./buttons";
import { useTheme } from "@mui/material/styles";
const DefaultLinkImage = ({ src, to, styles }) => {
  return (
    <Link to={to}>
      <img src={src} style={{ ...styles }} />
    </Link>
  );
};
const LinkCircleImage = ({ src, to, styles, ...rest }) => {
  return (
    <Link to={to}>
      <img
        src={src}
        {...rest}
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
const DefaultLi = ({ children, to, styles, ...rest }) => {
  const theme = useTheme();
  return (
    <Link to={to} style={{ color: theme.menu.main, textDecoration: "none" }}>
      <li style={{ marginTop: "5%", marginBottom: "10%", ...styles }} {...rest}>
        {children}
      </li>
    </Link>
  );
};
const LinkButtton = ({ to, styles, buttonKey }) => {
  return (
    <Link to={to}>
      <DefaultButton buttonKey={buttonKey} styles={{ ...styles }} />
    </Link>
  );
};

export { DefaultLinkImage, DefaultLi, LinkButtton, LinkCircleImage };
