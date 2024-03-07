import React from "react";
import Box from "@mui/material/Box";
import { IconButton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const DefaultIconsButtons = ({
  color = "gray",
  Iconalign = "flex-end",
  handler,
}) => {
  return (
    <Box sx={{ display: "flex", justifyContent: Iconalign }}>
      <Box
        component={"div"}
        sx={{
          border: `1px solid ${color}`,
          borderRadius: "50%",
          width: 40,
          height: 40,
        }}
      >
        <IconButton sx={{ color: color }} onClick={handler}>
          <ArrowForwardIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default DefaultIconsButtons;
