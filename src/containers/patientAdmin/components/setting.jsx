import React from "react";
import DefaultHeading from "../../../components/headings";
import DefaultGrid from "../../../components/grids";
import DefaultGridItem from "../../../components/gridItems";
import Form from "./form";

const Setting = () => {
  return (
    <DefaultGrid>
      <DefaultGridItem xs={12} sm={12} md={12} lg={12} xl={12}>
        <DefaultHeading>Profile Setting</DefaultHeading>
      </DefaultGridItem>
      <DefaultGridItem xs={12} sm={12} md={12} lg={12} xl={12}>
        <Form />
      </DefaultGridItem>
    </DefaultGrid>
  );
};

export default Setting;
