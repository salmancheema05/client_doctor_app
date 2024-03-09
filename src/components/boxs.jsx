import React from "react";
const DefaultBox = ({ children, styles, ...rest }) => {
  return (
    <div style={{ ...styles }} {...rest}>
      {children}
    </div>
  );
};
export { DefaultBox };
