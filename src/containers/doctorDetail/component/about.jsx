import React from "react";
import { DynamicTagTextWithTwoParts } from "../../../components/dynamicTagTexts";
import { DefaultCard } from "../../../components/cards";

const About = () => {
  return (
    <>
      <DynamicTagTextWithTwoParts
        tag="h2"
        part1="About of "
        part2="Dr.Salman Akbar"
        styles={{
          tag: {},
          part1: {},
          part2: { color: "blue" },
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
