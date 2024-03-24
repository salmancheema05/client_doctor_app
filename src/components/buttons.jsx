import { Button } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";

const DefaultButton = ({
  buttonKey = "default",
  styles,
  handler = null,
  children = null,
  ...rest
}) => {
  const theme = useTheme();
  const buttonMappings = {
    default: {
      name: "Default",
      style: {
        backgroundColor: theme.button.main,
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
        backgroundColor: theme.button.main,
        borderRadius: "40px",
        color: "white",
        padding: "5px 20px",
      },
    },
    request_an_appointment: {
      name: "Request An Appointment",
      style: {
        backgroundColor: theme.button.main,
        borderRadius: "40px",
        color: "white",
        padding: "10px 20px",
      },
    },
    book_appointment: {
      name: "Book Appointment",
      style: {
        backgroundColor: theme.button.main,
        borderRadius: "10px",
        color: "white",
        padding: "10px 20px",
      },
    },
    learn_more: {
      name: "Learn More",
      style: {
        backgroundColor: theme.button.main,
        borderRadius: "40px",
        color: "white",
        padding: "10px 20px",
      },
    },
  };
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
