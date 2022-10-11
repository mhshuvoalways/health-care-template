import React from "react";
import Header from "../components/header/Header";
import MainBanner from "../components/banner/MainBanner";
import Infuencer from "../components/Infuencer";
import Footer from "../components/footer/Footer";

const InfluencerPage = () => {
  return (
    <div>
      <Header />
      <MainBanner title="Influencer Information" />
      <Infuencer />
      <Footer />
    </div>
  );
};

export default InfluencerPage;
