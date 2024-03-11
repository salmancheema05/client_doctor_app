import React, { useState, useEffect } from "react";
import DefaultGrid from "./grids";
import DefaultGridItem from "./gridItems";
import logo from "../images/logo.png";
import { DefaultLinkImage, DefaultLi, LinkButtton } from "./links";
import { DefaultDynamicTagText } from "./dynamicTagTexts";

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900); // Adjust breakpoint as needed
    };

    // Initial check on mount
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <DefaultGrid
      styles={{
        backgroundColor: "LightBlue",
        height: "100px",
        marginTop: "0px",
      }}
    >
      {/* logo box start */}
      <DefaultGridItem
        xs={12}
        sm={12}
        md={3}
        lg={3}
        styles={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <DefaultLinkImage src={logo} to="/" styles={{ width: "100px" }} />
      </DefaultGridItem>
      {/* logo box end */}
      {/* Menu list and login Button box start  */}
      <DefaultGridItem
        xs={12}
        sm={12}
        md={9}
        lg={9}
        styles={{
          display: isMobile ? "none" : "",
          width: isMobile ? "100%" : "",
          backgroundColor: isMobile ? "skyblue" : "",
          zIndex: isMobile ? "1" : "",
          height: "100vh",
        }}
      >
        <DefaultGrid>
          {/* Menu list box start  */}
          <DefaultGridItem
            xs={12}
            sm={12}
            md={8}
            lg={8}
            styles={{
              marginTop: "2%",
            }}
          >
            <DefaultDynamicTagText
              tag="ul"
              styles={{
                display: isMobile ? "" : "flex",
                justifyContent: "space-between",
                listStyleType: "none",
              }}
            >
              <DefaultLi to="/">Home</DefaultLi>
              <DefaultLi to="services">Services</DefaultLi>
              <DefaultLi to="/finddoctor">Find A Doctor</DefaultLi>
              <DefaultLi>Contact</DefaultLi>
            </DefaultDynamicTagText>
          </DefaultGridItem>
          {/* Menu list box end  */}
          {/*login Button box start  */}
          <DefaultGridItem
            xs={12}
            sm={12}
            md={4}
            lg={4}
            styles={{
              marginTop: "1%",
              display: "flex",
              justifyContent: isMobile ? "left" : "center",
              marginLeft: isMobile ? "4%" : "center",
              marginBottom: isMobile ? "4%" : "",
            }}
          >
            <LinkButtton buttonKey="login" />
          </DefaultGridItem>
          {/*login Button box end  */}
        </DefaultGrid>
      </DefaultGridItem>
      {/* Menu list and login Button box end  */}
    </DefaultGrid>
  );
};

export default NavBar;
