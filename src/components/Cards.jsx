import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
const DefaultCards = () => {
  return (
    <Box sx={{ width: "30%", boxShadow: "10px 10px 5px lightblue" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
        p={3}
      >
        <Typography variant="h6">Total Price</Typography>
        <Typography variant="h4">700 BDT</Typography>
      </Box>
      <Box p={3}>
        <Typography variant="h5">Available Time Shots</Typography>
        <Box>
          <Typography variant="p" fontSize={20}>
            monday
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default DefaultCards;
