import React from "react";

const DefaultImage = ({ handler = null, styles, ...rest }) => {
  return (
    <img
      style={{
        cursor: handler ? "pointer" : "",
        borderRadius: "10px",
        ...styles,
      }}
      onClick={handler}
      {...rest}
    />
  );
};
export default DefaultImage;
export const CircleImage = ({ handler = null, styles, ...rest }) => {
  let CircleImageStyle = {
    width: "60px",
    height: "60px",
    borderRadius: "100%",
    overflow: "hidden",
    border: "2px solid gray",
    cursor: handler ? "pointer" : "",
    ...styles,
  };
  return (
    <img
      width="100%"
      height="100%"
      onClick={handler}
      {...rest}
      style={CircleImageStyle}
    />
  );
};
