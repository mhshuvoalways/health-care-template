import React, { useState } from "react";
import Influencers from "./Influencers";
import Modal from "../../modal/Modal";
import CreateList from "./CreateList";
import AddInfluencer from "./AddInfluencer";

const Index = () => {
  const [modal, setModal] = useState(false);
  const [listModal, setListModal] = useState(false);

  const addInfluencerHandler = () => {
    setModal(!modal);
  };

  const createListHandler = () => {
    setListModal(!listModal);
  };

  return (
    <div>
      <Influencers
        addInfluencerHandler={addInfluencerHandler}
        createListHandler={createListHandler}
      />
      {modal && (
        <Modal
          modalHandler={addInfluencerHandler}
          title="Add Influencer"
          modal="w-5/12 m-auto pt-20"
        >
          <AddInfluencer />
        </Modal>
      )}
      {listModal && (
        <Modal
          modalHandler={createListHandler}
          title="List of invited influencers"
          modal="w-5/12 m-auto pt-20"
        >
          <CreateList />
        </Modal>
      )}
    </div>
  );
};

export default Index;
