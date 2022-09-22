import React from "react";
import BannerImage from "../../assets/images/whowearebanner.jpg";

const AuthBanner = () => {
  return (
    <div
      className="bg-center bg-cover py-48 flex items-center relative"
      style={{ backgroundImage: `url(${BannerImage})` }}
    >
      <p className="absolute bg-gray-800 left-0 top-0 right-0 bottom-0 opacity-20"></p>
      <div className="w-10/12 m-auto">
        <p className="text-4xl font-semibold text-gray-600 text-center">
          ALWAYS STAY WITH US
        </p>
      </div>
    </div>
  );
};

export default AuthBanner;
