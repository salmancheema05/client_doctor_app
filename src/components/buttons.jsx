import { Button } from "@mui/material";
import React from "react";

const buttonMappings = {
  default: {
    name: "Default",
    style: {
      backgroundColor: "#1a5bff",
      width: "100%",
      color: "white",
      padding: "10px ",
      borderRadius: "10px",
    },
  },
  out_line: {
    name: "Out Line",
    style: {
      padding: "5px 20px",
      border: "2px solid #a1bfc3",
      borderRadius: "10px",
      backgroundColor: "transparent",
      color: "black",
      fontSize: "16px",
      cursor: "pointer",
      textDecoration: "none",
    },
  },
  cancel: { name: "Cancel", style: { backgroundColor: "red" } },
  login: {
    name: "Login",
    style: {
      backgroundColor: "blue",
      borderRadius: "40px",
      color: "white",
      padding: "5px 20px",
    },
  },
  request_an_appointment: {
    name: "Request An Appointment",
    style: {
      backgroundColor: "#1a5bff",
      borderRadius: "40px",
      borderRadius: "40px",
      color: "white",
      padding: "10px 20px",
    },
  },
};

const DefaultButton = ({
  buttonKey = "default",
  handler = () => {},
  styles,
  children = null,
  ...rest
}) => {
  return (
    <Button
      style={{
        textTransform: "none",
        ...buttonMappings[buttonKey].style,
        ...styles,
      }}
      onClick={handler}
      {...rest}
    >
      {children != null ? children : `${buttonMappings[buttonKey].name}`}
    </Button>
  );
};

export { DefaultButton };
