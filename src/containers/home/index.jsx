import React from "react";
import Header from "./components/header";
import Services from "./components/services";
import BestNation from "./components/bestNation";
import { DefaultDiv } from "../../components/divs";

const Home = () => {
  return (
    <DefaultDiv>
      <Header />
      <Services />
      <BestNation />
    </DefaultDiv>
  );
};

export default Home;
