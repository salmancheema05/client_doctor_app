import React from "react";
import Header from "./components/header";
import Services from "./components/providingservices";
import BestNation from "./components/bestNation";
import { DefaultDiv } from "../../components/divs";
import MedicalServices from "./components/medicalservices";
import Treatment from "./components/treatment";
import GreateDoctor from "./components/greateDoctor";

const Home = () => {
  return (
    <DefaultDiv>
      <Header />
      <Services />
      <BestNation />
      <MedicalServices />
      <Treatment />
      <GreateDoctor />
    </DefaultDiv>
  );
};

export default Home;
