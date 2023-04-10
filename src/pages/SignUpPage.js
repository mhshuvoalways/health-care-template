import React from "react";
import Header from "../components/header/Header";
import AuthBanner from "../components/banner/AuthBanner";
import SignUp from "../components/auth/SignUp";
import Footer from "../components/footer/Footer";

const RegisterPage = () => {
  return (
    <div>
      <Header />
      <AuthBanner />
      <SignUp />
      <Footer />
    </div>
  );
};

export default RegisterPage;
