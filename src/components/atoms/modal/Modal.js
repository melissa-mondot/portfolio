import React from "react";
import StyledModal from "./ModalStyle";

const Modal = ({ children, showModal }) => {
  return (
    <>
      <StyledModal
        className={showModal === false ? "hideModal" : "showModal"}
        showModal={showModal}
      >
        {children}
      </StyledModal>
    </>
  );
};

export default Modal;
