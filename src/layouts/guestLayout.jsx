import React from "react";
import NavBar from "../components/navBar";
import { Outlet } from "react-router-dom";
import { DefaultDiv } from "../components/divs";
import GuestFooter from "../components/pageFooters";

const GuestLayout = () => {
  return (
    <DefaultDiv>
      <NavBar />
      <Outlet />

      <GuestFooter />
    </DefaultDiv>
  );
};

export default GuestLayout;
