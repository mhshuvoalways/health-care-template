import React from "react";
import Header from "../components/header/Header";
import AuthBanner from "../components/banner/AuthBanner";
import Login from "../components/auth/Login";
import Footer from "../components/footer/Footer";

const LoginPage = () => {
  return (
    <div>
      <Header />
      <AuthBanner />
      <Login />
      <Footer />
    </div>
  );
};

export default LoginPage;
