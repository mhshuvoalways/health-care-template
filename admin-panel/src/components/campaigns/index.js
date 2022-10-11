import React, { useState } from "react";
import Influencers from "./Campaigns";
import Modal from "../modal/Modal";
import AddCampaign from "./AddCampaign";

const Index = () => {
  const [modal, setModal] = useState(false);

  const addCampaign = () => {
    setModal(!modal);
  };

  return (
    <div>
      <Influencers addCampaign={addCampaign} />
      {modal && (
        <Modal modalHandler={addCampaign} title="Add Campaign" modal="md:p-20 p-5">
          <AddCampaign />
        </Modal>
      )}
    </div>
  );
};

export default Index;
