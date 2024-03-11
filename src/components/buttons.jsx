import { Button } from "@mui/material";
import React from "react";

const buttonMappings = {
  default: {
    name: "Default",
    style: { backgroundColor: "blue", color: "white", padding: "10px" },
  },
  ok: { name: "Ok", style: { backgroundColor: "green" } },
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
      backgroundColor: "blue",
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
