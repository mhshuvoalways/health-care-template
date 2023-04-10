import React from "react";
import Support from "../../assets/images/support.svg";
import Stethoscope from "../../assets/images/stethoscope.svg";
import Globe from "../../assets/images/globe.svg";

const Services = () => {
  return (
    <div className="w-10/12 m-auto mt-20">
      <div className="border-b-2 text-2xl sm:text-3xl md:text-5xl border-red-600 pb-5 mb-10 flex gap-5 justify-center w-full md:w-2/4 m-auto">
        <p className="text-gray-600">How can we</p>
        <p className="text-red-600 font-bold">Help you?</p>
      </div>
      <div className="flex gap-10 flex-wrap justify-center md:flex-nowrap md:justify-between">
        <div className="border w-full md:w-1/3 shadow-sm rounded-md bg-red-600 text-gray-100 py-5 px-10 space-y-5">
          <img src={Support} alt="Support" className="m-auto" />
          <div className="space-y-5 rounded-md">
            <p className="text-2xl font-semibold">
              Personalised support and improved quality
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              a porta urna. Nulla pharetra ante ac posuere tempor. Morbi mattis
              iaculis nulla, ac condimentum libero euismod molestie.
            </p>
          </div>
        </div>
        <div className="border w-full md:w-1/3 shadow-sm rounded-md bg-red-600 text-gray-100 py-5 px-10 space-y-5">
          <img src={Globe} alt="Support" className="m-auto" />
          <div className="space-y-5 rounded-md">
            <p className="text-2xl font-semibold">
              Personalised support and improved quality
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              a porta urna. Nulla pharetra ante ac posuere tempor. Morbi mattis
              iaculis nulla, ac condimentum libero euismod molestie.
            </p>
          </div>
        </div>
        <div className="border w-full md:w-1/3 shadow-sm rounded-md bg-red-600 text-gray-100 py-5 px-10 space-y-5">
          <img src={Stethoscope} alt="Support" className="m-auto" />
          <div className="space-y-5 rounded-md">
            <p className="text-2xl font-semibold">
              Personalised support and improved quality
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              a porta urna. Nulla pharetra ante ac posuere tempor. Morbi mattis
              iaculis nulla, ac condimentum libero euismod molestie.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
