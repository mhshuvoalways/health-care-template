import React from "react";
import InfluencersImg1 from "../../../assets/images/clients/client1.jpg";

const Infuencers = () => {
  return (
    <div className="flex items-center gap-5 border border-gray-300 p-5 shadow-sm">
      <img src={InfluencersImg1} alt="" className="rounded-full" />
      <div className="space-y-2">
        <p className="text-xl">Name: Ema Ava Any</p>
        <p>Username: emema</p>
        <p>Account: instagram</p>
        <p>Status: Register</p>
        <p>Disease area: Breat cancer</p>
        <p>Finished campaigns: 5</p>
        <p>Running campaigns: 2</p>
        <p>Total revenue: $345</p>
        <div className="flex gap-2 items-center">
          <i className="fa-solid fa-envelope"></i>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=mlhnshuvo@gmail.com"
          >
            ivaema@gmail.com
          </a>
        </div>
        <div className="flex gap-2 items-center">
          <i className="fa-brands fa-whatsapp"></i>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://wa.me/+8801712892969"
          >
            +49349343948
          </a>
        </div>
      </div>
    </div>
  );
};

export default Infuencers;
