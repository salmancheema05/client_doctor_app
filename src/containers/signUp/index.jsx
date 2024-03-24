import React from "react";
import DefaultGrid, { ThemeGrid } from "../../components/grids";
import DefaultGridItem from "../../components/gridItems";
import { DynamicTagTextWithThreeParts } from "../../components/dynamicTagTexts";
import DefaultParagraph from "../../components/paragraphs";
import Form from "./components/form";
import { useTheme } from "@mui/material/styles";
const SignUp = () => {
  const theme = useTheme();
  return (
    <ThemeGrid>
      <DefaultGridItem
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        styles={{
          paddingLeft: "5%",
          paddingRight: "5%",
          width: "100%",
          boxShadow: " 2px 2px 25px 5px lightgray",
          margin: "0px 20% auto",
        }}
      >
        <DefaultGrid>
          <DefaultGridItem xs={12} sm={12} md={12} lg={12} xl={12}>
            <DynamicTagTextWithThreeParts
              part1="Create an"
              part2="Account"
              styles={{
                part2: { color: theme.heighLight.heighLightColor },
              }}
            />
          </DefaultGridItem>
          <DefaultGrid>
            <DefaultGridItem
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              styles={{ margin: "5% 0%" }}
            >
              <Form />
            </DefaultGridItem>
          </DefaultGrid>
          <DefaultGrid>
            <DefaultGridItem
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              styles={{ marginBottom: "20px" }}
            >
              <DefaultParagraph styles={{ textAlign: "center" }}>
                Don't have an account?
              </DefaultParagraph>
            </DefaultGridItem>
          </DefaultGrid>
        </DefaultGrid>
      </DefaultGridItem>
    </ThemeGrid>
  );
};

export default SignUp;
