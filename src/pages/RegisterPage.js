import React from "react";
import Header from "../components/header/Header";
import AuthBanner from "../components/banner/AuthBanner";
import Register from "../components/auth/Register";
import Footer from "../components/footer/Footer";

const RegisterPage = () => {
  return (
    <div>
      <Header />
      <AuthBanner />
      <Register />
      <Footer />
    </div>
  );
};

export default RegisterPage;
