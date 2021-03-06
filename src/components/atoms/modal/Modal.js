import React from 'react';
import PropTypes from 'prop-types';
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

Modal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  children: PropTypes.element,
};

Modal.defaultProps = {
  children: null,
};
