import React from "react";
import Header from "../components/header/Header";
import MainBanner from "../components/banner/MainBanner";
import Company from "../components/company";
import Footer from "../components/footer/Footer";

const CompanyPage = () => {
  return (
    <div>
      <Header />
      <MainBanner title="Company Information" />
      <Company />
      <Footer />
    </div>
  );
};

export default CompanyPage;
