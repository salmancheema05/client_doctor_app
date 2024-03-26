import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import About from "./about";
import { useTheme } from "@mui/material/styles";
import Feedback from "./feedback";

function CustomTabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );
}

function a11yProps({ index }) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function DefaultTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: theme.tab.colors.divider }}>
        <Tabs
          value={value}
          onChange={handleChange}
          sx={{ "& .MuiTabs-indicator": { backgroundColor: "#85ccd2" } }}
        >
          <Tab
            label="About"
            indicatorColor="primary"
            style={{
              color: value === 0 ? "#85ccd2" : theme.tab.textColor.main,
            }}
            {...a11yProps(0)}
          />
          <Tab
            label="FeedBack"
            style={{
              color: value === 1 ? "#85ccd2" : theme.tab.textColor.main,
            }}
            {...a11yProps(1)}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <About />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Feedback />
      </CustomTabPanel>
    </Box>
  );
}
