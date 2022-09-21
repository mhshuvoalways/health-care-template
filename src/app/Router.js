import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import CompanySignUpPage from "../pages/CompanySignUpPage";
import InfluencerSignUpPage from "../pages/InfluencerSignUpPage";
import CompanyPage from "../pages/CompanyPage";
import InfluencerPage from "../pages/InfluencerPage";
import CommingSoon from "../pages/CommingSoonPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="companysignup" element={<CompanySignUpPage />} />
        <Route path="influencersignup" element={<InfluencerSignUpPage />} />
        <Route path="company" element={<CompanyPage />} />
        <Route path="influencer" element={<InfluencerPage />} />
        <Route path="commingsoon" element={<CommingSoon />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
