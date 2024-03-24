import React from "react";
import DefaultHeading from "./headings";
import DefaultParagraph from "./paragraphs";
import { useTheme } from "@mui/material/styles";
const DefaultExperienceTemplate = ({
  instituteName,
  departmentName,
  startYear,
  endYear,
}) => {
  const theme = useTheme();
  return (
    <div style={{ backgroundColor: theme.background.box, padding: "3%" }}>
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
