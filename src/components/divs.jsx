import React from "react";
const DefaultDiv = ({ children, styles, ...rest }) => {
  return (
    <div style={{ ...styles }} {...rest}>
      {children}
    </div>
  );
};

const FlipDivs = ({
  shouldFlip = false,
  content1,
  content2,
  styles = {
    container: {},
    div1: {},
    div2: {},
  },
  handlers = {
    container: null,
    div1: null,
    div2: null,
  },
}) => {
  return (
    <div
      style={{ display: "flex", ...styles.container }}
      onClick={handlers.container}
    >
      <div
        style={{ order: shouldFlip ? 2 : 1, ...styles.div1 }}
        onClick={handlers.div1}
      >
        {content1}
      </div>
      <div
        style={{ order: shouldFlip ? 1 : 2, ...styles.div2 }}
        onClick={handlers.div2}
      >
        {content2}
      </div>
    </div>
  );
};

export { DefaultDiv, FlipDivs };
