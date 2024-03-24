import { createTheme } from "@mui/material/styles";
const darkMode = false;
const theme = createTheme({
  paragraph: {
    main: darkMode ? "white" : "gray",
  },
  heading: {
    main: darkMode ? "white" : "back",
  },
  background: {
    color: darkMode
      ? "#494646"
      : "linear-gradient(to right, #bee8ef 10%, #fcfbfa 50%)",
    bodyBackgroundColor: darkMode ? "#4D4C4C" : "white",
    footerBg: darkMode ? "#494646" : "white",
    box: darkMode ? "#494646" : "#fff8e7",
  },
  button: {
    main: "#1a5bff",
  },
  menu: {
    main: darkMode ? "white" : "gray",
  },
  heighLight: {
    main: darkMode ? "white" : "black",
    heighLightColor: "#1a5bff",
  },
  input: {
    main: darkMode ? "white" : "black",
    error: darkMode ? "white" : "red",
  },
});
export default theme;
