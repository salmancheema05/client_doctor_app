import React from "react";

const DefaultSpan = ({ styles, children, handler = null, ...rest }) => {
  return (
    <span
      onClick={handler}
      style={{ cursor: handler ? "pointer" : " ", ...styles }}
      {...rest}
    >
      {children}
    </span>
  );
};

export { DefaultSpan };
