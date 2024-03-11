import React from "react";
import DefaultGrid from "./grids";
import DefaultGridItem from "./grids";
import { DefaultLinkImage } from "./links";
import logo from "../images/logo.png";
import DefaultParagraph from "./paragraphs";
import { CircleIcon } from "./icons";
const GuestFooter = () => {
  return (
    // <div style={{ padding: "5%", backgroundColor: "skyblue" }}>
    <DefaultGrid>
      <DefaultGridItem
        lg={4}
        styles={{ border: "1px solid black" }}
      ></DefaultGridItem>
      <DefaultGridItem
        lg={4}
        styles={{ border: "1px solid green" }}
      ></DefaultGridItem>
      <DefaultGridItem
        lg={4}
        styles={{ border: "1px solid yellow" }}
      ></DefaultGridItem>
      {/* <DefaultGridItem
          lg={3}
          styles={{ border: "1px solid blue" }}
        ></DefaultGridItem> */}
    </DefaultGrid>
    // </div>
  );
};

export default GuestFooter;
