import React from "react";
import Header from "../components/header/Header";
import AuthBanner from "../components/banner/AuthBanner";
import CompanySignUp from "../components/auth/CompanySignUp";
import Footer from "../components/footer/Footer";

const CompanySignUpPage = () => {
  return (
    <div>
      <Header />
      <AuthBanner />
      <CompanySignUp />
      <Footer />
    </div>
  );
};

export default CompanySignUpPage;
