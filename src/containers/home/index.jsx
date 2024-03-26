import React, { useState, useEffect } from "react";
import Header from "./components/header";
import Services from "./components/providingservices";
import BestNation from "./components/bestNation";
import { DefaultDiv } from "../../components/divs";
import MedicalServices from "./components/medicalservices";
import Treatment from "./components/treatment";
import GreatDoctor from "./components/greatDoctor";
import PatientSay from "../../components/patientSay";
import Faq from "./components/faq";
const Home = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <DefaultDiv>
      <Header />
      <Services />
      <BestNation />
      <MedicalServices />
      <Treatment />
      <GreatDoctor />
      <Faq />
      {isMobile ? null : <PatientSay />}
    </DefaultDiv>
  );
};

export default Home;
