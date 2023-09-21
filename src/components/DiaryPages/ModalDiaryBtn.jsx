import React, { useState } from 'react';
import {
  ButtonStyle,
  TextIndexSpan
} from './DiaryPage.styled';

import Modal from '../../components/DiaryPages/Modal';
import RecordDiaryModal from './RecordDiaryModal/RecordDiaryModal';

const ModalDiaryBtn = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleClick = () => {
    setIsFocused(false);
    openModal();
  };

  
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <ButtonStyle onClick={handleClick}
        // className={`record-meal-btn ${isHovered || isFocused ? 'scroll-active' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
        tabIndex="0"
      >
        {/* <TextIndexSpan style={ssds()}>+ Record your meal</TextIndexSpan> */}
        <TextIndexSpan style={isHovered || isFocused ? { fontSize: '18px' } : { fontSize: '14px' }}>
          + Record your meal
        </TextIndexSpan>
      </ButtonStyle>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {/* <div style={{backgroundColor: "var(--bg-primary)", opacity: "0.8", width:"100%", heigth:"100%", zIndex:"999"}}> */}
          <RecordDiaryModal style={{boxShadow: "50% 50% 50% 50% rgba(5,5,5,0.8)"}} />
        {/* </div> */}
      </Modal>
    </>
  );
};

export default ModalDiaryBtn;