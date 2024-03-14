import React, { useState, useEffect } from "react";
import { DefaultDiv } from "../../components/divs";
import DoctorList from "./components/doctorList";
import PatientSay from "../../components/patientSay";
import SearchInput from "./components/searchInput";

const FindDoctor = () => {
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
    <>
      <SearchInput />
      <DoctorList />
      {isMobile ? null : <PatientSay />}
    </>
  );
};

export default FindDoctor;
