import React from "react";
import BannerImage from "../../assets/images/banner.jpg";

const HomeBanner = () => {
  return (
    <div
      className="bg-center bg-cover h-screen flex items-center pt-24 lg:pt-0"
      style={{ backgroundImage: `url(${BannerImage})` }}
    >
      <div className="w-10/12 m-auto">
        <div className="space-y-5 w-full md:w-1/2">
          <p className="text-xl border-b-2 pb-2 w-60 border-red-600 text-gray-600">
            INSPIRING BETTER HEALTH
          </p>
          <p className="text-red-600 font-bold text-7xl">Healthy heart,</p>
          <p className="font-normal text-6xl">healthy family</p>
          <p className="font-normal text-lg text-gray-600">
            Globally harness multimedia based collaboration and idea-sharing
            with backend products. Continually whiteboard superior opportunities
            via covalent scenarios.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
