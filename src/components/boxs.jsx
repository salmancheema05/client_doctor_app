import React from "react";
import Box from "@mui/material/Box";
const DefaultBox = ({ component = "div", children, styles, ...rest }) => {
  return (
    <Box component={component} sx={{ ...styles }} {...rest}>
      {children}
    </Box>
  );
};
export default DefaultBox;
