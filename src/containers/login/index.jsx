import React from "react";
import DefaultGrid, { ThemeGrid } from "../../components/grids";
import DefaultGridItem from "../../components/gridItems";
import DefaultParagraph from "../../components/paragraphs";
import { DynamicTagTextWithThreeParts } from "../../components/dynamicTagTexts";
import Form from "./components/form";
import { useTheme } from "@mui/material/styles";
import { TextWithLink } from "../../components/links";
const Login = () => {
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
              part1="Hello!"
              part2="Welcome"
              part3="Back"
              styles={{
                part2: { color: theme.highLight.highLightColor },
                tag: { marginTop: "30px" },
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
              styles={{display:"flex",justifyContent:"center", marginBottom: "20px"}}
            >
              <TextWithLink text="Don't have an account?" linkText="Signup" to="/signup"/>
          
            </DefaultGridItem>
          </DefaultGrid>
        </DefaultGrid>
      </DefaultGridItem>
    </ThemeGrid>
  );
};

export default Login;
