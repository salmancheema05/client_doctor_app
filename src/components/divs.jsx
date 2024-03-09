import React from "react";
const DefaultDiv = ({ children, styles, ...rest }) => {
  return (
    <div style={{ ...styles }} {...rest}>
      {children}
    </div>
  );
};
export { DefaultDiv };
