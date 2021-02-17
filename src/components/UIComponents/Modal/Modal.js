import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import * as S from "./styles";

const Modal = ({ openModal, closeModal, children, size }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(openModal);
  }, [openModal]);

  const handleCloseModal = (e) => {
    e.preventDefault();

    setIsOpen(false);

    return setTimeout(() => {
      closeModal(null);
    }, 400);
  };

  if (!openModal) return null;
  return (
    <S.Container>
      <S.Content size={size} isOpen={isOpen}>
        <S.CloseButton
          aria-label='close modal'
          onClick={(e) => handleCloseModal(e)}
        >
          <S.CloseIcon className='fas fa-times' />
        </S.CloseButton>

        {children}
      </S.Content>

      <S.Background onClick={(e) => handleCloseModal(e)} />
    </S.Container>
  );
};

Modal.propTypes = {
  openModal: PropTypes.bool,
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  size: PropTypes.string,
};

export default Modal;
