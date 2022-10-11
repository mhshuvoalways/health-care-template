import React, { useState } from "react";
import Disease from "./Disease";
import Modal from "../modal/Modal";
import AddDiseare from "./AddDiseare";

const Index = () => {
  const [modal, setModal] = useState(false);

  const addDiseareModal = () => {
    setModal(!modal);
  };

  return (
    <div>
      <Disease addDiseareModal={addDiseareModal} />
      {modal && (
        <Modal
          modalHandler={addDiseareModal}
          title="Add Diseare"
          modal="w-3/12 m-auto pt-20"
        >
          <AddDiseare />
        </Modal>
      )}
    </div>
  );
};

export default Index;
