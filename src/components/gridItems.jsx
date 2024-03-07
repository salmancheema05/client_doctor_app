import React from "react";
import { Grid } from "@mui/material";

const DefaultGridItem = ({
  xs = 12,
  sm = 1,
  md = 1,
  lg = 1,
  children,
  styles,
}) => {
  return (
    <Grid item xs={xs} sm={sm} md={md} lg={lg} sx={{ ...styles }}>
      {children}
    </Grid>
  );
};

export default DefaultGridItem;
