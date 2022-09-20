import React from "react";
import BannerImage from "../../assets/images/contactbanner.jpg";

const ContactBanner = () => {
  return (
    <div
      className="bg-center bg-cover py-48 flex items-center"
      style={{ backgroundImage: `url(${BannerImage})` }}
    >
      <div className="w-10/12 m-auto space-y-5 ">
        <p className="text-xl border-b-2 pb-2 w-40 border-red-600 text-red-600 text-center">
          Contact us
        </p>
        <p className="font-normal text-xl text-gray-900">
          Credibly innovate granular internal or "organic" sources whereas high
          standards in web-readiness. Energistically scale future-proof core
          competencies vis-a-vis impactful experiences.
        </p>
      </div>
    </div>
  );
};

export default ContactBanner;
