import React from "react";
import { Button } from "@mui/material";

const buttonMappings = {
  default: { name: "Default", sx: { backgroundColor: "blue" } },
  ok: { name: "Ok", sx: { backgroundColor: "green" } },
  cancel: { name: "Cancel", sx: { backgroundColor: "red" } },
  login: { name: "Login", sx: { backgroundColor: "blue", height: "30px" } },
};

const DefaultButton = ({
  type = "default",
  handler = () => {},
  styles,
  children = null,
  variant = "contained",
  size = "medium",
  ...rest
}) => {
  return (
    <Button
      sx={{
        textTransform: "none",
        ...buttonMappings[type].sx,
        ...styles,
      }}
      onClick={handler}
      variant={variant}
      size={size}
      {...rest}
    >
      {children ? children : `${buttonMappings[type].name}`}
    </Button>
  );
};

export default DefaultButton;
