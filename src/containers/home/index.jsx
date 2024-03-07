import React from "react";
import GuestLayout from "../../layouts/guestLayout";
import Header from "./components/Header";
import Serverices from "../../components/serverices";
const Home = () => {
  return (
    <GuestLayout>
      <Header />
      <Serverices />
    </GuestLayout>
  );
};

export default Home;
