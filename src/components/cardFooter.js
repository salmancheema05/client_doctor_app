import React from "react";
import { DefaultButton } from "./buttons";

const DefaultCardFooter = ({ whichButton, children, styles }) => {
  return (
    <div style={{ margin: "3%", ...styles }}>
      <DefaultButton whichButton={whichButton}>{children}</DefaultButton>
    </div>
  );
};

export { DefaultCardFooter };
