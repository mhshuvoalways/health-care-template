import React from "react";
import InfluencerImg1 from "../../../assets/images/clients/client1.jpg";
import InfluencerImg2 from "../../../assets/images/clients/client2.jpg";
import InfluencerImg3 from "../../../assets/images/clients/client3.jpg";

const LastInfluencer = ({ addInfluencerHandler }) => {
  return (
    <div className="w-full bg-gray-100">
      <div>
        <p className="text-center py-5 text-xl">Last Influencer Added</p>
        <div className="flex flex-wrap justify-between gap-5 mt-5 px-10">
          <div className="w-20 text-center">
            <img src={InfluencerImg1} alt="" className="rounded-full" />
            <p>Eva Alina</p>
          </div>
          <div className="w-20 text-center">
            <img src={InfluencerImg2} alt="" className="rounded-full" />
            <p>Eva Alina</p>
          </div>
          <div className="w-20 text-center">
            <img src={InfluencerImg3} alt="" className="rounded-full" />
            <p>Joe Holder</p>
          </div>
          <div className="text-center" onClick={addInfluencerHandler}>
            <div className="w-20 h-20 flex items-center justify-center bg-gray-200 rounded-full cursor-pointer">
              <i className="fa-solid fa-user-plus" />
            </div>
            <p>Add Influencer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastInfluencer;
