import React from "react";
import Header from "../components/header/Header";
import Banner from "../components/banner/HomeBanner";
import WeAre from "../components/weare/WeAre";
import Services from "../components/services/Services";
import Goal from "../components/goal/Goal";
import References from "../components/references/References";
import Testimonials from "../components/testimonials/Testimonials";
import Team from "../components/team/Team";
import Footer from "../components/footer/Footer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <WeAre />
      <Services />
      <Goal />
      <References />
      <Testimonials />
      <Team />
      <Footer />
    </div>
  );
};

export default HomePage;
