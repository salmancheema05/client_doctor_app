import React from "react";
import { Grid } from "@mui/material";

const DefaultGrid = ({
  children,
  rowSpacing = 1,
  xs = 1,
  sm = 2,
  md = 3,
  styles,
}) => {
  return (
    <>
      <Grid
        container
        rowSpacing={rowSpacing}
        columnSpacing={{ xs: xs, sm: sm, md: md }}
        styles={{ ...styles }}
      >
        {children}
      </Grid>
    </>
  );
};

export default DefaultGrid;
