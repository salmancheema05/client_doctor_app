import React from "react";
import NavBar from "../components/navBar";
import { Outlet } from "react-router-dom";
import { DefaultDiv } from "../components/divs";
import GuestFooter from "../components/pageFooters";
import { DefaultInput, DefaultSelectInput } from "../components/Inputs";

const GuestLayout = () => {
  return (
    <DefaultDiv>
      <NavBar />
      <Outlet />

      <div style={{ margin: "10% 10%" }}>
        <DefaultInput />
        <DefaultSelectInput />
      </div>

      {/* <GuestFooter /> */}
    </DefaultDiv>
  );
};

export default GuestLayout;
