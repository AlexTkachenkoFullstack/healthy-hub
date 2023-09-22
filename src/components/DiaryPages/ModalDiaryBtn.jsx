import React, { useState, useEffect } from 'react';
import {
  ButtonStyle,
  TextIndexSpan
} from './DiaryPage.styled';

import RecordDiaryModal from '../RecordDiaryModal/RecordDiaryModal';

const ModalDiaryBtn = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showRecordDiaryModal, setShowRecordDiaryModal] = useState(false);

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
    setShowRecordDiaryModal(!showRecordDiaryModal);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };  
  
  useEffect(() => {
    if (RecordDiaryModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showRecordDiaryModal]);


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
        <TextIndexSpan style={isHovered || isFocused ? { fontSize: '18px' } : { fontSize: '14px' }}>
          + Record your meal
        </TextIndexSpan>
      </ButtonStyle>

      <RecordDiaryModal isOpen={isModalOpen} onClose={closeModal}>
        <RecordDiaryModal />
      </RecordDiaryModal>
    </>
  );
};

export default ModalDiaryBtn;