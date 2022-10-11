import React from "react";
import Header from "../components/header/Header";
import ContactBanner from "../components/banner/ContactBanner";
import Contact from "../components/contact";
import Footer from "../components/footer/Footer";

const ContactPage = () => {
  return (
    <div>
      <Header />
      <ContactBanner />
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactPage;
