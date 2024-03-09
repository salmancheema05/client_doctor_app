import React from "react";
import { DefaultButton } from "./buttons";
import { DefaultDiv } from "./divs";

const DefaultCardFooter = ({ buttonKey, children, styles }) => {
  return (
    <DefaultDiv style={{ ...styles }}>
      <DefaultButton buttonKey={buttonKey}>{children}</DefaultButton>
    </DefaultDiv>
  );
};

export { DefaultCardFooter };
