import React from "react";

const DefaultSpan = ({ styles, children, ...rest }) => {
  return (
    <spen style={{ ...styles }} {...rest}>
      {children}
    </spen>
  );
};

export { DefaultSpan };
