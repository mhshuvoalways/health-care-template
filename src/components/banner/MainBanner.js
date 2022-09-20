import React from "react";
import BannerImage from "../../assets/images/whowearebanner.jpg";

const MainBanner = ({ title }) => {
  return (
    <div
      className="bg-center bg-cover py-48 flex items-center"
      style={{ backgroundImage: `url(${BannerImage})` }}
    >
      <div className="w-10/12 m-auto">
        <p className="text-4xl font-semibold text-gray-600 text-center">
          {title}
        </p>
      </div>
    </div>
  );
};

export default MainBanner;
