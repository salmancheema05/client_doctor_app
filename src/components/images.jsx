import React from "react";

const DefaultImage = ({ handler = null, styles, ...rest }) => {
  return (
    <img
      style={{
        cursor: handler ? "pointer" : "",
        borderRadius: "10px",
        ...styles,
      }}
      {...rest}
    />
  );
};

export default DefaultImage;
