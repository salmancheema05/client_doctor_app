import React from "react";
import NavBar from "../components/navBar";

const GuestLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

export default GuestLayout;
