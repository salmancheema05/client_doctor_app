import React from "react";
import { ThemeGrid } from "../../../components/grids";
import DefaultGridItem from "../../../components/gridItems";
import DefaultHeading from "../../../components/headings";
import { DefaultButton } from "../../../components/buttons";
import { useTheme } from "@mui/material/styles";
const SearchInput = () => {
  const theme = useTheme();

  return (
    <ThemeGrid
      styles={{
        padding: "3% 0px",
        backgroundColor: theme.background.box,
      }}
    >
      <DefaultGridItem
        xs={12}
        sm={12}
        md={12}
        lg={12}
        styles={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <DefaultHeading>Find a Doctor</DefaultHeading>
      </DefaultGridItem>
      <DefaultGridItem
        xs={12}
        sm={12}
        md={12}
        lg={12}
        styles={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <input
          type="text"
          name=""
          id=""
          placeholder="Search Doctor"
          style={{
            backgroundColor: "lightgray",
            outline: "none",
            width: "20%",
            border: "none",
            padding: "10px 15px",
          }}
        />
        <DefaultButton
          styles={{ width: "5%", padding: "2px 15px", borderRadius: "0px" }}
        >
          Search
        </DefaultButton>
      </DefaultGridItem>
    </ThemeGrid>
  );
};

export default SearchInput;
