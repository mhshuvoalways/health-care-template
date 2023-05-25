import React from "react";
import Mobile from "../../assets/images/mobile.webp";

const Goal = () => {
  return (
    <div className="bg-gray-200 py-20">
      <div className="w-10/12 m-auto flex md:gap-20 gap-10 justify-center flex-wrap">
        <img src={Mobile} alt="" className="w-1/5" />
        <div className="w-full md:w-2/4">
          <p className="text-sm tracking-widest text-red-600 font-bold">WHAT WE DO</p>
          <p className="text-3xl mt-5 md:mt-8 text-red-600 font-semibold">
            Personalised support and improved quality of life for patients
          </p>
          <p className="mt-10 md:mt-14 text-justify tracking-wide">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a
            porta urna. Nulla pharetra ante ac posuere tempor. Morbi mattis
            iaculis nulla, ac condimentum libero euismod molestie.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Curabitur a porta urna.
            Nulla pharetra ante ac posuere tempor. Morbi mattis iaculis nulla,
            ac condimentum libero euismod molestie. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Curabitur a porta urna. Nulla pharetra
            ante ac posuere tempor. Morbi mattis iaculis nulla, ac condimentum
            libero euismod molestie.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Curabitur a porta urna. Nulla pharetra ante ac
            posuere tempor. Morbi mattis iaculis nulla, ac condimentum libero
            euismod molestie. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Curabitur a porta urna. Nulla pharetra ante ac posuere tempor.
            Morbi mattis iaculis nulla, ac condimentum libero euismod
            molestie.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Curabitur a porta urna. Nulla pharetra ante ac posuere tempor. Morbi
            mattis iaculis nulla, ac condimentum libero euismod molestie.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Goal;
