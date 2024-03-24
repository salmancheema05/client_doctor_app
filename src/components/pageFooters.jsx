import React, { useState, useEffect } from "react";
import DefaultGrid, { ThemeGrid } from "./grids";
import DefaultGridItem from "./grids";
import { DefaultLi, DefaultLinkImage } from "./links";
import logo from "../images/logo.png";
import DefaultParagraph from "./paragraphs";
import { CircleIcon } from "./icons";
import DefaultHeading from "./headings";
import { DefaultDynamicTagText } from "./dynamicTagTexts";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { useTheme } from "@mui/material/styles";
const GuestFooter = () => {
  const theme = useTheme();
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200 && window.innerWidth > 600); // Adjust breakpoint as needed
    };

    // Initial check on mount
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ThemeGrid styles={{ backgroundColor: theme.background.footerBg }}>
      <DefaultGridItem xs={6} sm={6} md={4} lg={3} xl={3}>
        <div
          style={{ width: "100%", marginBottom: "20px", padding: "0px 10px " }}
        >
          <DefaultLinkImage src={logo} to="/" styles={{ width: "100px" }} />
        </div>
        <div
          style={{ width: "100%", marginBottom: "20px", padding: "0px 10px " }}
        >
          <DefaultParagraph>Copyright 2024</DefaultParagraph>
        </div>
        <div style={{ width: "100%", marginBottom: "20px" }}>
          <CircleIcon icon={<FaFacebookF />} styles={{ marginRight: "10px" }} />
          <CircleIcon icon={<FaInstagram />} styles={{ marginRight: "10px" }} />
          <CircleIcon icon={<FaTwitter />} styles={{ marginRight: "10px" }} />
          <CircleIcon
            icon={<FaLinkedinIn />}
            styles={{ marginRight: "10px" }}
          />
        </div>
      </DefaultGridItem>

      <DefaultGridItem xs={6} sm={6} md={4} lg={3} xl={3}>
        <div style={{ width: "100%" }}>
          <DefaultHeading tag="h2">Quick Links</DefaultHeading>
        </div>
        <div style={{ marginTop: "20px" }}>
          <DefaultDynamicTagText tag="ul" styles={{ listStyleType: "none" }}>
            <DefaultLi styles={{ marginBottom: "20px" }}>Home</DefaultLi>
            <DefaultLi styles={{ marginBottom: "20px" }}>About Us</DefaultLi>
            <DefaultLi styles={{ marginBottom: "20px" }}>Services</DefaultLi>
            <DefaultLi styles={{ marginBottom: "20px" }}>Blog</DefaultLi>
          </DefaultDynamicTagText>
        </div>
      </DefaultGridItem>

      <DefaultGridItem xs={6} sm={6} md={4} lg={3} xl={3}>
        <div style={{ width: "100%" }}>
          <DefaultHeading tag="h2">I want to:</DefaultHeading>
        </div>
        <div style={{ marginTop: "20px" }}>
          <DefaultDynamicTagText tag="ul" styles={{ listStyleType: "none" }}>
            <DefaultLi styles={{ marginBottom: "20px" }}>Home</DefaultLi>
            <DefaultLi styles={{ marginBottom: "20px" }}>About Us</DefaultLi>
            <DefaultLi styles={{ marginBottom: "20px" }}>Services</DefaultLi>
            <DefaultLi styles={{ marginBottom: "20px" }}>Blog</DefaultLi>
          </DefaultDynamicTagText>
        </div>
      </DefaultGridItem>
      <DefaultGridItem xs={6} sm={6} md={4} lg={3} xl={3} styles={{}}>
        <div style={{ width: "100%", paddingLeft: "5%" }}>
          <DefaultHeading tag="h2">Support</DefaultHeading>
        </div>
        <div style={{ marginTop: isMobile ? "20px" : "-50px" }}>
          <DefaultDynamicTagText tag="ul" styles={{ listStyleType: "none" }}>
            <DefaultLi styles={{ marginBottom: "20px" }}>Home</DefaultLi>
            <DefaultLi styles={{ marginBottom: "20px" }}>About Us</DefaultLi>
          </DefaultDynamicTagText>
        </div>
      </DefaultGridItem>
    </ThemeGrid>
  );
};

export default GuestFooter;
