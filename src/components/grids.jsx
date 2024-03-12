import React from "react";
import { Grid } from "@mui/material";

const DefaultGrid = ({
  spacing = 2,
  rowSpacing = 2,
  children,
  styles,
  ...rest
}) => {
  return (
    <Grid
      container
      spacing={spacing}
      rowSpacing={rowSpacing}
      style={{ ...styles }}
      {...rest}
    >
      {children}
    </Grid>
  );
};
export const ThemeGrid = ({
  spacing = 2,
  rowSpacing = 2,
  children,
  styles,
  ...rest
}) => {
  return (
    <Grid
      container
      spacing={spacing}
      rowSpacing={rowSpacing}
      style={{ padding: "6% 10%", ...styles }}
      {...rest}
    >
      {children}
    </Grid>
  );
};

export default DefaultGrid;
