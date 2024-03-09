import React from "react";
import { DefaultBox } from "./boxs";
import DefaultGrid from "./grids";
import DefaultGridItem from "./gridItems";
import DefaultLinkImage from "./linkImages";
import DefaultUl from "./uls";
import DefaultMenuItem from "./menuItems";
import { DefaultButton } from "./buttons";
import logo from "../images/logo.png";
const NavBar = () => {
  return (
    <DefaultBox styles={{ background: "lightblue" }} pl={20} pt={2} pb={2}>
      <DefaultGrid>
        <DefaultGridItem sm={12} md={4} lg={4}>
          <DefaultLinkImage src={logo} to={"/"} style={{ width: "18%" }} />
        </DefaultGridItem>
        <DefaultGridItem sm={12} md={4} lg={4}>
          <DefaultUl>
            <DefaultMenuItem color="white">Home</DefaultMenuItem>
            <DefaultMenuItem color="white">Service</DefaultMenuItem>
            <DefaultMenuItem color="white">Find A Doctor</DefaultMenuItem>
            <DefaultMenuItem color="white">Contact </DefaultMenuItem>
          </DefaultUl>
        </DefaultGridItem>
        <DefaultGridItem sm={12} md={4} lg={4}>
          <DefaultBox>
            <DefaultButton>login</DefaultButton>
          </DefaultBox>
        </DefaultGridItem>
      </DefaultGrid>
    </DefaultBox>
  );
};

export default NavBar;
