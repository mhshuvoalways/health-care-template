import React from "react";
import BannerImage from "../../assets/images/whowearebanner.jpg";

const AboutBanner = () => {
  return (
    <div
      className="bg-center bg-cover py-48 flex items-center"
      style={{ backgroundImage: `url(${BannerImage})` }}
    >
      <div className="w-10/12 m-auto space-y-5 ">
        <p className="text-xl border-b-2 pb-2 w-40 border-red-600 text-red-600 text-center">
          WHO WE ARE
        </p>
        <p className="font-normal text-xl text-gray-600">
          We are a health data science company aiming to change the paradigm in
          cancer care. We are a health data science company aiming to change the
          paradigm in cancer care
        </p>
      </div>
    </div>
  );
};

export default AboutBanner;
