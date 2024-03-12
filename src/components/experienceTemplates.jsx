import React from "react";

import DefaultHeading from "./headings";
import DefaultParagraph from "./paragraphs";
const DefaultExperienceTemplate = ({
  instituteName,
  departmentName,
  startYear,
  endYear,
}) => {
  return (
    <div style={{ backgroundColor: "#fff8e7", padding: "3%" }}>
      <div>
        <DefaultParagraph styles={{ color: "#e5c58d" }}>
          {startYear}-{endYear}
        </DefaultParagraph>
      </div>
      <div>
        <DefaultHeading tag="h3">{departmentName}</DefaultHeading>
      </div>
      <div style={{ padding: "2% 0px" }}>
        <DefaultParagraph>{instituteName}</DefaultParagraph>
      </div>
    </div>
  );
};

export { DefaultExperienceTemplate };
