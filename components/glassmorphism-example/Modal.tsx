"use client";

import React, { useState } from "react";
import Button from "../lab/button/Button";
import Modal from "../lab/Modal";

type Props = {};

const ModalExample = (props: Props) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Button onClick={() => setShowModal(true)}>Open Modal</Button>
      <Modal active={showModal} setActive={setShowModal}>
        Este es un Modal
      </Modal>
    </>
  );
};

export default ModalExample;
