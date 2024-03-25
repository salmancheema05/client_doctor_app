import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";

const ThemeProviderWrapper = ({ children }) => {
  const darkMode = useSelector((state) => state.mode.darkMode);

  const theme = createTheme({
    paragraph: {
      main: darkMode ? "white" : "gray",
    },
    heading: {
      main: darkMode ? "white" : "black",
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
    highLight: {
      main: darkMode ? "white" : "black",
      highLightColor: "#1a5bff",
    },
    input: {
      main: darkMode ? "white" : "black",
      error: darkMode ? "white" : "red",
    },
    tab: {
      colors: {
        divider: darkMode ? "" : "#CCCCCC",
      },
      textColor: {
        main: darkMode ? "white" : "#CCCCCC",
      },
    },
  });
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeProviderWrapper;
