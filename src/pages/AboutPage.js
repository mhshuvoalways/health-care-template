import React from "react";
import Header from "../components/header/Header";
import AboutBanner from "../components/banner/AboutBanner";
import WeAre from "../components/weare/WeAre";
import Leader from "../components/leaders/Leader";
import Team from "../components/team/Team";
import Footer from "../components/footer/Footer";

const AboutPage = () => {
  return (
    <div>
      <Header />
      <AboutBanner />
      <WeAre />
      <Leader />
      <Team />
      <Footer />
    </div>
  );
};

export default AboutPage;
