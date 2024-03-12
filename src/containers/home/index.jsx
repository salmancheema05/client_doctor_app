import React from "react";
import Header from "./components/header";
import Services from "./components/providingservices";
import BestNation from "./components/bestNation";
import { DefaultDiv } from "../../components/divs";
import MedicalServices from "./components/medicalservices";
import Treatment from "./components/treatment";
import GreatDoctor from "./components/greatDoctor";

const Home = () => {
  return (
    <DefaultDiv>
      <Header />
      <Services />
      <BestNation />
      <MedicalServices />
      <Treatment />
      <GreatDoctor />
    </DefaultDiv>
  );
};

export default Home;
