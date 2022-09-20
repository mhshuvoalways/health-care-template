import React from "react";
import WorkwithUs from "../../assets/images/workwithus.webp";

const Team = () => {
  return (
    <div className="bg-gray-200 py-20">
      <div className="w-10/12 m-auto flex justify-between gap-5 flex-wrap md:flex-nowrap">
        <div className="space-y-5">
          <p className="tracking-widest">WORK WITH US</p>
          <p className="text-3xl">If you share our passion, come join us</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a
            porta urna. Nulla pharetra ante ac posuere tempor. Morbi mattis
            iaculis nulla, ac condimentum libero euismod molestie.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Curabitur a porta urna.
            Nulla pharetra ante ac posuere tempor. <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a
            porta urna. Nulla pharetra ante ac posuere tempor. Morbi mattis
            iaculis nulla, ac condimentum libero euismod molestie.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Curabitur a porta urna.
            Nulla pharetra ante ac posuere tempor.
          </p>
        </div>
        <img src={WorkwithUs} alt="" className="w-full md:w-6/12" />
      </div>
    </div>
  );
};

export default Team;
