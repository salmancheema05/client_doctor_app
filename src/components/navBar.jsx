import React, { useState, useEffect } from "react";
import DefaultGrid from "./grids";
import DefaultGridItem from "./gridItems";
import logo from "../images/logo.png";
import { DefaultLinkImage, DefaultLi, LinkButtton } from "./links";
import { DefaultDynamicTagText } from "./dynamicTagTexts";
import { useSelector } from "react-redux";
import { LinkCircleImage } from "./links";
import Doctor2 from "../images/doctorimage2.jpg";
import { useTheme } from "@mui/material/styles";
import Switch from "./switch";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import ToggleButton from "@mui/material/ToggleButton";
const NavBar = () => {
  const theme = useTheme();
  const token = useSelector((state) => state.login.user?.token);
  const user_status = useSelector((state) => state.login.user?.user_status);

  const [isMobile, setIsMobile] = useState(false);
  const [isLageScreen, setIsLageScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 900) {
        console.log("mobile");
        setIsMobile(true);
        setIsLageScreen(false);
      } else if (width >= 900) {
        console.log("large");
        setIsMobile(false);
        setIsLageScreen(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <DefaultGrid
      styles={{
        background: theme.background.color,
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
          justifyContent: "space-between",
        }}
      >
        {isMobile ? (
          <ToggleButton>
            <FormatAlignJustifyIcon />
          </ToggleButton>
        ) : null}

        <DefaultLinkImage
          src={logo}
          to="/"
          styles={{ width: "100px", marginLeft: "30px" }}
        />
        {isMobile ? <Switch styles={{ marginRight: "30px" }} /> : null}
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
          background: isMobile ? theme.background.color : "",
          zIndex: isMobile ? "1000" : "",
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
              justifyContent: isMobile ? "left" : "space-around",
              marginLeft: isMobile ? "4%" : "center",
              marginBottom: isMobile ? "4%" : "",
            }}
          >
            {token ? (
              <LinkCircleImage
                to={`${user_status}admin`}
                src={Doctor2}
                styles={{ width: "40px", height: "40px", borderRadius: "100%" }}
              />
            ) : (
              <LinkButtton buttonKey="login" to="/login" />
            )}
            {isLageScreen ? <Switch styles={{ marginRight: "30px" }} /> : null}
          </DefaultGridItem>

          {/*login Button box end  */}
        </DefaultGrid>
      </DefaultGridItem>
      {/* Menu list and login Button box end  */}
    </DefaultGrid>
  );
};

export default NavBar;
