import React from "react";
import Header from "../components/header/Header";
import AuthBanner from "../components/banner/AuthBanner";
import InfluencerSignUp from "../components/auth/InfluencerSignUp";
import Footer from "../components/footer/Footer";

const InfluencerSignUpPage = () => {
  return (
    <div>
      <Header />
      <AuthBanner />
      <InfluencerSignUp />
      <Footer />
    </div>
  );
};

export default InfluencerSignUpPage;
