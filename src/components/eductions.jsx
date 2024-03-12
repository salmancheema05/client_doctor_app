import React from "react";
import DefaultGrid from "./grids";
import DefaultGridItem from "./gridItems";
import DefaultHeading from "./headings";
import DefaultParagraph from "./paragraphs";

const DefaultEduction = ({
  headingTag = "h4",
  educationArray = [],
  styles = {
    heading: {},
    degreeNameParagraph: { marginTop: "10px" },
    instituteNameParagraph: { marginTop: "30px" },
  },
}) => {
  return (
    <DefaultGrid>
      <DefaultGridItem xs={12} sm={12} md={12} lg={12} xl={12}>
        <DefaultHeading>Eduction</DefaultHeading>
      </DefaultGridItem>
      {educationArray.map((item) => (
        <DefaultGridItem xs={12} sm={12} md={12} lg={12} xl={12}>
          <DefaultGrid>
            <DefaultGridItem xs={12} sm={6} md={16} lg={6} xl={6}>
              <DefaultHeading tag={headingTag} styles={styles.heading}>
                {item.startYear}-{item.endYear}
              </DefaultHeading>
              <DefaultParagraph styles={styles.degreeNameParagraph}>
                {item.degreeName}
              </DefaultParagraph>
            </DefaultGridItem>
            <DefaultGridItem
              xs={12}
              sm={6}
              md={16}
              lg={6}
              xl={6}
              styles={{ display: "flex", justifyContent: "right" }}
            >
              <DefaultParagraph styles={styles.instituteNameParagraph}>
                {item.instituteName}
              </DefaultParagraph>
            </DefaultGridItem>
          </DefaultGrid>
        </DefaultGridItem>
      ))}
    </DefaultGrid>
  );
};

export default DefaultEduction;
