import React from "react";
import GuestLayout from "../../layouts/guestLayout";
import Header from "./components/Header";
import Services from "./components/services";
import BestNation from "./components/bestNation";

const Home = () => {
  return (
    <GuestLayout>
      <Header />
      <Services />
      <BestNation />
    </GuestLayout>
  );
};

export default Home;
