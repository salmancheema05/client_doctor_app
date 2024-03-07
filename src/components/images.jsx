import React from "react";

const DefaultImage = ({ src, styles }) => {
  return <img src={src} style={{ ...styles }} />;
};

export default DefaultImage;
