import React, { useState } from "react";
import Overview from "./Overview";
import Chart from "./Chart";
import LastInfluencer from "./LastInfluencer";
import Modal from "../../modal/Modal";
import AddInfluencer from "../../influencers/influencer/AddInfluencer";

const Index = () => {
  const [modal, setModal] = useState(false);

  const addInfluencerHandler = () => {
    setModal(!modal);
  };

  return (
    <div>
      <Overview />
      <div className="flex justify-between gap-5 md:flex-nowrap flex-wrap mt-10">
        {modal && (
          <Modal
            modalHandler={addInfluencerHandler}
            title="Add Influencer"
            modal="w-5/12 m-auto pt-20"
          >
            <AddInfluencer />
          </Modal>
        )}
        <Chart />
        <LastInfluencer addInfluencerHandler={addInfluencerHandler} />
      </div>
    </div>
  );
};

export default Index;
