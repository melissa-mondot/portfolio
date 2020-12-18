import React from 'react';
import StyledModal from './ModalStyle';

const Modal = ({ ...props }) => {
  const { children, showModal } = props;
  return (
    <StyledModal className={showModal === false ? 'hideModal' : 'showModal'} showModal={showModal}>
      {children}
    </StyledModal>
  );
};

export default Modal;
