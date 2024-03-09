import React from "react";
import NavBar from "../components/navBar";
import { Outlet } from "react-router-dom";
import { DefaultDiv } from "../components/divs";

const GuestLayout = () => {
  return (
    <DefaultDiv>
      <NavBar />
      <Outlet />
    </DefaultDiv>
  );
};

export default GuestLayout;
