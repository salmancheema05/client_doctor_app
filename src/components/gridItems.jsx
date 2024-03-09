import React from "react";
import { Grid } from "@mui/material";

const DefaultGridItem = ({ children, styles, ...rest }) => {
  return (
    <Grid item style={{ ...styles }} {...rest}>
      {children}
    </Grid>
  );
};

export default DefaultGridItem;
