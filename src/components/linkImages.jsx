import React from "react";
import { Link } from "react-router-dom";
const DefaultLinkImage = ({ src, style, to }) => {
  return (
    <>
      <Link to={to}>
        <img src={src} style={{ ...style }} />
      </Link>
    </>
  );
};

export default DefaultLinkImage;
