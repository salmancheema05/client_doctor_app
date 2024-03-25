import React from "react";
import { DynamicTagTextWithTwoParts } from "../../../components/dynamicTagTexts";
import { DefaultCard } from "../../../components/cards";
import { useTheme } from "@mui/material/styles";
const About = () => {
  const theme = useTheme();
  return (
    <>
      <DynamicTagTextWithTwoParts
        tag="h2"
        part1="About of "
        part2="Dr . Salman Akbar"
        styles={{
          tag: {},
          part1: { wordSpacing: "5px" },
          part2: { color: theme.highLight.highLightColor },
        }}
      />
      <DefaultCard
        paragraphText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae distinctio 
      cupiditate illo facilis! Exercitationem, quos ducimus, voluptas nulla necessitatibus voluptatum corrupti 
      modi earum voluptatem ipsam sit, unde atque ab vero.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae distinctio 
      cupiditate illo facilis! Exercitationem, quos ducimus, voluptas nulla necessitatibus voluptatum corrupti 
      modi earum voluptatem ipsam sit, unde atque ab vero.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae distinctio 
      cupiditate illo facilis! Exercitationem, quos ducimus, voluptas nulla necessitatibus voluptatum corrupti 
      modi earum voluptatem ipsam sit, unde atque ab vero.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae distinctio 
      cupiditate illo facilis! Exercitationem, quos ducimus, voluptas nulla necessitatibus voluptatum corrupti 
      modi earum voluptatem ipsam sit, unde atque ab vero.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae distinctio 
      cupiditate illo facilis! Exercitationem, quos ducimus, voluptas nulla necessitatibus voluptatum corrupti 
      modi earum voluptatem ipsam sit, unde atque ab vero.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae distinctio 
      cupiditate illo facilis! Exercitationem, quos ducimus, voluptas nulla necessitatibus voluptatum corrupti 
      modi earum voluptatem ipsam sit, unde atque ab vero."
      />
    </>
  );
};

export default About;
